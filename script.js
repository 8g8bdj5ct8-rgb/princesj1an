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

const slides = [
    { text: "Jujur, cari alamat pondokmu kemarin itu tidak mudah. Harus mutar-mutar tanya sana-sini. Tapi niat saya memang mau antar amanah ini sendiri.", gif: "slide1.GIF" },
    { text: "Berhenti bilang kalau kamu itu 'banyak minusnya'. Di mata saya, kamu tetap Princes yang berharga. Tolong jangan rendah diri lagi, ya?", gif: "slide2.GIF" },
    { text: "Karena bagiku, bisa mengenalmu dan mengantar amanah ini sampai ke tanganmu sudah jadi kebahagiaan tersendiri buat saya.", gif: "slide3.GIF" },
    { text: "Ini ada sedikit kenang-kenangan, sebuah Tumbler. Bukan sogokan, tapi apresiasi saya buat kamu. Mau diterima, kan?", gif: "slide4.GIF", isLast: true }
];

let currentSlide = 0;

function checkPass() {
    const input = document.getElementById('passInput').value.toLowerCase().trim();
    if (input === 'princes') {
        // MUSIK DIMULAI DI SINI
        const audio = document.getElementById('myAudio');
        audio.play().catch(e => console.log("Musik butuh interaksi user"));

        document.getElementById('password-gate').style.display = 'none';
        document.getElementById('content-area').style.display = 'flex';
        showSlide();
    } else {
        alert("Masa lupa? Coba ingat lagi...");
    }
}

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
        const textElem = document.getElementById('typewriter');
        const gifElem = document.getElementById('main-gif');
        const btnLanjut = document.getElementById('btn-lanjut');
        const btnTolak = document.getElementById('btn-tolak');

        textElem.innerHTML = "Amanah lunas. Jaga kesehatan baik-baik di sana. Saya balik ke Barru dulu. Take care, Princes.";
        gifElem.src = "slide5.GIF";
        btnLanjut.style.display = "none";
        btnTolak.style.display = "none";

        setTimeout(() => {
            alert("Amanah lunas. Jaga kesehatan baik-baik di sana. Saya balik ke Barru dulu. Take care, Princes.");
        }, 500);
    }
}

function moveButton() {
    const btn = document.getElementById('btn-tolak');
    const x = Math.random() * (window.innerWidth - 120);
    const y = Math.random() * (window.innerHeight - 150);
    btn.style.position = 'fixed';
    btn.style.left = x + 'px';
    btn.style.top = y + 'px';
    btn.style.zIndex = "999";
}
