let caja = document.getElementById("caja");
let enviar = document.getElementById("enviar");
let numTareas = document.getElementById("i");
const body = document.getElementById("body");
let i = 0;
class MyTask{


    constructor(){
        this.div1 = document.createElement("div");
        this.div = document.createElement("div");
        this.pTarea = document.createElement("p");
        this.pTareaDescripcion = document.createElement("p");
        this.btnBorrar = document.createElement("div");
        this.btnEditar = document.createElement("div");
        this.idBtn;
        

//------------------------------------------------------------
        
        this.inputTexto = document.createElement("input");
        this.divEditar = document.createElement("div");
        this.inputDescripcion = document.createElement("input");
        this.btnGuardarCambios = document.createElement("button");
//----------------------------------------------------------------
        this.texto;
        this.textoDescripcion;
        }

    crearElemento(texto, descripcion) {
        this.texto = texto;
        this.textoDescripcion = descripcion;
        //Metiendo texto a los objshtml
        this.pTareaDescripcion.innerHTML = this.textoDescripcion;
        this.pTarea.innerHTML = this.texto;
        this.btnBorrar.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16">
        <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
        <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
      </svg>`;
        this.btnEditar.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
      </svg>`;

        //agregando los objetos a los div
        this.div1.appendChild(this.pTarea);
        this.div1.appendChild(this.pTareaDescripcion);
        this.div.appendChild(this.div1);
        this.div.appendChild(this.btnEditar);
        this.div.appendChild(this.btnBorrar);


        //agreganndo clases a los elementos
        this.div1.classList.add("div__texto");
        this.div.classList.add("div");
        this.btnBorrar.classList.add('btn__tarea');
        this.btnEditar.classList.add('btn__tarea');


        i++;
        numTareas.innerHTML ="Numero de tareas: " + i;
       }
       editarTarea(){
        this.btnGuardarCambios.innerHTML = "Guardar Cambios"
        this.divEditar.appendChild(this.inputTexto);
        this.inputTexto.type = "text";
        this.inputTexto.setAttribute("value", this.texto);
        this.inputDescripcion.setAttribute("value", this.textoDescripcion);
        this.inputDescripcion.type = "text";
        this.divEditar.appendChild(this.inputDescripcion);
        this.divEditar.appendChild(this.btnGuardarCambios);
        this.divEditar.classList.add("editar__div");
        this.btnGuardarCambios.classList.add("editar__btn");
        this.inputTexto.classList.add("editar__input-texto");
        this.inputDescripcion.classList.add("editar__input-descripcion");

       }

}



enviar.addEventListener("click",()=>{
    let textTarea = document.getElementById("input-nombreTarea").value;
    let textDescripcionTarea = document.getElementById("input-descripcion").value;
    let elemento = new MyTask();
    elemento.crearElemento(textTarea, textDescripcionTarea);
    caja.appendChild(elemento.div);



    elemento.btnBorrar.addEventListener("click", ()=>{
        sonidoCheck();
        caja.removeChild(elemento.div);
        i--;
    numTareas.innerHTML ="Numero de tareas: " + i;
    });

    elemento.btnEditar.addEventListener("click", ()=>{
        elemento.editarTarea();
        console.log(elemento.divEditar);
        body.appendChild(elemento.divEditar);

        elemento.btnGuardarCambios.addEventListener("click", ()=>{
            elemento.pTarea.innerHTML = elemento.inputTexto.value;
            elemento.pTareaDescripcion.innerHTML = elemento.inputDescripcion.value;
            body.removeChild(elemento.divEditar);
        })
    })
})









function sonidoCheck(){
    const music = new Audio('campana.wav');
    music.play();
    music.loop =false;
}
