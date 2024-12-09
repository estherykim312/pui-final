document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".accordion-section");

  sections.forEach((section) => {
    const header = section.querySelector(".accordion-header");
    const content = section.querySelector(".accordion-content"); 
    const projectId = `project-${section.id}`; 
    const projectContainer = document.getElementById(projectId);

    header.addEventListener("click", () => {
      const isOpen = content.classList.contains("show");

      sections.forEach((sec) => {
        sec.querySelector(".accordion-content").classList.remove("show");
      });

      document.querySelectorAll(".project-container").forEach((container) => {
        container.style.display = "none";
      });

      if (!isOpen) {
        content.classList.add("show"); 
        if (projectContainer) {
          projectContainer.style.display = "block";
        }
      } else {
        content.classList.remove("show");
      }
    });
  });
});

