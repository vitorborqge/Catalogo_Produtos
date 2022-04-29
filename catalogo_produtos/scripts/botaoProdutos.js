let botaoComprar = document.querySelectorAll('.input-botao');

window.addEventListener('load', setNameButton);

botaoComprar.forEach(element =>{ // função ao clicar no nome alterar nome 'comprar' para 'comprado'
    element.addEventListener('click', changeNameButton)
})

let estados = ['Comprar', 'Comprado']

function setNameButton(){ // função colocando novo nome 
    botaoComprar.forEach(element =>{
        element.value = estados[0];
    })
}    


function changeNameButton(p){ // função alterando nome
    if(p.target.value === estados[0]){
        p.target.value = estados[1];
        p.target.classList.add('active');
    }
    else{
        p.target.value = estados[0];
        p.target.classList.remove('active');
    }
    

}
