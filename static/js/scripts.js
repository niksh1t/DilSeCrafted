// Products Data
// Product data with your specified items and additional products to fill the grid
const products = [
    {
        id: 2,
        title: "Handcrafted Heart Pendant & Earrings Set",
        category: "sets",
        price: 501,
        originalPrice: 601,
        rating: 5.7,
        reviews: 29,
        image: "/static/images/product/2.jpg",
        description: "Material: Resin\nFinish: Glossy\nColor: Mahogany Brown\nIncludes: 2 Pendant Necklace, 1 Pair of Earrings\nStyle: Minimalist, Handmade, Romantic"
    },
    {
        id: 3,
        title: "Pressed Floral Resin Pendant – Natural & Elegant",
        category: "necklaces",
        price: 301,
        originalPrice: 351,
        rating: 5.9,
        reviews: 37,
        image: "/static/images/product/3.jpg",
        description: "Material: Resin with Real Dried Flowers\nFinish: Matte with Glossy Resin Overlay\nColor: Cream Base with Yellow Floral Accents\nIncludes: 2 Pendant with Chain\nStyle: Boho, Earthy, Nature-Inspired"
    },
    {
        id: 4,
        title: "Crimson Heart Pendant with Silver Floral Texture",
        category: "necklaces",
        price: 301,
        originalPrice: 351,
        rating: 5.8,
        reviews: 23,
        image: "/static/images/product/4.jpg",
        description: "Material: Resin with Textured Metallic Detail\nFinish: Glossy Top with Textured Accent\nColor: Crimson Red with Silver-White Accent\nIncludes: 2 Pendant with Chain\nStyle: Artistic, Bold, Handmade Statement"
    },
    {
        id: 5,
        title: "Spiral Heart Pendant",
        category: "necklaces",
        price: 301,
        originalPrice: 351,
        rating: 5.7,
        reviews: 43,
        image: "/static/images/product/5.jpg",
        description: "Material: Hand-sculpted Clay/Resin\nFinish: Matte with Carved Detailing\nColor: Reddish Pink with Deep Spiral Motif\nIncludes: 2 Pendant with Chain\nStyle: Whimsical, Playful, Boho"
    },
    {
        id: 6,
        title: "KALESHI CHORI Pendant",
        category: "necklaces",
        price: 301,
        originalPrice: 351,
        rating: 5.5,
        reviews: 39,
        image: "/static/images/product/6.jpg",
        description: "Material: Lightweight Clay\nFinish: Glossy\nColor: Maroon square with pink and orange text\nIncludes: 2 Pendant with Chain\nStyle: Sassy, Bold, Desi\nFeatures: Hand-lettered text, Perfect for Gen Z"
    },
    {
        id: 7,
        title: "Textured Butterfly Pendant",
        category: "necklaces",
        price: 301,
        originalPrice: 351,
        rating: 5.8,
        reviews: 57,
        image: "/static/images/product/7.jpg",
        description: "Material: Hand-sculpted Clay/Resin\nFinish: Matte with Textured Wing Detailing\nColor: Charcoal Grey with Subtle Golden Accents\nIncludes: 2 Pendant with Gold-toned Chain\nStyle: Earthy, Boho, Nature-inspired\nVibe: Free-spirited, grounded and effortlessly stylish"
    },
    {
        id: 8,
        title: "Gothic Love Set",
        category: "sets",
        price: 501,
        originalPrice: 601,
        rating: 5.9,
        reviews: 48,
        image: "/static/images/product/8.jpg",
        description: "Material: Handcrafted Clay/Resin\nFinish: Glossy with Baroque Floral Detailing\nColor: Deep Charcoal Black\nIncludes: 2 Heart Pendant with Chain + Matching Heart Earrings\nStyle: Whimsical, Bold, Gothic-Boho\nVibe: For the soft-hearted rebels and vintage-souled romantics"
    },
    {
        id: 9,
        title: "Blooming Dusk – Handmade Floral Earrings",
        category: "earrings",
        price: 251,
        originalPrice: 301,
        rating: 5.6,
        reviews: 35,
        image: "/static/images/product/9.jpg",
        description: "Material: Polymer clay, stainless steel hooks\nFinish: Matte\nStyle: Floral, Boho\nFeatures: Each piece is uniquely handcrafted – no two are exactly alike!"
    },
    {
        id: 10,
        title: "Ocean Whispers – Handcrafted Shell Pendant",
        category: "necklaces",
        price: 301,
        originalPrice: 351,
        rating: 5.7,
        reviews: 52,
        image: "/static/images/product/10.jpg",
        description: "Material: Lightweight clay\nFinish: Soft shimmer\nColor: Dreamy blue and pearly white gradients\nStyle: Oceanic, Elegant\nFeatures: Seashell design, Perfect for everyday or special occasions"
    },
    {
        id: 11,
        title: "Royal Bloom – Midnight Heart Keychain",
        category: "keychains",
        price: 201,
        originalPrice: 251,
        rating: 5.5,
        reviews: 30,
        image: "/static/images/product/11.jpg",
        description: "Material: Polymer clay, metal alloy charm\nColor: Midnight blue with antique gold detail\nStyle: Elegant, Royal\nFeatures: Heart-shaped, Floral design\nPerfect for keys, bags, or gifting"
    },
    {
        id: 12,
        title: "Forest Flutter – Butterfly Keychain",
        category: "keychains",
        price: 201,
        originalPrice: 251,
        rating: 5.6,
        reviews: 33,
        image: "/static/images/product/12.jpg",
        description: "Material: Hand-sculpted polymer clay\nColor: Forest green with black detailing\nSize: Approx. 5.5 cm wide\nStyle: Nature-inspired, Whimsical\nFeatures: Butterfly design, Perfect for nature lovers"
    },
    {
        id: 13,
        title: "Sunflower Clay Pendant Necklace",
        category: "necklaces",
        price: 301,
        originalPrice: 351,
        rating: 5.8,
        reviews: 46,
        image: "/static/images/product/13.jpg",
        description: "Material: Hand-sculpted clay\nFinish: Textured\nColor: Bright yellow petals with brown center\nIncludes: 2 Pendant with silver-toned chain\nStyle: Cheerful, Nature-inspired\nFeatures: Hand-sculpted petals"
    },
    {
        id: 14, // Note: Duplicate ID 14. Consider updating one of them.
        title: "Silver Spiral Star Keychain",
        category: "keychains",
        price: 201,
        originalPrice: 251,
        rating: 4.7,
        reviews: 38,
        image: "/static/images/product/13.jpg", // Note: Duplicate image path.
        description: "Material: Handcrafted clay\nFinish: Metallic, Textured\nColor: Silver stars with black spiral centers\nStyle: Celestial, Whimsical\nFeatures: Two-star design, Chunky style\nPerfect for keys, bags, or as a statement accessory"
    },
    {
        id: 15, // Assuming this should be ID 15.
        title: "Midnight Shell Necklace",
        category: "necklaces",
        price: 300,
        originalPrice: 350,
        rating: 4.9,
        reviews: 47,
        image: "/static/images/product/14.jpg",
        description: "Material: Handcrafted with real seashell\nFinish: Rich metallic\nColor: Silver-black hues\nIncludes: 1 Pendant with delicate chain\nStyle: Beach-inspired, Edgy\nFeatures: Glimmering finish, Ocean-inspired design"
    },
    {
        id: 16, // Assuming this should be ID 16.
        title: "Seashell Whisper – Handmade Pendant Necklace",
        category: "necklaces",
        price: 300,
        originalPrice: 350,
        rating: 4.8,
        reviews: 52,
        image: "/static/images/product/15.jpg",
        description: "Material: Real seashell with vintage-inspired chain\nFinish: Natural\nStyle: Coastal, Elegant\nFeatures: Each shell is naturally unique\nPerfect for adding coastal charm to any outfit"
    }
];

