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
    { text: "Ciee, masa Incess tdk na tau nama kontaknya di HP-ku? Ndak mungkinlah 😜. Anyway, I came here purely with niat and nekat. 😅 Bermodalkan ituji yg kita bilang pas telponanki: 'lewat SPBU, poros kota ke bira, terus samping pondok pesantren'. Just that, but with a good heart of course. ✨.", gif: "slide1.GIF" },
    { text: "Hehehe, I’m sorry before. Pertama, krna saya ke sini nda bilangka atau izinka dulu, I should've told you first. 🙏🏻😅 Kedua, soal yg kemarin... I'm really sorry for that. Sdrka itu kmrin blunder besar ku dan bikin ki mrasa tdk nyaman atau risih dngn saya. It was never my intention, and I promise it won't happen again. 🤙🏻", gif: "slide2.GIF" },
    { text: "Minta tolongka 🙏🏻 please stop thinking that you’re not worth it. Ingat, Incess itu “Princess in my eyes”. you don't deserve to feel that way. 😌 Menurutku toh, Incess pantas diperjuangkan oleh lelaki yg bisa menerima apa adanya dan semua kekuranganta. So, please no more negative thoughts, okay? 🧸", gif: "slide3.GIF" },
    { text: "Nah, ini ada hadiah. I hope you like it and it's useful for you. 🎁 bkn sogokan ini nah, camkan itu. ku pilih ini krna mnrtku ini bermanfaat buat Incess, supaya Incess rajin minum air putih dan sehat terus. I’ve been planning to give this for our first meeting, jdi tlong disimpan baik-baik ya. I'll just let my actions prove everything. 🫡", gif: "slide4.GIF", isLast: true }
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

        textElem.innerHTML = "Akhir kata, thanks for reading this. Minta tlong terima hadiahku nah. Soal kemarin, I’m really sorry once again. Saya hrp sampai di slide ini, Incess tdk merasa 'minus' lagi sebagai perempuan. You are worth it. 🩷 smoga ini awal hal baik untuk kita berduanah, wkwkwk.Tadi pas di perjalanannnah, jujur senang sekalika sampai ke bulkum tampa bantuan orang lain.See you when I see you, Princess. 👸🏻 Apapun keputusanta nantinya, ku terima semuaji. Saya mengerti keadaanta dan traumata yg pernah di cerita itu hari. Mungkin ini terlalu cepat bagi kita toh? I won't talk too much, I'll just prove it to you. 👋🏻 Bye-bye Incess, stay healthy! 🥤 dan ttp jadi Incess yg prtma kali ku kenal nah. ";
        gifElem.src = "slide5.GIF";
        btnLanjut.style.display = "none";
        btnTolak.style.display = "none";

        setTimeout(() => {
            alert("Mission accomplished! 🚩 Skrng saya balik ke Barru dulu ya");
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
