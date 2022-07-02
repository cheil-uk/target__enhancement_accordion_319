let Accordion = (accordionContent) => {
 const headingTitle = document.querySelector('.pd-header-navigation__headline-text');
 const container = document.createElement('div')
 container.classList.add('accordion');
 container.innerHTML = `
 <div class="hubble-feature-wrapper">
    <div class="hubble-feature-title">
        <strong>${headingTitle.textContent}</strong>
    </div>
    ${accordionContent.innerHTML}
  </div>
 `
 return container
}

export default Accordion

