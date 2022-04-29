let menuSection = document.querySelector('.menu-section');
let botaoMenu = menuSection.querySelector('.menu-mobile');
let mostrando = true;

botaoMenu.addEventListener('click', () =>{ // função para ocultar estilo
    if(mostrando){
        document.body.style.overflow = 'hidden';
    }
    else{
        document.body.style.overflow = 'initial';
    }
    menuSection.classList.toggle('on', mostrando);
    mostrando = !mostrando;
})

let links = document.querySelectorAll('.link-page'); 
console.log(links)
links.forEach(element =>{ // função ao clicar vai pra uma parte do codigo
    element.addEventListener('click', ()=>{
        menuSection.classList.remove('on');
        document.body.style.overflow = 'initial';
    })
})
