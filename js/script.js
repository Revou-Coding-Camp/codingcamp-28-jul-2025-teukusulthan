// Aktifkan dark mode secara default saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("dark");

  const form = document.querySelector("#contactForm");
  const submittedPanel = document.querySelector("#submittedInfo");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = form.querySelector("input[name='name']")?.value || "";
    const birthdate = form.querySelector("input[name='dob']")?.value || "";
    const gender =
      form.querySelector("input[name='gender']:checked")?.value || "";
    const message = form.querySelector("textarea[name='message']")?.value || "";

    submittedPanel.innerHTML = `
      <h3>Submitted Info</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Birthdate:</strong> ${birthdate}</p>
      <p><strong>Gender:</strong> ${gender}</p>
      <p><strong>Message:</strong> ${message}</p>
    `;
  });
});
