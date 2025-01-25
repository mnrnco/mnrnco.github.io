let slideIndex = 0;

// Fungsi untuk menampilkan gambar secara otomatis
function showSlides() {
    let slides = document.getElementsByClassName("slide");

    // Menyembunyikan semua slide
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }

    slideIndex++;

    // Jika slideIndex lebih besar dari jumlah slide, reset ke 1
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Menampilkan slide aktif
    slides[slideIndex - 1].classList.add("active");

    setTimeout(showSlides, 5000); // Ulangi setiap 5 detik
}

// Fungsi untuk mengontrol slider dengan tombol prev/next
function moveSlide(n) {
    slideIndex += n;

    let slides = document.getElementsByClassName("slide");

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    if (slideIndex < 1) {
        slideIndex = slides.length;
    }

    // Menyembunyikan semua slide
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }

    // Menampilkan slide yang aktif
    slides[slideIndex - 1].classList.add("active");
}

// Mulai slideshow otomatis saat halaman dimuat
window.onload = showSlides;
