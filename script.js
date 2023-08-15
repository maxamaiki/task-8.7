let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
if (Number.isNaN(minValue) || Number.isNaN(maxValue)) {
    minValue = 0;
    maxValue = 100;
}

minValue = (minValue < -999) ? minValue = -999 : (minValue > 999) ? minValue = 999 : minValue;
maxValue = (maxValue > 999) ? maxValue = 999 : (maxValue < -999) ? maxValue = -999 : maxValue;

alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

let orderNumberField = document.querySelector('#orderNumberField');
let answerField = document.querySelector('#answerField');
orderNumberField.innerText = orderNumber;


document.querySelector('#btnRetry').addEventListener('click', retry);

document.querySelector('#btnOver').addEventListener('click', over);

document.querySelector('#btnLess').addEventListener('click', less);

document.querySelector('#btnEqual').addEventListener('click', equal);


function retry () {
    let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
    let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    let answerNumber  = Math.floor((minValue + maxValue) / 2);
    let orderNumber = 1;
    let gameRun = true;
    orderNumberField.innerText = orderNumber;
    answerField.innerText = `Вы загадали число ${answerNumber }?`;
    answerField.innerText = answerNumber >= 0 ? numberToText().length < 20 && answerNumber >= 0 ? `Вы загадали число ${numberToText()}?` : `Вы загадали число ${answerNumber}?` : numberToText().length < 20 ? `Вы загадали число минус ${numberToText()}?` : `Вы загадали число ${answerNumber}?`;
}

function over () {
    if (gameRun){
        if (minValue === maxValue || minValue > maxValue){
            let answerPhrase;
            const phraseRandom = Math.round(Math.random() * 3);
            
                if(phraseRandom === 0) {
                    answerPhrase = `Мимо кассы!`;
                } else if (phraseRandom === 1) {
                    answerPhrase = `Ошибочка!`;
                } else if (phraseRandom === 2) {
                    answerPhrase = `Соберитесь с мыслями!`
                } else {
                    answerPhrase = `Обманывать - плохо!`
                }

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            let questionPhrase;
            minValue = answerNumber + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            let questionRandom = Math.round(Math.random() * 2);
            
               if(questionRandom === 0) {
                questionPhrase = `Вы загадали число ${answerNumber }?`;
               } else if (questionRandom === 1) {
                questionPhrase = `Возможно, что сие число ${answerNumber }?`;
               } else {
                questionPhrase = `Предположу, что это число ${answerNumber }?`
               }

            answerField.innerText = questionPhrase;
            answerField.innerText = answerNumber >= 0 ? numberToText().length < 20 && answerNumber >= 0 ? `Вы загадали число ${numberToText()}?` : `Вы загадали число ${answerNumber}?` : numberToText().length < 20 ? `Вы загадали число минус ${numberToText()}?` : `Вы загадали число ${answerNumber}?`;
        }
    }
}

function less () {
    if (gameRun){
        if (minValue === maxValue || minValue > maxValue || minValue === answerNumber){
           let answerPhrase;
           const phraseRandom = Math.round(Math.random() * 3);

                if(phraseRandom === 0) {
                    answerPhrase = `Мимо кассы!`;
                } else if (phraseRandom === 1) {
                    answerPhrase = `Ошибочка!`;
                } else if (phraseRandom === 2) {
                    answerPhrase = `Соберитесь с мыслями!`
                } else {
                    answerPhrase = `Обманывать - плохо!`
                }

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            let questionPhrase;
            maxValue = answerNumber - 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            let questionRandom = Math.round(Math.random() * 2);

               if(questionRandom === 0) {
                questionPhrase = `Вы загадали число ${answerNumber }?`;
               } else if (questionRandom === 1) {
                questionPhrase = `Возможно, что сие число ${answerNumber }?`;
               } else {
                questionPhrase = `Предположу, что это число ${answerNumber }?`
               }

            answerField.innerText = questionPhrase;
            answerField.innerText = answerNumber >= 0 ? numberToText().length < 20 && answerNumber >= 0 ? `Вы загадали число ${numberToText()}?` : `Вы загадали число ${answerNumber}?` : numberToText().length < 20 ? `Вы загадали число минус ${numberToText()}?` : `Вы загадали число ${answerNumber}?`;
        }
    }
}

function equal () {
    if (gameRun){
        let answerPhrase;
        let phraseRandom = Math.round(Math.random() * 2);

        if(phraseRandom === 0) {
            answerPhrase = `Я всегда угадываю!`;
        } else if (phraseRandom === 1) {
            answerPhrase = `Еще бы я не угадал ...)`;
        } else {
            answerPhrase = `Это было слишком легко!`;
        }

        answerField.innerText = answerPhrase;
        gameRun = false;
    }
}

let units = ['', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'];
let teens = ['', 'десять', 'одинадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
let dozens = ['', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];
let hundreds = ['', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'];

function numberToText() {
    let text;
    let number = Math.abs(answerNumber);

    if (number == 0) {
        text = 'ноль';
        return text;
    }

    if (number <= 9) {
        return units[Math.floor(Math.abs(number))];
    }

    if (number > 9 && number < 20) {
        return teens[Math.floor(number / 10 + number % 10)];
    }

    if (number => 20 && number <= 99) {
        return dozens[(Math.floor(number / 10)) - 1] + " " + units[Math.floor(number % 10)];
    }

    if (number => 100 && number <= 999) {
        return hundreds[(Math.floor(number / 100))] + " " + numberToTextHundreds();
    }
}

function numberToTextHundreds() {
    let unitsTeensDozens = Math.abs(answerNumber) % 100;

    if(unitsTeensDozens <= 9) {
        return units[Math.floor(unitsTeensDozens)];
    }

    if(unitsTeensDozens > 9 && unitsTeensDozens < 20) {
        return teens[Math.floor(unitsTeensDozens / 10) + (unitsTeensDozens % 10)];
    }

    if (unitsTeensDozens => 20 && unitsTeensDozens <= 99) {
        return dozens[(Math.floor(unitsTeensDozens / 10)) - 1] + " " + units[Math.floor(unitsTeensDozens % 10)];
    }
}

answerField.innerText = answerNumber >= 0 ? numberToText().length < 20 && answerNumber >= 0 ? `Вы загадали число ${numberToText()}?` : `Вы загадали число ${answerNumber}?` : numberToText().length < 20 ? `Вы загадали число минус ${numberToText()}?` : `Вы загадали число ${answerNumber}?`;

