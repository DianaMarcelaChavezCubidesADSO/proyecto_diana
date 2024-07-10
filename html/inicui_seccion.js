const menuOpciones = document.querySelector(".menu-opcional");
const bottonSingUp = document.querySelector("botton-sing-up");
const header = document.querySelector("header");


const responsive =()=>{
    if( window.innerWidth <= 865){
        menuOpciones.children[0].appendChild(bottonSingUp);
        header.appendChild(menuOpciones);
    }
}
responsive();
window.addEventListener("resize",responsive);