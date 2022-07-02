import Cards from "./Cards/Cards"

export default class TradeIn {
    addSection() {
      //just adds in section on the buy pages for the s22
      const url = window.location.pathname;
      const div = "div";
      const accodionSection = document.querySelector("#downBoxHtml > div:nth-child(1)");
      const showroomContainer = document.querySelector("#content > div > div > div.accordion > div > section");
      const tradeInSection = document.createElement(div);
      tradeInSection.classList.add("tradeIn-section");

      const section = document.createElement("section");
      section.classList.add("hubble-pd-expand", "hubble-see-actual-size");

      const anchorEle = document.createElement("a");
      anchorEle.setAttribute("href", "javascript:;");
      anchorEle.setAttribute("role", "button");
      anchorEle.classList.add("hubble-pd-expand__opener", "s-expand__opener", "tradeIn-hubble-pd-expand__opener");

      const headingTwo = document.createElement("h2");
      headingTwo.classList.add("hubble-pd-expand__opener-name");
      headingTwo.innerText = "Trade In";

      const spanIcon = document.createElement("span");
      spanIcon.classList.add("hubble-pd-expand__opener-icon");

      anchorEle.append(headingTwo, spanIcon);

      const contentDiv = document.createElement(div);
      contentDiv.classList.add("hubble-pd-expand__content", "s-expand__content", "tradeIn__content__section");

      section.append(anchorEle, contentDiv);

      const watchClassic = "/uk/watches/galaxy-watch/galaxy-watch4-classic-black-lte-sm-r895fzkaeua/buy/";
      const watch = "/uk/watches/galaxy-watch/galaxy-watch4-pink-gold-lte-sm-r865fzdaeua/buy/";

      if (url.includes(watch) || url.includes(watchClassic)) {
          showroomContainer.insertAdjacentElement("afterend", section);

          var acc = document.getElementsByClassName("tradeIn-hubble-pd-expand__opener");
          var i;

          for (i = 0; i < acc.length; i++) {
              acc[i].addEventListener("click", () => {
                  const opener = acc[0].parentElement;
                  opener.classList.add("is-opened");
                  opener.classList.toggle("is-opened-active");
              });
          }
      } else {
          console.log(accodionSection);
          tradeInSection.append(section);
          accodionSection.insertAdjacentElement("afterend", tradeInSection);
          //JS to open and close accordion
          const sectionClasses = section.classList;
          section.onclick = () => {
              sectionClasses.toggle("is-opened");
              sectionClasses.toggle("is-opened-active");
          };
      }

    }

    addContent() {
    const contentSection = document.querySelector('.tradeIn__content__section');
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

    contentSection.innerHTML = `
    <section class="finance_section">
      <div class="finance_section_inner">
       <div class="FinanceComponent FinanceComponent__Trade_In">
        <script src="https://d1vp9jkpfdwr15.cloudfront.net/tradeindates/js/tradeindates.js"></script>
        <div class="Container Container--margin-bottom-small Container--mobile-margins">
            <h2 class="Heading Heading2 Heading--center">How it works</h2>
            <div class="Container Container--mobile-margins play-video-container">
                <button class="open-video-button__small open-video-button">
                    <svg width="24px" height="24px" viewBox="0 0 24 24">
                        <title>icon_play bue</title>
                        <desc>Created with Sketch.</desc>
                        <g id="icon_play-bue" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="Icon/16/play" transform="translate(2.000000, 2.000000)">
                                <circle id="Oval" stroke="#0077C8" stroke-width="2" cx="10" cy="10" r="10"></circle>
                                <polygon
                                    id="Triangle"
                                    fill="#0077C8"
                                    transform="translate(11.428571, 10.000000) rotate(-270.000000) translate(-11.428571, -10.000000) "
                                    points="11.4285714 6.42857143 15.7142857 13.5714286 7.14285714 13.5714286"
                                ></polygon>
                            </g>
                        </g>
                    </svg>
                    <span>watch the video</span>
                </button>
            </div>
            <p class="Paragraph Paragraph--medium Paragraph--normal Paragraph--center Paragraph--color-black Paragraph--primary Paragraph--none">Trade in your old device for up to £570 off your order**</p>
        </div>
        <div class="FinanceComponent__Panels">
            <div class="FinanceComponent__Panel--grey">
             ${Cards('valueOfDevice')}
            </div>
            <div class="FinanceComponent__Panel--grey">
             ${Cards('discount')}
            </div>
            <div class="FinanceComponent__Panel--grey">
             ${Cards('sendDevice')}
            </div>
        </div>
        <div class="FinanceComponent__TradeIn__Bottom">
            <button class="Button__black Button Button--center" ${tagging('319:Finance module enhancement accordion', 'trade-in')}>Start trade-in</button>
            <div class="FinanceComponent__TradeIn__Bottom__Terms">
            <p class="Paragraph Paragraph--small Paragraph--normal Paragraph--center Paragraph--color-offblack Paragraph--primary Paragraph--none">
            </p></div>
        </div>
    </div>

      </div>
    </section>
    `

   }

}