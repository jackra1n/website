<script lang="ts">
    import { onMount } from 'svelte';

    /**
     * Renders a bundled ASCII animation: { fps, frameCount, frames: string[] }.
     * mode="cover"   — fixed, full-viewport background (scaled to cover).
     * mode="contain" — fills its (positioned) parent, scaled to fit.
     */
    let {
        src,
        fps = 15,
        mode = 'contain',
        color = 'rgb(199 210 254 / 0.85)'
    }: { src: string; fps?: number; mode?: 'cover' | 'contain'; color?: string } = $props();

    let containerEl: HTMLDivElement;
    let preEl: HTMLPreElement;
    let frames: string[] = [];
    let current = 0;
    let timer: ReturnType<typeof setInterval> | null = null;
    let loaded = false;
    let playable = false;
    let visible = false;

    function updateScale() {
        if (!preEl || !containerEl) return;
        const w = preEl.scrollWidth;
        const h = preEl.scrollHeight;
        if (!w || !h) return;
        const fit = mode === 'cover' ? Math.max : Math.min;
        const scale = fit(containerEl.clientWidth / w, containerEl.clientHeight / h);
        preEl.style.transform = `scale(${scale})`;
    }

    function stop() {
        if (timer != null) clearInterval(timer);
        timer = null;
    }

    function start() {
        if (timer != null || frames.length <= 1 || !playable || !visible || document.hidden) return;
        timer = setInterval(() => {
            current = (current + 1) % frames.length;
            if (preEl) preEl.textContent = frames[current];
        }, 1000 / fps);
    }

    async function load() {
        if (loaded) return;
        loaded = true;
        try {
            const data = await fetch(src).then((r) => r.json());
            frames = data.frames ?? [];
            if (data.fps) fps = data.fps;
            if (preEl && frames.length) {
                preEl.textContent = frames[0];
                updateScale();
            }
            start();
        } catch {
            /* decorative — fail silently */
        }
    }

    onMount(() => {
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
        playable = !reduced.matches;

        const io = new IntersectionObserver(
            (entries) => {
                for (const e of entries) {
                    visible = e.isIntersecting;
                    if (visible) {
                        load();
                        start();
                    } else {
                        stop();
                    }
                }
            },
            { threshold: 0.05 }
        );
        if (containerEl) io.observe(containerEl);

        const onVisibility = () => (document.hidden ? stop() : start());
        const onReducedChange = () => {
            playable = !reduced.matches;
            playable ? start() : stop();
        };
        document.addEventListener('visibilitychange', onVisibility);
        reduced.addEventListener('change', onReducedChange);

        const ro = new ResizeObserver(() => updateScale());
        if (containerEl) ro.observe(containerEl);

        return () => {
            stop();
            io.disconnect();
            ro.disconnect();
            document.removeEventListener('visibilitychange', onVisibility);
            reduced.removeEventListener('change', onReducedChange);
        };
    });
</script>

<div class={`ascii ascii-${mode}`} bind:this={containerEl} aria-hidden="true">
    <pre bind:this={preEl} style={`color: ${color}`}></pre>
</div>

<style>
    /* Fills its positioned parent; `mode` (cover/contain) only controls the scale fit. */
    .ascii {
        position: absolute;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        pointer-events: none;
    }
    pre {
        margin: 0;
        white-space: pre;
        line-height: 1;
        font-family: 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace;
        font-size: 12px;
        letter-spacing: 0;
        user-select: none;
        transform-origin: center;
    }
</style>
