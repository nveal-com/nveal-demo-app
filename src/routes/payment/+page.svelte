<script lang="ts">
    import { cart } from '$lib/stores/cart';
    
    let cardNumber = $state('');
    let expiry = $state('');
    let cvc = $state('');
    let cardError = $state('');
    let submitting = $state(false);

    // Luhn algorithm implementation
    function isValidLuhn(num: string) {
        let nCheck = 0;
        let bEven = false;
        const value = num.replace(/\D/g, "");

        for (let n = value.length - 1; n >= 0; n--) {
            let cDigit = value.charAt(n);
            let nDigit = parseInt(cDigit, 10);

            if (bEven) {
                if ((nDigit *= 2) > 9) nDigit -= 9;
            }

            nCheck += nDigit;
            bEven = !bEven;
        }

        return (nCheck % 10) === 0;
    }

    function handleSubmit(e: Event) {
        e.preventDefault();
        cardError = '';
        
        if (!cardNumber.trim()) {
            cardError = 'Card number is required.';
            return;
        }

        if (!isValidLuhn(cardNumber)) {
            cardError = 'Invalid credit card number.';
            return;
        }

        submitting = true;
        
        // Simulate API call for payment processing
        setTimeout(() => {
            cart.clear(); // Clear cart on success
            window.location.href = '/confirmation';
        }, 1500);
    }
</script>

<svelte:head>
    <title>Payment - Nveal Demo App</title>
</svelte:head>

<div class="max-w-xl mx-auto">
    <h1 class="text-3xl font-extrabold text-gray-900 mb-8 text-center">Payment Details</h1>
    
    <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <div class="mb-8">
            <p class="text-sm text-gray-500 mb-2">Total Amount to Pay:</p>
            <p class="text-4xl font-extrabold text-gray-900">
                ${$cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)}
            </p>
        </div>

        <form onsubmit={handleSubmit} class="space-y-6">
            <div>
                <label for="cardNumber" class="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                <div class="relative">
                    <input 
                        type="text" 
                        id="cardNumber" 
                        bind:value={cardNumber} 
                        placeholder="0000 0000 0000 0000"
                        class="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 {cardError ? 'border-red-500 focus:ring-red-500' : ''}" 
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                </div>
                {#if cardError}
                    <p class="text-red-500 text-sm mt-1">{cardError}</p>
                {/if}
            </div>

            <div class="grid grid-cols-2 gap-4">
                <div>
                    <label for="expiry" class="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                    <input 
                        type="text" 
                        id="expiry" 
                        bind:value={expiry} 
                        placeholder="MM/YY"
                        class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    />
                </div>
                <div>
                    <label for="cvc" class="block text-sm font-medium text-gray-700 mb-1">CVC</label>
                    <input 
                        type="text" 
                        id="cvc" 
                        bind:value={cvc} 
                        placeholder="123"
                        class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    />
                </div>
            </div>
            
            <div class="pt-4">
                <button 
                    type="submit" 
                    disabled={submitting}
                    class="w-full flex justify-center items-center bg-gray-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-gray-800 transition-colors shadow-sm disabled:opacity-70"
                >
                    {#if submitting}
                        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                    {:else}
                        Pay Now
                    {/if}
                </button>
            </div>
        </form>
        <p class="text-center text-xs text-gray-400 mt-6">
            This is a dummy payment gateway. Use a valid test card number.
        </p>
    </div>
</div>
