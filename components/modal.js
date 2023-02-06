class Modal {
    constructor(modalWindow, radioButton, modalTextArea, data) {
        this._modalWindow = modalWindow;
        this._radioButton = radioButton;
        this._modalTextArea = modalTextArea;
        this._description = data.description;
    };

    //Частный метод, меняющий текст в поле модального окна
    _setEventListener() {
        this._modalTextArea = document.querySelector(this._modalTextArea);
        this._radioButton = document.querySelector(this._radioButton);
        this._radioButton.addEventListener('input', () => { 
          this._modalTextArea.textContent = this._description;
        });
    }
    //Публичный метод, открывающий готовое модальное окно
    openModalWindow() {
        this._modalWindow = document.querySelector(this._modalWindow);
        this._modalWindow.style = 'visibility: visible';
        this._setEventListener();
    };
};

export {Modal};