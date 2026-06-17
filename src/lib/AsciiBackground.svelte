<script lang="ts">
    import { onMount } from 'svelte';

    /** URL of a bundled animation: { fps, frameCount, frames: string[] } */
    let { src = '/ascii/wave.json', fps = 15 }: { src?: string; fps?: number } = $props();

    let containerEl: HTMLDivElement;
    let preEl: HTMLPreElement;
    let frames: string[] = [];
    let current = 0;
    let timer: ReturnType<typeof setInterval> | null = null;
    let playable = false;

    // Scale the (fixed-size) ASCII grid up to *cover* the viewport, like background-size: cover.
    function updateScale() {
        if (!preEl || !containerEl) return;
        const w = preEl.scrollWidth;
        const h = preEl.scrollHeight;
        if (!w || !h) return;
        const scale = Math.max(containerEl.clientWidth / w, containerEl.clientHeight / h);
        preEl.style.transform = `scale(${scale})`;
    }

    function stop() {
        if (timer != null) clearInterval(timer);
        timer = null;
    }

    function start() {
        if (timer != null || frames.length <= 1 || !playable) return;
        timer = setInterval(() => {
            current = (current + 1) % frames.length;
            if (preEl) preEl.textContent = frames[current];
        }, 1000 / fps);
    }

    onMount(() => {
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');

        (async () => {
            try {
                const data = await fetch(src).then((r) => r.json());
                frames = data.frames ?? [];
                if (data.fps) fps = data.fps;
                if (preEl && frames.length) {
                    preEl.textContent = frames[0];
                    updateScale();
                }
                playable = !reduced.matches;
                if (!document.hidden) start();
            } catch {
                /* background is purely decorative — fail silently */
            }
        })();

        const onVisibility = () => (document.hidden ? stop() : start());
        const onReducedChange = () => {
            playable = !reduced.matches;
            playable ? start() : stop();
        };
        document.addEventListener('visibilitychange', onVisibility);
        reduced.addEventListener('change', onReducedChange);

        const resizeObserver = new ResizeObserver(() => updateScale());
        if (containerEl) resizeObserver.observe(containerEl);

        return () => {
            stop();
            resizeObserver.disconnect();
            document.removeEventListener('visibilitychange', onVisibility);
            reduced.removeEventListener('change', onReducedChange);
        };
    });
</script>

<div class="ascii-bg" bind:this={containerEl} aria-hidden="true">
    <pre bind:this={preEl}></pre>
</div>

<style>
    .ascii-bg {
        position: fixed;
        inset: 0;
        z-index: -10;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        pointer-events: none;
        /* soften the edges so the cropped wave fades out instead of ending in a hard line */
        -webkit-mask-image: radial-gradient(140% 120% at 50% 45%, #000 55%, transparent 100%);
        mask-image: radial-gradient(140% 120% at 50% 45%, #000 55%, transparent 100%);
    }
    pre {
        margin: 0;
        white-space: pre;
        line-height: 1;
        font-family: 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace;
        font-size: 12px;
        color: rgb(168 162 158 / 0.12);
        letter-spacing: 0;
        user-select: none;
        transform-origin: center;
    }
</style>
