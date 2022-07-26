import PopUp from "../components/PopUp/Popup";
import Accordion from "./CreateAccordion";
import Cards from "./Cards/Cards"

export default class PricePromise {
    addSection() {
    //just adds in section on the buy pages for the s22

    const url = window.location.pathname

    const div = 'div';
    const accodionSection = url == '/uk/tablets/galaxy-tab-s8/buy/' ? document.querySelector('#downBoxHtml > div:nth-child(2)') : document.querySelector('#downBoxHtml > div:nth-child(1)');
    const showroomContainer = document.getElementById('benefit');
    const pricePromiseSection = document.createElement(div);
    pricePromiseSection.classList.add('pricePromiseSection-section')

    const section = document.createElement('section');
    section.classList.add('hubble-pd-expand', 'hubble-see-actual-size');

    const anchorEle = document.createElement('a');
    anchorEle.setAttribute('href', 'javascript:;');
    anchorEle.setAttribute('role', 'button');
    anchorEle.classList.add('hubble-pd-expand__opener', 's-expand__opener', 'pricePromise-hubble-pd-expand__opener');

    const headingTwo = document.createElement('h2');
    headingTwo.classList.add('hubble-pd-expand__opener-name');
    headingTwo.innerText = 'Price Promise';

    const spanIcon = document.createElement('span');
    spanIcon.classList.add('hubble-pd-expand__opener-icon');

    anchorEle.append(headingTwo, spanIcon);

    const contentDiv = document.createElement(div);
    contentDiv.classList.add('hubble-pd-expand__content', 's-expand__content', 'pricePromise__content__section');

    section.append(anchorEle, contentDiv);

    pricePromiseSection.append(section);

    const watchClassic = '/uk/watches/galaxy-watch/galaxy-watch4-classic-black-lte-sm-r895fzkaeua/buy/'
    const watch = '/uk/watches/galaxy-watch/galaxy-watch4-pink-gold-lte-sm-r865fzdaeua/buy/'

    let trackAAEvent = (data) => {
        s.linkTrackVars = "eVar25,events";
        s.linkTrackEvents = "event25";
        s.events = "event25";
        s.eVar25 = data;
        s.tl(this, 'o');
    }

    if (url.includes(watch) || url.includes(watchClassic)) {
        showroomContainer.insertAdjacentElement('afterend', Accordion(pricePromiseSection))
        anchorEle.style.display = 'none';

        var acc = document.getElementsByClassName("pricePromise-hubble-pd-expand__opener");
        var i;

    for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", () => {
                const opener = acc[0].parentElement
                opener.classList.add("is-opened");
                opener.classList.toggle("is-opened-active")
            });
        }


    } else {
        accodionSection.insertAdjacentElement('afterend', pricePromiseSection);
    }

    //JS to open and close accordion
    const sectionClasses = section.classList;
        // section.onclick = () => {
        // sectionClasses.toggle('is-opened');
        // sectionClasses.toggle('is-opened-active');
    // }
        $('.pricePromise-hubble-pd-expand__opener').click(function() {
            sectionClasses.toggle("is-opened");
            sectionClasses.toggle("is-opened-active");
            trackAAEvent('319:Finance module enhancement accordion:Price promise toggle accordion')
         })

    }

    addContent(pageType) {
    const contentSection = document.querySelector('.pricePromise__content__section');
    const url = window.location.pathname;

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

    let trackAAEvent = (data) => {
        s.linkTrackVars = "eVar25,events";
        s.linkTrackEvents = "event25";
        s.events = "event25";
        s.eVar25 = data;
        s.tl(this, 'o');
    }

    contentSection.innerHTML = `
    <section class="finance_section">
        <div class="finance_section_inner">

        <div class="FinanceComponent FinanceComponent__Samsung_Upgrade">
            <div class="Container Container--margin-bottom-small Container--mobile-margins">
                <h2 class="Heading Heading2 Heading--center">How it works</h2>
                <p class="Paragraph Paragraph--medium Paragraph--normal Paragraph--center Paragraph--color-black Paragraph--primary Paragraph--none">
                    Find out how to claim Price Promise cashback below
                </p>
            </div>
            <div class="FinanceComponent__Panels FinanceComponent__Panels--monthly">
                <div class="FinanceComponent__Panel--grey">
                    ${Cards(pageType)}
                </div>
                <div class="FinanceComponent__Panel--grey">
                    ${Cards('store')}
                </div>
                <div class="FinanceComponent__Panel--grey">
                    ${Cards('cashback')}
                </div>
            </div>
            <div class="FinanceComponent__TradeIn__Bottom">
                <p class="Paragraph Paragraph--regular Paragraph--normal Paragraph--center Paragraph--color-black Paragraph--primary Paragraph--none">
                    Please note the
                    <a href="https://www.samsung.com/uk/shop-faq/returns-and-cancellations/what-is-the-returns-period/">
                        returns period
                    </a>
                    must have passed before any cashback will be issued.
                </p>
                <br />
                <div class="Button__Link_Wrap Button__Link_Wrap--null">
                    <a ${tagging('319:Finance module enhancement accordion', 'claimnow')} class="Accordion-Price-promise Button__black Button Button--center Button Button--null" href="https://2021.samsungpromotions.claims/pricepromise/en-GB">Claim now</a>
                </div>
                <a class="learnmore Accordion-Price-promise-learnmore" href="https://2021.samsungpromotions.claims/pricepromise/en-GB/qualifying"
                    ${tagging('319:Finance module enhancement accordion', 'learnmore')}>
                    Learn More
                </a>
                <br />
                <div class="FinanceComponent__TradeIn__Bottom__Terms">
                    <p class="Paragraph Paragraph--small Paragraph--normal Paragraph--left Paragraph--color-black Paragraph--primary Paragraph--none">
                        *Purchase from Samsung Shop Online. Lower priced item must meet all conditions, be identical and brand new and be sold online at selected retailers within 7 days of purchase. To claim, participants must visit
                        <a href="https://2021.samsungpromotions.claims/pricepromise/en-GB">www.samsungpromotions.claims/pricepromise</a>
                        within 7 days of purchase to complete the claim from and upload supporting evidence. Discount codes to lower the price paid for the Promotion Product are excluded, unless specifically state otherwise. Lower priced items due
                        to loyalty schemes, promotions, bundle pricing, voucher codes, trade in or monthly/data contracts are excluded from this promotion. One cashback refund per model and a maximum of 4 per household. T&amp;Cs apply, for more
                        details see
                        <a href="https://2021.samsungpromotions.claims/pricepromise/en-GB">www.samsungpromotions.claims/pricepromise</a>.
                    </p>
                </div>
            </div>
        </div>
        </div>
    </section>
    `

    document.querySelector('.FinanceComponent-selected__retailers__btn').addEventListener('click', () => {
        new PopUp('pricePromise')
    })

    $('.Accordion-Price-promise').on('click', function() {
        trackAAEvent('319:Finance module enhancement accordion:Price promise')
    })
    
    $('.Accordion-Price-promise-learnmore').on('click', function() {
        trackAAEvent('319:Finance module enhancement accordion:Price promise learn more')
    })
    // if (url.includes('/uk/smartphones/galaxy-s22/buy/') || url.includes('/uk/smartphones/galaxy-s22-ultra/buy/')) {
    // const learnmorepopup = document.querySelector('.adding');
    // learnmorepopup.addEventListener("click", (event) => {
    //     event.preventDefault();
    //     document.querySelector('.js-upgrade-opener').click();
    // });
    // } else {
    // document.querySelector('.bannersection').style.borderRadius = '30px';
    // console.log('nothing to add')
    // }

//     document.querySelector("#content > div > div > div.accordion > div > section > div > section > div > div > div.FinanceComponent__Panels.FinanceComponent__Panels--monthly > div:nth-child(2) > p > button").onclick = () => {
//     document.querySelector('.popup__pricepromise__modal').style.display = 'block'
// }
        
    }

}