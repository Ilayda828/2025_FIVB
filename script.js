// 2025 Dünya Şampiyonası Kadrosu (Gerçek fotoğraflarla)
const players = [
    {
        name: "Cansu Özbay",
        position: "Pasör",
        birthDate: "17.10.1996",
        height: "182 cm",
        weight: "78 kg",
        image: "https://tvf.org.tr/storage/78402/01K0RQFPK0NBDRZ24FRR99XTWR.png",
        club: "VakıfBank Istanbul",
        info: "Takımın deneyimli pasörü ve oyun kurucusu. Mükemmel pas dağılımı ve taktik zekası ile tanınır. 2017'den beri milli takımda forma giyen başarılı sporcu, takımın vazgeçilmez oyuncularından biri."
    },
    {
        name: "Elif Şahin",
        position: "Pasör",
        birthDate: "19.01.2000",
        height: "189 cm",
        weight: "68 kg",
        image: "https://tvf.org.tr/storage/78900/01K2YJGG10XRN96GH7P1JAKANX.png",
        club: "EczacıbaÅŸı Dynavit",
        info: "Genç ve yetenekli pasör. Hızlı oyun kurma becerisi ile dikkat çeker. Milli takımın gelecek vadeden oyuncularından biri olarak gösteriliyor."
    },
    {
        name: "Melissa Vargas",
        position: "Pasör Çaprazı",
        birthDate: "16.10.1999",
        height: "194 cm",
        weight: "76 kg",
        image: "https://tvf.org.tr/storage/76694/01JXWY5JXDBKQRW1VQGBD0ZH8D.png",
        club: "Fenerbahçe Medicana",
        info: "Kübalı asıllı güçlü çapraz. Takımın en önemli skor üreticilerinden biri. 2018'den beri Türkiye Milli Takımı forması giyen dünya çapında bir oyuncu."
    },
    {
        name: "Ebrar Karakurt",
        position: "Smaçör",
        birthDate: "17.01.2000",
        height: "195 cm",
        weight: "72 kg",
        image: "https://tvf.org.tr/storage/76695/01JXWY5JY01HDYZJF3JNRJCXK5.png",
        club: "EczacıbaÅŸı Dynavit",
        info: "Genç ve yetenekli smaçör. Güçlü saldırıları ve çok yönlülüğü ile öne çıkar. Milli takımın geleceğinin parlak isimlerinden biri."
    },
    {
        name: "Hande Baladın",
        position: "Smaçör",
        birthDate: "01.09.1997",
        height: "190 cm",
        weight: "78 kg",
        image: "https://tvf.org.tr/storage/78405/01K0RQMKM40PV9VGVFC20J92MF.png",
        club: "Fenerbahçe Medicana",
        info: "Deneyimli smaçör. Hem saldırıda hem savunmada etkili performans sergiler. Takımın önemli oyuncularından biri olarak görev yapıyor."
    },
    {
        name: "Yaprak Erkek",
        position: "Smaçör",
        birthDate: "02.09.2001",
        height: "182 cm",
        weight: "60 kg",
        image: "https://tvf.org.tr/storage/76240/01JWTBE28VHMDFBP6KK6CBNMF0.png",
        club: "EczacıbaÅŸı Dynavit",
        info: "Genç ve hızlı oyuncu. Çevikliği ve saldırı çeşitliliği ile dikkat çeker. Takımın gelecek vadeden oyuncularından biri."
    },
    {
        name: "İlkin Aydın",
        position: "Smaçör",
        birthDate: "05.01.2000",
        height: "183 cm",
        weight: "67 kg",
        image: "https://tvf.org.tr/storage/78898/01K2YJ646M54H86TP7ZWD584V6.png",
        club: "Galatasaray Daikin",
        info: "Genç ve umut veren oyuncu. Saldırıdaki çok yönlülüğü ile fark yaratır. Milli takımda kendini kanıtlamaya çalışan genç yetenek."
    },
    {
        name: "Derya Cebecioğlu",
        position: "Smaçör",
        birthDate: "24.10.2000",
        height: "182 cm",
        weight: "68 kg",
        image: "https://tvf.org.tr/storage/78899/01K2YJGFZYDPQKK22VRK76844D.png",
        club: "VakıfBank Istanbul",
        info: "Genç ve dinamik smaçör. Güçlü saldırı yeteneği ile dikkat çeker. VakıfBank'ta edindiği tecrübeyi milli takıma taşıyor."
    },
    {
        name: "Zehra Güneş",
        position: "Orta Oyuncu",
        birthDate: "07.07.1999",
        height: "198 cm",
        weight: "80 kg",
        image: "https://tvf.org.tr/storage/76696/01JXWY5JYGXY91W90Y59TDB039.png",
        club: "VakıfBank Istanbul",
        info: "Takımın en uzun oyuncusu. Güçlü blok ve hızlı hücumları ile öne çıkar. Milli takımın vazgeçilmez orta oyuncularından biri."
    },
    {
        name: "Eda Erdem Dündar",
        position: "Orta Oyuncu",
        birthDate: "22.06.1987",
        height: "188 cm",
        weight: "75 kg",
        image: "https://tvf.org.tr/storage/78897/01K2YJ645G75VFC5V4JTBTCG2M.png",
        club: "Fenerbahçe Medicana",
        info: "Takımın kaptanı ve en deneyimli oyuncusu. Liderlik vasfı ve oyun zekası ile bilinir. 2005'ten beri milli takımda forma giyen efsane isim."
    },
    {
        name: "Gizem Örge",
        position: "Libero",
        birthDate: "26.04.1993",
        height: "170 cm",
        weight: "59 kg",
        image: "https://tvf.org.tr/storage/76692/2.png",
        club: "Fenerbahçe Medicana",
        info: "Deneyimli libero. Hızlı ve etkili savunma refleksleri ile takıma katkı sağlar. Milli takımın güvenilir liberosu."
    },
    {
        name: "Aslı Kalaç",
        position: "Orta Oyuncu",
        birthDate: "23.04.1995",
        height: "183 cm",
        weight: "65 kg",
        image: "https://tvf.org.tr/storage/76244/01JWTBE2APB2G7W546EZZE6CTR.png",
        club: "Fenerbahçe Medicana",
        info: "Güvenilir orta oyuncu. İstikrarlı performansı ile takımın önemli oyuncularından. Savunma ve hücumda dengeli bir oyun sergiler."
    },
    {
        name: "Sinead Jack-Kısal",
        position: "Orta Oyuncu",
        birthDate: "08.11.1993",
        height: "190 cm",
        weight: "83 kg",
        image: "https://tvf.org.tr/storage/78896/01K2YJ2E1ZR60X21QHPKJK1QRZ.jpg",
        club: "EczacıbaÅŸı Dynavit",
        info: "Amerikan asıllı orta oyuncu. Güçlü fizik yapısı ve blok yetenekleri ile takıma önemli katkılar sağlar."
    },
    {
        name: "Eylül Akarçeşme Yatgın",
        position: "Libero",
        birthDate: "01.10.1999",
        height: "173 cm",
        weight: "55 kg",
        image: "https://tvf.org.tr/storage/78895/01K2YJ2E0ZT3YA3XRZAV5EE7QF.png",
        club: "Galatasaray Daikin",
        info: "Deneyimli libero. Hızlı refleksleri ve güvenilir savunması ile bilinir. Takımın savunma organizasyonunda önemli rol oynar."
    }
];