const instagramUsername = 'rosegullaa'; // Using the username you provided


// Variables for pagination
let currentPage = 1;
const productsPerPage = 8;
let filteredProducts = [...products];
let viewMode = 'grid';

// DOM Elements
const productsGrid = document.getElementById('products-grid');
const pagination = document.getElementById('pagination');
const categoryFilter = document.getElementById('category-filter');
const priceFilter = document.getElementById('price-filter');
const sortFilter = document.getElementById('sort-filter');
const gridViewBtn = document.getElementById('grid-view');
const listViewBtn = document.getElementById('list-view');
const cartIcon = document.getElementById('cart-icon');
const cartOverlay = document.getElementById('cart-overlay');
const cart = document.getElementById('cart');
const closeCartBtn = document.getElementById('close-cart');
const cartItems = document.getElementById('cart-items');
const cartSubtotal = document.getElementById('cart-subtotal');
const cartTotal = document.getElementById('cart-total');
const cartCount = document.querySelector('.cart-count');
const checkoutButton = document.getElementById('checkout-btn');


// Cart functionality
let cartProducts = [];

// Currency formatter for Indian Rupee
const formatter = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2
});

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Initial display
    applyFilters();

    // Event listeners for filters
    categoryFilter.addEventListener('change', applyFilters);
    priceFilter.addEventListener('change', applyFilters);
    sortFilter.addEventListener('change', applyFilters);

    // View mode buttons
    gridViewBtn.addEventListener('click', function() {
        setViewMode('grid');
    });

    listViewBtn.addEventListener('click', function() {
        setViewMode('list');
    });

    // Cart toggling
    cartIcon.addEventListener('click', function(e) {
        e.preventDefault();
        openCart();
    });

    closeCartBtn.addEventListener('click', closeCart);
    cartOverlay.addEventListener('click', closeCart);

    // Add event delegation for product actions (only Add to Cart remains)
    productsGrid.addEventListener('click', function(e) {
        const button = e.target.closest('.product-action-btn');
        if (button) {
            const productCard = button.closest('.product-card');
            const productId = parseInt(productCard.dataset.id);

            if (button.classList.contains('add-to-cart')) {
                addToCart(productId);
            }
            // Quick View and Wishlist buttons are removed from HTML below
            // so no need for their handlers here anymore
        }
    });

    // Event listener for the Checkout button
    if (checkoutButton) {
        checkoutButton.addEventListener('click', function(event) { // Added event parameter
            event.preventDefault(); // Prevent default form submission if it's in a form
            shareCartViaInstagram();
        });
    } else {
        console.warn("Checkout button with ID 'checkout-button' not found in the DOM.");
    }
});


