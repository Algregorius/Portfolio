
document.addEventListener("DOMContentLoaded", () => {
  const jobCards = document.querySelectorAll('.job-listing');
  jobCards.forEach(card => {
    card.addEventListener('click', () => {
      alert("Klik ini hanya contoh. Anda dapat menambahkan fungsionalitas lanjut di sini.");
    });
  });
});
