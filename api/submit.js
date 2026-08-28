const form = document.getElementById("formEl");
const successEl = document.getElementById("successEl");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const submitButton = form.querySelector(".submit");
  submitButton.disabled = true;
  submitButton.textContent = "Submitting...";

  const data = {
    name: document.getElementById("name").value.trim(),
    email: document.getElementById("email").value.trim(),
    whatsapp: document.getElementById("whatsapp").value.trim(),
    roll: document.getElementById("roll").value.trim(),
    social: document.getElementById("social").value.trim(),
    idea: document.getElementById("idea").value.trim(),
    events: document.getElementById("events").value.trim(),
    video: document.getElementById("video").value.trim(),
    commit: document.querySelector('input[name="commit"]:checked')?.value || "",
    meetings: document.querySelector('input[name="meetings"]:checked')?.value || "",
    other: document.getElementById("other").value.trim()
  };

  try {
    const response = await fetch("/api/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error("Submission failed");
    }

    form.classList.add("hide");
    successEl.classList.add("show");

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  } catch (error) {
    console.error(error);

    alert("Something went wrong while submitting. Please try again.");

    submitButton.disabled = false;
    submitButton.textContent = "Submit Application 🚀";
  }
});