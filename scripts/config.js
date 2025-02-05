// // config.js

// config.js

// const paths = {
//   home: "/index.html",
//   services: "/services.html",
//   about: "/about.html",
//   blog: "/blog/blog.html",
//   contact: "/contact.html",
// };

// // Function to generate navigation links
// function generateNavLinks() {
//   const nav = document.querySelector("nav");
//   if (nav) {
//     nav.innerHTML = `
//       <ul>
//         <li><a href="${paths.home}">Home</a></li>
//         <li><a href="${paths.services}">Services</a></li>
//         <li><a href="${paths.about}">About Us</a></li>
//         <li><a href="${paths.blog}">Blog</a></li>
//         <li><a href="${paths.contact}">Contact</a></li>
//       </ul>
//     `;
//   } else {
//     console.error("Navigation element not found.");
//   }
// }

// // Function to load footer from footer.html
// function generateFooter() {
//   const footer = document.querySelector("footer");
//   if (footer) {
//     fetch("footer.html")
//       .then((response) => response.text())
//       .then((data) => {
//         footer.innerHTML = data;
//       })
//       .catch((error) => {
//         console.error("Error loading footer:", error);
//       });
//   } else {
//     console.error("Footer element not found.");
//   }
// }

// // Initialize navigation and footer
// document.addEventListener("DOMContentLoaded", () => {
//   generateNavLinks();
//   generateFooter();
// });

// const paths = {
//     home: "/index.html",
//     services: "/services.html",
//     about: "/about.html",
//     blog: "/blog/blog.html",
//     contact: "/contact.html",
//   };
  
//   // Function to generate navigation links
//   function generateNavLinks() {
//     const nav = document.querySelector("nav"); // Select the <nav> element directly
//     if (nav) {
//       nav.innerHTML = `
//         <ul>
//           <li><a href="${paths.home}">Home</a></li>
//           <li><a href="${paths.services}">Services</a></li>
//           <li><a href="${paths.about}">About Us</a></li>
//           <li><a href="${paths.blog}">Blog</a></li>
//           <li><a href="${paths.contact}">Contact</a></li>
//         </ul>
//       `;
//     } else {
//       console.error("Navigation element not found.");
//     }
//   }
  
// document.addEventListener("DOMContentLoaded", generateNavLinks);


// function loadFooter() {
//   fetch('footer.html')
//     .then(response => response.text())
//     .then(html => {
//       const footerContainer = document.createElement("div");
//       footerContainer.innerHTML = html;
//       document.body.appendChild(footerContainer);
//     })
//     .catch(error => console.error('Error loading footer:', error));
// }

// // Load footer when DOM is ready
// document.addEventListener("DOMContentLoaded", loadFooter);
