export default class PricePromise {
  addSection() {
  //just adds in section on the buy pages for the s22

  const url = window.location.pathname

  const div = 'div';
  const accodionSection = document.querySelector('#downBoxHtml > div:nth-child(1)');
  const showroomContainer = document.querySelector('.m_feature_jump');
  const samsungUpgradeSection = document.createElement(div);
  samsungUpgradeSection.classList.add('samsungupgrade-section')

  const section = document.createElement('section');
  section.classList.add('hubble-pd-expand', 'hubble-see-actual-size');

  const anchorEle = document.createElement('a');
  anchorEle.setAttribute('href', 'javascript:;');
  anchorEle.setAttribute('role', 'button');
  anchorEle.classList.add('hubble-pd-expand__opener', 's-expand__opener');

  const headingTwo = document.createElement('h2');
  headingTwo.classList.add('hubble-pd-expand__opener-name');
  headingTwo.innerText = 'Samsung Upgrade';

  const spanIcon = document.createElement('span');
  spanIcon.classList.add('hubble-pd-expand__opener-icon');

  anchorEle.append(headingTwo, spanIcon);

  const contentDiv = document.createElement(div);
  contentDiv.classList.add('hubble-pd-expand__content', 's-expand__content', 'samsung-upgrade__content__section');

  section.append(anchorEle, contentDiv);

  samsungUpgradeSection.append(section);


  if (url.includes('/uk/smartphones/galaxy-s22/showroom/') || url.includes('/uk/smartphones/galaxy-s22-ultra/showroom/')) {
   showroomContainer.insertAdjacentElement('afterend', samsungUpgradeSection);
   anchorEle.style.display = 'none';
  } else {
   console.log(accodionSection)
   accodionSection.insertAdjacentElement('afterend', samsungUpgradeSection);
  }



  //JS to open and close accordion
  const sectionClasses = section.classList;
  section.onclick = () => {
   sectionClasses.toggle('is-opened');
   sectionClasses.toggle('is-opened-active');
  }

 }

