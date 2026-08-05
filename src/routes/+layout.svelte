<script>
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import '../app.css';
    
    let { children } = $props();

    /* 
     * ==========================================
     * NVEAL SDK INTEGRATION DEMO STEPS
     * ==========================================
     * 
     * Step 1: Install the SDK
     * Run this command in your terminal:
     * npm install @nveal/sdk
     * 
     * Step 2: Initialize and add SDK key
     * Uncomment the code below to import and initialize the SDK.
     */
     
    // import { Nveal } from '@nveal/sdk';
    // 
    // $effect(() => {
    //     // Ensure this runs only on the client side
    //     Nveal.init({
    //         apiKey: 'YOUR_NVEAL_SDK_KEY_HERE',
    //         
    //         /* Step 3: Add different configurations for SDK */
    //         // enableTracking: true,
    //         // environment: 'production',
    //         // debug: false,
    //         // user: { id: 'test-user-123' }
    //     });
    // });
</script>

<div class="min-h-screen flex flex-col bg-gray-50 text-gray-900 font-sans">
    <Header />
    <main class="flex-grow container mx-auto px-4 py-8">
        {@render children()}
    </main>
    <Footer />
</div>
