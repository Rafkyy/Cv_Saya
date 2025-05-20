document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
  
    form.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const nama = document.getElementById('nama').value;
      const email = document.getElementById('email').value;
      const pesan = document.getElementById('pesan').value;
  
      if (nama && email && pesan) {
        alert(`Terima kasih, ${nama}! Pesan kamu sudah dikirim.`);
        form.reset();
      } else {
        alert('Mohon lengkapi semua field sebelum mengirim.');
      }
    });
  });
  