// Mobile menu functionality
document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
  const menuItems = document.querySelector(".menu-items");

  if (mobileMenuToggle && menuItems) {
    mobileMenuToggle.addEventListener("click", function () {
      menuItems.classList.toggle("active");
      // Update aria-expanded state
      const isExpanded = menuItems.classList.contains("active");
      mobileMenuToggle.setAttribute("aria-expanded", isExpanded);
    });
  }

  // Initialize TypeWriter
  const txtElement = document.querySelector(".dynamic-text");
  if (txtElement) {
    const words = JSON.parse(txtElement.getAttribute("data-words"));
    const wait = txtElement.getAttribute("data-wait");
    new TypeWriter(txtElement, words, wait);
  }

  // Initialize skill bars
  const skillItems = document.querySelectorAll(".skill-item");
  skillItems.forEach((item) => {
    const progress = item.getAttribute("data-progress");
    const progressBar = item.querySelector(".skill-progress");
    if (progressBar) {
      progressBar.style.width = `${progress}%`;
    }
  });

  // Active menu link
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".menu-link");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollY >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").slice(1) === current) {
        link.classList.add("active");
      }
    });
  });
});

// Profile toggle functionality
function toggleProfile() {
  const icon = document.getElementById("profileToggle");
  const section = document.getElementById("profileCard");

  if (section.classList.contains("hidden")) {
    section.classList.remove("hidden");
    icon.classList.remove("hidden");
  } else {
    section.classList.add("hidden");
    icon.classList.add("hidden");
  }
}

// Typing Animation
class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    const current = this.wordIndex % this.words.length;
    const fullTxt = this.words[current];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    let typeSpeed = 200;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      typeSpeed = this.wait;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.wordIndex++;
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}
