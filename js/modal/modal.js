const modal = document.querySelector(".modal")
const modal2 = document.querySelector(".escurecer-modal")

function abrirmodal() {

    modal.style.animation = "showin 1s ease";
    modal2.style.animation = "escurecendo 1s ease";
    modal.style.display = "block";
    modal2.style.display = "block";
    console.log("executando a função abrirmodal")
}

function fechar(){

    modal.style.animation = "showout 1s ease forwards";
    modal2.style.animation = "showout 1s ease forwards";

    setTimeout(function(){
        modal.style.display = "none";
        modal2.style.display = "none";
        console.log("executando a função fechar")

        }, 1000);
    
}