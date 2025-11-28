document.getElementById("loginBtn").addEventListener("click", login);

async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const errorMsg = document.getElementById("errorMessage");

  try {
    const response = await fetch("https://your-api-url.com/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    if (!response.ok) {
      errorMsg.textContent = "Invalid login. Try again.";
      return;
    }

    const data = await response.json();

    localStorage.setItem("authToken", data.token);

    window.location.href = "../checkout/index.html"; // página protegida
  } catch (error) {
    errorMsg.textContent = "Server error.";
  }
}
