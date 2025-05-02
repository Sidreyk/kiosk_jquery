// Product data
const products = [
    { id: 1, name: "Sour Belt(100g)", price: 50.99, image: "https://imgs.search.brave.com/nPgwdRY1xUMMQkHIxO4X7GAlWQFoaP39531-EWK4zhk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5jYW5keW5hdGlv/bi5jb20vY2F0YWxv/Zy9wcm9kdWN0L2Nh/Y2hlLzM3YjM3N2Yy/YTJkZmVhMzBiNDIw/NzJiNTVjNzM3MTE5/L3Mvby9zb3VyX2Jl/bHRzXzIuanBn" },
    { id: 2, name: "Jelly Beans(150g)", price: 80.99, image: "https://imgs.search.brave.com/-4wLoxb5kLbeGqXRaHvb6TA3TrI4DdCgSoRsbsukGBo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNjYz/MTY3MDcyL3Bob3Rv/L2NvbG9yZnVsLWpl/bGx5LWJlYW5zLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1O/VHd5RjhicTVCY2RD/ZEFXWEhqT1dwd2Nu/LU11T0c2bDE4RW9I/ckdwOTZrPQ" },
    { id: 3, name: "Gummy Bears(120g)", price: 70.99, image: "https://imgs.search.brave.com/CEINgeThLPlSvB4DM9XJ-uC6PQUDup1gUPHzqNNMZJE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTU3/MzM3NTE1L3Bob3Rv/L2d1bW15LWJlYXJz/LWJhY2tncm91bmQu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PWdkcFFfTXJBLWFP/WndTaVdGdDdNTWFB/UVBCUy1wdDdnR3ho/enREalVUNkE9" },
    { id: 4, name: "Nerds(46.7g)", price: 40.99, image: "https://imgs.search.brave.com/wVr2OTbsqgFLsQ-p02_J-bMiFX0wVKBv-We2pLstfWQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jYW5k/eWZ1bmhvdXNlLmNv/bS9jZG4vc2hvcC9w/cm9kdWN0cy9DYW5k/eWZ1bmhvdXNlX2Zl/cnJhcmFfbmVyZHNf/Z3JhcGVzdHJhd2Jl/cnJ5LVRvcC1qcGct/MS5qcGc_dj0xNjc5/OTc3OTIwJndpZHRo/PTk1MA" },
    { id: 5, name: "Sour Patch(154g)", price: 60.99, image: "https://imgs.search.brave.com/jA74rTczprj5_GZtW-UB-7D8OrkB_Hj_9xGIoslF09Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jYW5k/eWZ1bmhvdXNlLmNv/bS9jZG4vc2hvcC9m/aWxlcy9jZmgtMjAy/My1zb3VyLXBhdGNo/LWtpZHMtc291ci1j/aGVycnktYmxhc3Rl/cnMtY2FuZHktZnVu/aG91c2UuanBnP3Y9/MTcwMDQ5NDc3NyZ3/aWR0aD05NTA" },
    { id: 6, name: "Chocolate Almond(80g)", price: 80.99, image: "https://imgs.search.brave.com/F5q1y7XiRESH4Zka9Xpb4iomngYpSLTlNji1n4_ZjMM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ5/NTg4Mzg5MS9waG90/by9hbG1vbmRzLWlu/LWNob2NvbGF0ZS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/MU9aMzEzQWxIaHVW/OWhmSEtnTk53Vldy/SWNwN1F1clVhNlJy/MTZGRWhPdz0" },
    { id: 7, name: "Licorice(90g)", price: 60.99, image: "https://imgs.search.brave.com/263CldHxRM9QOb5i9dU2_rR2FiYgF6i2aJrUMWFcpso/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9udXRz/LmNvbS9pbWFnZXMv/cmFja2Nkbi9lZDkx/MGFlMmQ2MGYwZDI1/YmNiOC04MDU1MGY5/NmI1ZmViMTI2MDRm/NGY3MjBiZmVmYjQ2/ZC5zc2wuY2YxLnJh/Y2tjZG4uY29tLzI5/YWE3MGY3MzJkYTY5/Y2YtUzhsS3VWUDAt/bWVkaXVtLmpwZw" },
    { id: 8, name: "Sour Worms(120g)", price: 70.99, image: "https://imgs.search.brave.com/Dz-jdKkB9vh7-VRTBbqYEyoATa2YeMkA1Mw369qS7gs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/ODF1cWZ6NXRSWkwu/anBn" },
    { id: 9, name: "Lollipop(60g - a pack of 4)", price: 50.99, image: "https://imgs.search.brave.com/SQ2koqazo_hFdBA35ndLtBY_hE15y9dZXG8Oa-oyIPI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9idWxr/Y2FuZHlzdG9yZS5j/b20vY2RuL3Nob3Av/ZmlsZXMvdG9vdHNp/ZS1yb2xsLXRvb3Rz/aWUtcG9wcy0zLWxi/LWJhZ19fNTQ0Mjcu/MTcwMjU4NjkwNi4x/MjgwLjEyODBfMzVi/NGNmOGUtN2VjZS00/YmZmLWI4MWUtYzJj/MGI4YzRmNjgxLmpw/Zz92PTE3NDAwNzMy/NDYmd2lkdGg9NDAw" }
];

