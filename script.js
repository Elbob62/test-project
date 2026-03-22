// ==========================================
// 1. التحكم في شاشة التحميل (Loader)
// ==========================================
window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.getElementById('loader');
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => { loader.style.display = 'none'; }, 1000);
        }
    }, 4000); 
});

// ==========================================
// 2. نظام البوابات (الباسوردات)
// ==========================================

// البوابة الأولى: صفحة الحضن
function checkPassword() { // دي الدالة اللي مربوطة بزرار صفحة الحضن
    const passInput = document.getElementById('passInput').value;
    const correctPass = "205213"; 

    if (passInput === correctPass) {
        alert("قلب بابا اشطر بنوته ❤️✨");
        // إخفاء صفحة الحضن وإظهار صفحة تاريخ الميلاد
        document.getElementById('loginSection').style.display = 'none';
        document.getElementById('birthdaySection').style.display = 'block';
    } else {
        alert("ادي الحضن ل حسن الاول 😤");
    }
}

// البوابة الثانية: صفحة تاريخ الميلاد
function checkSecondPassword() { // دي الدالة المربوطة بزرار صفحة الميلاد
    const birthInput = document.getElementById('birthInput').value;
    const correctBirth = "21/3/2005"; 

    if (birthInput === correctBirth) {
        alert("يلا ندخل ي قلب بابا 😍❤️");
        // إخفاء صفحة الميلاد وإظهار المملكة أخيراً
        document.getElementById('birthdaySection').style.display = 'none';
        document.getElementById('secretContent').style.display = 'block';
        // السطر اللي هنزوده هنا 👇
        playMyMusic(); 
        
        
        // تشغيل الموسيقى والأنيميشن والعداد
        const music = document.getElementById('bgMusic');
        if(music) music.play();
        
        startAnimations(); 
        updateTimer();
    } else {
        alert("حاولي تاني عشان ندخل المملكه ي قلب بابا 🥺❤️");
    }
}

// ==========================================
// 3. العداد الزمني (تاريخ البداية)
// ==========================================
const startDate = new Date(2026, 0, 23, 9, 0, 0); 

function updateTimer() {
    const now = new Date();
    const diff = now - startDate;

    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
    const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    if(document.getElementById("years")) {
        document.getElementById("years").innerText = years;
        document.getElementById("months").innerText = months;
        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;
    }
}
setInterval(updateTimer, 1000);

// ==========================================
// 4. الأنيميشن (القلوب والبلالين والأحضان)
// ==========================================

function startAnimations() {
    setInterval(createHeart, 300);
    setInterval(createBalloon, 700);
}

function createHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️🫂";
    heart.style.position = "fixed";
    heart.style.top = "-50px";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 20 + "px";
    heart.style.zIndex = "1000";
    heart.animate([
        { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
        { transform: `translateY(110vh) rotate(${Math.random() * 360}deg)`, opacity: 0 }
    ], { duration: Math.random() * 3000 + 2000, easing: 'linear' });
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}

function createBalloon() {
    const balloon = document.createElement("div");
    balloon.innerHTML = "🎈";
    balloon.style.position = "fixed";
    balloon.style.bottom = "-50px";
    balloon.style.left = Math.random() * 100 + "vw";
    balloon.style.fontSize = "35px";
    balloon.style.zIndex = "1000";
    balloon.animate([
        { transform: 'translateY(0)', opacity: 1 },
        { transform: `translateY(-110vh)`, opacity: 0 }
    ], { duration: Math.random() * 4000 + 4000, easing: 'ease-out' });
    document.body.appendChild(balloon);
    setTimeout(() => balloon.remove(), 8000);
}

function createFallingHug() {
    const login = document.getElementById('loginSection');
    const bday = document.getElementById('birthdaySection');
    // الأحضان تظهر في صفحة الحضن أو صفحة الميلاد فقط
    if ((login && login.style.display !== 'none') || (bday && bday.style.display !== 'none')) {
        const hug = document.createElement("div");
        hug.innerHTML = "🫂";
        hug.className = "hug-falling";
        hug.style.left = Math.random() * 100 + "vw";
        document.body.appendChild(hug);
        setTimeout(() => hug.remove(), 5000);
    }
}
setInterval(createFallingHug, 400);

function revealCard(card, text) {
    card.innerText = text;
    card.style.background = "#ff4d6d";
    card.style.color = "white";
    card.style.transform = "scale(1.1) rotate(2deg)";
}
// وظيفة صنع أحضان متساقطة لصفحة الحضن وصفحة الميلاد
function createFallingHug() {
    const loginSection = document.getElementById('loginSection');
    const birthdaySection = document.getElementById('birthdaySection');
    
    // الشرط: الأحضان تظهر بس لو صفحة الحضن "أو" صفحة الميلاد مفتوحين
    if ((loginSection && loginSection.style.display !== 'none') || 
        (birthdaySection && birthdaySection.style.display !== 'none')) {
        
        const hug = document.createElement("div");
        hug.innerHTML = "🫂";
        hug.className = "hug-falling"; // بنستخدم الكلاس اللي إنت معرفه في الـ CSS
        
        // إعدادات عشوائية لمكان وسرعة الحضان
        hug.style.left = Math.random() * 100 + "vw";
        hug.style.fontSize = Math.random() * 20 + 20 + "px";
        hug.style.opacity = Math.random() * 0.5 + 0.3; // درجة شفافية متغيرة
        
        document.body.appendChild(hug);
        
        // مسح العنصر بعد 5 ثواني عشان م يتقلش الجهاز
        setTimeout(() => {
            hug.remove();
        }, 5000);
    }
}

