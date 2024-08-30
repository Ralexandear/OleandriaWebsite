document.addEventListener('DOMContentLoaded', () => {
  const cardsWrapper = document.querySelector('.services__card-container')
  if (! cardsWrapper) {
    console.log('Card wrapper not found!')
    return
  }

  cardsWrapper.addEventListener('scroll', () => {
    console.log('scrolling meeee')

  })
  // cards.forEach((card, el) => {

  //   if (el === 0) {
  //     card.classList.add('active')
  //   }

  //   card.addEventListener('scroll', () => {
  //   })

  //   // card.addEventListener('click', () => {
  //   //   // Удаляем класс 'active' у всех карточек
  //   //   cards.forEach(e => {
  //   //     e.classList.remove('active', 'first-card');
  //   //   });
  //   //   cards.filter(e => e !== card)[0]?.classList.add('first-card')
  //   //   card.classList.add('active')
      
  //   // });
  // });
});