// Quiz Soru Havuzu
const questionPool = [
    {
        question: "Filenin Sultanları'nın kaptanı kimdir?",
        options: ["Zehra Güneş", "Eda Erdem Dündar", "Melissa Vargas", "Cansu Özbay"],
        correct: 1
    },
    {
        question: "2025 Dünya Şampiyonası kadrosunda kaç oyuncu bulunmaktadır?",
        options: ["12", "13", "14", "15"],
        correct: 2
    },
    {
        question: "Hangi oyuncu Kübalı asıllıdır?",
        options: ["Ebrar Karakurt", "Melissa Vargas", "Zehra Güneş", "Hande Baladın"],
        correct: 1
    },
    {
        question: "En uzun boylu oyuncu kimdir?",
        options: ["Zehra Güneş", "Melissa Vargas", "Ebrar Karakurt", "Sinead Jack-Kısal"],
        correct: 0
    },
    {
        question: "Takımın en tecrübeli oyuncusu kimdir?",
        options: ["Cansu Özbay", "Eda Erdem Dündar", "Gizem Örge", "Aslı Kalaç"],
        correct: 1
    },
    {
        question: "Kaç tane libero oyuncusu bulunmaktadır?",
        options: ["1", "2", "3", "4"],
        correct: 1
    },
    {
        question: "Melissa Vargas hangi pozisyonda oynuyor?",
        options: ["Smaçör", "Orta Oyuncu", "Pasör Çaprazı", "Pasör"],
        correct: 2
    },
    {
        question: "1987 doğumlu oyuncu kimdir?",
        options: ["Cansu Özbay", "Eda Erdem Dündar", "Gizem Örge", "Aslı Kalaç"],
        correct: 1
    },
    {
        question: "Hangi oyuncu Fenerbahçe Medicana'te oynuyor?",
        options: ["Melissa Vargas", "Zehra Güneş", "Ebrar Karakurt", "Yaprak Erkek"],
        correct: 0
    },
    {
        question: "En genç oyunculardan biri kimdir?",
        options: ["Yaprak Erkek", "İlkin Aydın", "Derya Cebecioğlu", "Eylül Akarçeşme Yatgın"],
        correct: 0
    },
    {
        question: "VakıfBank Istanbul'da hangi oyuncular yer almaktadır?",
        options: ["Cansu Özbay ve Zehra Güneş", "Melissa Vargas ve Eda Erdem", "Ebrar Karakurt ve Yaprak Erkek", "Gizem Örge ve Aslı Kalaç"],
        correct: 0
    },
    {
        question: "Hangi oyuncu en kısa boylular arasındadır?",
        options: ["Eylül Akarçeşme Yatgın", "Gizem Örge", "Yaprak Erkek", "İlkin Aydın"],
        correct: 1
    }
];