async function shareCartViaInstagram() { // Made function async
    if (cartProducts.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    // Construct the message
    let message = "My Order:\n\n";

    cartProducts.forEach(item => {
        message += `- ${item.quantity} x ${item.title} (ID: ${item.id})\n`;
    });

    // Calculate total (assuming cartTotal is updated correctly by updateCart)
    const total = cartProducts.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    message += `\nTotal: ${formatter.format(total)}`;

    try {
        await navigator.clipboard.writeText(message);
        console.log('Cart details copied to clipboard!');
        // Optional: Show a user-friendly message
        alert('Cart details copied to clipboard. You can now paste them into the Instagram chat.');
    } catch (err) {
        console.error('Failed to copy cart details to clipboard: ', err);
        // Optional: Inform the user if copying failed
        alert('Failed to copy cart details to clipboard. Please copy them manually.');
    }
    // --- END NEW: Copy message to clipboard ---


    // Create the Instagram profile URL (removed text parameter)
    const instagramUrl = `https://www.instagram.com/${instagramUsername}/`;

    window.open(instagramUrl, '_blank');
}


// Apply filters and sorting to products
function applyFilters() {
    // Filter by category
    const category = categoryFilter.value;
    filteredProducts = category === 'all' ?
        [...products] :
        products.filter(product => product.category === category);

    // Filter by price
    const priceRange = priceFilter.value;
    if (priceRange !== 'all') {
        const [min, max] = priceRange.split('-').map(val => val === '+' ? Infinity : parseFloat(val));
        filteredProducts = filteredProducts.filter(product =>
            product.price >= min && (max === Infinity || product.price <= max)
        );
    }

    // Apply sorting
    const sortOption = sortFilter.value;
    switch (sortOption) {
        case 'name-asc':
            filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
            break;
        case 'name-desc':
            filteredProducts.sort((a, b) => b.title.localeCompare(a.title));
            break;
        case 'price-asc':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            filteredProducts.sort((a, b) => b.price - b.price);
            break;
        case 'rating':
            filteredProducts.sort((a, b) => b.rating - a.rating);
            break;
    }

    // Reset to first page when filters change
    currentPage = 1;

    // Display filtered products
    displayProducts();
    updatePagination();
}

// Display products for current page
function displayProducts() {
    // Clear products grid
    productsGrid.innerHTML = '';

    // Calculate start and end index for current page
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = Math.min(startIndex + productsPerPage, filteredProducts.length);

    // Get current page products
    const currentProducts = filteredProducts.slice(startIndex, endIndex);

    // Add products to the grid
    currentProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.dataset.id = product.id;

        // Create stars HTML based on rating
        const fullStars = Math.floor(product.rating);
        const hasHalfStar = product.rating % 1 >= 0.5;
        let starsHTML = '';

        for (let i = 0; i < 5; i++) {
            if (i < fullStars) {
                starsHTML += '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>';
            } else if (i === fullStars && hasHalfStar) {
                starsHTML += '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12,2L9.91,8.26L3,9.24L7.5,14.14L6.32,21.02L12,17.77L12,2z" opacity="0.5"></path><path d="M12,2L9.91,8.26L3,9.24L7.5,14.14L6.32,21.02L12,17.77L12,2z"></path></svg>';
            } else {
                starsHTML += '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>';
            }
        }

        productCard.innerHTML = `
            <div class="product-img">
                <img src="${product.image}" alt="${product.title}">
                <div class="product-actions">
                    <button class="product-action-btn add-to-cart" title="Add to Cart">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                    </button>
                    </div>
            </div>
            <div class="product-info">
                <div class="product-category">${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</div>
                <h3 class="product-title">${product.title}</h3>
                <div class="product-price">
                    <span class="current-price">${formatter.format(product.price)}</span>
                    <span class="original-price">${formatter.format(product.originalPrice)}</span>
                </div>
                <div class="product-rating">
                    <div class="stars">${starsHTML}</div>
                    <span class="rating-count">(${product.reviews})</span>
                </div>
                <div class="product-description">${product.description.replace(/\\n/g, '<br>')}</div>
            </div>
        `;

        productsGrid.appendChild(productCard);
    });

    // Apply view mode
    setViewMode(viewMode);
}

