const slides = [
    { 
        text: "I know I made a mistake, and I'm truly sorry. But please, stop saying you're not worth it. For me, every kilometer from Barru to Bulukumba is proof that you ARE.", 
        gif: "slide1.GIF" 
    },
    { 
        text: "You see 'flaws', but I see the 'little things' that make you special. Your childish side, your energy... I cherish all of them. ✨", 
        gif: "slide2.GIF" 
    },
    { 
        text: "I didn't make this code and travel this far to pressure you. I did it because I'm hooked on you, and I'm not going anywhere.", 
        gif: "slide3.GIF" 
    },
    { 
        text: "This Tumbler is a symbol that I'll stay. No matter the distance, no matter the ultimatum. So... will you accept it, Princes? 😊", 
        gif: "slide4.GIF", 
        isLast: true 
    }
];

let currentSlide = 0;

function checkPass() {
    const input = document.getElementById('passInput').value.toLowerCase().trim();
    
    // Sesuaikan password dengan nama kontak dia di HP Bos
    if (input === 'princes') { 
        const audio = document.getElementById('myAudio');
        
        // Karena file sudah di-edit ke detik 48, langsung play dari awal file
        audio.play().catch(e => {
            console.log("Browser block autoplay, but button click should fix it.");
        });

        document.getElementById('password-gate').style.display = 'none';
        document.getElementById('content-area').style.display = 'flex';
        showSlide();
    } else {
        alert("Incorrect password, Princes! Try again? 😜");
    }
}

function showSlide() {
    const slide = slides[currentSlide];
    document.getElementById('slide-text').innerText = slide.text;
    document.getElementById('slide-gif').src = slide.gif;

    const nextBtn = document.getElementById('nextBtn');
    if (slide.isLast) {
        nextBtn.innerText = "Accept & Forgive? ❤️";
        nextBtn.onclick = () => {
            alert("Thank you for choosing to stay. See you in Bulukumba! ✨");
        };
    } else {
        nextBtn.innerText = "Next ➜";
        nextBtn.onclick = nextSlide;
    }
}

function nextSlide() {
    if (currentSlide < slides.length - 1) {
        currentSlide++;
        showSlide();
    }
}
