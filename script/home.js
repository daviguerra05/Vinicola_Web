function menu(){
    var header = document.getElementById('header')  
    var left = document.querySelector('.left')
    var middle = document.querySelector('.middle')
    var right = document.querySelector('.right')
    var right_hamburguer = document.querySelector('.right_hamburguer')


    header.classList.toggle('ativo')
    if (header.className == 'ativo'){
        header.style.animation = 'show_menu 0.5s ease forwards'
        header.style.flexDirection = 'column'
        header.style.justifyContent = 'space-evenly'
        left.style.marginLeft = '0%'
        right_hamburguer.style.marginRight = '0%'
        right_hamburguer.innerHTML = 'X'
        middle.style.display = 'flex'
        middle.style.flexDirection ='column'
        middle.style.alignItems = 'center'
        middle.style.gap = '1rem'
        right.style.display = 'block'
    }
    else{
        header.style.animation = 'hide_menu 0.5s ease forwards'
        header.style.flexDirection = 'row'
        header.style.justifyContent = 'space-between'
        left.style.marginLeft = '10%'
        right_hamburguer.style.marginRight = '10%'
        right_hamburguer.innerHTML = '|||'
        middle.style.display = 'none'
        right.style.display = 'none'
    }
    
}

const barsButton = document.querySelector(".bars");
  const navBar = document.querySelector(".nav-bar");

  barsButton.onclick = function () {
    navBar.classList.toggle("active");
  };
