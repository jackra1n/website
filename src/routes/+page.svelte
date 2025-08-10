<script lang="ts">
    import { onMount } from 'svelte';

    let mounted = false;
    onMount(() => {
        mounted = true;
    });

    const skillsPrimary = ['Rust', 'Python', 'Svelte', 'Docker', 'Linux'];

    // Title typing effect
    const titleSegments = [
        { text: 'Software developer and ', key: 'pre' },
        { text: 'builder', key: 'builder' }
    ];
    const totalTitleChars = titleSegments.reduce((n, s) => n + s.text.length, 0);
    let typedChars = 0;
    let highlightActive = false;

    onMount(() => {
        typedChars = 0;
        highlightActive = false;
        const interval = setInterval(() => {
            typedChars += 1;
            if (typedChars >= totalTitleChars) {
                clearInterval(interval);
                setTimeout(() => (highlightActive = true), 350);
            }
        }, 28);
    });

    function typedFor(index: number): string {
        let remain = typedChars;
        for (let i = 0; i < index; i += 1) remain -= titleSegments[i].text.length;
        if (remain <= 0) return '';
        const part = titleSegments[index].text;
        return part.slice(0, Math.min(remain, part.length));
    }

    const showcase = [
        {
            title: 'Infra',
            icon: 'i-lucide:server',
            hint: 'Docker + IaC',
            href: 'https://github.com/jackra1n/infra'
        },
        {
            title: 'CLIs',
            icon: 'i-lucide:terminal',
            hint: 'Fast tools',
            href: undefined
        },
        {
            title: 'Automation',
            icon: 'i-lucide:cog',
            hint: 'Cut manual work',
            href: undefined
        },
        {
            title: 'UI',
            icon: 'i-lucide:layout-template',
            hint: 'Minimal interfaces',
            href: undefined
        }
    ];

    const links = [
        { label: 'GitHub', href: 'https://github.com/jackra1n', icon: 'i-simple-icons:github' },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jacek-lajdecki/', icon: 'i-simple-icons:linkedin' }
    ];
</script>

<!-- Background gradient orbs (extend beyond viewport to avoid clipping on mobile) -->
<div class="pointer-events-none fixed -inset-[12%] md:inset-0 -z-10 overflow-visible md:overflow-hidden">
    <div class="absolute -top-40 -left-32 h-96 w-96 rounded-full bg-fuchsia-500/20 blur-3xl float-orb"></div>
    <div class="absolute -bottom-32 -right-24 h-[28rem] w-[28rem] rounded-full bg-indigo-500/15 blur-3xl float-orb-rev"></div>
</div>

