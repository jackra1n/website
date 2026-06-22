<script lang="ts">
    import { onMount } from 'svelte';

    let mounted = $state(false);
    let input = $state('');
    let copied = $state(false);

    // Mocking-SpongeBob casing: mostly alternates, but skips a toggle now and
    // then so it reads like the chaotic original instead of stiff aLtErNaTiNg.
    // Index-based pseudo-randomness keeps the output stable while you type.
    function mock(text: string): string {
        let upper = true; // example starts "dUdE" -> first letter stays lower
        let out = '';
        for (let i = 0; i < text.length; i += 1) {
            const ch = text[i];
            if (!/[a-z]/i.test(ch)) {
                out += ch;
                continue;
            }
            // deterministic "coin flip" per position
            const skip = ((i * 2654435761) >>> 0) % 5 === 0;
            if (!skip) upper = !upper;
            out += upper ? ch.toUpperCase() : ch.toLowerCase();
        }
        return out;
    }

    let output = $derived(mock(input));

    async function copy() {
        try {
            await navigator.clipboard.writeText(output);
            copied = true;
            setTimeout(() => (copied = false), 1400);
        } catch {
            copied = false;
        }
    }

    onMount(() => {
        mounted = true;
    });
</script>

<svelte:head>
    <title>mOcKiFy</title>
    <meta name="robots" content="noindex, nofollow" />
</svelte:head>

<!-- faint accent glows for depth (matches the home page) -->
<div class="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
    <div class="absolute -top-32 left-1/4 h-[28rem] w-[28rem] rounded-full bg-indigo-500/10 blur-3xl float-orb"></div>
    <div class="absolute bottom-0 right-1/4 h-[24rem] w-[24rem] rounded-full bg-fuchsia-500/8 blur-3xl float-orb-rev"></div>
</div>

<main class="container mx-auto px-5 md:px-8 py-16 md:py-20">
    <header class={`flex items-center justify-between transition-all duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
        <a href="/" class="font-mono text-lg md:text-xl font-semibold tracking-tight">
            <span class="text-neutral-500">~/</span><span>jackra1n</span><span class="text-neutral-500">/spongebob</span>
        </a>
    </header>

    <section class={`mt-16 md:mt-20 transition-all duration-700 ease-out delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
        <p class="font-mono text-sm text-fuchsia-400/80 mb-4">$ ./mockify.sh</p>
        <h1 class="text-4xl md:text-6xl font-semibold leading-[1.05]">
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-400 to-indigo-400">sPoNgEbOb</span> text
        </h1>
        <p class="mt-5 text-neutral-300 max-w-2xl">
            Type below, get back the mocking-SpongeBob treatment. Perfect for replying to the most reasonable takes on the internet.
        </p>
    </section>

    <section class={`mt-12 grid gap-6 md:grid-cols-2 transition-all duration-700 ease-out delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
        <!-- input -->
        <div class="overflow-hidden rounded-xl border border-white/10 bg-neutral-950/70 backdrop-blur shadow-[0_20px_70px_-20px_rgba(99,102,241,0.35)]">
            <div class="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-2.5">
                <span class="h-3 w-3 rounded-full bg-red-400/70"></span>
                <span class="h-3 w-3 rounded-full bg-yellow-400/70"></span>
                <span class="h-3 w-3 rounded-full bg-green-400/70"></span>
                <span class="ml-2 font-mono text-xs text-neutral-500">input.txt</span>
            </div>
            <textarea
                bind:value={input}
                rows="8"
                placeholder="type something reasonable..."
                class="w-full resize-y bg-transparent p-4 font-mono text-[13px] leading-relaxed text-neutral-200 outline-none placeholder:text-neutral-600"
            ></textarea>
        </div>

        <!-- output -->
        <div class="overflow-hidden rounded-xl border border-white/10 bg-neutral-950/70 backdrop-blur shadow-[0_20px_70px_-20px_rgba(217,70,239,0.35)]">
            <div class="flex items-center justify-between border-b border-white/10 bg-white/5 px-4 py-2.5">
                <span class="font-mono text-xs text-neutral-500">output.txt</span>
                <button
                    onclick={copy}
                    class="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-xs text-neutral-300 hover:text-white hover:border-white/20 transition-colors"
                >
                    <span class={`${copied ? 'i-lucide:check' : 'i-lucide:copy'} h-3.5 w-3.5`} aria-hidden="true"></span>
                    {copied ? 'copied' : 'copy'}
                </button>
            </div>
            <p class="min-h-[calc(8*1.625em+2rem)] whitespace-pre-wrap break-words p-4 font-mono text-[13px] leading-relaxed text-fuchsia-200">{output}</p>
        </div>
    </section>

    <footer class={`mt-20 flex items-center justify-between border-t border-white/5 pt-8 font-mono text-xs text-neutral-500 transition-all duration-700 ease-out delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
        <span>© {new Date().getFullYear()} jackra1n</span>
        <a href="/" class="hover:text-white">$ cd ~</a>
    </footer>
</main>

<style>
    @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-12px); }
    }
    .float-orb { animation: float 18s ease-in-out infinite; }
    .float-orb-rev { animation: float 22s ease-in-out infinite reverse; }

    @media (prefers-reduced-motion: reduce) {
        .float-orb, .float-orb-rev { animation: none; }
    }
</style>
