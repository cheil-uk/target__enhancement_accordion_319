let PricePromisePopupContent = () => {

  const PPPopUpContent = document.createElement('div');
  PPPopUpContent.classList.add('price-pop-content','Container', 'Container--mobile-margins')

  // content copied from existing popup
  PPPopUpContent.innerHTML = `
    <h1 class="hubble-price-bar__detail-title popup__heading">Selected Retailers</h1>
    <p class="Paragraph Paragraph--regular Paragraph--normal Paragraph--left Paragraph--color-black Paragraph--primary Paragraph--none ">
      Buy any qualifying product from Samsung.com, and if you find it cheaper at any of the selected retailers below, you can claim back the difference within 7 days of purchase. 
      <a href="https://2021.samsungpromotions.claims/pricepromise/en-GB/qualifying">Terms and conditions apply</a>
    </p>
    <div class="Container  Container--mobile-margins retailers__container">
      <div class="title__link__container"><div class="title">
        <p>AO</p>
      </div>
      <div class="link">
        <p>
          <a href="https://www.ao-mobile.com/">ao-mobile.com</a>
        </p>
      </div>
    </div>
    <div class="title__link__container">
      <div class="title">
        <p>AO Mobile</p>
      </div>
      <div class="link">
        <p>
          <a href="https://www.ao-mobile.com/">ao-mobile.com</a>
        </p>
      </div>
    </div>
    <div class="title__link__container">
      <div class="title">
        <p>AO Mobile Phones Direct</p>
      </div>
      <div class="link">
        <p>
          <a href="https://www.mobilephonesdirect.co.uk">https://www.mobilephonesdirect.co.uk</a>
        </p>
      </div>
    </div>
    <div class="title__link__container">
      <div class="title">
        <p>Argos</p>
      </div>
      <div class="link">
        <p>
          <a href="https://www.argos.co.uk">https://www.argos.co.uk</a>
        </p>
      </div>
    </div>
    <div class="title__link__container">
      <div class="title">
        <p>Carphone Warehouse</p>
      </div>
      <div class="link">
        <p>
          <a href="https://www.carphonewarehouse.com">https://www.carphonewarehouse.com</a>
        </p>
      </div>
    </div>
    <div class="title__link__container">
      <div class="title">
        <p>Currys PC World</p>
      </div>
      <div class="link">
        <p>
          <a href="https://www.currys.co.uk/gbuk/index.html">https://www.currys.co.uk/gbuk/index.html</a>
        </p>
      </div>
    </div>
    <div class="title__link__container">
      <div class="title">
        <p>John Lewis</p>
      </div>
      <div class="link">
        <p>
          <a href="https://www.johnlewis.com">https://www.johnlewis.com</a>
        </p>
      </div>
    </div>
    <div class="title__link__container">
      <div class="title">
        <p>Richer Sounds</p>
      </div>
      <div class="link">
        <p>
          <a href="https://www.richersounds.com">https://www.richersounds.com</a>
        </p>
      </div>
    </div>
    <div class="title__link__container">
      <div class="title">
        <p>Samsung.com</p>
      </div>
      <div class="link">
        <p>
          <a href="https://www.samsung.com/uk">https://www.samsung.com/uk</a>
        </p>
      </div>
    </div>
    <div class="title__link__container">
      <div class="title">
        <p>Very</p>
      </div>
      <div class="link">
        <p>
          <a href="https://www.very.co.uk">https://www.very.co.uk</a>
        </p>
      </div>
    </div>
    </div>
  `

  return PPPopUpContent
}

export default PricePromisePopupContent;