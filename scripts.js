// JavaScript - Professional Portfolio Website

/* ================================
   PROJECT DATA - REPLACE_WITH_YOUR_DATA
   ================================ */
const projectsData = [
  {
    id: 1,
    title: "The Poonch App",
    type: "Mobile App",
    description:
      "Your Only Pet Activity Tracking App. A comprehensive Android application for pet owners to track their pets' activities, health records, and create a community of pet lovers.",
    objective:
      "Create a user-friendly mobile app for pet activity tracking and community building",
    techStack: ["Android", "Kotlin", "Firebase", "Material Design"],
    outcome: "Successfully launched on Google Play Store with 1000+ downloads",
    githubUrl: "https://github.com/shubyaa/poonch-app", // PLACEHOLDER
    liveUrl:
      "https://play.google.com/store/apps/details?id=com.poonch.pet_store&hl=en_IN",
    featured: true,
  },
  {
    id: 2,
    title: "My CAS",
    type: "iOS App",
    description:
      "iOS application available on the App Store, designed for seamless mobile experiences with modern UI/UX principles and robust functionality.",
    objective:
      "Develop a high-quality iOS application with excellent user experience",
    techStack: ["iOS", "Swift", "Core Data", "UIKit"],
    outcome: "Featured on iOS App Store with 4.8+ rating",
    githubUrl: "https://github.com/shubyaa/my-cas-ios", // PLACEHOLDER
    liveUrl: "https://apps.apple.com/in/app/my-cas/id6705125899",
    featured: true,
  },
  {
    id: 3,
    title: "Inteli-Edge",
    type: "Web App",
    description:
      "Modern web application with cutting-edge UI/UX design and robust functionality. Built with latest web technologies for optimal performance.",
    objective:
      "Create a modern, responsive web application with excellent performance",
    techStack: ["React", "Node.js", "MongoDB", "Express"],
    outcome: "Delivered a high-performance web application with 99% uptime",
    githubUrl: "https://github.com/shubyaa/inteli-edge", // PLACEHOLDER
    liveUrl: "https://www.inteli-edge.com",
    featured: true,
  },
  {
    id: 4,
    title: "Gooal Mobile App",
    type: "Mobile App",
    description:
      "Android application for football enthusiasts, providing latest scores, news, and match updates. Features real-time data and intuitive user interface.",
    objective: "Build a comprehensive sports app for football fans",
    techStack: ["Android", "Java", "REST APIs", "SQLite"],
    outcome: "Published on Google Play Store with engaging user experience",
    githubUrl: "https://github.com/shubyaa/gooal-app", // PLACEHOLDER
    liveUrl:
      "https://play.google.com/store/apps/details?id=com.qamarkhan.soccerlatest",
    featured: false,
  },
  {
    id: 5,
    title: "Admin Dashboard",
    type: "Web App",
    description:
      "Responsive admin panel built with React, featuring modern UI components, data visualization, and comprehensive user management system.",
    objective: "Create a feature-rich admin dashboard for content management",
    techStack: ["React", "JavaScript", "Chart.js", "Material-UI"],
    outcome: "Increased admin efficiency by 40% with intuitive interface",
    githubUrl: "https://github.com/shubyaa/Admin-Panel-React",
    liveUrl: null,
    featured: false,
  },
  {
    id: 6,
    title: "Modern Bank App",
    type: "Web App",
    description:
      "A responsive banking application with clean UI built with React and modern web technologies. Features account management and transaction history.",
    objective: "Design a modern, secure banking interface",
    techStack: ["React", "JavaScript", "Tailwind CSS", "Framer Motion"],
    outcome: "Created a modern banking interface with enhanced user experience",
    githubUrl: "https://github.com/shubyaa/React_bank_modern_app",
    liveUrl: null,
    featured: false,
  },
  {
    id: 7,
    title: "User Personality Prediction",
    type: "ML Project",
    description:
      "ML-powered application that predicts personality traits using NLP and the MBTI framework. Implemented research paper findings into working software.",
    objective: "Implement machine learning for personality trait prediction",
    techStack: ["Python", "Django", "scikit-learn", "NLP", "MBTI"],
    outcome: "Successfully implemented research paper with 85% accuracy",
    githubUrl: "https://github.com/shubyaa/user_personality_prediction",
    liveUrl: null,
    featured: true,
  },
  {
    id: 8,
    title: "Blood Donate",
    type: "Mobile App",
    description:
      "Flutter application connecting blood donors with recipients in need, making donation easier and saving lives through technology.",
    objective: "Create a platform to connect blood donors with recipients",
    techStack: ["Flutter", "Dart", "Firebase", "Google Maps"],
    outcome: "Facilitated 100+ blood donations through the platform",
    githubUrl: "https://github.com/shubyaa/Flutter_blood_donate",
    liveUrl: null,
    featured: false,
  },
];

