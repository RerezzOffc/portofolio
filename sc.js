function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
  
    if (sidebar.classList.contains('open')) {
      sidebar.classList.remove('open'); // Tutup sidebar
      overlay.style.display = 'none'; // Sembunyikan overlay
    } else {
      sidebar.classList.add('open'); // Buka sidebar
      overlay.style.display = 'block'; // Tampilkan overlay
    }
  }
  
  function closeSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
  
    sidebar.classList.remove('open'); // Hapus kelas "open"
    overlay.style.display = 'none'; // Sembunyikan overlay
  }
  
  document.getElementById('sendEmailButton').addEventListener('click', function() {
    var nama = document.getElementById('nama').value;
    var email = document.getElementById('email').value;
    var pesan = document.getElementById('pesan').value;

    // Membuat URL mailto dengan informasi form yang sudah diisi
    var mailtoLink = "mailto:rerezzofficial@gmail.com.com?subject=Pesan%20Dari%20Website%20dari%20" + encodeURIComponent(nama) + "&body=" + encodeURIComponent("Email: " + email + "\nPesan: " + pesan);

    // Membuka email client dengan link mailto
    window.location.href = mailtoLink;
});
