document.addEventListener("DOMContentLoaded", function () {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const mobileMenu = document.querySelector(".mobile-menu");
  const closeMobileMenu = document.querySelectorAll(".mobile-menu a");

  mobileMenuBtn.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
  });

  closeMobileMenu.forEach((item) => {
    item.addEventListener("click", function () {
      mobileMenu.classList.remove("active");
    });
  });

  // Header Scroll Effect
  window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("scrolled", window.scrollY > 50);
  });

  // FAQ Accordion
  const faqQuestions = document.querySelectorAll(".faq-question");
  faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {
      const item = question.parentElement;
      item.classList.toggle("active");

      // Close other open items
      faqQuestions.forEach((q) => {
        if (q !== question) {
          q.parentElement.classList.remove("active");
        }
      });
    });
  });

  // Testimonial Slider
  const testimonials = document.querySelectorAll(".testimonial");
  const dots = document.querySelectorAll(".dot");
  let currentTestimonial = 0;

  function showTestimonial(index) {
    testimonials.forEach((testimonial) =>
      testimonial.classList.remove("active")
    );
    dots.forEach((dot) => dot.classList.remove("active"));

    testimonials[index].classList.add("active");
    dots[index].classList.add("active");
    currentTestimonial = index;
  }

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => showTestimonial(index));
  });

  // Auto slide testimonials
  setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
  }, 5000);

  // Product Data with Indian prices and realistic candle images
  const products = [
    {
      id: 1,
      name: "Lavender Dreams Scented Candle",
      price: 599,
      originalPrice: 799,
      image:
        "https://images.unsplash.com/photo-1594035910387-fea47794261f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
      description: "Calming lavender essential oil blend, 40hr burn time",
      rating: 5,
      category: "scented",
      badge: "Bestseller",
    },
    {
      id: 2,
      name: "Vanilla Bean Luxury Candle",
      price: 899,
      originalPrice: 1099,
      image:
        "https://images.unsplash.com/photo-1585771724684-38269d6639fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
      description: "Rich vanilla with real vanilla bean specks, 50hr burn",
      rating: 4,
      category: "luxury",
      badge: "Premium",
    },
    {
      id: 3,
      name: "Citrus Sunrise Jar Candle",
      price: 499,
      originalPrice: 699,
      image:
        "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description: "Energizing citrus blend in reusable glass jar",
      rating: 4,
      category: "scented",
    },
    {
      id: 4,
      name: "Himalayan Salt Candle Holder",
      price: 1299,
      originalPrice: 1599,
      image:
        "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
      description: "Natural salt candle holder with tea light, set of 3",
      rating: 5,
      category: "decorative",
      badge: "New",
    },
    {
      id: 5,
      name: "Sandalwood Meditation Candle",
      price: 749,
      originalPrice: 899,
      image:
        "https://images.unsplash.com/photo-1585771724684-38269d6639fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
      description: "Earthy sandalwood fragrance for relaxation",
      rating: 5,
      category: "scented",
    },
    {
      id: 6,
      name: "Floral Decorative Pillar Candle",
      price: 649,
      originalPrice: 849,
      image:
        "https://images.unsplash.com/photo-1585771724684-38269d6639fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
      description: "Hand-carved floral design, unscented, 35hr burn",
      rating: 4,
      category: "decorative",
    },
    {
      id: 7,
      name: "Festive Diwali Candle Set",
      price: 999,
      originalPrice: 1299,
      image:
        "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
      description: "Set of 6 decorative candles for Diwali celebrations",
      rating: 5,
      category: "themed",
      badge: "Limited",
    },
    {
      id: 8,
      name: "Rose Gold Luxury Candle",
      price: 1499,
      originalPrice: 1799,
      image:
        "https://images.unsplash.com/photo-1585771724684-38269d6639fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
      description: "Premium rose fragrance in rose gold vessel",
      rating: 5,
      category: "luxury",
      badge: "Luxury",
    },
  ];

  // Display Products
  const productGrid = document.getElementById("product-grid");

  function displayProducts(productsToDisplay) {
    productGrid.innerHTML = "";

    productsToDisplay.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.className = "product-card";
      productCard.setAttribute("data-category", product.category);

      let stars = "";
      for (let i = 0; i < 5; i++) {
        if (i < product.rating) {
          stars += '<i class="fas fa-star"></i>';
        } else {
          stars += '<i class="far fa-star"></i>';
        }
      }

      let badge = "";
      if (product.badge) {
        badge = `<div class="product-badge">${product.badge}</div>`;
      }

      let originalPrice = "";
      if (product.originalPrice) {
        originalPrice = `<span>₹${product.originalPrice}</span>`;
      }

      productCard.innerHTML = `
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                    ${badge}
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <div class="product-price">₹${product.price} ${originalPrice}</div>
                    <div class="product-rating">${stars}</div>
                    <p class="product-description">${product.description}</p>
                    <button class="add-to-cart" data-id="${product.id}">
                        <i class="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                </div>
            `;

      productGrid.appendChild(productCard);
    });

    // Add event listeners to all "Add to Cart" buttons
    document.querySelectorAll(".add-to-cart").forEach((button) => {
      button.addEventListener("click", addToCart);
    });
  }

  // Initial display of all products
  displayProducts(products);

  // Product Filtering
  const filterButtons = document.querySelectorAll(".filter-btn");

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      // Add active class to clicked button
      this.classList.add("active");

      const filter = this.getAttribute("data-filter");

      if (filter === "all") {
        displayProducts(products);
      } else {
        const filteredProducts = products.filter(
          (product) => product.category === filter
        );
        displayProducts(filteredProducts);
      }
    });
  });

  // Search Functionality
  const searchInput = document.getElementById("search-input");
  const searchBtn = document.getElementById("search-btn");

  function searchProducts() {
    const searchTerm = searchInput.value.toLowerCase();

    if (searchTerm.trim() === "") {
      const activeFilter = document.querySelector(".filter-btn.active");
      if (activeFilter && activeFilter.getAttribute("data-filter") !== "all") {
        const filter = activeFilter.getAttribute("data-filter");
        const filteredProducts = products.filter(
          (product) => product.category === filter
        );
        displayProducts(filteredProducts);
      } else {
        displayProducts(products);
      }
      return;
    }

    const filteredProducts = products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm)
    );

    displayProducts(filteredProducts);
  }

  searchBtn.addEventListener("click", searchProducts);
  searchInput.addEventListener("keyup", function (e) {
    if (e.key === "Enter") {
      searchProducts();
    }
  });

  // Cart Functionality
  const cartIcon = document.getElementById("cart-icon");
  const cartModal = document.getElementById("cart-modal");
  const closeCart = document.querySelector(".close-cart");
  const continueShoppingBtn = document.querySelector(".continue-shopping");
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Toggle Cart Modal
  cartIcon.addEventListener("click", function (e) {
    e.preventDefault();
    cartModal.classList.add("active");
    updateCartDisplay();
  });

  closeCart.addEventListener("click", function () {
    cartModal.classList.remove("active");
  });

  continueShoppingBtn.addEventListener("click", function () {
    cartModal.classList.remove("active");
  });

  // Close cart when clicking outside
  window.addEventListener("click", function (e) {
    if (e.target === cartModal) {
      cartModal.classList.remove("active");
    }
  });

  // Add to Cart
  function addToCart(e) {
    const productId = parseInt(e.target.getAttribute("data-id"));
    const product = products.find((p) => p.id === productId);

    const existingItem = cart.find((item) => item.id === productId);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1,
      });
    }

    updateCartCount();
    updateCartDisplay();
    saveCartToLocalStorage();

    // Show added animation
    const button = e.target;
    button.innerHTML = '<i class="fas fa-check"></i> Added!';
    button.style.backgroundColor = "#4CAF50";

    setTimeout(() => {
      button.innerHTML = '<i class="fas fa-shopping-cart"></i> Add to Cart';
      button.style.backgroundColor = "";
    }, 1000);
  }

  // Update Cart Count
  function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById("cart-count").textContent = count;
  }

  // Update Cart Display
  function updateCartDisplay() {
    const cartBody = document.getElementById("cart-body");
    const cartTotal = document.getElementById("cart-total");
    const whatsappCheckout = document.getElementById("whatsapp-checkout");

    if (cart.length === 0) {
      cartBody.innerHTML =
        '<p class="empty-cart">Your cart is empty. Light up your life with our candles!</p>';
      cartTotal.textContent = "₹0";
      whatsappCheckout.style.display = "none";
      return;
    }

    whatsappCheckout.style.display = "flex";

    let cartHTML = "";
    let total = 0;
    let whatsappMessage =
      "Hi Couture Candles, I want to purchase the following items from my cart:%0A%0A";

    cart.forEach((item) => {
      total += item.price * item.quantity;

      whatsappMessage += `- ${item.name} (Qty: ${item.quantity}) - ₹${
        item.price * item.quantity
      }%0A`;

      cartHTML += `
                <div class="cart-item" data-id="${item.id}">
                    <div class="cart-item-image">
                        <img src="${item.image}" alt="${item.name}">
                    </div>
                    <div class="cart-item-info">
                        <div class="cart-item-title">${item.name}</div>
                        <div class="cart-item-price">₹${item.price} × ${
        item.quantity
      } = ₹${item.price * item.quantity}</div>
                        <div class="cart-item-quantity">
                            <button class="quantity-btn minus">-</button>
                            <span class="quantity-value">${item.quantity}</span>
                            <button class="quantity-btn plus">+</button>
                        </div>
                        <div class="remove-item">Remove</div>
                    </div>
                </div>
            `;
    });

    whatsappMessage += `%0ATotal: ₹${total}%0A%0APlease confirm availability and provide payment details.`;
    whatsappCheckout.href = `https://wa.me/918595618629?text=${whatsappMessage}`;

    cartBody.innerHTML = cartHTML;
    cartTotal.textContent = `₹${total}`;

    // Add event listeners to quantity buttons
    document.querySelectorAll(".quantity-btn.minus").forEach((button) => {
      button.addEventListener("click", decreaseQuantity);
    });

    document.querySelectorAll(".quantity-btn.plus").forEach((button) => {
      button.addEventListener("click", increaseQuantity);
    });

    document.querySelectorAll(".remove-item").forEach((button) => {
      button.addEventListener("click", removeItem);
    });
  }

  // Quantity Functions
  function decreaseQuantity(e) {
    const itemId = parseInt(
      e.target.closest(".cart-item").getAttribute("data-id")
    );
    const item = cart.find((item) => item.id === itemId);

    if (item.quantity > 1) {
      item.quantity -= 1;
    } else {
      cart = cart.filter((item) => item.id !== itemId);
    }

    updateCartCount();
    updateCartDisplay();
    saveCartToLocalStorage();
  }

  function increaseQuantity(e) {
    const itemId = parseInt(
      e.target.closest(".cart-item").getAttribute("data-id")
    );
    const item = cart.find((item) => item.id === itemId);

    item.quantity += 1;

    updateCartCount();
    updateCartDisplay();
    saveCartToLocalStorage();
  }

  function removeItem(e) {
    const itemId = parseInt(
      e.target.closest(".cart-item").getAttribute("data-id")
    );
    cart = cart.filter((item) => item.id !== itemId);

    updateCartCount();
    updateCartDisplay();
    saveCartToLocalStorage();
  }

  // Save Cart to Local Storage
  function saveCartToLocalStorage() {
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  // Initialize cart count on page load
  updateCartCount();

  // Form Submissions
  const contactForm = document.getElementById("contactForm");
  const newsletterForm = document.getElementById("newsletterForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thank you for your message! We will get back to you soon.");
      this.reset();
    });
  }

  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thank you for subscribing to our newsletter!");
      this.reset();
    });
  }

  // Smooth Scrolling for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });

        // Close mobile menu if open
        mobileMenu.classList.remove("active");
      }
    });
  });

  // Show candle animation on larger screens
  function checkScreenSize() {
    if (window.innerWidth >= 992) {
      document.querySelector(".candle-animation").style.display = "block";
    } else {
      document.querySelector(".candle-animation").style.display = "none";
    }
  }

  window.addEventListener("resize", checkScreenSize);
  checkScreenSize();
});