// تشغيل دالة الأحضان كل 400 ملي ثانية
setInterval(createFallingHug, 400);

// دالة تشغيل الموسيقى عند الدخول للمملكة
function playMyMusic() {
    const music = document.getElementById('bgMusic');
    const player = document.getElementById('musicPlayer');
    if(music) {
        music.play();
        player.style.display = 'block';
        updateMusicProgress(); // بدأ تحريك البار
    }
}

// دالة التحكم في التشغيل والإيقاف
// دالة تشغيل الموسيقى عند الدخول للمملكة
function playMyMusic() {
    const music = document.getElementById('bgMusic');
    const player = document.getElementById('musicPlayer');
    if(music) {
        music.play();
        player.style.display = 'block';
        updateMusicProgress(); // بدأ تحريك البار
    }
}

// دالة التحكم في التشغيل والإيقاف
function toggleMusic() {
    const music = document.getElementById('bgMusic');
    const icon = document.getElementById('playIcon');
    if (music.paused) {
        music.play();
        icon.innerText = "⏸️";
    } else {
        music.pause();
        icon.innerText = "▶️";
    }
}

// تحديث شريط التقدم (البار البنفسجي)
function updateMusicProgress() {
    const music = document.getElementById('bgMusic');
    const bar = document.getElementById('musicBar');
    
    music.addEventListener('timeupdate', () => {
        const percentage = (music.currentTime / music.duration) * 100;
        bar.style.width = percentage + '%';
    });
}

// لا تنسى إضافة استدعاء playMyMusic() داخل دالة checkSecondPassword() كما اتفقنا
function playMyMusic() {
    const music = document.getElementById('bgMusic');
    const player = document.getElementById('musicPlayer'); // ده المربع اللي فيه شكل الأغنية
    const bar = document.getElementById('musicBar'); // ده الخط اللي بيتحرك

    if (music && player) {
        // 1. إظهار شكل المشغل (البار اللي في الصورة) فوراً
        player.style.display = 'block'; 

        // 2. محاولة تشغيل الأغنية
        music.play().then(() => {
            console.log("الأغنية اشتغلت والشكل ظهر!");
        }).catch(error => {
            console.log("المتصفح مستني حركة.. أول ما ميرنا تدوس في أي حتة هتشتغل");
            // حل احتياطي: لو المتصفح رفض، أول ما تلمس الشاشة تشتغل
            document.addEventListener('click', () => {
                music.play();
            }, { once: true });
        });

        // 3. تحريك الخط (البروجرس بار) اللي في الصورة مع الأغنية
        music.addEventListener('timeupdate', () => {
            if (music.duration) {
                const percentage = (music.currentTime / music.duration) * 100;
                if (bar) bar.style.width = percentage + '%';
            }
        });
    }
}

// 1. وظيفة هروب الزرار (لأ) حوالين زرار (آه)
function moveButton() {
    const btn = document.getElementById('noBtn');
    
    // بنخلي الحركة "متحررة" في مساحة محددة حوالين السؤال
    btn.style.position = 'absolute'; 

    // بنحدد مساحة الهروب (150 بكسل حوالين مكانه)
    const range = 150; 
    
    // توليد مكان عشوائي
    let randomX = Math.floor(Math.random() * (range * 2)) - range;
    let randomY = Math.floor(Math.random() * (range * 2)) - range;

    // التأكد إن الزرار ميركبش فوق زرار "آه"
    if (Math.abs(randomX) < 60) randomX += 100;
    if (Math.abs(randomY) < 60) randomY += 100;

    // تطبيق الحركة بشكل ناعم
    btn.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

// 2. وظيفة الموافقة (لما تضغط على آه طبعاً)
function accepted() {
    // إخفاء السؤال والزراير تماماً
    document.querySelector('.buttons-container').style.display = 'none';
    document.querySelector('.proposal-section h2').style.display = 'none';
    
    // إظهار منطقة الاحتفال (الرسالة والقلوب)
    const celebration = document.getElementById('celebration');
    celebration.classList.remove('hidden');
    
    // تنبيه مبهج يظهر على الشاشة
    alert("أجمل 'آه' في الدنيا! ربنا يخليكي ليا يا قلبي ❤️🫂🫂");

    // (اختياري) لو عايز تخلي الصفحة تطلع قلوب في كل حتة
    createHeartsRain();
}

// 3. وظيفة إضافية عشان "تمطر" قلوب (حركة شيك)
function createHeartsRain() {
    const rainContainer = document.querySelector('.hearts-rain');
    if(rainContainer) {
        for(let i=0; i<30; i++) {
            const heart = document.createElement('span');
            heart.innerHTML = "❤️";
            heart.style.position = "fixed";
            heart.style.left = Math.random() * 100 + "vw";
            heart.style.top = "-10vh";
            heart.style.fontSize = Math.random() * 20 + 20 + "px";
            heart.style.animation = `rain ${Math.random() * 2 + 2}s linear forwards`;
            document.body.appendChild(heart);
        }
    }
}