// Cart data structure
let cart = [];

// Cart functions
function addToCart(productId) {
    const quantity = parseInt($(`#quantity-${productId}`).val());
    const product = products.find(p => p.id === productId);
    
    if (product) {
        const existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: quantity,
                image: product.image
            });
        }
        
        updateCart();
        updateCartCount();
        showNotification(`${quantity} ${product.name} added to cart!`);
    }
}

function showNotification(message) {
    const notification = $(`
        <div class="fixed bottom-4 right-4 bg-pink-600 text-white px-6 py-3 rounded-lg shadow-lg transform translate-y-4 opacity-0 transition-all duration-300">
            ${message}
        </div>
    `);
    
    $('body').append(notification);
    
    setTimeout(() => {
        notification.removeClass('translate-y-4 opacity-0');
    }, 100);
    
    setTimeout(() => {
        notification.addClass('translate-y-4 opacity-0');
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

function updateCart() {
    const cartItems = $('#cart-items');
    const cartTotal = $('#cart-total');
    let total = 0;
    
    cartItems.empty();
    
    if (cart.length === 0) {
        cartItems.html(`
            <div class="text-center py-8">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <p class="text-gray-500 text-lg">Your cart is empty</p>
            </div>
        `);
    } else {
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            
            const cartItem = $(`
                <div class="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div class="flex items-center space-x-4">
                        <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded">
                        <div>
                            <h4 class="font-semibold">${item.name}</h4>
                            <p class="text-gray-600">₱${item.price.toFixed(2)} x ${item.quantity}</p>
                        </div>
                    </div>
                    <div class="flex items-center space-x-2">
                        <button onclick="updateQuantity(${item.id}, ${item.quantity - 1})" class="text-gray-500 hover:text-gray-700">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
                            </svg>
                        </button>
                        <span>${item.quantity}</span>
                        <button onclick="updateQuantity(${item.id}, ${item.quantity + 1})" class="text-gray-500 hover:text-gray-700">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                            </svg>
                        </button>
                        <button onclick="removeFromCart(${item.id})" class="text-red-500 hover:text-red-700">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            `);
            cartItems.append(cartItem);
        });
    }
    
    cartTotal.text(`₱${total.toFixed(2)}`);
}

function updateQuantity(productId, newQuantity) {
    if (newQuantity < 1) {
        removeFromCart(productId);
        return;
    }
    
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = newQuantity;
        updateCart();
        updateCartCount();
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
    updateCartCount();
}

function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    $('#cart-count').text(count);
}

// Modal functions
function openCart() {
    $('#cart-modal').removeClass('hidden').show();
}

function closeCart() {
    $('#cart-modal').addClass('hidden').hide();
}

