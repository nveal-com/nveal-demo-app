<script>
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import '../app.css';
    
    let { children } = $props();
</script>

<div class="min-h-screen flex flex-col bg-gray-50 text-gray-900 font-sans">
    <Header />
    <main class="flex-grow container mx-auto px-4 py-8">
        {@render children()}
    </main>
    <Footer />
</div>
