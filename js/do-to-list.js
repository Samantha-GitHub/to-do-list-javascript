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

        dataIdTarea++;
        tareas.innerHTML +=
        `<article style="background-color:${miColor}" data-id='${dataIdTarea}'>
        
        <h1>${tarea.titulo}</h1>   <button id="btn-eliminar">ELIMINAR</button>
       
    
        </article>` ;
        llamarBotones()
  
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
inputBuscarTarea.addEventListener('keyup', getBuscarData);

function getBuscarData(event) { 

    if (event.keyCode == 13 || event.type == 'keyup') {

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





const inputIntroduceTarea = document.querySelector('#introduce-tarea');
const btnGuardar = document.querySelector('#btn-guardar');
const alert = document.querySelector('#alert');
let SelectSeleccionarPrioridad = document.querySelector('#seleccionar-prioridad')


btnGuardar.addEventListener('click', getDataForm);

function getDataForm(event) {
    
    event.preventDefault();

    const tituloTarea = inputIntroduceTarea.value;
    const prioridadTarea = SelectSeleccionarPrioridad.value;

    if (tituloTarea != "" && prioridadTarea != "") {

        let color = '';
        alert.style.display = 'none';


        switch (prioridadTarea) {

            case 'urgente':
                color = 'red';
    
                
                break;
            
            case 'diaria':
                color = 'blue';
                    
                break;
            
            case 'optativo':
                color = 'green';
                    
                break;
        }

        dataIdTarea++;
        tareas.innerHTML +=
        `<article style="background-color:${color}" data-id='${dataIdTarea}'>
        
        <h1>${tituloTarea}</h1>   <button id="btn-eliminar">ELIMINAR</button>
       
    
        </article>` ;

        llamarBotones()

        const json = {

            idTarea: dataIdTarea,
            titulo: tituloTarea,
            prioridad: prioridadTarea,
        };

        listaTareas.push(json);          

    } else {
        
        alert.style.display = 'block';
    }


}

// Borrar tareas

function llamarBotones() {
 
    let borrar = document.querySelectorAll('#btn-eliminar');

    for (let buton of borrar) {

        buton.addEventListener('click', borrarElementos);
    }
    
};



function borrarElementos(event) {

    let article = event.target.parentNode;   
    let id = parseInt(article.dataset.id);
   

    article.parentNode.removeChild(article);

    let position = listaTareas.findIndex(tarea => tarea.idTarea == id);

    listaTareas.splice(position, 1);
    

  /*   event.parentNode.parentNode.removeChild(event.parentNode);
 */

}  








