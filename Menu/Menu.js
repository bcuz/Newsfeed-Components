
const toggleMenu = (event) => {
  // Toggle the "menu--open" class on your menu refence. 
  // toggleClick func will fire on everything but .menuButton due to this stop.
  event.stopPropagation()
  
  menu.classList.toggle('menu--open')
  
}

const toggleClick = (event) => {
  // console.log(event.target.tagName);

  let dontCloseOn = ['LI', 'UL']
  
  if (menu.classList.contains('menu--open') && !dontCloseOn.includes(event.target.tagName)) {
    // console.log('hi');

    menu.classList.toggle('menu--open')
    
  }
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');

// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu

menuButton.addEventListener('click', toggleMenu)
document.addEventListener('click', toggleClick)