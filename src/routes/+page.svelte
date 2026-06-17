<script lang="ts">
    import { onMount } from 'svelte';
    import AsciiBackground from '$lib/AsciiBackground.svelte';

    let mounted = false;
    let emailHref = '#';

    function decodeEmail(): string {
        const parts = ['hi', '@', 'jackra1n', '.', 'com'];
        return 'mailto:' + parts.join('');
    }

    const skillsPrimary = ['Rust', 'Python', 'Svelte', 'Docker', 'Linux'];

    const titleSegments = [
        { text: 'Software developer and ', key: 'pre' },
        { text: 'builder', key: 'builder' }
    ];

    const totalTitleChars = titleSegments.reduce((n, s) => n + s.text.length, 0);
    let typedChars = 0;
    let highlightActive = false;

    onMount(() => {
        mounted = true;
        emailHref = decodeEmail();

        typedChars = 0;
        highlightActive = false;
        const interval = setInterval(() => {
            typedChars += 1;
            if (typedChars >= totalTitleChars) {
                clearInterval(interval);
                setTimeout(() => (highlightActive = true), 350);
            }
        }, 28);
        return () => clearInterval(interval);
    });

    function typedFor(index: number): string {
        let remain = typedChars;
        for (let i = 0; i < index; i += 1) remain -= titleSegments[i].text.length;
        if (remain <= 0) return '';
        const part = titleSegments[index].text;
        return part.slice(0, Math.min(remain, part.length));
    }

    // Faux terminal session shown in the hero — real info, on-brand presentation.
    const session = [
        { cmd: 'whoami', out: ['jacek — software developer & builder'] },
        { cmd: 'cat stack.txt', out: ['backend · infrastructure · pretty UIs'] },
        { cmd: 'ls ~/now', out: ['hslu-bsc/   rust/   svelte/   small-tools/'] }
    ];

    const cards = [
        {
            label: '// about',
            body: 'Trained in Switzerland, finishing a B.Sc. at HSLU. I value clarity, reliability and minimal design. Outside code I lift — bodybuilding keeps the routine sharp.'
        },
        {
            label: '// stack',
            body: 'Enterprise Java (JSF/PrimeFaces, Maven) and Docker in production. Comfortable across the stack, happiest in the backend.'
        },
        {
            label: '// now',
            body: 'Final year of the B.Sc. at HSLU. Getting sharper at Rust and frontend with Svelte, shipping small tools along the way.'
        }
    ];

    const links = [{ label: 'GitHub', href: 'https://github.com/jackra1n', icon: 'i-simple-icons:github' }];
</script>

<AsciiBackground src="/ascii/wave.json" />

<!-- single faint accent glow for warmth over the monochrome wave -->
<div class="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
    <div class="absolute -top-32 left-1/4 h-[28rem] w-[28rem] rounded-full bg-indigo-500/8 blur-3xl float-orb"></div>
</div>

