document.addEventListener("DOMContentLoaded", () => {
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
});

