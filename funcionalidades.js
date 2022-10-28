//Llamando a la funcion para cambiar el color inicial
changeColor();

//Funcion para cambiar de color
function changeColor(){
 
   //Definiendo una matriz de colores 
   matColors = ["Red","Orange", "White", "Yellow", "Blue", "Green"];
   //Random
   randomColor = Math.floor(Math.random() * matColors.length);
   nameColor = matColors[randomColor];

    //Cambiando el color en body, style, background
   document.body.style.background = nameColor;

   console.log(nameColor);

    //Cambiando Etiqueta de color
    document.getElementById("labelColor").innerHTML = nameColor;


}