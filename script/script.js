const buttonPlay =document.querySelector("button.play");

const divContainer=document.querySelector("main div.container");



for (let index=0; index < 100 ; index++){

    let articleEl=document.createElement("article");


    divContainer.appendChild(articleEl);

    buttonPlay.addEventListener("click", function (){

        articleEl.innerHTML=index + 1;

        articleEl.addEventListener("click", function (){

            articleEl.classList.add("active");

            console.log("casella numero: ", index + 1)

        });


    });

    buttonPlay.addEventListener("click", function (){

        articleEl.classList.remove("active");
     
    
    
    });

  
   
};















