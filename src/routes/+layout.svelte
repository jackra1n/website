<script lang="ts">
    import '@unocss/reset/tailwind.css';
    import 'virtual:uno.css';

    let { children } = $props();
</script>

<svelte:head>
    <meta name="theme-color" content="#0a0a0a" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</svelte:head>

<div class="font-sans min-h-[100dvh]">
    {@render children?.()}
</div>
