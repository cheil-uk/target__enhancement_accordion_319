import { round } from "lodash";
import Api from "../api/Api";
import Cards from "./Cards/Cards"
import PopUp from "../components/PopUp/Popup";

export default class FinanceOptions {
    addSection() {
     //just adds in section on the buy pages for the s22

     const url = window.location.pathname;

     const div = "div";
     const accodionSection = url == '/uk/tablets/galaxy-tab-s8/buy/' ? document.querySelector('#downBoxHtml > div:nth-child(3)') : document.querySelector('#downBoxHtml > div:nth-child(2)');
     // document.querySelector("#content > div > div > div.accordion > div > section")
     const showroomContainer = document.querySelector("#content > div > div > div.accordion > div > section");
     const financeOptionsSection = document.createElement(div);
     financeOptionsSection.classList.add("financeOptions-section");

     const section = document.createElement("section");
     section.classList.add("hubble-pd-expand", "hubble-see-actual-size");

     const anchorEle = document.createElement("a");
     anchorEle.setAttribute("href", "javascript:;");
     anchorEle.setAttribute("role", "button");
     anchorEle.classList.add("hubble-pd-expand__opener", "s-expand__opener", "financeOptions-hubble-pd-expand__opener");

     const headingTwo = document.createElement("h2");
     headingTwo.classList.add("hubble-pd-expand__opener-name");
     headingTwo.innerText = "Finance options";

     const spanIcon = document.createElement("span");
     spanIcon.classList.add("hubble-pd-expand__opener-icon");

     anchorEle.append(headingTwo, spanIcon);

     const contentDiv = document.createElement(div);
     contentDiv.classList.add("hubble-pd-expand__content", "s-expand__content", "financeOptions__content__section");

     section.append(anchorEle, contentDiv);

     const watchClassic = "/uk/watches/galaxy-watch/galaxy-watch4-classic-black-lte-sm-r895fzkaeua/buy/";
     const watch = "/uk/watches/galaxy-watch/galaxy-watch4-pink-gold-lte-sm-r865fzdaeua/buy/";

     if (url.includes(watch) || url.includes(watchClassic)) {
         showroomContainer.insertAdjacentElement("afterend", section);

         var acc = document.getElementsByClassName("financeOptions-hubble-pd-expand__opener");
         var i;

         for (i = 0; i < acc.length; i++) {
             acc[i].addEventListener("click", () => {

                 const opener = acc[0].parentElement;
                 opener.classList.add("is-opened");
                 opener.classList.toggle("is-opened-active");
             });
         }
     } else {
         // console.log(accodionSection);
         financeOptionsSection.append(section);
         accodionSection.insertAdjacentElement("afterend", financeOptionsSection);
         //JS to open and close accordion
         const sectionClasses = section.classList;

        $('.financeOptions-hubble-pd-expand__opener').click(function() {
        sectionClasses.toggle("is-opened");
        sectionClasses.toggle("is-opened-active");
        })
     }

    }

    addContent(pageType) {

    // console.log(Api('sm-r895fzkaeua'))
    const contentSection = document.querySelector('.financeOptions__content__section');
    const price  = (digitalData.page.pageInfo.pageTrack === "flagship pdp") ? BC_MODEL.allPrice :  digitalData.product.list_price
    let financePrice = 0;
    const monthlyPrice = Math.ceil(price/36 * 100) / 100

    if (pageType == 'watchFinance') {
        const priceNow = document.querySelector('.cost-box__price-now').innerText
        let splitPriceNow = parseFloat(priceNow.substring(priceNow.indexOf('£') + 1, priceNow.lastIndexOf('/')))

        if (monthlyPrice == splitPriceNow) {
            financePrice = monthlyPrice;
        } else {
            financePrice = splitPriceNow;
        };
    }


    const tagging = (action, type) => {

    const omniType = type || 'microsite';
    const siteCode = 'uk';
    const pageName = `price promise`;
    const tags = {
        'data-omni-type': omniType,
        'data-omni': `${siteCode}:${pageName}:${action}`,
        'ga-ca': omniType,
        'ga-ac': `${pageName}`,
        'ga-la': `${pageName}:${action}`
    };
    return Object.entries(tags).map(([k, v]) => `${k}="${v}"`).join(' ');
    }

    contentSection.innerHTML = `
    <section class="finance_section">
        <div class="finance_section_inner">
         <div class="FinanceComponent FinanceComponent__Samsung_Upgrade">
          <div class="Container Container--margin-bottom-small Container--mobile-margins">
           <h2 class="Heading Heading2 Heading--center">Monthly finance options</h2>
           <p
            class="Paragraph Paragraph--medium Paragraph--normal Paragraph--center Paragraph--color-black Paragraph--primary Paragraph--none">
            Spread the cost of your device over 12 to 36 months with rates starting at 0% APR.*</p>
           <button class="modal-opening Button Button--center" ${tagging('319:Finance module enhancement accordion', 'pay as little as')}">
            <p
             class="FinanceComponent_open-pop-up Paragraph Paragraph--medium Paragraph--normal Paragraph--center Paragraph--color-blue Paragraph--primary Paragraph--none">
             Pay as little as £${financePrice == 0 ? monthlyPrice.toFixed(2) : financePrice.toFixed(2)} a month* &gt;</p>
           </button>
          </div>
          <div class="FinanceComponent__Panels FinanceComponent__Panels--monthly">
           <div class="FinanceComponent__Panel--grey">
             ${Cards(pageType)}
           </div>
           <div class="FinanceComponent__Panel--grey">
            ${Cards(pageType+'Checkout')}
           </div>
           <div class="FinanceComponent__Panel--grey">
           ${Cards('payment')}
           </div>
          </div>
          <div class="FinanceComponent__TradeIn__Bottom">
           <button class="FinanceComponent_open-pop-up Button__black Button Button--center" ${tagging('319:Finance module enhancement accordion', 'see finance options')}>
            See finance options
           </button>
           <div class="FinanceComponent__TradeIn__Bottom__Terms">
            <p class="Paragraph Paragraph--small Paragraph--normal Paragraph--center Paragraph--color-offblack Paragraph--primary Paragraph--none">
            </p>
           </div>
          </div>
          <br />
          <p
           class="Paragraph Paragraph--small Paragraph--normal Paragraph--center Paragraph--color-black Paragraph--primary Paragraph--none">
           Representative example without 0% offer: Representative 21.9% APR (variable). Purchase interest rate 21.9% p.a.
           (variable). Assumed credit limit £1,200
          </p>
         </div>
        </div>
    </section>
    `


    // trigger finance popup
    if (pageType == 'watchFinance') {
        if ($('.pd-offer__content--calculate .pd-offer__cta a')) {
            $('.FinanceComponent_open-pop-up').on('click', function() {
                $('.pd-offer__content--calculate .pd-offer__cta a').click();
            })
        } else {
            window.location = "https://www.samsung.com/uk/samsung-finance/"
        }
    } else {
        if ($('.hubble-product__offer-emi a')) {
            $('.FinanceComponent_open-pop-up').on('click', function() {
                $('.hubble-product__offer-emi a').click();
            })
        } else {
            window.location = "https://www.samsung.com/uk/samsung-finance/"
        }
    }
    //window.sg.components.financePopup.showPopup()

    }

}