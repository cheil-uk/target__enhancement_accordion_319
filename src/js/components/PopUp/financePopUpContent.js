let FinancePopupContent = () => {

  const FinancePopUpContent = document.createElement('div');
  FinancePopUpContent.classList.add('price-pop-content','Container', 'Container--mobile-margins')

  // content copied from existing popup
  FinancePopUpContent.innerHTML = `Finance!`;


  return FinancePopUpContent
}

export default FinancePopupContent;