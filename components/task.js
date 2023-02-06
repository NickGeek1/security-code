class Task {
    constructor(taskTemplateSelector, data, radioButton, openButton) {
        this._taskTemplateSelector = taskTemplateSelector;
        this._shortName = data.shortName;
        this._id = data.id;
        this._radioButton = radioButton;
        this._openButton = openButton;
    };
    //Частный метод, возвращающий шаблон задачи 
    _getTemplate() {
        const taskTemplate = document.querySelector(this._taskTemplateSelector).content.querySelector('.form__label').cloneNode(true);
        return taskTemplate;
    };

    //Частный метод, устанавливающий слушатель на элемент
    _setEventListener() {
        const currentRadio = this._newTask.querySelector(this._radioButton);
        currentRadio.addEventListener('input', () => { 
            const checkedElement = currentRadio.querySelector('.checked') 
            if (checkedElement) { 
                currentRadio.classList.remove('checked');
            }
            currentRadio.classList.add('checked');
            this._openButton.disabled = false;
            this._openButton.classList.remove('open-button__disabled');
            currentRadio.id = this._id;
        });
    };
    //Публичный метод, возвращающий готовый элемент
    createTask() {
       this._newTask = this._getTemplate();
       const taskText = this._newTask.querySelector('.form__task-text');
       taskText.textContent = this._shortName;
       this._setEventListener();
       return this._newTask;
    };
}

export {Task};

/**
 * 1. метод getTemplate будет возвращать шаблон
 * 2. создать метод createTask, который будет использовтаь метод getTemplate(записывать результат вызова в переменную)
 * 3. в методе createTask вызывается метод слушателя
 * 4. 
 */