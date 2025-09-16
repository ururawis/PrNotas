const barraMaterias = document.querySelector(".barraMaterias");
const nombresMaterias = minibasJSON.materias;


nombresMaterias.forEach(materias=>{
    
    const botonMaterias =  document.createElement("button");
    botonMaterias.textContent = materias.nombre;
    botonMaterias.className = "formatBtnMaterias";

    barraMaterias.appendChild(botonMaterias);

    botonMaterias.addEventListener("click", () =>{
        console.log(`Hola ${materias.nombre}`);
    })
})

function comprobar(){
    console.log("HOla Crear");
}