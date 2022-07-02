
export default class PopUp {
    //kinda acting like html, so append where you see fit
    popUpContent() {
        //just the button to trigger button, so could be created anywhere really
        const creatingEleFun = (eleName = '', className = '') => { // this creates the elements aka divs the 2nd arg will be the name of your div element
            eleName = document.createElement(eleName)
            eleName.classList.add(className)
            return eleName
        }
        const popup = creatingEleFun('div', 'popup__pricepromise__modal');
        const popupInner = creatingEleFun('div', 'popupInner');
        const close = creatingEleFun('div', 'close');
        const content = creatingEleFun('div', 'content');
        // popup.style.display = 'none';
        popup.append(popupInner)
        popupInner.append(close, content)

        $('body').prepend(popup);

        close.onclick = () => {
            popup.style.display = 'none'
            popup.classList.remove('popup__pricepromise__modal--show')
        }

    }
}