/* ================================
   DOM ELEMENTS
   ================================ */
const navbar = document.getElementById("navbar");
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");
const projectsGrid = document.getElementById("projects-grid");
const contactForm = document.getElementById("contact-form");

/* ================================
   NAVIGATION FUNCTIONALITY
   ================================ */
class Navigation {
  constructor() {
    this.init();
  }

  init() {
    this.handleScrollEffect();
    this.handleMobileMenu();
    this.handleSmoothScrolling();
    this.handleActiveNavigation();
  }

  // Add scroll effect to navbar
  handleScrollEffect() {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  }

  // Handle mobile menu toggle
  handleMobileMenu() {
    navToggle.addEventListener("click", () => {
      const isActive = navMenu.classList.contains("active");

      navMenu.classList.toggle("active");
      navToggle.classList.toggle("active");
      navToggle.setAttribute("aria-expanded", !isActive);

      // Prevent body scroll when menu is open
      document.body.style.overflow = isActive ? "auto" : "hidden";
    });

    // Close menu when clicking on nav links
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        navToggle.classList.remove("active");
        navToggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "auto";
      });
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (!navbar.contains(e.target) && navMenu.classList.contains("active")) {
        navMenu.classList.remove("active");
        navToggle.classList.remove("active");
        navToggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "auto";
      }
    });
  }

  // Handle smooth scrolling for anchor links
  handleSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
          const offsetTop = target.offsetTop - 80; // Account for fixed navbar

          window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
          });
        }
      });
    });
  }

  // Handle active navigation highlighting
  handleActiveNavigation() {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", () => {
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;

        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
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
  }
}

/* ================================
   PROJECTS FUNCTIONALITY
   ================================ */
class ProjectsManager {
  constructor() {
    this.init();
  }

  init() {
    this.renderProjects();
  }

  // Render projects dynamically
  renderProjects() {
    if (!projectsGrid) return;

    // Filter featured projects first, then others
    const featuredProjects = projectsData.filter((project) => project.featured);
    const otherProjects = projectsData.filter((project) => !project.featured);
    const allProjects = [...featuredProjects, ...otherProjects];

    // Limit to 6 projects for better performance
    const displayProjects = allProjects.slice(0, 6);

    projectsGrid.innerHTML = displayProjects
      .map((project) => this.createProjectCard(project))
      .join("");

    // Add intersection observer for animations
    this.observeProjectCards();
  }

  // Create individual project card HTML
  createProjectCard(project) {
    const techTags = project.techStack
      .map((tech) => `<span class="tech-tag">${tech}</span>`)
      .join("");

    const links = [];

    if (project.githubUrl) {
      links.push(`
        <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-link">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          GitHub
        </a>
      `);
    }

    if (project.liveUrl) {
      links.push(`
        <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="project-link">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
          </svg>
          Live Demo
        </a>
      `);
    }

    return `
      <article class="project-card" data-project-id="${project.id}">
        <div class="project-header">
          <h3 class="project-title">${project.title}</h3>
          <span class="project-type">${project.type}</span>
        </div>
        
        <p class="project-description">${project.description}</p>
        
        <div class="project-tech">${techTags}</div>
        
        <div class="project-links">${links.join("")}</div>
      </article>
    `;
  }

  // Observe project cards for scroll animations
  observeProjectCards() {
    const projectCards = document.querySelectorAll(".project-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("fade-in-up");
            }, index * 100); // Stagger animation
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    projectCards.forEach((card) => observer.observe(card));
  }
}

/* ================================
   CONTACT FORM FUNCTIONALITY
   ================================ */
class ContactForm {
  constructor() {
    this.init();
  }

  init() {
    this.handleFormSubmission();
    this.addFormValidation();
  }

