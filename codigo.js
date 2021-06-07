/*
* En el evento dragstart se coloca un mensaje que se verá muy brevemente
* o quizá no se note, cuando el usuario inicia el arrastre
*/
function dragStartEvent(e) {
    eventStatus.innerHTML = "evento  dragStart.";
    overStatus.innerHTML = "";
    dropStatus.innerHTML = "";
    e.dataTransfer.setData('text/html', this.innerHTML);
}

/*
* El evento drag reporta al usario cuando inicia y que un arrastre
* está actualmente en progreso
*/
function dragEvent(e) {
    eventStatus.innerHTML = "evento drag.";
    dragStatus.innerHTML = "Arrastrando en este momento.";
}

/*
* El evento dragover despliega un mensaje cuando es llamado y otro que
* que indica que el arrastre ha terminado
*/
function dragEndEvent(e) {
    eventStatus.innerHTML = "evento dragend.";
    dragStatus.innerHTML = "Arrastre terminado.";
}

/*
* El evento dragend despliega un mensaje cuando es llamado y otro que
* que indica sobre que elemento objetivo se arratra actualemte, si es
* el caso
*/
function dragOverEvent(e) {
    if (e.preventDefault) {
        e.preventDefault(); // Necesario para permitir soltar.
    }
    eventStatus.innerHTML = "evento over.";
    overStatus.innerHTML = "Elemento arrastrable sobre " + this.id;
}

/*
* El evento drop despliega un mensaje cuando es llamado y otro que
* que indica en que elemento objetivo se ha soltado el elemento
*/
function dropEvent(e) {
    eventStatus.innerHTML = "evento drop";
    dropStatus.innerHTML = "Se ha soltado un elemento dentro de " + this.id;
    var dropedelement = document.createElement('span');
    dropedelement.innerHTML = e.dataTransfer.getData('text/html');
    this.appendChild(dropedelement);
}

//variables para elementos informativos
var eventStatus = document.getElementById('event');
var dragStatus = document.getElementById('status_drag');
//variables para elementos informativos
var overStatus = document.getElementById('status_over');
var dropStatus = document.getElementById('status_drop')
//variable para alamacenar todos los divs que usan la clase square
var squareItems = document.querySelectorAll('.square');
var dropItem = document.getElementById('target1');

//ciclo para asignar los eventos a cada cuador (div square)
[].forEach.call(squareItems , function(squareItem) {
    squareItem.addEventListener('dragstart',dragStartEvent, false);
    squareItem.addEventListener('drag',dragEvent, false);
    squareItem.addEventListener('dragend',dragEndEvent, false);
});

dropItem.addEventListener('dragover', dragOverEvent, false);
dropItem.addEventListener('drop', dropEvent, false);