let currentPlayerIndex = 0;
let currentQuestion = 0;
let score = 0;
let selectedOption = null;
let currentQuizQuestions = [];

// Sayfa yüklendiğinde oyuncuları göster
document.addEventListener('DOMContentLoaded', function() {
    showPlayer(currentPlayerIndex);
});

// Oyuncu göster
function showPlayer(index) {
    const player = players[index];
    const playerContent = document.getElementById('playerContent');
    const playerCounter = document.getElementById('playerCounter');
    
    const imageElement = player.image.startsWith('http') ? 
        `<img src="${player.image}" alt="${player.name}" class="player-image" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
         <div class="player-placeholder" style="display: none;">🏐</div>` :
        `<div class="player-placeholder">🏐</div>`;
    
    playerContent.innerHTML = `
        ${imageElement}
        <div class="player-name">${player.name}</div>
        <div class="player-position">${player.position}</div>
        <div class="player-stats">
            <div class="stat-item">
                <div class="stat-label">Doğum Tarihi</div>
                <div class="stat-value">${player.birthDate}</div>
            </div>
            <div class="stat-item">
                <div class="stat-label">Boy</div>
                <div class="stat-value">${player.height}</div>
            </div>
            <div class="stat-item">
                <div class="stat-label">Kilo</div>
                <div class="stat-value">${player.weight}</div>
            </div>
            <div class="stat-item">
                <div class="stat-label">Kulüp</div>
                <div class="stat-value">${player.club}</div>
            </div>
        </div>
        <div class="player-info">${player.info}</div>
    `;
    
    playerCounter.textContent = `${index + 1} / ${players.length}`;
}

// Sonraki oyuncu
function nextPlayer() {
    currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
    showPlayer(currentPlayerIndex);
}

// Önceki oyuncu
function previousPlayer() {
    currentPlayerIndex = (currentPlayerIndex - 1 + players.length) % players.length;
    showPlayer(currentPlayerIndex);
}

// Bölüm göster
function showSection(sectionName) {
    // Tüm bölümleri gizle
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Seçilen bölümü göster
    document.getElementById(sectionName).classList.add('active');
    
    // Navigasyon butonlarını güncelle
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Aktif butonu bul ve işaretle
    if (sectionName === 'players') {
        document.querySelector('.nav-btn').classList.add('active');
    } else {
        document.querySelectorAll('.nav-btn')[1].classList.add('active');
    }
}

// Rastgele 5 soru seç
function selectRandomQuestions() {
    const shuffled = questionPool.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 5);
}

// Quiz başlat
function startQuiz() {
    currentQuestion = 0;
    score = 0;
    currentQuizQuestions = selectRandomQuestions();
    showQuestion();
}

