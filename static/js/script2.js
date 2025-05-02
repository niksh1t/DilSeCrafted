 const products = [
        {
            id: 6,
            title: "Textured Butterfly Pendant",
            category: "necklaces",
            price: 300,
            originalPrice: 350,
            rating: 4.8,
            reviews: 56,
            image: "/static/images/product/6.jpg",
            description: "Material: Hand-sculpted Clay/Resin\nFinish: Matte with Textured Wing Detailing\nColor: Charcoal Grey with Subtle Golden Accents\nIncludes: 1 Pendant with Gold-toned Chain\nStyle: Earthy, Boho, Nature-inspired\nVibe: Free-spirited, grounded and effortlessly stylish"
        },
        {
            id: 7,
            title: "Gothic Love Set",
            category: "sets",
            price: 500,
            originalPrice: 600,
            rating: 4.9,
            reviews: 47,
            image: "/static/images/product/7.jpg",
            description: "Material: Handcrafted Clay/Resin\nFinish: Glossy with Baroque Floral Detailing\nColor: Deep Charcoal Black\nIncludes: 1 Heart Pendant with Chain + Matching Heart Earrings\nStyle: Whimsical, Bold, Gothic-Boho\nVibe: For the soft-hearted rebels and vintage-souled romantics"
        },
        {
            id: 8,
            title: "Blooming Dusk – Handmade Floral Earrings",
            category: "earrings",
            price: 250,
            originalPrice: 300,
            rating: 4.6,
            reviews: 34,
            image: "/static/images/product/8.jpg",
            description: "Material: Polymer clay, stainless steel hooks\nFinish: Matte\nStyle: Floral, Boho\nFeatures: Each piece is uniquely handcrafted – no two are exactly alike!"
        },
        {
            id: 9,
            title: "Ocean Whispers – Handcrafted Shell Pendant",
            category: "necklaces",
            price: 300,
            originalPrice: 350,
            rating: 4.7,
            reviews: 51,
            image: "/static/images/product/9.jpg",
            description: "Material: Lightweight clay\nFinish: Soft shimmer\nColor: Dreamy blue and pearly white gradients\nStyle: Oceanic, Elegant\nFeatures: Seashell design, Perfect for everyday or special occasions"
        },
        {
            id: 10,
            title: "Royal Bloom – Midnight Heart Keychain",
            category: "keychains",
            price: 200,
            originalPrice: 250,
            rating: 4.5,
            reviews: 29,
            image: "/static/images/product/10.jpg",
            description: "Material: Polymer clay, metal alloy charm\nColor: Midnight blue with antique gold detail\nStyle: Elegant, Royal\nFeatures: Heart-shaped, Floral design\nPerfect for keys, bags, or gifting"
        }
    ];

    // --- Function to Render Products ---
    function renderProducts() {
        const productGrid = document.getElementById('product-grid');

        // Clear existing content (if any)
        if (productGrid) {
            productGrid.innerHTML = ''; // Clear grid before adding new items

            // Check if there are products to display
            if (products.length === 0) {
                productGrid.innerHTML = '<p>No products found.</p>';
                return;
            }

            // Loop through products and create HTML elements
            products.forEach(product => {
                // Create the main container div for the product
                const productCard = document.createElement('div');
                productCard.classList.add('product-card-simple'); // Add a class for styling

                // Create the image element
                const productImage = document.createElement('img');
                productImage.src = product.image;
                productImage.alt = product.title; // Important for accessibility
                productImage.classList.add('product-image-simple'); // Add a class for styling

                // Create the name element (using H3 for semantic structure)
                const productName = document.createElement('h3');
                productName.textContent = product.title;
                productName.classList.add('product-name-simple'); // Add a class for styling

                // Append image and name to the product card
                productCard.appendChild(productImage);
                productCard.appendChild(productName);

                // Append the product card to the grid container
                productGrid.appendChild(productCard);
            });

        } else {
            console.error("Element with ID 'product-grid' not found.");
        }
    }

    // --- Initial Setup ---
    renderProducts(); // Call the function to display products when the page loads

    // Add any other initializations or event listeners needed for your page

