<script lang="ts">
    import { cart } from '$lib/stores/cart';
    import type { Product } from '$lib/stores/cart';
    import { fade } from 'svelte/transition';

    let { product }: { product: Product } = $props();
    
    let added = $state(false);
    let fallbackImage = 'https://via.placeholder.com/300?text=No+Image';

    function handleImageError(e: Event) {
        const target = e.target as HTMLImageElement;
        if (target.src !== fallbackImage) {
            target.src = fallbackImage;
        }
    }

    function addToCart() {
        cart.add(product);
        added = true;
        setTimeout(() => added = false, 2000);
    }
</script>

<div class="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col h-full border border-gray-100">
    <div class="relative aspect-square overflow-hidden bg-gray-50">
        <img 
            src={product.images[0] || fallbackImage} 
            alt={product.title}
            onerror={handleImageError}
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div class="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-700 shadow-sm">
            {product.category.name}
        </div>
    </div>
    
    <div class="p-5 flex flex-col flex-grow">
        <h3 class="text-lg font-bold text-gray-900 mb-1 line-clamp-1" title={product.title}>
            {product.title}
        </h3>
        <p class="text-sm text-gray-500 mb-4 line-clamp-2 flex-grow">
            {product.description}
        </p>
        
        <div class="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
            <span class="text-2xl font-extrabold text-gray-900">
                ${product.price}
            </span>
            <button 
                onclick={addToCart}
                class="relative overflow-hidden bg-gray-900 text-white px-5 py-2.5 rounded-xl font-medium transition-transform active:scale-95 hover:bg-gray-800 disabled:opacity-50 flex items-center justify-center min-w-[120px]"
            >
                {#if added}
                    <span in:fade={{duration: 200}} class="flex items-center gap-2">
                        <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                        Added
                    </span>
                {:else}
                    <span in:fade={{duration: 200}}>Add to Cart</span>
                {/if}
            </button>
        </div>
    </div>
</div>
