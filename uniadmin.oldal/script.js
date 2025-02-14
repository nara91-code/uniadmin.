document.getElementById("login-btn").addEventListener("click", async function (event) {
  event.preventDefault(); // 
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("error-message");

  try {
    const response = await fetch("https://unisrv4.sze.hu/feladatok/frontend/api/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    });

    if (!response.ok) {
      const error = await response.json();
      if (error.error === "UNAUTHORIZED") {
        errorMessage.textContent = "Hibás felhasználónév vagy jelszó!";
        errorMessage.style.display = "block";
      }
    } else {
      const result = await response.json();
      if (result.success) {
        alert("Sikeres bejelentkezés!");
      } else {
        errorMessage.textContent = "Ismeretlen hiba történt!";
        errorMessage.style.display = "block";
      }
    }
  } catch (error) {
    console.error("Hálózati hiba:", error);
    errorMessage.textContent = "Hálózati hiba történt!";
    errorMessage.style.display = "block";
  }
});


document.getElementById("login-form").addEventListener("submit", function (event) {
  event.preventDefault(); 
  document.getElementById("login-btn").click(); 
});


