import { divide } from "lodash";
import PricePromisePopupContent from "./pricePromisePopUpContent";
import FinancePopupContent from "./financePopUpContent";

export default class PopUp {
    constructor(typeOfPopUp) {
        console.log(typeOfPopUp)
        // let blah = document.createElement('div');
        // blah.classList.add('blah123');
        // blah.innerHTML = `<button class="testBut">hello world 2134567890</button>`;
        
        // document.querySelector('.FinanceComponent__Panel--grey').appendChild(blah)

        // document.querySelector('.testBut').addEventListener('click', () => {
        //     console.log('removed blah')
        //     document.querySelector('.blah123').remove();
        // })

        //just the button to trigger button, so could be created anywhere really
        
        const creatingEleFun = (eleName = '', className = '') => { // this creates the elements aka divs the 2nd arg will be the name of your div element
            eleName = document.createElement(eleName)
            eleName.classList.add(className)
            return eleName
        }
        const popup = creatingEleFun('div', 'popup__modal');
        const popupInner = creatingEleFun('div', 'popupInner');
        const close = creatingEleFun('div', 'close');
        const content = creatingEleFun('div', 'content');
        popup.append(popupInner)
        popupInner.append(close, content)

        $('body').prepend(popup);

        close.onclick = () => {
            document.querySelector('.popup__modal').remove();
        }

        switch(typeOfPopUp) {
            case('pricePromise'):
                content.append(PricePromisePopupContent())
                break;
            case('finance'):
                content.append(FinancePopupContent());
                break;
        }

    }

    


    //kinda acting like html, so append where you see fit
    // popUpContent() {
    //     //just the button to trigger button, so could be created anywhere really
    //     const creatingEleFun = (eleName = '', className = '') => { // this creates the elements aka divs the 2nd arg will be the name of your div element
    //         eleName = document.createElement(eleName)
    //         eleName.classList.add(className)
    //         return eleName
    //     }
    //     const popup = creatingEleFun('div', 'popup__pricepromise__modal');
    //     const popupInner = creatingEleFun('div', 'popupInner');
    //     const close = creatingEleFun('div', 'close');
    //     const content = creatingEleFun('div', 'content');
    //     // popup.style.display = 'none';
    //     popup.append(popupInner)
    //     popupInner.append(close, content)

    //     $('body').prepend(popup);

    //     close.onclick = () => {
    //         popup.style.display = 'none'
    //         popup.classList.remove('popup__pricepromise__modal--show')
    //     }

    // }
}