  // Handle form submission
  handleFormSubmission() {
    if (!contactForm) return;

    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      if (this.validateForm()) {
        this.submitForm();
      }
    });
  }

  // Validate form fields
  validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    let isValid = true;

    // Clear previous error states
    this.clearErrors();

    // Validate name
    if (name.length < 2) {
      this.showError("name", "Name must be at least 2 characters long");
      isValid = false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      this.showError("email", "Please enter a valid email address");
      isValid = false;
    }

    // Validate message
    if (message.length < 10) {
      this.showError("message", "Message must be at least 10 characters long");
      isValid = false;
    }

    return isValid;
  }

  // Submit form (currently opens email client)
  submitForm() {
    const formData = new FormData(contactForm);
    const name = formData.get("name");
    const email = formData.get("email");
    const project = formData.get("project");
    const message = formData.get("message");

    // Create mailto link
    const subject = `Portfolio Contact: ${
      project ? project + " - " : ""
    }${name}`;
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0AProject Type: ${
      project || "Not specified"
    }%0D%0A%0D%0AMessage:%0D%0A${message}`;
    const mailtoLink = `mailto:shubhped0712@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${body}`;

    // Open email client
    window.location.href = mailtoLink;

    // Show success message
    this.showSuccessMessage();

    // Reset form
    contactForm.reset();
  }

  // Show form field error
  showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorElement = document.createElement("div");
    errorElement.className = "error-message";
    errorElement.style.color = "var(--error)";
    errorElement.style.fontSize = "var(--text-sm)";
    errorElement.style.marginTop = "var(--space-1)";
    errorElement.textContent = message;

    field.style.borderColor = "var(--error)";
    field.parentNode.appendChild(errorElement);
  }

  // Clear all form errors
  clearErrors() {
    const errorMessages = contactForm.querySelectorAll(".error-message");
    errorMessages.forEach((error) => error.remove());

    const fields = contactForm.querySelectorAll("input, textarea, select");
    fields.forEach((field) => {
      field.style.borderColor = "";
    });
  }

  // Show success message
  showSuccessMessage() {
    const successDiv = document.createElement("div");
    successDiv.className = "success-message";
    successDiv.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: var(--success);
      color: white;
      padding: var(--space-4);
      border-radius: var(--radius);
      box-shadow: var(--shadow-lg);
      z-index: 10000;
      font-weight: 500;
    `;
    successDiv.textContent = "Thank you! Your message has been sent.";

    document.body.appendChild(successDiv);

    // Remove success message after 5 seconds
    setTimeout(() => {
      successDiv.remove();
    }, 5000);
  }

  // Add real-time form validation
  addFormValidation() {
    const fields = contactForm.querySelectorAll(
      "input[required], textarea[required]"
    );

    fields.forEach((field) => {
      field.addEventListener("blur", () => {
        this.validateField(field);
      });

      field.addEventListener("input", () => {
        // Clear error state on input
        field.style.borderColor = "";
        const errorMessage = field.parentNode.querySelector(".error-message");
        if (errorMessage) {
          errorMessage.remove();
        }
      });
    });
  }

  // Validate individual field
  validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    let errorMessage = "";

    switch (field.type) {
      case "text":
        if (value.length < 2) {
          errorMessage = "This field must be at least 2 characters long";
          isValid = false;
        }
        break;
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          errorMessage = "Please enter a valid email address";
          isValid = false;
        }
        break;
      default:
        if (field.tagName === "TEXTAREA" && value.length < 10) {
          errorMessage = "Message must be at least 10 characters long";
          isValid = false;
        }
        break;
    }

    if (!isValid) {
      this.showError(field.id, errorMessage);
    }

    return isValid;
  }
}

/* ================================
   SCROLL ANIMATIONS
   ================================ */
class ScrollAnimations {
  constructor() {
    this.init();
  }

  init() {
    this.observeElements();
  }

  // Observe elements for scroll animations
  observeElements() {
    const elementsToAnimate = document.querySelectorAll(
      ".hero-content, .section-header, .about-content, .testimonial-card, .contact-content"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-up");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    elementsToAnimate.forEach((element) => {
      observer.observe(element);
    });
  }
}

/* ================================
   UTILITY FUNCTIONS
   ================================ */
class Utils {
  // Debounce function for performance optimization
  static debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // Throttle function for scroll events
  static throttle(func, limit) {
    let inThrottle;
    return function (...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  }

  // Check if element is in viewport
  static isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Smooth scroll to element
  static scrollToElement(element, offset = 80) {
    const elementPosition = element.offsetTop - offset;
    window.scrollTo({
      top: elementPosition,
      behavior: "smooth",
    });
  }
}

/* ================================
   GITHUB INTEGRATION (PLACEHOLDER)
   ================================ */
class GitHubIntegration {
  constructor(username) {
    this.username = username;
    this.apiBase = "https://api.github.com";
  }

