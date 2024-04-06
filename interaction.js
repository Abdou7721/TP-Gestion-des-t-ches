document.getElementById("task").addEventListener("input", function() {
    const image = document.getElementById("im");
    const image1= document.getElementById("im1");
    if (this.value.trim() !== "") {
        image.style.display = 'none'; // Fait disparaître l'image lorsque le champ n'est pas vide
        image1.style.display = 'none'; 

    }
});

function entrer(){
    const nouvelElement=document.getElementById("task").value;
    
    if(nouvelElement.trim() !== ""){
       val=true;
        const list=document.getElementById("liste");
        const Element=document.createElement("li");
        const image= document.getElementById("im");
        const image1= document.getElementById("im1");
        Element.innerText= nouvelElement;
        const sup= document.createElement("button");
        sup.textContent= "X";
        sup.onclick= function(){
            Element.remove();
            image.style.display = 'none';
            image1.src = image1.src;
            // Afficher l'image avec une animation
            var style = document.createElement('style');
            style.innerHTML = `
                @keyframes rotation {
                    0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(360deg);
                        
                    }
                }
                .dispa {
                    display: none;
                    width: 30px;
                    height: 30px;
                    margin-left: 30px;
                    animation-name: rotation;
                    animation-duration: 1s; /* Changement de la durée de l'animation */
                    animation-timing-function: ease-in-out; /* Changement de la fonction de temporisation */
                    animation-fill-mode: forwards; /* Changement du mode de remplissage de l'animation */
                }
            `;
            
            // Ajout du style à l'élément head du document
            document.head.appendChild(style);
        
            // Afficher l'image avec une animation
            image1.style.display = 'block';
            
            
        };
        Element.appendChild(sup);
        list.appendChild(Element);
        image.style.display='block';
        document.getElementById("task").value = "";
       
    }
   
}
