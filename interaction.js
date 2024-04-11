document.getElementById("task").addEventListener("input", function() {
    const image = document.getElementById("im");
    const image1= document.getElementById("im1");
    const image2= document.getElementById("agenda");
    if (this.value.trim() !== "") {
        image.style.display = 'none'; // Fait disparaître l'image lorsque le champ n'est pas vide
        image1.style.display = 'none'; 
        image2.style.display = 'none'; 

    }
});
document.getElementById("task").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        entrer(); // Appeler la fonction pour ajouter l'élément lorsque la touche "Entrée" est pressée
    }
});
function afficherCalendrier() {
    const dialogue = document.getElementById("datePicker");
    dialogue.style.display = "block";
}

function entrer(){
    const nouvelElement=document.getElementById("task").value;
    
    if(nouvelElement.trim() !== ""){
       
        const list=document.getElementById("liste");
        const Element=document.createElement("li");
        const calendar_img= document.getElementById("agenda");
        const sup= document.createElement("button");
        const selectedDate = document.getElementById("date_text");
        const calendarContainer = document.createElement("div");
        const calendar= document.createElement("input");
        const checkbox = document.createElement("input");
        const textSpan = document.createElement("span"); 

       

        calendarContainer.style.display = "flex";
        calendar.type = "date";
        checkbox.type = "checkbox";
        checkbox.style.marginRight = "10px";
        checkbox.style.marginLeft = "2px";
        checkbox.style.width="15px";
        checkbox.style.height="15px";
        checkbox.style.display = "block";
        
        calendar.style.width="100px";
        calendar.style.height="20px";
        calendar.style.position = "absolute";
        calendar.style.left="380px"; 
        

        
        sup.style.position = "absolute";
        sup.style.left="420px"; 
        

        
        textSpan.style.width="10px";
        textSpan.textContent = nouvelElement;
        textSpan.style.whiteSpace = "nowrap"; // Permet au texte de faire un retour à la ligne
        textSpan.style.display = "block"; 
        
     


        const image= document.getElementById("im");
        const image1= document.getElementById("im1");
        
        

        selectedDate.textContent=" mon p ";
        selectedDate.style.display='none';
        

        calendar.style.display='block';
        sup.textContent= "X";
        sup.onclick= function(){
            Element.remove();
            image.style.display = 'none';
            calendar_img.style.display='none';
            
            
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

        checkbox.addEventListener("change", function() {
            if (this.checked) {
                Element.style.backgroundColor = "lightgrey"; // Changer la couleur de fond en gris
                Element.style.borderRadius = "5px"; // Ajouter un arrondi aux coins
                textSpan.style.textDecoration = "line-through"; 
            } else {
                Element.style.backgroundColor = ""; // Réinitialiser la couleur de fond
                Element.style.borderRadius = ""; // Réinitialiser le style des coins
                textSpan.style.textDecoration = ""; 
            }
        });
        calendar.addEventListener('change', function() {
            if(this.value.trim() !== ""){
              calendar_img.style.display='block';
              //calendar_img.style.visibility='hidden';
              image.style.display='none';
              image1.style.display='none';
            }else{
      
            }
      });


        calendarContainer.appendChild(checkbox);
        calendarContainer.appendChild(textSpan);
        calendarContainer.appendChild(calendar);
        calendarContainer.appendChild(sup);
        

        Element.appendChild(calendarContainer);
        
        //Element.appendChild(selectedDate);
       // Element.appendChild(sup);
        
        list.appendChild(Element);
        image.style.display='block';
        document.getElementById("task").value = "";
       
    }
   
}
document.getElementById("agenda").addEventListener("click", function() {
    afficherCalendrier();
});


