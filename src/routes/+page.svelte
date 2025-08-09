<script lang="ts">
    const links = [
        { label: 'GitHub', href: 'https://github.com/jackra1n' },
        { label: 'Infra (Homelab)', href: 'https://github.com/jackra1n/infra' }
    ];

    const skillsPrimary = [
        'Java', 'JSF', 'PrimeFaces', 'Maven', 'Docker'
    ];

    const skillsSecondary = [
        'Python', 'Rust', 'Svelte', 'Linux', 'Homelab'
    ];
</script>

<!-- Background gradient orbs -->
<div class="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
    <div class="absolute -top-40 -left-32 h-96 w-96 rounded-full bg-fuchsia-500/20 blur-3xl animate-[float_18s_ease-in-out_infinite]"></div>
    <div class="absolute -bottom-32 -right-24 h-[28rem] w-[28rem] rounded-full bg-indigo-500/15 blur-3xl animate-[float_22s_ease-in-out_infinite_reverse]"></div>
</div>

<main class="container mx-auto px-5 md:px-8 py-20">
    <header class="flex items-center justify-between">
        <a href="/" class="text-xl md:text-2xl font-semibold tracking-tight">jackra1n</a>
        <nav class="flex gap-5 text-sm text-neutral-300">
            {#each links as link}
                <a class="hover:text-white transition-colors" href={link.href} target="_blank" rel="noreferrer">{link.label}</a>
            {/each}
        </nav>
    </header>

    <section class="mt-20 grid items-center gap-10 md:grid-cols-[1.2fr_0.8fr]">
        <div>
            <h1 class="text-4xl md:text-6xl font-semibold leading-[1.05]">
                Computer science student and builder.
            </h1>
            <p class="mt-5 text-neutral-300 max-w-2xl">
                I solve problems with code and ship pragmatic systems. Trained through an apprenticeship in Switzerland, professional experience in enterprise Java, and currently wrapping up my B.Sc. at HSLU. I enjoy backend work, infrastructure, and squeezing the most out of minimal UIs.
            </p>
            <div class="mt-8 flex flex-wrap gap-3">
                {#each skillsPrimary as s}
                    <span class="rounded-full border border-neutral-800 bg-neutral-900/60 px-3 py-1 text-sm text-neutral-200">{s}</span>
                {/each}
            </div>
            <div class="mt-3 flex flex-wrap gap-3">
                {#each skillsSecondary as s}
                    <span class="rounded-full border border-neutral-800/80 bg-neutral-900/40 px-3 py-1 text-sm text-neutral-300">{s}</span>
                {/each}
            </div>
            <div class="mt-10 flex gap-4">
                <a href="https://github.com/jackra1n" target="_blank" rel="noreferrer" class="inline-flex items-center gap-2 rounded-md bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/15 transition-colors">View GitHub</a>
                <a href="/blog" class="inline-flex items-center gap-2 rounded-md border border-white/10 px-4 py-2 text-sm font-medium text-neutral-200 hover:text-white hover:border-white/20 transition-colors">Blog</a>
            </div>
        </div>

        <!-- Minimal animated character: a line-drawn motorcycle that idles and leans on hover -->
        <div class="relative mx-auto w-full max-w-md select-none">
            <svg viewBox="0 0 220 120" xmlns="http://www.w3.org/2000/svg" class="mx-auto h-auto w-full drop-shadow-[0_0_40px_rgba(99,102,241,0.15)]">
                <g class="origin-center animate-[idle_3s_ease-in-out_infinite]">
                    <circle cx="60" cy="90" r="22" class="fill-none stroke-white/70" stroke-width="2" />
                    <circle cx="160" cy="90" r="22" class="fill-none stroke-white/70" stroke-width="2" />
                    <path d="M60 68 L85 55 L105 55 L120 68 L160 68" class="fill-none stroke-white/80" stroke-width="2.5" />
                    <path d="M105 55 L110 40 L130 40" class="fill-none stroke-white/70" stroke-width="2" />
                    <circle cx="110" cy="40" r="3" class="fill-white/80" />
                </g>
            </svg>
            <div class="absolute inset-x-8 -bottom-2 h-2 rounded-full bg-black/60 blur-xl"></div>
        </div>
    </section>

    <section class="mt-24 grid gap-6 md:grid-cols-3">
        <div class="rounded-xl border border-white/5 bg-white/5 p-6 backdrop-blur">
            <h3 class="text-lg font-medium">What I work with</h3>
            <p class="mt-2 text-sm text-neutral-300">Java at work (JSF/PrimeFaces, Maven), Docker across projects, and Linux everywhere. Recently exploring Rust for systems and tooling.</p>
        </div>
        <div class="rounded-xl border border-white/5 bg-white/5 p-6 backdrop-blur">
            <h3 class="text-lg font-medium">Homelab</h3>
            <p class="mt-2 text-sm text-neutral-300">I run services on a small home server with Docker and IaC. Infra is open-source.</p>
            <a class="mt-3 inline-block text-sm text-indigo-300 hover:text-indigo-200" href="https://github.com/jackra1n/infra" target="_blank" rel="noreferrer">Explore infra →</a>
        </div>
        <div class="rounded-xl border border-white/5 bg-white/5 p-6 backdrop-blur">
            <h3 class="text-lg font-medium">Outside the screen</h3>
            <p class="mt-2 text-sm text-neutral-300">I ride a motorcycle. It keeps me honest about speed and focus.</p>
        </div>
    </section>

    <footer class="mt-24 flex items-center justify-between border-t border-white/5 pt-8 text-xs text-neutral-400">
        <span>© {new Date().getFullYear()} jackra1n</span>
        <a href="https://github.com/jackra1n/jackra1n.github.io" target="_blank" rel="noreferrer" class="hover:text-white">Source</a>
    </footer>
</main>

<style>
    @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-12px); }
    }
    @keyframes idle {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-2px) rotate(-0.5deg); }
    }
</style>
