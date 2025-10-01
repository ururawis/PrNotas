const barraMaterias = document.querySelector(".barraMaterias");

function generarMaterias(){
    let nombre = prompt("Inserta el nombre de la materia: ");
    if(nombre == ""){
        alert("No se puede generar una materia sin nombre.");
        return false;
    }
    const botonMaterias =  document.createElement("button");
    botonMaterias.textContent = nombre;
    botonMaterias.className = "formatBtnMaterias";

    barraMaterias.appendChild(botonMaterias);
}