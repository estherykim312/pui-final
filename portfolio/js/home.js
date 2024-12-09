/*document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".accordion-section");

  sections.forEach((section) => {
    const header = section.querySelector(".accordion-header");
    const content = section.querySelector(".accordion-content");

    header.addEventListener("click", () => {
      // If already open, close it
      if (section.classList.contains("open")) {
        section.classList.remove("open");
        content.style.maxHeight = null; // Close by removing height
      } else {
        // Close all other sections
        sections.forEach((sec) => {
          sec.classList.remove("open");
          sec.querySelector(".accordion-content").style.maxHeight = null;
        });
        // Open the clicked section
        section.classList.add("open");
        content.style.maxHeight = content.scrollHeight + "px"; // Set height to reveal content
      }
    });
  });
});*/

/*
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".accordion-section");
  const projectContainer = document.querySelector(".project-container");

  // Ensure the project container exists
  if (!projectContainer) {
    console.error("Project container not found!");
    return;
  }

  sections.forEach((section) => {
    const header = section.querySelector(".accordion-header");
    const content = section.querySelector(".accordion-content");

    header.addEventListener("click", () => {
      // Accordion logic
      if (section.classList.contains("open")) {
        section.classList.remove("open");
        content.style.maxHeight = null; // Close accordion
      } else {
        sections.forEach((sec) => {
          sec.classList.remove("open");
          sec.querySelector(".accordion-content").style.maxHeight = null;
        });
        section.classList.add("open");
        content.style.maxHeight = content.scrollHeight + "px"; // Open accordion
      }

      // Show/Hide the project container based on the clicked section
      if (header.textContent.trim() === "UX DESIGN") {
        console.log("UX Design clicked: showing project container");
        projectContainer.style.display = "block"; // Show photos
      } else {
        console.log("Other section clicked: hiding project container");
        projectContainer.style.display = "none"; // Hide photos
      }
    });
  });
});
*/

/*
document.addEventListener("DOMContentLoaded", () => {
  // List of project container IDs
  const projectContainers = [
    "project-ux-design",
    "project-product-strategy",
    "project-ux-research",
    "project-interior-design",
    "project-fashion-design",
  ];

  // Select all accordion sections
  const sections = document.querySelectorAll(".accordion-section");

  sections.forEach((section) => {
    const header = section.querySelector(".accordion-header");

    header.addEventListener("click", () => {
      // Hide all project containers
      projectContainers.forEach((id) => {
        document.getElementById(id).style.display = "none";
      });

      // Show the relevant project container
      const sectionId = section.id; // The ID of the clicked accordion section
      const projectContainer = document.getElementById(`project-${sectionId}`);
      if (projectContainer) {
        projectContainer.style.display = "block"; // Show the matching container
      }
    });
  });
});
*/

/*
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".accordion-section");

  sections.forEach((section) => {
    const header = section.querySelector(".accordion-header");
    const content = section.querySelector(".accordion-content"); // The <p> inside the section
    const projectId = `project-${section.id}`; // Map section ID to project container ID
    const projectContainer = document.getElementById(projectId);

    header.addEventListener("click", () => {
      // Hide all other content and project containers
      sections.forEach((sec) => {
        sec.querySelector(".accordion-content").classList.remove("show");
      });

      document.querySelectorAll(".project-container").forEach((container) => {
        container.style.display = "none";
      });

      // Show the clicked content and project container
      content.classList.add("show"); // Show the accordion <p> content
      if (projectContainer) {
        projectContainer.style.display = "block"; // Show the matching project container
      }
    });
  });
});*/

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".accordion-section");

  sections.forEach((section) => {
    const header = section.querySelector(".accordion-header");
    const content = section.querySelector(".accordion-content"); // The <p> inside the section
    const projectId = `project-${section.id}`; // Map section ID to project container ID
    const projectContainer = document.getElementById(projectId);

    header.addEventListener("click", () => {
      // Check if this section is already open
      const isOpen = content.classList.contains("show");

      // Hide all other content and project containers
      sections.forEach((sec) => {
        sec.querySelector(".accordion-content").classList.remove("show");
      });

      document.querySelectorAll(".project-container").forEach((container) => {
        container.style.display = "none";
      });

      // Toggle the clicked section
      if (!isOpen) {
        content.classList.add("show"); // Show the accordion <p> content
        if (projectContainer) {
          projectContainer.style.display = "block"; // Show the matching project container
        }
      } else {
        content.classList.remove("show"); // Hide the accordion <p> content
      }
    });
  });
});