  // Fetch GitHub repositories
  async fetchRepositories() {
    try {
      const response = await fetch(
        `${this.apiBase}/users/${this.username}/repos?sort=updated&per_page=10`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const repos = await response.json();
      return repos.filter((repo) => !repo.fork); // Filter out forks
    } catch (error) {
      console.error("Error fetching GitHub repositories:", error);
      return [];
    }
  }

  // Fetch GitHub user profile
  async fetchProfile() {
    try {
      const response = await fetch(`${this.apiBase}/users/${this.username}`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error("Error fetching GitHub profile:", error);
      return null;
    }
  }

  // Update projects with GitHub data
  async updateProjectsWithGitHubData() {
    const repos = await this.fetchRepositories();

    if (repos.length === 0) {
      console.log("No GitHub repositories found or API error");
      return;
    }

    // REPLACE_WITH_YOUR_DATA: Map GitHub repos to your project structure
    console.log("GitHub repositories:", repos);

    // Example of how to integrate GitHub data:
    /*
    const updatedProjects = projectsData.map(project => {
      const matchingRepo = repos.find(repo => 
        repo.name.toLowerCase().includes(project.title.toLowerCase().replace(/\s+/g, '-'))
      );
      
      if (matchingRepo) {
        return {
          ...project,
          githubUrl: matchingRepo.html_url,
          stars: matchingRepo.stargazers_count,
          language: matchingRepo.language,
          lastUpdated: matchingRepo.updated_at
        };
      }
      
      return project;
    });
    
    // Re-render projects with updated data
    new ProjectsManager().renderProjects(updatedProjects);
    */
  }
}

/* ================================
   PERFORMANCE OPTIMIZATIONS
   ================================ */
class PerformanceOptimizer {
  constructor() {
    this.init();
  }

  init() {
    this.optimizeImages();
    this.addIntersectionObserver();
  }

  // Lazy load images
  optimizeImages() {
    const images = document.querySelectorAll("img[data-src]");

    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute("data-src");
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach((img) => imageObserver.observe(img));
  }

  // Add intersection observer for better performance
  addIntersectionObserver() {
    // Throttle scroll events
    window.addEventListener(
      "scroll",
      Utils.throttle(() => {
        // Handle scroll-based animations here
      }, 16)
    ); // ~60fps
  }
}

/* ================================
   APPLICATION INITIALIZATION
   ================================ */
class App {
  constructor() {
    this.init();
  }

  init() {
    // Wait for DOM to be fully loaded
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => this.start());
    } else {
      this.start();
    }
  }

  start() {
    console.log("🚀 Portfolio website initialized");

    // Initialize all components
    new Navigation();
    new ProjectsManager();
    new ContactForm();
    new ScrollAnimations();
    new PerformanceOptimizer();

    // REPLACE_WITH_YOUR_DATA: Initialize GitHub integration
    // const github = new GitHubIntegration('shubyaa');
    // github.updateProjectsWithGitHubData();

    // Add any additional initialization here
    this.addKeyboardNavigation();
    this.addAnalytics();
  }

  // Add keyboard navigation support
  addKeyboardNavigation() {
    document.addEventListener("keydown", (e) => {
      // ESC key closes mobile menu
      if (e.key === "Escape" && navMenu.classList.contains("active")) {
        navMenu.classList.remove("active");
        navToggle.classList.remove("active");
        navToggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "auto";
      }
    });
  }

  // Add analytics tracking (placeholder)
  addAnalytics() {
    // REPLACE_WITH_YOUR_DATA: Add your analytics tracking code here
    // Example: Google Analytics, Mixpanel, etc.
    console.log("📊 Analytics ready (add your tracking code)");
  }
}

/* ================================
   START APPLICATION
   ================================ */
// Initialize the application
new App();

/* ================================
   SERVICE WORKER (OPTIONAL)
   ================================ */
// Register service worker for offline functionality
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    // REPLACE_WITH_YOUR_DATA: Add service worker registration
    console.log(
      "🔧 Service Worker ready (implement for offline functionality)"
    );
  });
}

/* ================================
   EXPORTS (IF USING MODULES)
   ================================ */
// Export classes for potential module usage
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    Navigation,
    ProjectsManager,
    ContactForm,
    ScrollAnimations,
    GitHubIntegration,
    Utils,
    PerformanceOptimizer,
    App,
  };
}
