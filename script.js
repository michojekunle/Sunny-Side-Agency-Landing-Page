const toggleMenu = () => {
    const hiddenMenu = document.querySelector('.hidden_menu');
    hiddenMenu.classList.toggle('active');
 }

//     closeMenuButton.addEventListener('click', () => {
//     const modals =  document.querySelectorAll('.hidden_menu.active')
//     modals.forEach(hidden_menu => {
//         closeMenu(hidden_menu)
//     })
// })

//     function openMenu(hidden_menu) {
//     if (hidden_menu==null) return
//         hidden_menu.classList.add('active')
//     }

//     function closeMenu(hidden_menu) {
//     if (hidden_menu==null) return
//         hidden_menu.classList.remove('active') 
//     }