function processPayment() {
    const paymentAmount = parseFloat($('#payment').val());
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    if (paymentAmount < total) {
        alert('Payment amount is less than the total. Please enter a sufficient amount.');
        return;
    }
    
    const change = paymentAmount - total;
    
    // Create payment confirmation popup
    const popupContent = `
        <div class="bg-white p-6 rounded-lg w-full max-w-md mx-auto">
            <div class="text-center mb-6">
                <h3 class="text-2xl font-bold text-pink-600">Order Summary</h3>
            </div>
            <div class="mb-6">
                ${cart.map(item => `
                    <div class="flex justify-between mb-2">
                        <span>${item.name} x ${item.quantity}</span>
                        <span>₱${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                `).join('')}
            </div>
            <div class="flex justify-between items-center mb-4">
                <span class="text-lg font-semibold">Total:</span>
                <span class="text-xl font-bold text-pink-600">₱${total.toFixed(2)}</span>
            </div>
            <div class="flex justify-between items-center mb-4">
                <span class="text-lg font-semibold">Payment:</span>
                <span class="text-xl font-bold text-pink-600">₱${paymentAmount.toFixed(2)}</span>
            </div>
            <div class="flex justify-between items-center mb-6">
                <span class="text-lg font-semibold">Change:</span>
                <span class="text-xl font-bold text-pink-600">₱${change.toFixed(2)}</span>
            </div>
            <div class="text-center text-gray-600 mb-6">
                <p>Please confirm your order</p>
            </div>
            <div class="flex space-x-4">
                <button onclick="closePaymentPopup()" class="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition duration-300">
                    Cancel
                </button>
                <button onclick="generateReceipt(${total}, ${paymentAmount}, ${change})" class="flex-1 bg-pink-600 text-white py-2 px-4 rounded-lg hover:bg-pink-700 transition duration-300">
                    Confirm & Print Receipt
                </button>
            </div>
        </div>
    `;

    // Create and show popup
    const popup = $('<div>')
        .addClass('fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center')
        .html(popupContent)
        .appendTo('body');

    // Close cart
    closeCart();
}

function closePaymentPopup() {
    $('.fixed.inset-0').remove();
}

function generateReceipt(total, paymentAmount, change) {
    // Create receipt content
    const receiptContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Toothy Treats - Receipt</title>
            <script src="https://cdn.tailwindcss.com"></script>
            <style>
                @media print {
                    body {
                        padding: 20px;
                    }
                }
            </style>
        </head>
        <body class="bg-white p-8">
            <div class="max-w-md mx-auto">
                <div class="text-center mb-6">
                    <h3 class="text-2xl font-bold text-pink-600">Toothy Treats</h3>
                    <p class="text-gray-600">123 Candy Street, Sweet City</p>
                    <p class="text-gray-600">Phone: (123) 456-7890</p>
                    <p class="text-gray-600">Date: ${new Date().toLocaleDateString()}</p>
                    <p class="text-gray-600">Time: ${new Date().toLocaleTimeString()}</p>
                </div>
                <div class="mb-6">
                    ${cart.map(item => `
                        <div class="flex justify-between mb-2">
                            <span>${item.name} x ${item.quantity}</span>
                            <span>₱${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                    `).join('')}
                </div>
                <div class="flex justify-between items-center mb-4">
                    <span class="text-lg font-semibold">Total:</span>
                    <span class="text-xl font-bold text-pink-600">₱${total.toFixed(2)}</span>
                </div>
                <div class="flex justify-between items-center mb-4">
                    <span class="text-lg font-semibold">Payment:</span>
                    <span class="text-xl font-bold text-pink-600">₱${paymentAmount.toFixed(2)}</span>
                </div>
                <div class="flex justify-between items-center mb-6">
                    <span class="text-lg font-semibold">Change:</span>
                    <span class="text-xl font-bold text-pink-600">₱${change.toFixed(2)}</span>
                </div>
                <div class="text-center text-gray-600 mb-6">
                    <p>Thank you for your purchase!</p>
                    <p>Please come again!</p>
                </div>
            </div>
        </body>
        </html>
    `;

    // Open receipt in new tab
    const receiptWindow = window.open('', '_blank');
    receiptWindow.document.write(receiptContent);
    receiptWindow.document.close();

    // Reset everything
    resetCart();
}

function resetCart() {
    // Clear cart data
    cart = [];
    
    // Reset cart UI
    updateCart();
    updateCartCount();
    
    // Reset payment input
    $('#payment').val('');
    
    // Close any open modals
    closeCart();
    closePaymentPopup();
    
    // Reset cart modal state
    $('#cart-modal').removeClass('hidden').hide();
    $('button[onclick="openCart()"]').prop('disabled', false);
}

// Initialize mobile menu toggle
$(document).ready(function() {
    $('#mobile-menu-button').on('click', function() {
        $('#mobile-menu').toggleClass('hidden');
    });
}); 