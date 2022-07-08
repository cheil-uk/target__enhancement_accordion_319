let FinancePopupContent = () => {

  const FinancePopUpContent = document.createElement('div');
  FinancePopUpContent.classList.add('finance-pop-content', 'Container', 'Container--mobile-margins')

  // content copied from existing popup
  FinancePopUpContent.innerHTML = `
    <h2 class="finance-pop-content__title">Estimate your installment plan</h2>
  `;


  return FinancePopUpContent
}

export default FinancePopupContent;