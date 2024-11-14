
document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".menu");

    hamburger.addEventListener("click", function() {
        menu.classList.toggle("active");
    });
});


// Ambil elemen yang diperlukan
const form = document.getElementById('kritikForm');
const popup = document.getElementById('popup');
const close = document.querySelector('.close');

// Fungsi untuk menampilkan pop-up
function showPopup() {
    popup.classList.add('show');
    popup.style.display = 'flex'; // Tampilkan pop-up
}

// Fungsi untuk menutup pop-up
function hidePopup() {
    popup.classList.remove('show');
    setTimeout(() => {
        popup.style.display = 'none'; // Sembunyikan setelah animasi
    }, 400); // Waktu harus sesuai dengan durasi animasi (0.4s)
}

// Event listener untuk form submit
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form untuk refresh halaman
    showPopup(); // Tampilkan pop-up
    form.reset(); // Reset form setelah mengirim kritik
});

// Event listener untuk tombol close
close.addEventListener('click', hidePopup);

// Menutup pop-up saat klik di luar konten
window.addEventListener('click', function(event) {
    if (event.target === popup) {
        hidePopup();
    }
});


document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetID = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetID);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