// Soruyu göster
function showQuestion() {
    const quizContent = document.getElementById('quizContent');
    const question = currentQuizQuestions[currentQuestion];
    
    quizContent.innerHTML = `
        <div class="progress">
            <div class="progress-bar" style="width: ${(currentQuestion / currentQuizQuestions.length) * 100}%"></div>
        </div>
        <div class="question">
            Soru ${currentQuestion + 1}/${currentQuizQuestions.length}: ${question.question}
        </div>
        <div class="options">
            ${question.options.map((option, index) => 
                `<button class="option" onclick="selectOption(${index})">${option}</button>`
            ).join('')}
        </div>
        <button class="quiz-btn" onclick="nextQuestion()" disabled>Sonraki Soru</button>
        <div class="score-display">Skor: ${score}/${currentQuizQuestions.length}</div>
    `;
    
    selectedOption = null;
}

// Seçenek seç
function selectOption(optionIndex) {
    selectedOption = optionIndex;
    
    // Tüm seçenekleri resetle
    document.querySelectorAll('.option').forEach((option, index) => {
        option.classList.remove('selected', 'correct', 'wrong');
        if (index === optionIndex) {
            option.classList.add('selected');
        }
    });
    
    // Sonraki soru butonunu aktif et
    document.querySelector('.quiz-btn').disabled = false;
}

// Sonraki soru
function nextQuestion() {
    const question = currentQuizQuestions[currentQuestion];
    
    // Cevabı kontrol et
    if (selectedOption === question.correct) {
        score++;
    }
    
    // Doğru ve yanlış cevapları göster
    document.querySelectorAll('.option').forEach((option, index) => {
        if (index === question.correct) {
            option.classList.add('correct');
        } else if (index === selectedOption && selectedOption !== question.correct) {
            option.classList.add('wrong');
        }
    });
    
    // 1.5 saniye sonra devam et
    setTimeout(() => {
        currentQuestion++;
        
        if (currentQuestion < currentQuizQuestions.length) {
            showQuestion();
        } else {
            showResult();
        }
    }, 1500);
}

// Sonucu göster
function showResult() {
    const quizContent = document.getElementById('quizContent');
    const percentage = Math.round((score / currentQuizQuestions.length) * 100);
    let message = "";
    let emoji = "";
    
    if (percentage >= 80) {
        message = "Mükemmel! Sen gerçekten bir Filenin Sultanları uzmanısın!";
        emoji = "🏆";
    } else if (percentage >= 60) {
        message = "Harika! Filenin Sultanları hakkında iyi bilgin var!";
        emoji = "👏";
    } else if (percentage >= 40) {
        message = "Fena değil! Biraz daha çalışman gerekiyor.";
        emoji = "📚";
    } else {
        message = "Cesaretini kaybetme! Oyuncuları daha iyi tanımaya ne dersin?";
        emoji = "💪";
    }
    
    quizContent.innerHTML = `
        <div class="progress">
            <div class="progress-bar" style="width: 100%"></div>
        </div>
        <h2 class="quiz-title">Quiz Tamamlandı!</h2>
        <div class="score-display">
            <div style="font-size: 3rem; margin-bottom: 15px;">${emoji}</div>
            <div>Skorun: ${score}/${currentQuizQuestions.length} (${percentage}%)</div>
        </div>
        <p style="font-size: 1.2rem; margin: 30px 0; line-height: 1.5;">${message}</p>
        <button class="quiz-btn" onclick="startQuiz()">Tekrar Dene</button>
        <button class="quiz-btn" onclick="showSection('players')" style="background: rgba(255,255,255,0.3); margin-left: 10px;">Oyuncuları İncele</button>
    `;
}

// Klavye kısayolları
document.addEventListener('keydown', function(e) {
    if (document.getElementById('players').classList.contains('active')) {
        if (e.key === 'ArrowLeft') {
            previousPlayer();
        } else if (e.key === 'ArrowRight') {
            nextPlayer();
        }
    }
});

// Swipe desteği (mobil)
let startX = 0;
let endX = 0;

document.addEventListener('touchstart', function(e) {
    startX = e.touches[0].clientX;
});

document.addEventListener('touchend', function(e) {
    endX = e.changedTouches[0].clientX;
    handleSwipe();
});

function handleSwipe() {
    const threshold = 50;
    const diff = startX - endX;
    
    if (document.getElementById('players').classList.contains('active')) {
        if (diff > threshold) {
            nextPlayer();
        } else if (diff < -threshold) {
            previousPlayer();
        }
    }
}
        