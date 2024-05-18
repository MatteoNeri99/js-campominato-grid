const buttonPlay =document.querySelector("button.play");


buttonPlay.addEventListener("click", function (){
    const divContainer=document.querySelector("main div.container");



    for (let index=0; index < 100 ; index++){

        let articleEl=document.createElement("article");

        
        divContainer.appendChild(articleEl);

        articleEl.append([index + 1]);

        

        articleEl.addEventListener("click", function (){

            articleEl.classList.add("active");

        });

       

    };


});



