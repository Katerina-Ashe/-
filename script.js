// Telegram Web App API
const tg = window.Telegram.WebApp;

// Массивы с текстами
const predictions = [
    "Сегодня будет удачный день!",
    "Ожидайте приятных сюрпризов.",
    "Будьте осторожны с решениями."
];

const motivationalQuotes = [
    "Верь в себя!",
    "У тебя все получится!",
    "Каждый день — это новый шанс."
];

const catFacts = [
    "Кошки спят в среднем 12–16 часов в сутки.",
    "У кошек есть третье веко, которое защищает глаза.",
    "Кошки могут издавать более 100 различных звуков."
];

const answersYesNo = [
    "Мяу! Я чувствую, что ответ — да!",
    "Мррр... Нет, это не сработает.",
    "Мур-мур! Возможно, но не сейчас.",
    "Мяяяу! Определенно нет!",
    "Мр-мр-мр! Да, это хорошая идея!"
];

// Функция для получения случайного элемента
function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Обработчики кнопок
document.getElementById("predictButton").addEventListener("click", () => {
    const prediction = "🔮 Предсказание: " + getRandomItem(predictions);
    document.getElementById("result").innerText = prediction;
});

document.getElementById("motivateButton").addEventListener("click", () => {
    const quote = "✨ Мотивация: " + getRandomItem(motivationalQuotes);
    document.getElementById("result").innerText = quote;
});

document.getElementById("factButton").addEventListener("click", () => {
    const fact = "🐾 Факт: " + getRandomItem(catFacts);
    document.getElementById("result").innerText = fact;
});

document.getElementById("yesNoButton").addEventListener("click", () => {
    const answer = "🤔 Ответ: " + getRandomItem(answersYesNo);
    document.getElementById("result").innerText = answer;
});

// Инициализация Telegram Web App
tg.ready();