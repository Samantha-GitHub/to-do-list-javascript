let tareas = document.querySelector('#tareas');

const printTareas = function (pListaTareas) { 
    tareas.innerHTML = '';
    let miColor = '';
    


    for (let tarea of pListaTareas) {

        tareas.innerHTML +=
        `<article style="background-color:${miColor}">
        
        <h1>${tarea.titulo}</h1>   <button id="btn-eliminar">ELIMINAR</button>
       
    
        </article>` ;

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
            

        }


/*         if (tarea.prioridad == 'urgente') {
            
            miColor ='red';
                
        } else if (tarea.prioridad == 'diaria') {
            
            miColor='blue';
            
        } else if (tarea.prioridad == 'optativo') {
            
            miColor='green';
        };     */
        

        
    };





    
};

printTareas(listaTareas);

