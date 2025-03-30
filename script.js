function limitarPalabrasEnClase(clase, limite) {
    let elementos = document.querySelectorAll(`.${clase}`);
    
    elementos.forEach((elemento) => {
        let palabras = elemento.textContent.split(" ");
        
        if (palabras.length > limite) {
            elemento.textContent = palabras.slice(0, limite).join(" ") + "...";
        }
    });
}

// Límite de 80 palabras en todos los elementos con la clase "desc"
limitarPalabrasEnClase("desc", 20);
