//PINTAR TODAS LAS TAREAS Y PONERLES COLOR//


let tareas = document.querySelector('#tareas');
let dataIdTarea = 0;

const printTareas = function (pListaTareas) { 
    
    tareas.innerHTML = '';
    let miColor = '';
    


    for (let tarea of pListaTareas) {


        if (tarea.prioridad == 'urgente') {
            
            miColor ='red';
                
        } else if (tarea.prioridad == 'diaria') {
            
            miColor='blue';
            
        } else if (tarea.prioridad == 'optativo') {
            
            miColor='green';
        };

        

        /* Con SWITCH :
        
        switch (tarea.prioridad) {

            case 'urgente':
                miColor = 'red';
                
                break;
            
                case 'diaria':
                    miColor = 'blue';
                    
                break;
            
                case 'optativo':
                    miColor = 'green';
                    
                    break;
            

        } */

        tareas.innerHTML +=
        `<article style="background-color:${miColor}" "data-id=${dataIdTarea}">
        
        <h1>${tarea.titulo}</h1>   <button id="btn-eliminar">ELIMINAR</button>
       
    
        </article>` ;
  
    };
    
};

printTareas(listaTareas);






//FILTRAR TAREAS POR PRIORIDAD//


function filtrarPorPrioridad(pPrioridad, pListaTareas) {

    const listaFiltrada = pListaTareas.filter((tarea) => {return tarea.prioridad == pPrioridad})

    return listaFiltrada;
};



let selectPrioridad = document.querySelector('#filtrar-prioridad');
selectPrioridad.addEventListener('change', getPrioridad);

function getPrioridad(event) { 

    let prioridad = event.target.value;
  

    if (prioridad != "") {

        let lista = filtrarPorPrioridad(prioridad, listaTareas);
        printTareas(lista);     
        
    } else {

        printTareas(listaTareas)
        
    }
};


//MOSTRAR TAREA ESCRIBIENDO//

let inputBuscarTarea = document.querySelector('#buscar-tarea');
inputBuscarTarea.addEventListener('keydown', getBuscarData);

function getBuscarData(event) { 

    if (event.keyCode == 13 || event.type == 'keydown') {

        let palabraBuscar = inputBuscarTarea.value;

        let listaPorTeclado = searchByWord(palabraBuscar, listaTareas)
        printTareas(listaPorTeclado);
        
    }
};



function searchByWord(pLetra, pListaTareas) { 

    const filtrarPorTeclado = pListaTareas.filter(tarea => {
        return tarea.titulo.toLowerCase().includes(pLetra.toLowerCase());
    })

    return filtrarPorTeclado;
};








//ANADIR TAREAS//


////   1er crear save Tarea:

/* function saveTarea(pTarea) {

    let duplicado = false; 

    for (let tarea of listaTareas) {

        if (tarea.titulo === pTarea.titulo && tarea.prioridad === pTarea.prioridad) {
            
            duplicado = true;

        } 
        
    }
    if (duplicado === false) {
        
        listaTareas.push(pTarea);
        printTareas(pTarea);
        console.log(listaTareas);

    } else {
        alert('Tarea existante')
    }


    

} */


// 2ndo crear el newTarea



/* const inputIntroduceTarea = document.querySelector('#introduce-tarea');
const btnGuardar = document.querySelector('#btn-guardar');
let SelectSeleccionarPrioridad = document.querySelector('#seleccionar-prioridad')
let lengthIdTarea = listaTareas.length;

btnGuardar.addEventListener('click', getDataForm);

function getDataForm(event) {
    
    event.preventDefault();

    const tituloTarea = inputIntroduceTarea.value;
    const prioridadTarea = SelectSeleccionarPrioridad.value;

    if (tituloTarea != "" && prioridadTarea != "") {
        
        const newTarea = {

            idTarea: ++lengthIdTarea,
            titulo: tituloTarea,
            prioridad: prioridadTarea
        }

        saveTarea(newTarea)
        
    } else {
        alert(`<p> Debes rellenar todos los campos </p>`)
    }


} */

// Borrar tareas

