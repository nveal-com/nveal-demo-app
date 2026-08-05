<svelte:head>
    <title>Order Confirmed - Nveal Demo App</title>
</svelte:head>

<div class="max-w-2xl mx-auto text-center py-16">
    <div class="bg-white p-12 rounded-3xl shadow-sm border border-gray-100">
        <div class="w-24 h-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
            </svg>
        </div>
        
        <h1 class="text-4xl font-extrabold text-gray-900 mb-4">Order Confirmed!</h1>
        <p class="text-lg text-gray-500 mb-8">
            Thank you for your purchase. We have received your order and will begin processing it shortly. You will receive an email confirmation soon.
        </p>
        
        <div class="bg-gray-50 rounded-2xl p-6 mb-8 text-left">
            <h3 class="font-bold text-gray-900 mb-2">Order Details</h3>
            <div class="flex justify-between text-sm text-gray-600 mb-1">
                <span>Order Number:</span>
                <span class="font-medium text-gray-900">#ORD-{Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}</span>
            </div>
            <div class="flex justify-between text-sm text-gray-600">
                <span>Date:</span>
                <span class="font-medium text-gray-900">{new Date().toLocaleDateString()}</span>
            </div>
        </div>

        <a 
            href="/"
            class="inline-block bg-gray-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-gray-800 transition-colors shadow-sm"
        >
            Continue Shopping
        </a>
    </div>
</div>