 addContent() {
  const contentSection = document.querySelector('.samsung-upgrade__content__section');
  const url = window.location.pathname;

  const tagging = (action, type) => {
   const omniType = type || 'microsite';
   const siteCode = 'uk';
   const pageName = `IM_SUP_Signposting`;
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
   <section class="bannersection buyingpage fold">
     <div class="bannerinner">
      <div class="FinanceComponent FinanceComponent__Samsung_Upgrade">
           <div class="Container Container--margin-bottom-small Container--mobile-margins">
               <h2 class="Heading Heading2 Heading--center">How it works</h2>
               <p class="Paragraph Paragraph--medium Paragraph--normal Paragraph--center Paragraph--color-black Paragraph--primary Paragraph--none">
                   Find out how to claim Price Promise cashback below
               </p>
           </div>
           <div class="FinanceComponent__Panels FinanceComponent__Panels--monthly">
               <div class="FinanceComponent__Panel--grey">
                   <div class="Container Container--margin-bottom-small Container--mobile-margins FinanceComponent__Samsung_Upgrade__Panel_Icon">
                       <img
                           class="ImageLoader ImageLoader--loaded ImageLoader--fill-both"
                           alt="Choose Icon"
                           src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAYKADAAQAAAABAAAAYAAAAACpM19OAAADAUlEQVR4Ae2dMW4UQRRELSDCCSAhH8ABSASkZIaUGMiIuQIEHIAz+AjEcAAiUoJNHDoECSIjhEBQJZCDUe8uM27r/Tb1pS97e7a76le5xtIks7OTuvAKHGjCQ/WR+kT9q3ibo7mas7kPW3ti/lZdXfBt/DyDZxmq9sX2WL1tuFGuexbPNETtiuVKPYq4/8rTM3m2rnW562l/DnuhH0/O4Vz6yJsi8E39jiayCf+KLn5WT/+qPmrtqdpDVC9zNFdzns7h2Txj2XogZlPS37V2tyzj9cTM2dyn89xfv2X+lUvzt2zccatx9Y3WPjTWqy+Zs7lP6/Z04SyfexvQusWszkIQ3tvi3ppxMc3eBrT+qf9YzI7f2OLemnEx094GLCbyv26MAbDzMSAGwArA8ElADIAVgOGTgBgAKwDDJwExAFYAhk8CYgCsAAyfBMQAWAEYPgmIAbACMHwSEANgBWD4JCAGwArA8ElADIAVgOGTgBgAKwDDJwExAFYAhk8CYgCsAAyfBMQAWAEYPgmIAbACMHwSEANgBWD4JCAGwArA8ElADIAVgOGTgBgAKwDDJwExAFYAhk8CYgCsAAyfBMQAWAEYPgmIAbACMHwSEANgBWD4JCAGwArA8ElADIAVgOGTgBgAKwDDJwExAFYAhk8CYgCsAAyfBMQAWAEYPgmIAbACMHwSEANgBWD4JCAGbFTgmq6+Vp+op6+T2vbZe7z3urpslX4pmVR7pX60UL2rf/f65WvPFp5x7tuq34LudVCgxxkdaLSPqG7A+zbtWas9zpgFOOfL1W9BzzXMDfVDtW8pc+qrvux3AfuMslXdgC9S7nFZ9ToQq34L6jBi7SNiAOxPbwN+NuapfptrUD5danFvzXi6Ye4vvQ341CBwp7E2ylKLe2vGMvPkhc6wFY5sXmkOm/BS+Nue04x63bOVr10xXKlHFXkdb8/k2YaofbE8Vq8bZrR1z+KZhqo9sfWjgNHEnvL1DJ5l2DoQ80P1kdrP6KcDVvtsjuZqzuaeusgK/AaePhxerottXgAAAABJRU5ErkJggg=="
                       />
                   </div>
                   <div class="Container Container--margin-bottom-small Container--mobile-margins">
                       <h5 class="Heading Heading5 Heading--center">
                           Buy a selected Galaxy phone
                       </h5>
                   </div>
                   <p class="Paragraph Paragraph--medium Paragraph--normal Paragraph--center Paragraph--color-black Paragraph--primary Paragraph--none">
                       Take your pick from our <a href="https://2021.samsungpromotions.claims/pricepromise/en-GB/qualifying">qualifying Galaxy phones</a>
                       and purchase from
                       <a href="https://www.samsung.com/uk/">Samsung.com/uk</a>
                   </p>
               </div>
               <div class="FinanceComponent__Panel--grey">
                   <div class="Container Container--margin-bottom-small Container--mobile-margins FinanceComponent__Samsung_Upgrade__Panel_Icon">
                       <img
                           class="ImageLoader ImageLoader--loaded ImageLoader--fill-both"
                           alt="Shop Icon"
                           src="data:image/png;base64,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"
                       />
                   </div>
                   <div class="Container Container--margin-bottom-small Container--mobile-margins">
                       <h5 class="Heading Heading5 Heading--center">Found it cheaper?</h5>
                   </div>
                   <p class="Paragraph Paragraph--medium Paragraph--normal Paragraph--center Paragraph--color-black Paragraph--primary Paragraph--none">
                       If you find the exact same product being sold online for a lower price at one of our <button class="selected__retailers__btn">selected retailers</button> within seven days of purchase, you can claim back the difference in
                       price.
                   </p>
               </div>
               <div class="FinanceComponent__Panel--grey">
                   <div class="Container Container--margin-bottom-small Container--mobile-margins FinanceComponent__Samsung_Upgrade__Panel_Icon">
                       <img
                           class="ImageLoader ImageLoader--loaded ImageLoader--fill-both"
                           alt="Icon"
                           src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAYKADAAQAAAABAAAAYAAAAACpM19OAAAFeUlEQVR4Ae2dWagcRRSGb1wSjQguUdQYgxdccUXBBcSLIAYUQfFBkECEENEXjYqgIF4hRFREXBBEUVDUN/VFBBPFBQMKCiouUYMmQgwSkIhrNMbvfwjeqTk9U9PT1TXpOgd+cut09enu7789d7qrujM15eEEnIATcAKlEphX88Dns9756Dh0DFqISo5tHPyb6JvUEM5lAy+gHWi3q4fBTnjciJLEIqo+j/5FDr6agUw4BTUaJ1NtE3LwcQxWj0J/vyGdT2L5BnTokH6++H8C+psYHYMMOJgqr6Iq+NtZth5tQX+gEuNCDvrSVAf+BIWtj52fyF+P9k214b2o7u3sa8jowVH2v+oMmKbISqPQRnKXoc3GMk/VILBPxTq3kd8/WKavnlcghx+AGadZZcCVRtE15L418p4ag4BlwJnUOzaoqT+y+pvg0TABy4ATjG28Te53I++pMQlYBhxt1PSPHgNKEynLgMOMwr8ZOU81QMAywLpDelQD2/ISBgHLAKPblK74PBIQiDXgRLatW9EeDROINUCbXYusj6eGd6mscqMYoJtOd5WFJ/3RjmKA9kZXw/cjDUl6NEBgVAO0yTvQ5+hmpPGCA5FHgwRmqRXeYvV2fSZb4fkkOgT1RZ0zoK+IJwYS0J2FVeh11DeGEmvAZ6z8F/KoT0DTeJaFq8ca8DIrno1eQ/o48qhH4IxwtaoRsbCf2l8iDcholsQ16BKkO6dHoAXIYziBPk6xZ8Dc0l/R0NdRGbAEHYB0gebqZXAvTIZGHQOGFvUO8QTcgHhWSXq6AUmwxhd1A+JZJenpBiTBGl/UDYhnlaSnG5AEa3xRNyCeVZKebkASrPFF3YB4Vkl6ugFJsMYXdQPiWSXp6QYkwRpf1A2IZ5Wk5yjjAUl2YEKKLmY/NOCkB+yORE1wmaHO0GhiQ0M3MqEdNJvjJnQtyjbrr1QDlgP9PqTf/KxRmgF67u0xdENW6nM2XpIBmhLyCrp8zvFn/7EkAx4YAF8zPT5CHyM9B70LjRszFLh4WJFSDNDE4lsrYLxE/m60qWJ53fQsK7oBQNBsDf32h/EPCc1YezZc0Ga7hAsxzWU6y4C6mlxW+NqnEgy42oD/HrnHjXzrqRIM0BkQxtowkavddQP0yO2iAO6vtN8KctmaXTdA93bC+J7EzjCZq911Aw4ywE7UQ+ddN2CbYYD1KgajWzuprhvwIxh3Byj1rtOlQS5bs+sG6LP+A4PuCiOXJdV1AwRVLx4MQ28EC9+JFPZppV2CAS9CMny+bc8bIfVv1ijBgB8grDGAMM4hsQGdGi5os12CAeKpK98tBtjTyH2KnkMaJ9A3pL5HSckli1JuR/8MQb2I8H0UXhsIuIYopdajlDNAYD9BV6EdakxKlGSAmK9DemB6oxqTEKUZIOZ6zPZ0pJeNbEdZo0QDBPxv9ChagnS7+imkMWFdOe9CrUWpBuwB/Cc/6PULq5AmZ+nuqb6YNPHQuT+oDciJj9LPgOwGuQGZLXAD3IDMBDJv3joDrPHSUm5ZtG6HZYB1cXJ463tWyAYtAzQ5NYzpMOHtZghYBnxtlL6AXKu3aY196GTKMuALjjScTaCRo+s6SSDzQVkGaJfWG/t1Dzk9YeLRIIEqA542tjFNbqWR99QYBKoMeIeaHxp1HyJ3kZH3VE0CVQao3J0onNSkRzvfQLeg+chjTAKDLrA0g/gRJNhzQ+8JfRjJIJmxGelpE49eAjO9zXotwX4X6Uxwjc9gFo49MegjSB01YLEMTcx8eu3UXhxb6+77AlZcg3SfyM+Eegz030Eej8YKTWR6Bv2C3Ih4BoK/AvXFvL5MXGIh3c5DS9Fi5BdoQKgIfeysQ99VLPe0E3ACTsAJFErgPwZ1pkHEuodnAAAAAElFTkSuQmCC"
                       />
                   </div>
                   <div class="Container Container--margin-bottom-small Container--mobile-margins">
                       <h5 class="Heading Heading5 Heading--center">Get your cashback</h5>
                   </div>
                   <p class="Paragraph Paragraph--medium Paragraph--normal Paragraph--center Paragraph--color-black Paragraph--primary Paragraph--none">
                       We'll send you and email within 5 working days. Track your claim <a href="https://2021.samsungpromotions.claims/pricepromise/en-GB">here</a> anytime. Cashback will then be paid to your nominated bank or PayPal account within
                       45 days.*
                   </p>
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
                   <a data-omni-type="microsite" data-omni="opti:780" class="Button__black Button Button--center Button Button--null" href="https://2021.samsungpromotions.claims/pricepromise/en-GB">Claim now</a>
               </div>
               <a
                   class="learnmore"
                   href="https://2021.samsungpromotions.claims/pricepromise/en-GB/qualifying"
                   data-omni-type="microsite"
                   data-omni="price promise:opti:780:learn more"
                   an-tr="price-promise pdp-cta-button"
                   an-ca="option click"
                   an-ac="pd optimisation price promise"
                   an-la="price promise:opti:780:learn more"
               >
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
  if (url.includes('/uk/smartphones/galaxy-s22/buy/') || url.includes('/uk/smartphones/galaxy-s22-ultra/buy/')) {
  const learnmorepopup = document.querySelector('.adding');
  learnmorepopup.addEventListener("click", (event) => {
      event.preventDefault();
      document.querySelector('.js-upgrade-opener').click();
  });
  } else {
   document.querySelector('.bannersection').style.borderRadius = '30px';
   console.log('nothing to add')
  }

 }

}