<main class="container mx-auto px-5 md:px-8 py-16 md:py-20">
    <header class={`flex items-center justify-between transition-all duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
        <a href="/" class="font-mono text-lg md:text-xl font-semibold tracking-tight">
            <span class="text-neutral-500">~/</span><span>jackra1n</span>
        </a>
        <nav class="flex items-center gap-5 font-mono text-sm text-neutral-400">
            {#each links as link}
                <a class="inline-flex items-center gap-2 hover:text-white transition-colors" href={link.href} target="_blank" rel="noreferrer" aria-label={link.label}>
                    <span class={`${link.icon} h-4 w-4`} aria-hidden="true"></span>
                    <span>{link.label}</span>
                </a>
            {/each}
        </nav>
    </header>

    <section class="mt-16 md:mt-24 grid items-center gap-12 md:grid-cols-2">
        <div class={`transition-all duration-700 ease-out delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
            <p class="font-mono text-sm text-fuchsia-400/80 mb-4">$ ./hello.sh</p>
            <h1 class={`title-caret ${typedChars < totalTitleChars ? 'show-caret' : ''} text-4xl md:text-6xl font-semibold leading-[1.05]`}>
                <span>{typedFor(0)}</span>
                <span class={`${highlightActive ? 'text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-400 to-indigo-400 transition-colors duration-700' : ''}`}>{typedFor(1)}</span>
            </h1>
            <p class="mt-5 text-neutral-300 max-w-2xl">
                I solve problems with code and ship solid things. Trained in Switzerland, experience with enterprise Java, and finishing my B.Sc. at HSLU. I like backend, infrastructure, and pretty UIs.
            </p>
            <div class="mt-8 flex flex-wrap gap-2.5">
                {#each skillsPrimary as s, i}
                    <span class="chip-in font-mono rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-sm text-neutral-200 will-change-transform" style={`animation-delay: ${i * 80}ms`}>{s}</span>
                {/each}
            </div>

            <div class="mt-10 flex gap-4">
                <a href="https://github.com/jackra1n" target="_blank" rel="noreferrer" class="inline-flex items-center gap-2 rounded-md bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/15 transition-colors">
                    <span class="i-simple-icons:github h-4 w-4" aria-hidden="true"></span>
                    View GitHub
                </a>
                <a href={emailHref} class="inline-flex items-center gap-2 rounded-md border border-white/10 px-4 py-2 text-sm font-medium text-neutral-200 hover:text-white hover:border-white/20 transition-colors">
                    <span class="i-lucide:mail h-4 w-4" aria-hidden="true"></span>
                    Email
                </a>
            </div>
        </div>

        <!-- Terminal window: real info, on-brand presentation -->
        <div class={`relative mx-auto w-full max-w-md transition-all duration-700 ease-out delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
            <div class="overflow-hidden rounded-xl border border-white/10 bg-neutral-950/70 backdrop-blur shadow-[0_20px_70px_-20px_rgba(99,102,241,0.35)]">
                <div class="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-2.5">
                    <span class="h-3 w-3 rounded-full bg-red-400/70"></span>
                    <span class="h-3 w-3 rounded-full bg-yellow-400/70"></span>
                    <span class="h-3 w-3 rounded-full bg-green-400/70"></span>
                    <span class="ml-2 font-mono text-xs text-neutral-500">jackra1n@web: ~</span>
                </div>
                <div class="p-4 font-mono text-[13px] leading-relaxed">
                    {#each session as line}
                        <p class="text-neutral-200"><span class="text-fuchsia-400/80">$</span> {line.cmd}</p>
                        {#each line.out as o}
                            <p class="text-neutral-400">{o}</p>
                        {/each}
                    {/each}
                    <p class="text-neutral-200"><span class="text-fuchsia-400/80">$</span> <span class="term-cursor"></span></p>
                </div>
            </div>
        </div>
    </section>

    <!-- About + work -->
    <section class={`mt-24 grid gap-6 md:grid-cols-3 transition-all duration-700 ease-out delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
        {#each cards as card}
            <div class="rounded-xl border border-white/5 bg-neutral-950/40 p-6 backdrop-blur transition-all hover:border-white/10 hover:bg-neutral-950/60 hover:-translate-y-1.5 hover:shadow-[0_10px_40px_-10px_rgba(99,102,241,0.25)]">
                <h3 class="font-mono text-sm text-fuchsia-400/70">{card.label}</h3>
                <p class="mt-3 text-sm text-neutral-300">{card.body}</p>
            </div>
        {/each}
    </section>

    <footer class={`mt-24 flex items-center justify-between border-t border-white/5 pt-8 font-mono text-xs text-neutral-500 transition-all duration-700 ease-out delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
        <span>© {new Date().getFullYear()} jackra1n</span>
        <a href="https://github.com/jackra1n/website" target="_blank" rel="noreferrer" class="hover:text-white">$ git clone</a>
    </footer>
</main>

<style>
    .title-caret::after {
        content: '';
        display: inline-block;
        width: 1px;
        height: 1em;
        background: currentColor;
        margin-left: 2px;
        vertical-align: -0.1em;
        animation: caret 1s steps(1, end) infinite;
        opacity: 0.7;
    }
    .title-caret:not(.show-caret)::after { display: none; }
    @keyframes caret {
        0%, 49% { opacity: 0; }
        50%, 100% { opacity: 1; }
    }

    .term-cursor {
        display: inline-block;
        width: 0.55em;
        height: 1.05em;
        background: currentColor;
        vertical-align: -0.18em;
        opacity: 0.8;
        animation: caret 1s steps(1, end) infinite;
    }

    @keyframes chipFallIn {
        0% { transform: translateY(-12px) scale(0.98); opacity: 0; }
        60% { transform: translateY(6px) scale(1.02); opacity: 1; }
        100% { transform: translateY(0) scale(1); opacity: 1; }
    }
    .chip-in { animation: chipFallIn 480ms cubic-bezier(.2,.9,.2,1) both; }

    @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-12px); }
    }
    .float-orb { animation: float 18s ease-in-out infinite; }

    @media (prefers-reduced-motion: reduce) {
        .title-caret::after, .term-cursor, .float-orb, .chip-in { animation: none; }
    }
</style>
