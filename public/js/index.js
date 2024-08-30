document.addEventListener('DOMContentLoaded', () => {
  buildLinks();
})


function buildLinks() {
  const elements = document.querySelectorAll('[data-ext-link]');
  
  elements.forEach(element => {
    element.addEventListener('click', () => {
      // Получаем значение атрибута data-ext-link
      const extLink = element.getAttribute('data-ext-link');
      
      // Открываем ссылку в новой вкладке
      window.open(extLink);
    });
  });
}