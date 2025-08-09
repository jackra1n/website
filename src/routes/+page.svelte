<script lang="ts">
    const links = [{ label: 'GitHub', href: 'https://github.com/jackra1n' }];

    const skillsPrimary = ['Java', 'JSF', 'PrimeFaces', 'Maven', 'Docker'];
    const skillsSecondary = ['Python', 'Rust', 'Svelte', 'Linux', 'Homelab'];

    const showcase = [
        {
            title: 'Motorcycle',
            icon: 'i-lucide:bike',
            hint: 'A ride clears the cache',
            href: undefined
        },
        {
            title: 'Homelab',
            icon: 'i-lucide:server',
            hint: 'Docker containers everywhere',
            href: 'https://github.com/jackra1n/infra'
        },
        {
            title: 'Rust',
            icon: 'i-lucide:cog',
            hint: 'Fast tools and CLIs',
            href: undefined
        },
        {
            title: 'Python',
            icon: 'i-lucide:terminal',
            hint: 'Data + scripting',
            href: undefined
        }
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
        <nav class="flex items-center gap-5 text-sm text-neutral-300">
            {#each links as link}
                <a class="inline-flex items-center gap-2 hover:text-white transition-colors" href={link.href} target="_blank" rel="noreferrer">
                    <span class="i-simple-icons:github h-4 w-4" aria-hidden="true"></span>
                    <span>{link.label}</span>
                </a>
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
                <a href="https://github.com/jackra1n" target="_blank" rel="noreferrer" class="inline-flex items-center gap-2 rounded-md bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/15 transition-colors">
                    <span class="i-simple-icons:github h-4 w-4" aria-hidden="true"></span>
                    View GitHub
                </a>
                <a href="/blog" class="inline-flex items-center gap-2 rounded-md border border-white/10 px-4 py-2 text-sm font-medium text-neutral-200 hover:text-white hover:border-white/20 transition-colors">Blog</a>
            </div>
        </div>

        <!-- Showcase grid (icons/images placeholders with glow + float on hover) -->
        <div class="relative mx-auto w-full max-w-md select-none">
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
                            <div class="text-xs text-neutral-400">{item.hint}</div>
                        </div>
                    </a>
                {/each}
            </div>
        </div>
    </section>

    <!-- Interests first -->
    <section class="mt-24 grid gap-6 md:grid-cols-3">
        <div class="rounded-xl border border-white/5 bg-white/5 p-6 backdrop-blur transition-all hover:border-white/10 hover:bg-white/7 hover:-translate-y-1.5 hover:shadow-[0_10px_40px_-10px_rgba(99,102,241,0.25)]">
            <h3 class="text-lg font-medium inline-flex items-center gap-2"><span class="i-lucide:bike h-5 w-5"></span>Motorcycles</h3>
            <p class="mt-2 text-sm text-neutral-300">Riding keeps me focused and present. Road, weather, line—no distractions.</p>
        </div>
        <div class="rounded-xl border border-white/5 bg-white/5 p-6 backdrop-blur transition-all hover:border-white/10 hover:bg-white/7 hover:-translate-y-1.5 hover:shadow-[0_10px_40px_-10px_rgba(16,185,129,0.25)]">
            <h3 class="text-lg font-medium inline-flex items-center gap-2"><span class="i-lucide:server h-5 w-5"></span>Homelab</h3>
            <p class="mt-2 text-sm text-neutral-300">Small server, many services. Docker, IaC, and lots of logs.</p>
            <a class="mt-3 inline-flex items-center gap-1 text-sm text-indigo-300 hover:text-indigo-200" href="https://github.com/jackra1n/infra" target="_blank" rel="noreferrer"><span>Explore infra</span><span class="i-lucide:arrow-right h-4 w-4"></span></a>
        </div>
        <div class="rounded-xl border border-white/5 bg-white/5 p-6 backdrop-blur transition-all hover:border-white/10 hover:bg-white/7 hover:-translate-y-1.5 hover:shadow-[0_10px_40px_-10px_rgba(59,130,246,0.25)]">
            <h3 class="text-lg font-medium inline-flex items-center gap-2"><span class="i-lucide:code-2 h-5 w-5"></span>Building</h3>
            <p class="mt-2 text-sm text-neutral-300">Minimal tools and clean code. Lately: Rust for fast utilities.</p>
        </div>
    </section>

    <!-- Then what I do professionally -->
    <section class="mt-10 grid gap-6 md:grid-cols-3">
        <div class="rounded-xl border border-white/5 bg-white/5 p-6 backdrop-blur">
            <h3 class="text-lg font-medium">What I work with</h3>
            <p class="mt-2 text-sm text-neutral-300">Enterprise Java at work (JSF/PrimeFaces, Maven), Docker across projects, and Linux everywhere.</p>
        </div>
        <div class="rounded-xl border border-white/5 bg-white/5 p-6 backdrop-blur">
            <h3 class="text-lg font-medium">Currently</h3>
            <p class="mt-2 text-sm text-neutral-300">Two years into B.Sc. at HSLU, one to go. Building things alongside.</p>
        </div>
        <div class="rounded-xl border border-white/5 bg-white/5 p-6 backdrop-blur">
            <h3 class="text-lg font-medium">Tech I like</h3>
            <div class="mt-3 flex flex-wrap gap-2">
                {#each ['Rust', 'Python', 'Docker', 'Svelte', 'Linux'] as t}
                    <span class="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-neutral-200 transition-colors hover:bg-white/8">{t}</span>
                {/each}
            </div>
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