// Update pagination based on filtered products
function updatePagination() {
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    pagination.innerHTML = '';

    // Previous button
    if (totalPages > 1) {
        const prevBtn = document.createElement('button');
        prevBtn.classList.add('pagination-btn');
        prevBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>';
        prevBtn.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                displayProducts();
                updatePagination();
            }
        });
        pagination.appendChild(prevBtn);
    }

    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.classList.add('pagination-btn');
        if (i === currentPage) {
            pageBtn.classList.add('active');
        }
        pageBtn.textContent = i;
        pageBtn.addEventListener('click', () => {
            currentPage = i;
            displayProducts();
            updatePagination();
        });
        pagination.appendChild(pageBtn);
    }

    // Next button
    if (totalPages > 1) {
        const nextBtn = document.createElement('button');
        nextBtn.classList.add('pagination-btn');
        nextBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>';
        nextBtn.addEventListener('click', () => {
            if (currentPage < totalPages) {
                currentPage++;
                displayProducts();
                updatePagination();
            }
        });
        pagination.appendChild(nextBtn);
    }
}

// Set view mode (grid or list)
function setViewMode(mode) {
    viewMode = mode;
    if (mode === 'grid') {
        productsGrid.classList.remove('list-view');
        gridViewBtn.classList.add('active');
    } else {
        productsGrid.classList.add('list-view');
        gridViewBtn.classList.remove('active');
    }
}

// Open cart
function openCart() {
    cartOverlay.style.display = 'block';
    cart.style.right = '0';
    document.body.style.overflow = 'hidden';
}

// Close cart
function closeCart() {
    cartOverlay.style.display = 'none';
    cart.style.right = '-400px';
    document.body.style.overflow = '';
}

// Add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    // Check if product is already in cart
    const existingProduct = cartProducts.find(item => item.id === productId);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cartProducts.push({
            ...product,
            quantity: 1
        });
    }

    updateCart();
    openCart();
}

// Remove product from cart
function removeFromCart(productId) {
    cartProducts = cartProducts.filter(item => item.id !== productId);
    updateCart();
}

// Update cart quantity
function updateCartQuantity(productId, quantity) {
    const cartItem = cartProducts.find(item => item.id === productId);
    if (cartItem) {
        cartItem.quantity = Math.max(1, quantity);
        updateCart();
    }
}

// Update cart display
function updateCart() {
    // Update cart items display
    cartItems.innerHTML = '';

    if (cartProducts.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
    } else {
        cartProducts.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');

            cartItem.innerHTML = `
                <div class="cart-item-img">
                    <img src="${item.image}" alt="${item.title}">
                </div>
                <div class="cart-item-info">
                    <h4 class="cart-item-title">${item.title}</h4>
                    <div class="cart-item-price">${formatter.format(item.price)}</div>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn minus" data-id="${item.id}">-</button>
                        <input type="text" class="quantity-input" value="${item.quantity}" readonly>
                        <button class="quantity-btn plus" data-id="${item.id}">+</button>
                    </div>
                    <button class="remove-item" data-id="${item.id}">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        Remove
                    </button>
                </div>
            `;

            cartItems.appendChild(cartItem);
        });

        // Add event listeners for cart item buttons
        document.querySelectorAll('.remove-item').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const productId = parseInt(e.currentTarget.dataset.id);
                removeFromCart(productId);
            });
        });

        document.querySelectorAll('.quantity-btn.minus').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const productId = parseInt(e.currentTarget.dataset.id);
                const item = cartProducts.find(item => item.id === productId);
                if (item) {
                    updateCartQuantity(productId, item.quantity - 1);
                }
            });
        });

        document.querySelectorAll('.quantity-btn.plus').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const productId = parseInt(e.currentTarget.dataset.id);
                const item = cartProducts.find(item => item.id === productId);
                if (item) {
                    updateCartQuantity(productId, item.quantity + 1);
                }
            });
        });
    }

    // Calculate totals
    const subtotal = cartProducts.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartSubtotal.textContent = formatter.format(subtotal);
    cartTotal.textContent = formatter.format(subtotal);

    // Update cart count
    const totalItems = cartProducts.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
}

