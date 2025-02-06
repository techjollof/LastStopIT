// Testimonials carousel functionality
function initializeTestimonialsCarousel() {
  document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.testimonial-items-wrapper');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    const testimonialItems = document.querySelectorAll('.testimonial-item');
    let currentIndex = 0;
    let autoSlideInterval;

    // Function to show the current testimonial
    const showTestimonial = (index) => {
      const offset = -index * 100;
      wrapper.style.transform = `translateX(${offset}%)`;
    };

    // Function to move to the next testimonial
    const nextTestimonial = () => {
      currentIndex = (currentIndex < testimonialItems.length - 1) ? currentIndex + 1 : 0;
      showTestimonial(currentIndex);
    };

    // Function to move to the previous testimonial
    const prevTestimonial = () => {
      currentIndex = (currentIndex > 0) ? currentIndex - 1 : testimonialItems.length - 1;
      showTestimonial(currentIndex);
    };

    // Start automatic sliding
    const startAutoSlide = () => {
      autoSlideInterval = setInterval(nextTestimonial, 5000); // Change slide every 5 seconds
    };

    // Stop automatic sliding
    const stopAutoSlide = () => {
      clearInterval(autoSlideInterval);
    };

    // Event listeners for manual navigation
    prevBtn.addEventListener('click', () => {
      prevTestimonial();
      stopAutoSlide(); // Stop auto-slide when manually navigating
      startAutoSlide(); // Restart auto-slide after a delay
    });

    nextBtn.addEventListener('click', () => {
      nextTestimonial();
      stopAutoSlide(); // Stop auto-slide when manually navigating
      startAutoSlide(); // Restart auto-slide after a delay
    });

    // Pause auto-slide when hovering over the carousel
    wrapper.addEventListener('mouseenter', stopAutoSlide);
    wrapper.addEventListener('mouseleave', startAutoSlide);

    // Initialize auto-slide
    startAutoSlide();
  });
}

// Loading header content
// function loadHeader() {
//   fetch('./modules/header.html')
//     .then((response) => response.text())
//     .then((data) => {
//       document.getElementById('header').innerHTML = data;

//       // Initialize the header fade effect after the header is loaded
//       addHeaderFadeEffect('header', 50, 200, 0.5);
//     })
//     .catch((error) => console.error('Error loading the header:', error));
// }

// Function to load the header
// function loadHeader() {
//   fetch('/modules/header.html')
//     .then((response) => response.text())
//     .then((data) => {
//       document.getElementById('header').innerHTML = data;

//       // Include the config.js file after the header is loaded
//       const script = document.createElement('script');
//       script.src = '/scrips/config.js';
//       document.body.appendChild(script);
//     })
//     .catch((error) => console.error('Error loading the header:', error));
// }



// Function to load the header
// function loadHeader() {
//   fetch('/modules/header.html')
//     .then((response) => response.text())
//     .then((data) => {
//       document.body.insertAdjacentHTML("afterbegin", data); // Insert header at the top

//       // Include the config.js file after the header is loaded
//       const script = document.createElement('script');
//       script.src = '/scripts/config.js'; // Fix typo
//       document.body.appendChild(script);
//     })
//     .catch((error) => console.error('Error loading the header:', error));
// }


// Function to load the header
function loadHeader() {
  fetch('/modules/header.html')
    .then((response) => response.text())
    .then((data) => {
      document.body.insertAdjacentHTML("afterbegin", data); // Insert header at the top

      // Once header is loaded, manually call generateNavLinks()
      const script = document.createElement('script');
      script.src = '/scripts/config.js';
      script.onload = () => generateNavLinks(); // Ensure the function runs after loading
      document.body.appendChild(script);
    })
    .catch((error) => console.error('Error loading the header:', error));
}


// Setting the active class for the current page
function loadServices() {
  fetch("/modules/servicecategory.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("services-container").innerHTML = data;
    })
    .catch((error) =>
      console.error("Error loading the services section:", error)
    );
}

// Header fade effect functionality
function addHeaderFadeEffect(headerSelector, fadeStart = 50, fadeEnd = 200, minOpacity = 0.5) {
  const header = document.querySelector(headerSelector);

  // Check if the header element exists
  if (!header) {
    console.error(`Header element with selector "${headerSelector}" not found.`);
    return;
  }

  // Function to handle the fade effect
  function handleScroll() {
    const scrollPosition = window.scrollY; // Get the current scroll position

    // Calculate the opacity based on scroll position
    let opacity = 1;
    if (scrollPosition > fadeStart) {
      opacity = 1 - (scrollPosition - fadeStart) / (fadeEnd - fadeStart);
      opacity = Math.max(opacity, minOpacity); // Ensure the header doesn't disappear completely
    }

    // Apply the opacity to the header
    header.style.opacity = opacity;
  }

  // Add a scroll event listener to trigger the fade effect
  window.addEventListener('scroll', handleScroll);

}


const paths = {
  home: "/index.html",
  services: "/services.html",
  about: "/about.html",
  blog: "/blog/blog.html",
  contact: "/contact.html",
};

// Function to generate navigation links
function generateNavLinks() {
  const nav = document.querySelector("nav");
  if (nav) {
    nav.innerHTML = `
      <ul>
        <li><a href="${paths.home}">Home</a></li>
        <li><a href="${paths.services}">Services</a></li>
        <li><a href="${paths.about}">About Us</a></li>
        <li><a href="${paths.blog}">Blog</a></li>
        <li><a href="${paths.contact}">Contact</a></li>
      </ul>
    `;
  } else {
    console.error("Navigation element not found.");
  }
}

// Function to load footer from footer.html
function generateFooter() {
  const footer = document.querySelector("footer");
  if (footer) {
    fetch("/modules/footer.html")
      .then((response) => response.text())
      .then((data) => {
        footer.innerHTML = data;
      })
      .catch((error) => {
        console.error("Error loading footer:", error);
      });
  } else {
    console.error("Footer element not found.");
  }
}





// Search functionality
function setupSearch() {
  const searchInput = document.getElementById('search-input');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
      const searchTerm = e.target.value.toLowerCase();
      const posts = document.querySelectorAll('.blog-post');

      posts.forEach(post => {
          const title = post.querySelector('.post-title').textContent.toLowerCase();
          const excerpt = post.querySelector('.post-excerpt').textContent.toLowerCase();
          if (title.includes(searchTerm) || excerpt.includes(searchTerm)) {
              post.style.display = 'block';
          } else {
              post.style.display = 'none';
          }
      });
  });
}

// Pagination functionality
function setupPagination() {
  const paginationLinks = document.querySelectorAll('.pagination a');
  if (!paginationLinks.length) return;

  paginationLinks.forEach(link => {
      link.addEventListener('click', (e) => {
          e.preventDefault();
          paginationLinks.forEach(link => link.classList.remove('active'));
          e.target.classList.add('active');
          // Add logic to load the corresponding page content
          console.log(`Loading page: ${e.target.textContent}`);
      });
  });
}

// Highlight featured posts
function highlightFeaturedPosts() {
  const featuredPosts = document.querySelectorAll('.blog-post.featured');
  if (!featuredPosts.length) return;

  featuredPosts.forEach(post => {
      post.style.border = '2px solid #2a7bd6';
  });
}




// Initialize everything when the window loads
window.onload = function () {
  loadHeader();
  initializeTestimonialsCarousel();
  loadServices();

  
// Initialize navigation and footer
  generateNavLinks();
  generateFooter();
  
  // Initialize the header opacity on page load
  handleScroll();

  setupSearch();
    setupPagination();
    highlightFeaturedPosts();
};