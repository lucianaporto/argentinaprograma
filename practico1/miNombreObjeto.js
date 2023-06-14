//2. Objetos
//a. Defina una variable de tipo objeto que lleve el nombre persona, y que
//contenga las variables nombre, apellido y edad del ejercicio anterior con
//sus respectivos valores.

let persona = {
    nombre: "Luciana", apellido: "Porto", edad: 36
};

//b. Imprime por consola un mensaje que respete el siguiente formato:
//“Mi objeto persona es el siguiente: [persona]”

console.log("Mi objeto persona es el siguiente: " + JSON.stringify(persona));
