document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("carbon-form");
  const nameInput = document.getElementById("name");
  const addressInput = document.getElementById("address");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = nameInput.value.trim();
    const address = addressInput.value.trim();

    if (!name || !address) {
      showToast({
        title: "Missing Information",
        description: "Please fill in all fields to continue.",
        type: "error",
      });
      return;
    }

    showToast({
      title: "Welcome!",
      description: `Thank you ${name}, we're calculating your carbon impact...`,
      type: "success",
    });

    // Simulate your "next step"
    console.log("Form submitted:", { name, address });
  });
});

/**
 * Simple toast function to mimic your React toast hook
 * options: { title: string, description: string, type: "error" | "success" }
 */
function showToast(options) {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.classList.add("toast");

  if (options.type === "error") {
    toast.classList.add("toast-error");
  } else if (options.type === "success") {
    toast.classList.add("toast-success");
  }

  const titleEl = document.createElement("div");
  titleEl.classList.add("toast-title");
  titleEl.textContent = options.title || "";

  const descEl = document.createElement("div");
  descEl.classList.add("toast-description");
  descEl.textContent = options.description || "";

  toast.appendChild(titleEl);
  toast.appendChild(descEl);

  container.appendChild(toast);

  // Remove after 3 seconds
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(8px)";
    setTimeout(() => {
      container.removeChild(toast);
    }, 200);
  }, 3000);
}
