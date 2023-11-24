let figura = document.getElementById("figura");
let mensaje = document.getElementById("message");
let bodyBackground = document.getElementById("bodyBackground");

function circulo(){
    figura.classList.toggle("circulo");
    mensaje.innerText='CIRCULO';
}

function rectangulo(){
    figura.classList.toggle("rectangulo")
    mensaje.innerText='Rectangulo';
}

function rombo(){
    figura.classList.toggle("rombo")
    mensaje.innerText='Rombo';
}

function imagen(){
    figura.classList.toggle("imagen")
    mensaje.innerText='imagen';
}

function gif(){
    figura.classList.toggle("gif")
    mensaje.innerText='gif';
}

function triangulo(){
    figura.classList.toggle("triangulo")
    mensaje.innerText='Triangulo';
}

function hoja(){
    figura.classList.toggle("hoja")
    mensaje.innerText='Hoja';
}

function pacman(){
    figura.classList.toggle("pacman")
    mensaje.innerText='Pacman';
}

function luna(){
    figura.classList.toggle("luna")
    mensaje.innerText='Luna';
}

function huevo(){
    figura.classList.toggle("huevo")
    mensaje.innerText='Huevo';
}

function trapecio(){
    figura.classList.toggle("trapecio")
    mensaje.innerText='Trapecio';
}

function moveTop(){
    figura.classList.toggle("moveTop");
    mensaje.innerText='Desplazar hacia arriba';
}

function moveLeft(){
    figura.classList.toggle("moveLeft");
    mensaje.innerText='Desplazar hacia la izquierda';
}

function moveBottom(){
    figura.classList.toggle("moveBottom");
    mensaje.innerText='Desplazar hacia abajo';
}

function moveRight(){
    figura.classList.toggle("moveRight");
    mensaje.innerText='Desplazar hacia la derecha';
}

function panelSuperior(){
    const panel = document.querySelector(".panel-superior");
    
    panel.classList.toggle("active")
}

function fondo(){
    bodyBackground.classList.toggle("bodyBackground");
}

function panelLateral(){
     const panel = document.querySelector(".panel-lateral");
    
    panel.classList.toggle("active")
}

function miPropuesta(){
    figura.classList.toggle("miPropuesta");
    mensaje.innerText='Estrella';
}
