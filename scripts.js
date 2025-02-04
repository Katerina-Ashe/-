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

// Функция для получения случайного элемента из массива
function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Функция для добавления фразы в избранное
function addToFavorites(text) {
    const favoritesList = document.getElementById("favorites");
    const listItem = document.createElement("li");
    listItem.textContent = text;
    favoritesList.appendChild(listItem);
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

// Добавление в избранное по клику на результат
document.getElementById("result").addEventListener("click", () => {
    const resultText = document.getElementById("result").innerText;
    if (resultText) {
        addToFavorites(resultText);
    }
});