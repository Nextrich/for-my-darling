document.addEventListener('DOMContentLoaded', function() {
    // Элементы DOM
    const valentineCard = document.getElementById('valentineCard');
    const heartSound = document.getElementById('heartSound');
    const heart = document.querySelector('.heart');
    
    // Элементы для страниц
    const leftPage = document.querySelector('.page-left .message');
    const rightPage = document.querySelector('.page-right .message');
    const leftPageNumber = document.querySelector('.page-number.left');
    const rightPageNumber = document.querySelector('.page-number.right');
    
    // Массив с 100 тёплыми словами
    const phrases = [
        "Ты — самое прекрасное, что случилось со мной в жизни.",
        "Каждый день с тобой — это подарок судьбы.",
        "Твоя улыбка делает мой мир ярче.",
        "Я бесконечно благодарен судьбе за встречу с тобой.",
        "Ты вдохновляешь меня становиться лучше.",
        "Мне повезло, что ты есть в моей жизни.",
        "Твои глаза — моя любимая вселенная.",
        "С тобой любой день становится лучшим.",
        "Ты делаешь меня самым счастливым человеком на свете.",
        "Моё сердце бьётся только для тебя.",
        "Любовь к тебе — самое сильное чувство в моей жизни, которое есть и будет.",
        "Ты — моя мечта, которая сбылась.",
        "С тобой я понял, что такое настоящее счастье.",
        "Ты — самое дорогое, что у меня есть.",
        "Я люблю тебя больше с каждым днём.",
        "Твоё присутствие согревает мою душу.",
        "Ты — мой лучик солнца в пасмурный день.",
        "С тобой я чувствую себя дома, где бы мы ни были.",
        "Ты идеальна во всём, даже в своих несовершенствах.",
        "Мой мир вращается вокруг тебя.",
        "Ты — ответ на все мои молитвы.",
        "С тобой я стал лучше, чем был до встречи.",
        "Твоя любовь — мой самый ценный клад.",
        "Ты наполняешь мою жизнь смыслом.",
        "Каждая минута с тобой бесценна.",
        "Ты — мой тихий уголок счастья.",
        "С тобой я могу быть собой, не притворяясь.",
        "Ты — моё самое большое достижение.",
        "Моя любовь к тебе не измерима в нашем мире.",
        "Ты — тот человек, о котором я всегда мечтал.",
        "С тобой мне не страшны любые трудности.",
        "Ты делаешь мою жизнь полной и насыщенной.",
        "Моё сердце навсегда твоё.",
        "Ты — самая красивая история в моей жизни.",
        "С тобой каждый момент становится особенным.",
        "Ты — моё самое лучшее решение.",
        "Моя жизнь обрела краски с твоим приходом.",
        "Ты — то, чего мне не хватало для полного счастья.",
        "С тобой я чувствую себя самым удачливым человеком.",
        "Ты — моя опора и поддержка.",
        "Моя любовь к тебе безгранична.",
        "Ты превзошла все мои ожидания.",
        "С тобой я узнал, что такое настоящая любовь.",
        "Ты — моя самая заветная мечта.",
        "Моё сердце выбрало тебя и только тебя.",
        "Ты — лучшее, что есть в моей жизни.",
        "С тобой я готов на любые подвиги.",
        "Ты — мой источник вдохновения.",
        "Моя жизнь разделилась на 'до тебя' и 'счастливая'.",
        "Ты — моя тихая гавань в бурном море.",
        "С тобой даже молчание становится разговором сердец.",
        "Ты — тот человек, с которым хочется прожить всю жизнь.",
        "Моя любовь к тебе — это не чувство, а состояние души.",
        "Ты — моё самое большое счастье.",
        "С тобой я понимаю, что такое гармония.",
        "Ты — моя вторая половинка, которую я так долго искал.",
        "Моё сердце поёт, когда ты отправляешь кружочки и голсовые)))",
        "Ты — самый красивый цветок в саду моей жизни.",
        "С тобой я обрёл смысл верить.",
        "Ты — моя путеводная звезда.",
        "Моя любовь к тебе не имеет ни начала, ни конца.",
        "Ты — то чудо, в которое я всегда верил.",
        "С тобой я забываю о всех проблемах.",
        "Ты — мой личный ангел-хранитель.",
        "Моё сердце забилось чаще в тот день, когда я тебя встретил.",
        "Ты — самое дорогое сокровище в моей жизни.",
        "С тобой я стал тем, кем всегда хотел быть.",
        "Ты — моя самая большая радость.",
        "Моя любовь к тебе — это вечный огонь в моём сердце.",
        "Ты — тот человек, ради которого хочется жить.",
        "С тобой я понял, что такое жить с миром в сердце, ага ага))",
        "Ты — моё самое большое богатство.",
        "Моё сердце навсегда останется с тобой.",
        "Ты — мой самый любимый роман.",
        "С тобой я чувствую себя самым самым.",
        "Ты — мой личный источник счастья.",
        "Моя любовь к тебе сильнее любых слов.",
        "Ты — то, ради чего стоит просыпаться каждое утро.",
        "С тобой я стал целостной личностью.",
        "Ты — моя самая сладкая мечта.",
        "Ты показала мне ценность простого телефонного разговора.",
        "Ты — самое удивительное создание на свете.",
        "С тобой я обрёл крылья.",
        "Ты — мой самый верный друг и любимая женщина.",
        "Моя любовь к тебе не знает границ.",
        "Ты — то самое чудо, которое со мной случилось.",
        "С тобой я понял, что такое настоящая преданность.",
        "Ты — мой личный магнит счастья.",
        "Моё сердце бьётся в унисон с твоим.",
        "Ты — самая желанная женщина в моей жизни.",
        "С тобой я забываю о времени.",
        "Ты — моя самая большая слабость и сила одновременно.",
        "Моя любовь к тебе — это вечная весна в моей душе.",
        "Ты — тот человек, с которым хочется делиться всем.",
        "С тобой я стал лучше во всём.",
        "Ты — моя самая главная победа.",
        "Моё сердце выбрало тебя из миллиардов.",
        "Ты — мой самый ценный подарок от судьбы.",
        "С тобой я готов идти на край света.",
        "Ты — моя единственная и неповторимая.",
        "Моя любовь к тебе будет длиться вечно."
    ];
    
    let usedPhrases = [];
    let currentPhraseIndex = -1;
    let previousPhraseIndex = -1;
    let pageNumber = 1;
    let maxPages = 100;
    
    // Инициализация
    showRandomPhrase();
    
    // Открытие книги при клике на сердечко
    heart.addEventListener('click', function(e) {
        e.stopPropagation();
        openBook();
    });
    
    // Открытие книги при клике на обложку
    document.querySelector('.card-cover').addEventListener('click', function(e) {
        openBook();
    });
    
    // Закрытие книги при клике на открытую книгу
    document.querySelector('.card-pages').addEventListener('click', function(e) {
        closeBook();
        
        // Через задержку открываем с новой фразой
        setTimeout(() => {
            showRandomPhrase();
            openBook();
        }, 800);
    });
    
    // Функции
    function openBook() {
        valentineCard.classList.add('open');
        heartSound.currentTime = 0;
        heartSound.play().catch(e => console.log("Автовоспроизведение звука заблокировано"));
    }
    
    function closeBook() {
        valentineCard.classList.remove('open');
    }
    
    function showRandomPhrase() {
        // Сохраняем предыдущую фразу на левой странице
        if (currentPhraseIndex !== -1) {
            leftPage.textContent = phrases[currentPhraseIndex];
            leftPage.style.fontSize = '24px';
            leftPage.style.fontWeight = '500';
            leftPage.style.animation = 'none';
            leftPage.offsetHeight;
            leftPage.style.animation = 'fadeIn 0.5s forwards';
        }
        
        // Если все фразы использованы, начинаем заново
        if (usedPhrases.length >= phrases.length) {
            usedPhrases = [];
        }
        
        // Выбираем случайную неиспользованную фразу
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * phrases.length);
        } while (usedPhrases.includes(randomIndex) && usedPhrases.length < phrases.length);
        
        usedPhrases.push(randomIndex);
        currentPhraseIndex = randomIndex;
        
        // Увеличиваем номер страницы
        pageNumber++;
        if (pageNumber > maxPages) {
            pageNumber = 1; // Начинаем с начала после 100 страниц
        }
        
        // Обновляем отображение
        updatePages();
    }
    
    function updatePages() {
        // Правая страница - новая фраза
        rightPage.textContent = phrases[currentPhraseIndex];
        rightPage.style.opacity = 1;
        rightPage.style.fontSize = '26px';
        rightPage.style.fontWeight = '500';
        rightPage.style.animation = 'none';
        rightPage.offsetHeight;
        rightPage.style.animation = 'fadeIn 0.8s forwards';
        
        // Номера страниц
        if (pageNumber === 1) {
            // Первая страница - особый случай
            leftPage.textContent = "Моё признание для самой любимой, милой, прекрасной, лучшей и незабываемой ❤❤❤";
            leftPage.style.fontSize = '28px';
            leftPage.style.fontWeight = 'bold';
            leftPageNumber.textContent = "стр. ∞";
        } else {
            // Для левой страницы - номер на 1 меньше
            leftPageNumber.textContent = `стр. ${pageNumber - 1}`;
        }
        
        // Для правой страницы - текущий номер
        rightPageNumber.textContent = `стр. ${pageNumber}`;
    }
    
    // Создаём сердечки на фоне всей страницы
    createHeartsBackground();
    
    function createHeartsBackground() {
        const background = document.querySelector('.hearts-background');
        const heartsCount = 25; // Увеличиваем количество сердечек для фона всей страницы
        
        for (let i = 0; i < heartsCount; i++) {
            const heart = document.createElement('div');
            heart.innerHTML = '❤';
            heart.style.position = 'absolute';
            heart.style.left = `${Math.random() * 100}%`;
            heart.style.top = `${Math.random() * 100}%`;
            heart.style.fontSize = `${Math.random() * 25 + 15}px`;
            heart.style.color = `rgba(255, 71, 87, ${Math.random() * 0.3 + 0.05})`;
            heart.style.animation = `float ${Math.random() * 20 + 10}s infinite linear`;
            heart.style.animationDelay = `${Math.random() * 10}s`;
            heart.style.pointerEvents = 'none';
            
            background.appendChild(heart);
        }
    }
});