<script lang="ts">
    import { cart } from '$lib/stores/cart';
    
    let searchQuery = $state('');

    let cartItemCount = $derived($cart.reduce((total, item) => total + item.quantity, 0));

    function handleSearch(e: Event) {
        e.preventDefault();
        if (searchQuery.trim()) {
            window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
        }
    }
</script>



<header class="bg-white/80 backdrop-blur-md border-b border-gray-100 text-gray-900 sticky top-0 z-50">
    <div class="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        <a href="/" class="text-2xl font-bold tracking-wider hover:text-blue-600 transition-colors">
            NVEAL<span class="text-blue-600">STORE</span>
        </a>

        <form onsubmit={handleSearch} class="flex-1 max-w-xl w-full mx-4">
            <div class="relative">
                <input
                    type="text"
                    bind:value={searchQuery}
                    placeholder="Search products..."
                    class="w-full px-4 py-2.5 rounded-full bg-gray-100/50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white border border-gray-200 transition-all"
                />
                <button type="submit" class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>
            </div>
        </form>

        <a href="/cart" class="relative group flex items-center gap-2 hover:text-blue-600 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span class="font-medium hidden sm:block">Cart</span>
            {#if cartItemCount > 0}
                <span class="absolute -top-2 -right-2 bg-blue-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    {cartItemCount}
                </span>
            {/if}
        </a>
    </div>
</header>
