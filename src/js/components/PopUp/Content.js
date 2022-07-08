import howItWorksContent from "../../../data/howItWorks.json"

export default class Content {
  popUpContent() {

//   const retailers = [
//     {title: 'AO', link: 'https://www.ao-mobile.com/', name: 'ao-mobile.com'},
//     {title: 'AO Mobile', link: 'https://www.ao-mobile.com/', name: 'ao-mobile.com'},
//     {title: 'AO Mobile Phones Direct', link: 'https://www.mobilephonesdirect.co.uk', name: 'https://www.mobilephonesdirect.co.uk'},
//     {title: 'Argos', link: 'https://www.argos.co.uk', name: 'https://www.argos.co.uk'},
//     {title: 'Carphone Warehouse', link: 'https://www.carphonewarehouse.com', name: 'https://www.carphonewarehouse.com'},
//     {title: 'Currys PC World', link: 'https://www.currys.co.uk/gbuk/index.html', name: 'https://www.currys.co.uk/gbuk/index.html'},
//     {title: 'John Lewis', link: 'https://www.johnlewis.com', name: 'https://www.johnlewis.com'},
//     {title: 'Richer Sounds', link: 'https://www.richersounds.com', name: 'https://www.richersounds.com'},
//     {title: 'Samsung.com', link: 'https://www.samsung.com/uk', name: 'https://www.samsung.com/uk'},
//     {title: 'Very', link: 'https://www.very.co.uk', name: 'https://www.very.co.uk'},
//   ]

//   const daAndTvSkus = [
//     "QN94a",
//     "QN90a",
//     "QN95a",
//     "QN85a",
//     "QN800a",
//     "QN700a",
//     "QN900a",
//     "QN94C",
//     "WW5000",
//     "WW6800",
//     "WW90T684DL",
//     "WW6800",
//     "WW5300",
//     "WW5500",
//     "WW90T986DSX/S1",
//     "WW8500T",
//     "WW5300",
//     "WD80TA046BE/EU",
//     "WD10T654DBN/S1",
//     "WD80TA046BX/EU",
//     "WD90TA046BX/EU",
//     "WD10T654DBH/S1",
//     "WD90T984DSH/S1",
//     "WD90T534DBW/S1",
//     "WD80T534DBW/S1",
//     "RB29FSRNDSA1EU",
//     "BRB26600FWW/EU",
//     "RS54N3103SA/EU",
//     "RS67A8811S9/EU",
//     "RS67A8810S9/EU",
//     "BRB26705DWW/EU",
//     "RB38T602CS9/EU",
//     "RS6HA8880S9/EU"
//  ]

//   const howItWorks = howItWorksContent;

//   const ul = document.createElement('ul');

//   for (let index = 1; index < 3; index++) {
//     const li = document.createElement('li');
//     li.classList.add('tabmenu');
//     li.setAttribute('id', `tb_${index}`);
//     (index === 1) ? li.classList.add('active') : li.classList.add();
//     li.innerText = (index === 1) ? "How it works" : "Selected retailers";
//     ul.append(li)
//   }

//    const body = document.querySelector('.content'); //change body to the popup inner
//    const title = document.createElement('div');
//    title.classList.add('pricepromise__title');
//    title.innerHTML = `
//     <h1>Price Promise</h1>
//     <p>Find it cheaper within 7 days at selected online retailers and we'll return the difference*</p>
//    `
//    body.append(title,ul);

//    const firstDiv = document.createElement('div');
//    firstDiv.setAttribute('id', 'content_1');
//    firstDiv.classList.add('tabcontent');
//    firstDiv.innerHTML = `
//    <div class="pricepromise__block__container">
//     <div class="priceprice__blocks">
//         <div class="image__container">
//             <img src="${howItWorks.products.image}" alt="Products image" />
//         </div>
//         <div class="content__container">
//             <h4>${howItWorks.products.productTitle}</h4>
//             <p>Take your pick from our <a href="${howItWorks.products.productLink}">qualifying products</a> and purchse from <a href="https://www.samsung.com/uk/">Samsung.com/uk</a></p>
//         </div>
//     </div>

//     <div class="priceprice__blocks">
//         <div class="image__container">
//             <img src="${howItWorks.retailers.image}" alt="Shop image" class="bigger_image" />
//         </div>
//         <div class="content__container">
//             <h4>${howItWorks.retailers.productTitle}</h4>
//             <p>
//                 If you find the exact same product being sold online for a lower price at one of our <a href="${howItWorks.retailers.productLink}">selected retailers</a> within seven days of purchase, you can claim back the difference in
//                 price.
//             </p>
//         </div>
//     </div>

//     <div class="priceprice__blocks">
//         <div class="image__container">
//             <img src="${howItWorks.cashback.image}" alt="cashback image wallet" class="bigger_image" />
//         </div>
//         <div class="content__container">
//             <h4>${howItWorks.cashback.productTitle}</h4>
//             <p>We'll send you an email within 5 working days. Track your claim <a href="${howItWorks.cashback.productLink}">here</a> anytime. Cashback will then be paid to your nominated bank or PayPal account within 45 days*</p>
//         </div>
//     </div>
// </div>
// <div class="pricepromise__termsandconditions__container">
//     <div class="pricepromise__conditions">
//         <p>Please note the <a href="https://www.samsung.com/uk/shop-faq/returns-and-cancellations/what-is-the-returns-period/">returns period</a> must have passed before any cashback will be issued.</p>
//     </div>
//     <div class="pricepromise__learnmore">
//         <a href="https://2021.samsungpromotions.claims/pricepromise/en-GB/qualifying">Learn more</a>
//     </div>
//     <div class="pricepromise__smallprint">
//         <p>
//             *Purchase from Samsung Shop Online. Lower priced item must meet all condititons, be identical and brand new and be sold online at selected retailers within 7 days of purchase. To claim, participants must visit
//             <a href="https://2021.samsungpromotions.claims/pricepromise/en-GB">www.samsungpromotions.claims/pricepromise</a> within 7 days of purchase to complete the claim from and upload supporting evidence. Lower priced items due to
//             loyalty schemes, promotions, bundle pricing, voucher code, trade in or month/data contracts are excluded from this promotion. One cashback refund per model and a maximum of 4 per household. T&Cs apply, for more details see
//             <a href="https://www.samsungpromotions.claims/pricepromise">www.samsungpromotions.claims/pricepromise</a>
//         </p>
//     </div>
// </div>
// `

//    body.append(firstDiv);

//    const secDiv = document.createElement('div');
//    secDiv.setAttribute('id', 'content_2');
//    secDiv.classList.add('tabcontent');
//    secDiv.innerHTML = `
//    ${retailers.map((info, i) => (
//      `<div class="title__link__container" key=${i}>
//       <div class="title"><p>${info.title}</p></div>
//       <div class="link"><p><a href=${info.link}>${info.name}</a></p></div>
//      </div>`
//     )).join('')}
//    `
//    secDiv.style.display = 'none';

//    body.append(secDiv)

//    const tabs = document.querySelectorAll('.tabmenu');

//    tabs.forEach((tab) => {
//     const content = tab.parentElement.parentElement;
//     const tabId = tab.getAttribute('id');

//     tab.onclick = (e) => {
//      let tabContentId = (e.target.id === 'tb_1')
//      ? content.querySelectorAll('.tabcontent')[0].getAttribute('id')
//      : content.querySelectorAll('.tabcontent')[1].getAttribute('id')
//      tabSwithing(tabId, tabContentId)
//     }
//    })

//   function tabSwithing(tabSectionId, tabSectionContent) {
//    let x = document.getElementsByClassName("tabcontent");              //first of all we get all tab content blocks
//    for (let i = 0; i < x.length; i++) { x[i].style.display = 'none'; } // hide all tab content
//    document.getElementById(tabSectionContent).style.display = 'block'; // display the content of the tab we need

//    // now we get all tab menu items by class names (use the next code only if you need to highlight current tab)
//    let y = document.getElementsByClassName("tabmenu");
//    for (let i = 0; i < y.length; i++) { y[i].className = "tabmenu"; }
//    document.getElementById(tabSectionId).className = "tabmenu active";
//   }

//   //change on images for popup
//   const cartSkus = document.querySelectorAll('.cart-item__sku')
//   const image = document.querySelector("#content_1 > div.pricepromise__block__container > div:nth-child(1) > div.image__container > img");

//   cartSkus.forEach((cartSku)=> {
//    daAndTvSkus.forEach((mySkus)=> {
//      if (cartSku.innerText === mySkus ) {
//       image.setAttribute('src', howItWorks.products.imageDA )
//       } else {
//        image.setAttribute('src', howItWorks.products.image )
//       }
//     })
//   })
 }
}