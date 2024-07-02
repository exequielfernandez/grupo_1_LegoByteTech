//Script para el Slider del Home
document.addEventListener('DOMContentLoaded', function() {
    const productContainers = document.querySelectorAll('.product-container');
    const nxtBtn = document.querySelector('.nxt-btn');
    const preBtn = document.querySelector('.pre-btn');
  
    productContainers.forEach(item => {
      let containerDimensions = item.getBoundingClientRect();
      let containerWidth = containerDimensions.width;
  
      nxtBtn.addEventListener('click', () => {
        item.scrollLeft += containerWidth;
      });
  
      preBtn.addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
      });
    });
  });
//Script para el menú de la barra de navegación
function toggleMenu() {
    const navList = document.querySelector('nav ul');
    navList.classList.toggle('active');
}