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

function doGet() {
    const sheet = SpreadsheetApp.openById("1ayiwEqIm7DJSowR1iCJk6OnM4lBqmBqoyLW0zkyaO-I").getSheetByName("Sheet1");
    const data = sheet.getDataRange().getValues();

    // Log untuk melihat data yang diambil
    Logger.log(data);

    // Proses data dan kembalikan sebagai HTML
    const htmlOutput = HtmlService.createHtmlOutput(generateTableHtml(data));
    return htmlOutput;
}

function fetchData() {
    fetch(SCRIPT_URL)
    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbycV9Fe29sNDu7NM-qxE2Mq-WpSIeNPqRaHEC22m7hMBMTvTHNumZvwrBOl8NUhjuYoLQ/exec'; // Ganti dengan URL yang diberikan oleh Google Apps Script

        .then(response => {
        console.log(response);
        return response.text();  // Pastikan response diubah menjadi text
    })
        .then(data => {
            console.log(data);  // Log data untuk memastikan apakah data valid
            document.getElementById('tableContainer').innerHTML = data;
        })
        .catch(error => {
            console.error('Error fetching data: ', error);
            document.getElementById('tableContainer').innerHTML = '<p>Gagal memuat data.</p>';
        });
}


function generateTableHtml(data) {
    let html = "<table>";
    html += "<thead><tr><th>No</th><th>Nomor Perkara</th><th>Pengadilan</th><th>Advokat</th></tr></thead><tbody>";

    data.forEach(function (row, index) {
        html += "<tr>";
        html += "<td>" + (index + 1) + "</td>";
        html += "<td>" + row[0] + "</td>"; // Nomor Perkara
        html += "<td>" + row[1] + "</td>"; // Pengadilan
        html += "<td>" + row[2] + "</td>"; // Advokat
        html += "</tr>";
    });

    html += "</tbody></table>";
    return html;
}

