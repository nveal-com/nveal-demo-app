<script lang="ts">
    import type { PageData } from './$types';
    import ProductCard from '$lib/components/ProductCard.svelte';

    let { data }: { data: PageData } = $props();
</script>

<svelte:head>
    <title>Search Results - Nveal Demo App</title>
</svelte:head>

<div class="mb-10 text-center">
    <h1 class="text-3xl font-extrabold text-gray-900 mb-2">Search Results</h1>
    <p class="text-gray-500">
        {#if data.q}
            Found {data.products.length} result{data.products.length === 1 ? '' : 's'} for "<span class="font-semibold text-gray-800">{data.q}</span>"
        {:else}
            Please enter a search term above.
        {/if}
    </p>
</div>

{#if data.products.length > 0}
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {#each data.products as product (product.id)}
            <ProductCard {product} />
        {/each}
    </div>
{:else if data.q}
    <div class="text-center py-16 bg-white rounded-2xl shadow-sm border border-gray-100 max-w-2xl mx-auto">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <h2 class="text-xl font-bold text-gray-900 mb-2">No products found</h2>
        <p class="text-gray-500">Try adjusting your search or browse our categories instead.</p>
        <a href="/" class="mt-6 inline-block bg-gray-900 text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors">
            Back to Home
        </a>
    </div>
{/if}
