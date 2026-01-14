// --- ANIMASI AWAL OTOMATIS ---
window.onload = () => {
    const env = document.getElementById('envelope');
    const gate = document.getElementById('password-gate');

    setTimeout(() => {
        env.classList.add('open');
        setTimeout(() => {
            env.classList.add('fade-out');
            setTimeout(() => {
                env.style.display = 'none';
                gate.style.display = 'flex';
            }, 1000);
        }, 3000);
    }, 1000);
};

// --- DATA SLIDE (Sesuai Nama File di Foto Bos) ---
const slides = [
    {
        text: "Jujur, cari alamat pondokmu kemarin itu tidak mudah. Harus mutar-mutar tanya sana-sini. Tapi niat saya memang mau antar amanah ini sendiri.",
        gif: "slide1.GIF" // Pusheen Detektif (Pas untuk cerita cari alamat)
    },
    {
        text: "Berhenti bilang kalau kamu itu 'banyak minusnya'. Di mata saya, kamu tetap Princess yang berharga. Tolong jangan rendah diri lagi, ya?",
        gif: "slide2.GIF" // Piggy Nangis (Pas untuk momen emosional)
    },
    {
        text: "Karena bagiku, bisa mengenalmu dan mengantar amanah ini sampai ke tanganmu sudah jadi kebahagiaan tersendiri buat saya.",
        gif: "slide3.GIF" // Mochi Cat (Sweet momen)
    },
    {
        text: "Ini ada sedikit kenang-kenangan, sebuah Tumbler. Bukan sogokan, tapi apresiasi saya buat kamu. Mau diterima, kan?",
        gif: "slide4.GIF", // Kelinci bawa kado (Pas untuk Tumbler)
        isLast: true
    }
];

let currentSlide = 0;

// --- LOGIKA PASSWORD ---
function checkPass() {
    const input = document.getElementById('passInput').value.toLowerCase().trim();
    if (input === 'princess') {
        document.getElementById('password-gate').style.display = 'none';
        document.getElementById('content-area').style.display = 'flex';
        showSlide();
    } else {
        document.getElementById('error-msg').style.display = 'block';
    }
}

// --- TYPEWRITER ---
function showSlide() {
    const slide = slides[currentSlide];
    const textElem = document.getElementById('typewriter');
    const gifElem = document.getElementById('main-gif');
    
    gifElem.src = slide.gif;
    textElem.innerHTML = "";
    let i = 0;

    function type() {
        if (i < slide.text.length) {
            textElem.innerHTML += slide.text.charAt(i);
            i++;
            setTimeout(type, 45); 
        } else if (slide.isLast) {
            document.getElementById('btn-tolak').style.display = 'inline-block';
            document.getElementById('btn-lanjut').innerHTML = "Terima";
        }
    }
    type();
}

function nextSlide() {
    if (currentSlide < slides.length - 1) {
        currentSlide++;
        showSlide();
    } else {
        // Slide 5 dimunculkan di pesan terakhir
        alert("Amanah lunas. Jaga kesehatan baik-baik di sana. Saya balik ke Barru dulu. Take care, Princess.");
        // Ganti gambar ke slide5.GIF (Bye) sebagai penutup
        document.getElementById('main-gif').src = "slide5.GIF";
    }
}

// --- TOMBOL LARI ---
function moveButton() {
    const btn = document.getElementById('btn-tolak');
    const x = Math.random() * (window.innerWidth - 120);
    const y = Math.random() * (window.innerHeight - 60);
    btn.style.position = 'fixed';
    btn.style.left = x + 'px';
    btn.style.top = y + 'px';
}
