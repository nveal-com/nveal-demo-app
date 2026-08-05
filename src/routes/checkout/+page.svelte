<script lang="ts">
    function handleSubmit(e: Event) {
        e.preventDefault();
        window.location.href = '/payment';
    }
</script>

<svelte:head>
    <title>Checkout - Nveal Demo App</title>
</svelte:head>

<div class="max-w-3xl mx-auto">
    <h1 class="text-3xl font-extrabold text-gray-900 mb-8">Checkout Details</h1>
    
    <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <form onsubmit={handleSubmit} class="space-y-6">
            <div>
                <h2 class="text-xl font-bold text-gray-900 mb-4">Contact Information</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label for="firstName" class="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                        <input required type="text" id="firstName" class="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div>
                        <label for="lastName" class="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                        <input required type="text" id="lastName" class="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div class="sm:col-span-2">
                        <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <input required type="email" id="email" class="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                </div>
            </div>

            <div class="pt-6 border-t border-gray-100">
                <h2 class="text-xl font-bold text-gray-900 mb-4">Shipping Address</h2>
                <div class="space-y-4">
                    <div>
                        <label for="address" class="block text-sm font-medium text-gray-700 mb-1">Street Address</label>
                        <input required type="text" id="address" class="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <label for="city" class="block text-sm font-medium text-gray-700 mb-1">City</label>
                            <input required type="text" id="city" class="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div>
                            <label for="zip" class="block text-sm font-medium text-gray-700 mb-1">ZIP / Postal Code</label>
                            <input required type="text" id="zip" class="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="pt-6 flex justify-end gap-4">
                <a href="/cart" class="px-6 py-3 text-gray-600 font-medium hover:text-gray-900">Back to Cart</a>
                <button type="submit" class="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-sm shadow-blue-200">
                    Continue to Payment
                </button>
            </div>
        </form>
    </div>
</div>
