<script lang="ts">
    import { cart } from '$lib/stores/cart';
    
    let totalItems = $derived($cart.reduce((sum, item) => sum + item.quantity, 0));
    let totalPrice = $derived($cart.reduce((sum, item) => sum + (item.price * item.quantity), 0));
    
    function updateQuantity(id: number, quantity: number) {
        cart.updateQuantity(id, quantity);
    }
    
    function removeItem(id: number) {
        cart.remove(id);
    }
</script>

<svelte:head>
    <title>Your Cart - Nveal Demo App</title>
</svelte:head>

<div class="max-w-4xl mx-auto">
    <h1 class="text-3xl font-extrabold text-gray-900 mb-8">Shopping Cart</h1>

    {#if $cart.length === 0}
        <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <h2 class="text-xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
            <p class="text-gray-500 mb-6">Looks like you haven't added anything to your cart yet.</p>
            <a href="/" class="inline-block bg-gray-900 text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-800 transition-colors">
                Start Shopping
            </a>
        </div>
    {:else}
        <div class="flex flex-col lg:flex-row gap-8">
            <div class="lg:w-2/3 flex flex-col gap-4">
                {#each $cart as item (item.id)}
                    <div class="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                        <div class="w-24 h-24 flex-shrink-0 bg-gray-50 rounded-xl overflow-hidden">
                            <img src={item.images[0]} alt={item.title} class="w-full h-full object-cover" />
                        </div>
                        <div class="flex-grow flex flex-col justify-between">
                            <div>
                                <h3 class="font-bold text-gray-900 line-clamp-1">{item.title}</h3>
                                <p class="text-sm text-gray-500">${item.price}</p>
                            </div>
                            <div class="flex items-center gap-4 mt-2">
                                <div class="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                                    <button 
                                        onclick={() => updateQuantity(item.id, item.quantity - 1)}
                                        class="px-3 py-1 bg-gray-50 hover:bg-gray-100 text-gray-600 font-medium"
                                    >-</button>
                                    <span class="px-4 py-1 text-sm font-medium border-x border-gray-200 bg-white">
                                        {item.quantity}
                                    </span>
                                    <button 
                                        onclick={() => updateQuantity(item.id, item.quantity + 1)}
                                        class="px-3 py-1 bg-gray-50 hover:bg-gray-100 text-gray-600 font-medium"
                                    >+</button>
                                </div>
                                <button 
                                    onclick={() => removeItem(item.id)}
                                    class="text-sm text-red-500 hover:text-red-700 font-medium"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                        <div class="text-lg font-bold text-gray-900 ml-4">
                            ${(item.price * item.quantity).toFixed(2)}
                        </div>
                    </div>
                {/each}
            </div>

            <div class="lg:w-1/3">
                <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-24">
                    <h2 class="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
                    <div class="flex justify-between mb-4 text-gray-600">
                        <span>Items ({totalItems})</span>
                        <span>${totalPrice.toFixed(2)}</span>
                    </div>
                    <div class="flex justify-between mb-6 text-gray-600">
                        <span>Shipping</span>
                        <span class="text-green-500 font-medium">Free</span>
                    </div>
                    <div class="border-t border-gray-100 pt-4 flex justify-between mb-6">
                        <span class="text-lg font-bold text-gray-900">Total</span>
                        <span class="text-2xl font-extrabold text-gray-900">${totalPrice.toFixed(2)}</span>
                    </div>
                    <a 
                        href="/checkout"
                        class="w-full flex items-center justify-center bg-blue-600 text-white px-6 py-3.5 rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-sm shadow-blue-200"
                    >
                        Proceed to Checkout
                    </a>
                </div>
            </div>
        </div>
    {/if}
</div>
