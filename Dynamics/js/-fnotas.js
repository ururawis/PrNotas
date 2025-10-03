const barraMaterias = document.querySelector(".barraMaterias");
const grandeNotas = document.querySelector(".grandeNotas");
function generarMaterias(){
    let nombre = prompt("Inserta el nombre de la materia: ");
    if(nombre === "" || nombre === null){
        alert("No se puede generar una materia sin nombre.");
        return false;
    }
    
    const botonMaterias =  document.createElement("button");
    botonMaterias.textContent = nombre;
    botonMaterias.className = "formatBtnMaterias";
    barraMaterias.appendChild(botonMaterias);

    let contenidoDerecho = document.createElement("div");
    contenidoDerecho.className = "contenidoDerecho"; 
    contenidoDerecho.style.display = "none";   

    let barraDeApuntes = document.createElement("div");
    barraDeApuntes.className = "barraDeApuntes";
    
    let crearApunte = document.createElement("button");
    crearApunte.textContent = "Crea un apunte"
    crearApunte.className = "crearApunte";

    //acomodar los divs en su lugar, uno dentro del otro
    contenidoDerecho.appendChild(barraDeApuntes);
    //contenidoDerecho.appendChild(contenidoDeApuntes);
    barraDeApuntes.appendChild(crearApunte);
    grandeNotas.appendChild(contenidoDerecho);
    
    //cambio de vsitas 
    botonMaterias.addEventListener("click", ()=>{
        console.log(`Hola ${botonMaterias.textContent}`);
        let todoDerecho = document.querySelectorAll(".contenidoDerecho");
        todoDerecho.forEach(contenido => {
            contenido.style.display = "none";
        });
        //mostrar
        contenidoDerecho.style.display = "flex";
    });

    crearApunte.addEventListener("click", ()=>{
        console.log("Creé un apunte :)");
        let tituloApunte = prompt("Escribe el título que quieras que tenga tu apunte: ");
        if(tituloApunte === "" || tituloApunte === null){
            console.log("no puede ser vacío");
            return false;
        }
        let pestañaApunte = document.createElement("button");
        pestañaApunte.className = "crearApunte";
        pestañaApunte.textContent = tituloApunte;
        barraDeApuntes.appendChild(pestañaApunte);

        let contenidoDeApuntes = document.createElement("div");
        contenidoDeApuntes.className = "contenidoDeApuntes";
        contenidoDeApuntes.textContent = `Hola ${tituloApunte}`;
        contenidoDeApuntes.style.display = "none";

        contenidoDerecho.appendChild(contenidoDeApuntes);
        //cambio de vista de apuntes
        pestañaApunte.addEventListener("click", () => {
            let todosLosApuntes = document.querySelectorAll(".contenidoDeApuntes");
            todosLosApuntes.forEach(apunte => {
            apunte.style.display = "none";
            });
        //mostrar
        contenidoDeApuntes.style.display = "flex";
        });
    });
};