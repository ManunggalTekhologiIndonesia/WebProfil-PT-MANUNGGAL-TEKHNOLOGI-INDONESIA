// PDF Modal Handler - Extracted from index.html
document.addEventListener('DOMContentLoaded', function() {
  // Event listener untuk tombol "Lihat detail"
  document.querySelectorAll('.lihat-detail').forEach(button => {
    button.addEventListener('click', function() {
      const pdfUrl = this.getAttribute('data-pdf');
      document.getElementById('pdf-frame').src = pdfUrl;
      document.getElementById('downloadLink').href = pdfUrl;
    });
  });

  // Bersihkan iframe saat modal ditutup
  const pdfModal = document.getElementById('pdfModal');
  pdfModal.addEventListener('hidden.bs.modal', function () {
    document.getElementById('pdf-frame').src = "";
  });
});
