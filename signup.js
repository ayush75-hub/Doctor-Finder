function validateForm(event) {
  event.preventDefault();

  // Fetch input values
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Basic validation (you can add more complex validation)
  if (!username || !email || !password) {
    alert("Please fill in all fields");
    return;
  }

  // Perform signup logic or send data to the backend here
  // For simplicity, let's just log the input values
  console.log("Username:", username);
  console.log("Email:", email);
  console.log("Password:", password);

  // Clear the form after submission
  document.getElementById("signupForm").reset();
}

let btn = document.querySelector("#signup");
console.log(btn);

btn.addEventListener("click", function () {
  alert("You have Signed in successfully");
});
