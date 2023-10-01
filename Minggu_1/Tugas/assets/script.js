document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("myForm");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const nama = document.getElementById("nama").value;
    const pesan = document.getElementById("pesan");
    pesan.innerHTML =
      "Terima kasih, " + nama + " !<br> Formulir anda telah terkirim.";
    pesan.classList.remove("hidden");
  });
});
