const SPEED_ONLOAD = 3000

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
      }, SPEED_ONLOAD / 3);
    }, SPEED_ONLOAD);
  }, SPEED_ONLOAD / 3);
};

const slides = [
  {
    text: "Ciee, masa Incess tdk na tau nama kontaknya di HP-ku? Ndak mungkinlah 😜. \nAnyway, I came here purely with niat and nekat 😅. \nBermodalkan ituji yg kita bilang pas telponanki: \n'lewat SPBU, poros kota ke bira, terus samping pondok pesantren'. Just that, but with a good heart of course. ✨.",
    gif: "slide1.GIF"
  },
  {
    text: "Hehehe, I’m sorry before. \nPertama, krna saya ke sini nda bilangka atau izinka dulu, I should've told you first🙏🏻😅.\nKedua, soal yg kemarin... I'm really sorry for that. Sdrka itu kmrin blunder besar ku dan bikin ki mrasa tdk nyaman atau risih dngn saya. \nIt was never my intention, and I promise it won't happen again. 🤙🏻",
    gif: "slide2.GIF"
  },
  {
    text: "Minta tolongka 🙏🏻 please stop thinking that you’re not worth it. \n\nIngat, Incess itu “Princess in my eyes”. \n\nyou don't deserve to feel that way😌 \nMenurutku toh, Incess pantas diperjuangkan oleh lelaki yg bisa menerima apa adanya dan semua kekuranganta. \nSo, please no more negative thoughts, okay? 🧸",
    gif: "slide3.GIF"
  },
  {
    text: "Nah, ini ada hadiah. \n\nI hope you like it and it's useful for you🎁 \nbkn sogokan ini nah, camkan itu. ku pilih ini krna mnrtku ini bermanfaat buat Incess, supaya Incess rajin minum air putih dan sehat terus. \nI’ve been planning to give this for our first meeting, jdi tlong disimpan baik-baik ya. \nI'll just let my actions prove everything. 🫡",
    gif: "slide4.GIF",
    isLast: true
  }
];

let currentSlide = 0;
const speedTyping = 30

function checkPass() {
  const input = document.getElementById('passInput').value.toLowerCase().trim();

  if (input.includes("princes")) {
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

let typingTimeout = null; // <-- ADD THIS OUTSIDE
function showSlide() {
  const slide = slides[currentSlide];
  const textElem = document.getElementById('typewriter');
  const gifElem = document.getElementById('main-gif');
  const btnLanjut = document.getElementById('btn-lanjut');
  const btnTolak = document.getElementById('btn-tolak');

  // ✅ Stop previous typing
  if (typingTimeout) {
    clearTimeout(typingTimeout);
    typingTimeout = null;
  }

  // ✅ HIDE BUTTONS FIRST (important)
  btnLanjut.style.display = "none";
  btnTolak.style.display = "none";

  if (slide.isLast) {
    btnLanjut.innerHTML = "Terima";
  }

  gifElem.src = slide.gif;
  textElem.innerHTML = "";
  let i = 0;

  function type() {
    if (i < slide.text.length) {
      textElem.innerHTML += slide.text.charAt(i);
      i++;
      typingTimeout = setTimeout(type, speedTyping);
    }
    // ✅ When typing is DONE → show buttons
    else {
      btnLanjut.style.display = "inline-block";

      if (slide.isLast) {
        btnTolak.style.display = "inline-block";
      }
    }
  }

  type();
}

function nextSlide() {
  if (currentSlide < slides.length - 1) {
    currentSlide++;
    showSlide();
  } else {
    // Stop any previous typing
    if (typingTimeout) {
      clearTimeout(typingTimeout);
      typingTimeout = null;
    }

    const textElem = document.getElementById('typewriter');
    const gifElem = document.getElementById('main-gif');
    const btnLanjut = document.getElementById('btn-lanjut');
    const btnTolak = document.getElementById('btn-tolak');

    const finalText = "Akhir kata, thanks for reading this. \nMinta tlong terima hadiahku nah. Soal kemarin, I’m really sorry once again. \n\nSaya hrp sampai di slide ini, \n\nIncess tdk merasa 'minus' lagi sebagai perempuan. You are worth it🩷 .\nsmoga ini awal hal baik untuk kita berduanah, wkwkwk.\nTadi pas di perjalanannnah, jujur senang sekalika sampai ke bulkum tampa bantuan orang lain.\n\nSee you when I see you, Princess👸🏻. \n\nApapun keputusanta nantinya, ku terima semuaji. Saya mengerti keadaanta dan traumata yg pernah di cerita itu hari. \nMungkin ini terlalu cepat bagi kita toh? \nI won't talk too much, I'll just prove it to you👋🏻 \nBye-bye Incess, stay healthy! 🥤 dan ttp jadi Incess yg prtma kali ku kenal nah.";

    gifElem.src = "slide5.GIF";
    textElem.innerHTML = "";
    btnLanjut.style.display = "none";
    btnTolak.style.display = "none";

    let i = 0;

    function typeFinal() {
      if (i < finalText.length) {
        textElem.innerHTML += finalText.charAt(i);
        i++;
        typingTimeout = setTimeout(typeFinal, speedTyping); // adjust speed here
      } else {
        setTimeout(() => {
          alert("Mission accomplished! 🚩 Skrng saya balik ke Barru dulu ya");
        }, 500);
      }
    }

    typeFinal();
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
