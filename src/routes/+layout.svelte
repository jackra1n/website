<script lang="ts">
    import '@unocss/reset/tailwind.css';
    import 'virtual:uno.css';

    let { children } = $props();
</script>

<svelte:head>
    <meta name="theme-color" content="#0a0a0a" />
    <title>jackra1n - Software Engineer</title>
    <meta name="description" content="Hey, I'm Jacek. I build software and small tools. I like open source, Rust, Svelte and clean design." />
    <link rel="canonical" href="https://jackra1n.com" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="jackra1n" />
    <meta property="og:description" content="Hey, I'm Jacek. I build software and small tools. I like open source, Rust, Svelte and clean design." />
    <meta property="og:url" content="https://jackra1n.com" />
    <meta property="og:site_name" content="jackra1n" />
    <meta property="og:image" content="https://jackra1n.com/jackra1n-favicon.png" />
    <meta property="og:image:alt" content="jackra1n favicon" />
</svelte:head>

<div class="font-sans min-h-[100dvh]">
    {@render children?.()}
</div>
