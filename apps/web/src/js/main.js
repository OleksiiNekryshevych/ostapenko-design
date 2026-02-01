document.getElementById("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = {
    email: formData.get("email"),
    message: formData.get("message"),
  };

  const messageDiv = document.getElementById("formMessage");

  try {
    const response = await fetch("http://localhost:3001/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      messageDiv.style.display = "block";
      messageDiv.style.color = "green";
      messageDiv.textContent = "Message sent successfully!";
      e.target.reset();
      setTimeout(() => {
        messageDiv.style.display = "none";
      }, 5000);
    } else {
      throw new Error("Server responded with an error");
    }
  } catch (error) {
    console.error("Error:", error);
    messageDiv.style.display = "block";
    messageDiv.style.color = "red";
    messageDiv.textContent = "Failed to send message. Please try again.";
  }
});
