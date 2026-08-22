<script>
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import "../app.css";
    import { NvealRecorder } from "@nveal/browser";

    let { children } = $props();

    /*
     * ==========================================
     * NVEAL SDK INTEGRATION DEMO STEPS
     * ==========================================
     *
     * Step 1: Install the SDK
     * Run this command in your terminal:
     * npm install @nveal/browser
     **/
    /*
     * Step 2: Initialize and add SDK key
     * Uncomment the code below to import and initialize the SDK.
     */
    $effect(() => {
        Nveal.init({
            apiKey: "7ff5365a-a9ab-42a4-9d64-6e783a3d68b4",
            //Add Any metadata you like
            metadata: {
                //Add any values which you want to track Ex: User Id, customer name etc.
                environement: "production",
            },
            //Add nay maskings you like
            maskAllInputs: false, //This is true by default
            maskPII: false, //This is true by default
            //OPTIONAL IF YOU WANT TO RECORD NETWORK CALLS. NOTE: ONLY URLS are recorded and not payload or response for security purposes.
            network: {
                record: true,
                // Drop noisy health checks completely

                // Preserve query strings but let smartMasking redact tokens
                stripQueryParams: false,
                smartMasking: true,
            },
            //OPTIONAL: IF you want to record console to see if a user is getting any errors etc in production in thier btowser console
            recordConsole: true,
            recordConsoleConfig: {
                level: ["log", "error", "warn", "info"],
                maxConsolePayloadBytes: 8 * 1024 * 1024, // 8MB limit
            },
        });
    });
    /*
     *  Step 3: Add different configurations for SDK
     * enableTracking: true,
     * environment: 'production',
     * debug: false,
     *  user: { id: 'test-user-123' }
     */
    //KEY e1caf41f-7f92-461a-9397-b6413edc963d
</script>

<div class="min-h-screen flex flex-col bg-gray-50 text-gray-900 font-sans">
    <Header />
    <main class="flex-grow container mx-auto px-4 py-8">
        {@render children()}
    </main>
    <Footer />
</div>
