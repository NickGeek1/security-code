import {Task} from '../components/task.js';
import {Modal} from '../components/modal.js';

//шаблон для задачи 
const taskTemplate = document.querySelector('.task-template').content.querySelector('.form__label'); 
//место, где располагаются задачи 
const taskList = document.querySelector('.task-list'); 
//массив с задачами 
const tasks = [ 
    {id: 1, shortName: "Сортировка по возрастанию", description: "Дан массив [9, 19, 3, 10, 786, 1, 1, 20, 31], с помощью метода sort необходимо отсортировать его по возрастанию"}, 
    {id: 2, shortName: "Фильтрация строк", description: "Дан массив строк [‘кот’, ‘собака’, ‘птица’, ‘крот’, ‘метод’, ‘функция’, ‘плод’, ‘кит’, ‘слон’]. Из исходного массива необходимо получить массив с теми строками, чья длина не более 4 символов"}, 
    {id: 3, shortName: "Поиск уникального слова", description: "Дан массив [‘яблоко’, ‘слива, ‘дыня, ‘груша’, ‘груша’, ‘дыня’, ‘яблоко’, ‘арбуз’, ‘арбуз’]. Необходимо определить слово, которое встречается в массиве один раз"}, 
    {id: 4, shortName: "Количество повторений", description: "Дан массив [‘яблоко’, ‘слива, ‘дыня, ‘груша’, ‘груша’, ‘дыня’, ‘яблоко’, ‘арбуз’, ‘арбуз’]. На основе этого массива необходимо сформировать объект, где ключ – это слово из массива, а значение – количество вхождений этого слова в массив"}, 
    {id: 5, shortName: "Большие гласные буквы", description: "Дана цитата: Зима — это гравюра, весна — акварель, лето — масляная живопись, а осень — мозаика всех трех. Необходимо вернуть строку, в которой все гласные буквы будут большими"} 
]; 

const openButton = document.querySelector('.open-button'); 
const modalButton = document.querySelector('.modal-button'); 
const result = document.querySelector('.result');
const enterSpace = document.querySelector('.enter-space');

const createTask = (task) => { 
    const newTask = new Task('.task-template', task, '.form__check', openButton, '.modal-text');
    return newTask.createTask(); 
}; 
 
tasks.forEach((task) => { 
    taskList.append(createTask(task));
}); 
 
openButton.onclick = () => { 
    const modalOpen = new Modal('.modal');
    return modalOpen.openModalWindow();
};


// Решение задачи 1 
const arrangeNumbers = (numbersForFirstTask) => { 
    const numbersSort = numbersForFirstTask.sort((a, b) => a - b); 
    return numbersSort.join(', '); 
}; 
 
 
// Решение задачи 2 
const excludeWords = (wordsForSecondTask) => { 
    const wordsSort = wordsForSecondTask.filter(e => e.length <= 4); 
    return wordsSort.join(', '); 
}; 
 
// Решение задачи 3 
const findUniqueWords = (wordsForThirdTask) => { 
    const countItems = {}; 
    for (const item of wordsForThirdTask) { 
        countItems[item] = countItems[item] ? countItems[item] + 1 : 1; 
    }; 
 
    const wordsUnique = Object.keys(countItems).filter((item) => countItems[item] < 2); 
    return wordsUnique.join(', '); 
}; 
 
// Решение задачи 4 
const writeWordsNumber = (wordsForThirdTask) => { 
    const numbersOfElenments = {}; 
    for (const item of wordsForThirdTask) {
        numbersOfElenments[item] = numbersOfElenments[item] ? numbersOfElenments[item] + 1 : 1; 
    }; 
    const result = Object.entries(numbersOfElenments); 
    return result.join(', '); 
}; 
 
// Решение задачи 5 
const changeSentence = (senteceForFifth) => { 
    const volwes = ["а","е","ё","и","о","у","ы","э","ю","я"]; 
    const newSentence = Array.from(senteceForFifth); 
    for(i = 0; i < newSentence.length; i++) { 
        if(volwes.includes(newSentence[i])) { 
            newSentence[i] = newSentence[i].toUpperCase(); 
        }; 
    }; 
    return newSentence.join(''); 
};

modalButton.onclick = () => { 
    const radioChecked = document.querySelector('.checked'); 
    const radioCheckedId = radioChecked.id; 
    const enterSpaceValue = enterSpace.value;
    switch (radioCheckedId) { 
        case '1':
            const numbersForFirstTask = enterSpaceValue.split(',');
            result.textContent = arrangeNumbers(numbersForFirstTask);
            break 
        case '2': 
            const wordsForSecondTask = enterSpaceValue.split(',');
            result.textContent = excludeWords(wordsForSecondTask); 
            break 
        case '3': 
            const wordsForThirdTask = enterSpaceValue.split(',');
            result.textContent = findUniqueWords(wordsForThirdTask); 
            break 
        case '4': 
            const wordsForFourthTask = Object(enterSpaceValue.split(','));
            result.textContent = writeWordsNumber(wordsForFourthTask); 
            break 
        case '5': 
            const senteceForFifth = String(enterSpaceValue);
            result.textContent = changeSentence(senteceForFifth); 
            break 
    };
};



// 1. Класс модального окна (принимает через контсруктор селектор, внутри конструктора будет находится модальное окно на странице)
//2. публичный метод open вызова этого окна 
//3. 
