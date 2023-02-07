class Modal {
    constructor(modalWindow, radioButton, modalTextArea, data) {
        this._modalWindow = modalWindow;
    };

    //Публичный метод, открывающий готовое модальное окно
    openModalWindow() {
        this._modalWindow = document.querySelector(this._modalWindow);
        this._modalWindow.style = 'visibility: visible';
    };
};

export {Modal};