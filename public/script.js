const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');

for ( let card of cards ){
    card.addEventListener("click", function(){
        const videoId = card.getAttribute('id');

        window.location.href = `https://rocketseat.com.br/${videoId}`
        
    })
}



function change_img(){
    document.querySelector("#imgId").src = document.querySelector("#imgId").innerHTML = "/go-home.gif";
    document.getElementById("error-body").style.transition = "all 2.7s";
    document.body.style.backgroundColor =  'black';
    

}


function change_img_error(){
    document.getElementById("error-body").style.transition = "all .1s";
    document.querySelector("#imgId").src = document.querySelector("#imgId").innerHTML = "/error.gif";
    document.body.style.backgroundColor = '#145c8a';

    
}

