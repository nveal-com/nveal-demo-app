<script lang="ts">
    import type { PageData } from './$types';
    import ProductCard from '$lib/components/ProductCard.svelte';

    let { data }: { data: PageData } = $props();
</script>

<svelte:head>
    <title>Nveal Demo App - Home</title>
</svelte:head>

<div class="mb-12 text-center">
    <h1 class="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">Featured Products</h1>
    <p class="text-gray-500 max-w-2xl mx-auto">Discover our latest collection of premium products carefully curated for you.</p>
</div>

{#if data.categories?.length > 0}
    <div class="flex flex-wrap justify-center gap-3 mb-10">
        {#each data.categories as category}
            <div class="px-5 py-2 bg-white rounded-full shadow-sm border border-gray-100 text-sm font-medium text-gray-700 hover:border-blue-300 hover:text-blue-600 cursor-pointer transition-colors">
                {category.name}
            </div>
        {/each}
    </div>
{/if}

{#if data.products.length === 0}
    <div class="text-center py-20 text-gray-500">
        <p class="text-xl">No products found or failed to load.</p>
    </div>
{:else}
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {#each data.products as product (product.id)}
            <ProductCard {product} />
        {/each}
    </div>
{/if}