<main class="container mx-auto px-5 md:px-8 py-20">
    <header class={`flex items-center justify-between transition-all duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
        <a href="/" class="text-xl md:text-2xl font-semibold tracking-tight">jackra1n</a>
        <nav class="flex items-center gap-5 text-sm text-neutral-300">
            {#each links as link}
                <a class="inline-flex items-center gap-2 hover:text-white transition-colors" href={link.href} target="_blank" rel="noreferrer" aria-label={link.label}>
                    <span class={`${link.icon} h-4 w-4`} aria-hidden="true"></span>
                    <span>{link.label}</span>
                </a>
            {/each}
        </nav>
    </header>

    <section class="mt-20 grid items-center gap-10 md:grid-cols-2">
        <div class={`transition-all duration-700 ease-out delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
            <h1 class={`title-caret ${typedChars < totalTitleChars ? 'show-caret' : ''} text-4xl md:text-6xl font-semibold leading-[1.05]`}>
                <span>{typedFor(0)}</span>
                <span class={`${highlightActive ? 'text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-400 to-indigo-400 transition-colors duration-700' : ''}`}>{typedFor(1)}</span>
            </h1>
            <p class="mt-5 text-neutral-300 max-w-2xl">
                I solve problems with code and ship solid things. Trained in Switzerland, experience with enterprise Java, and finishing my B.Sc. at HSLU. I like backend, infrastructure, and minimal UIs.
            </p>
            <div class="mt-8 flex flex-wrap gap-3">
                {#each skillsPrimary as s, i}
                    <span class="chip-in rounded-full border border-neutral-800 bg-neutral-900/60 px-3 py-1 text-sm text-neutral-200 will-change-transform" style={`animation-delay: ${i * 80}ms`}>{s}</span>
                {/each}
            </div>
            
            <div class="mt-10 flex gap-4">
                <a href="https://github.com/jackra1n" target="_blank" rel="noreferrer" class="inline-flex items-center gap-2 rounded-md bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/15 transition-colors">
                    <span class="i-simple-icons:github h-4 w-4" aria-hidden="true"></span>
                    View GitHub
                </a>
                <a href="mailto:hi@jackra1n.com" class="inline-flex items-center gap-2 rounded-md border border-white/10 px-4 py-2 text-sm font-medium text-neutral-200 hover:text-white hover:border-white/20 transition-colors">
                    <span class="i-lucide:mail h-4 w-4" aria-hidden="true"></span>
                    Email
                </a>
            </div>
        </div>

        <!-- Showcase grid (icons/images placeholders with glow + float on hover) -->
        <div class={`relative mx-auto w-full max-w-md select-none transition-all duration-700 ease-out delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
            <div class="grid grid-cols-2 gap-4">
                {#each showcase as item}
                    <a
                        class="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition-all duration-500 will-change-transform hover:-translate-y-2 hover:border-white/20 hover:bg-white/8 hover:shadow-[0_0_80px_rgba(124,58,237,0.15)]"
                        href={item.href}
                        target={item.href ? '_blank' : undefined}
                        rel={item.href ? 'noreferrer' : undefined}
                        aria-label={item.title}
                    >
                        <div class="absolute -inset-20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" style="background: radial-gradient(45% 45% at 50% 50%, rgba(99,102,241,0.25), rgba(0,0,0,0));"></div>
                        <div class="relative z-10 flex h-28 items-center justify-center">
                            <span class={`${item.icon} h-10 w-10 text-neutral-200`}></span>
                        </div>
                        <div class="relative z-10">
                            <div class="text-sm font-medium">{item.title}</div>
                            {#if item.hint}
                                <div class="text-xs text-neutral-400">{item.hint}</div>
                            {/if}
                        </div>
                    </a>
                {/each}
            </div>
        </div>
    </section>

    <!-- About + work -->
    <section class={`mt-24 grid gap-6 md:grid-cols-3 transition-all duration-700 ease-out delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
        <div class="rounded-xl border border-white/5 bg-white/5 p-6 backdrop-blur transition-all hover:border-white/10 hover:bg-white/7 hover:-translate-y-1.5 hover:shadow-[0_10px_40px_-10px_rgba(99,102,241,0.25)]">
            <h3 class="text-lg font-medium">About</h3>
            <p class="mt-2 text-sm text-neutral-300">Trained in Switzerland, finishing a B.Sc. at HSLU. I value clarity, reliability and minimal design. Outside code I lift; bodybuilding keeps the routine sharp.</p>
        </div>
        <div class="rounded-xl border border-white/5 bg-white/5 p-6 backdrop-blur transition-all hover:border-white/10 hover:bg-white/7 hover:-translate-y-1.5 hover:shadow-[0_10px_40px_-10px_rgba(16,185,129,0.25)]">
            <h3 class="text-lg font-medium">What I work with</h3>
            <p class="mt-2 text-sm text-neutral-300">Enterprise Java (JSF/PrimeFaces, Maven) and Docker in production.</p>
        </div>
        <div class="rounded-xl border border-white/5 bg-white/5 p-6 backdrop-blur transition-all hover:border-white/10 hover:bg-white/7 hover:-translate-y-1.5 hover:shadow-[0_10px_40px_-10px_rgba(59,130,246,0.25)]">
            <h3 class="text-lg font-medium">Currently</h3>
            <p class="mt-2 text-sm text-neutral-300">Final year of the B.Sc. at HSLU. Getting better at Rust and frontend with Svelte, while shipping small tools.</p>
        </div>
    </section>

    <!-- Space intentionally left for future projects or posts -->

    <footer class={`mt-24 flex items-center justify-between border-t border-white/5 pt-8 text-xs text-neutral-400 transition-all duration-700 ease-out delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
        <span>© {new Date().getFullYear()} jackra1n</span>
        <a href="https://github.com/jackra1n/website" target="_blank" rel="noreferrer" class="hover:text-white">Source</a>
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
        0%, 49% { opacity: 0.0; }
        50%, 100% { opacity: 1; }
    }

    @keyframes chipFallIn {
        0% { transform: translateY(-12px) scale(0.98); opacity: 0; }
        60% { transform: translateY(6px) scale(1.02); opacity: 1; }
        100% { transform: translateY(0) scale(1); opacity: 1; }
    }
    .chip-in {
        animation: chipFallIn 480ms cubic-bezier(.2,.9,.2,1) both;
    }
    @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-12px); }
    }
    .float-orb { animation: float 18s ease-in-out infinite; }
    .float-orb-rev { animation: float 22s ease-in-out infinite reverse; }
    @keyframes idle {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-2px) rotate(-0.5deg); }
    }
</style>
