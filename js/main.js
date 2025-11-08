// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add scroll animation for elements
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Mobile menu toggle
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const mobileMenu = document.querySelector('.mobile-menu');

if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
} 
document.querySelector(".project1").addEventListener("click", () => {
  window.open(
    "https://github.com/DEVKUMARSAINI545/Cloud-Native-E-Commerce-Platform-Onsko-ECommerce-product-",
    "_blank"
  );
});
document.querySelector(".project2").addEventListener("click", () => {
  window.open(
    "https://github.com/DEVKUMARSAINI545/AWS_Automated_Cost_Reporting_Alert_With_Dashboard",
    "_blank"
  );
});

 
  (function() {
    emailjs.init("acVoRQgZ4NyNZmpDl"); // replace with your EmailJS public key
  })();

  document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.send("service_0sxkxb9", "template_yuca24q", {
      from_name: document.querySelector('input[placeholder="Your Name"]').value,
      from_email: document.querySelector('input[placeholder="Your Email"]').value,
      message: document.querySelector('textarea[placeholder="Your Message"]').value
    })
    .then(function(response) {
      alert("✅ Message sent successfully!");
    }, function(error) {
      alert("❌ Failed to send message. Try again later!");
      console.error(error);
    });
  });
 
