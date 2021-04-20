const POP_UP = document.getElementById('popUp');
let ToDoListi = [];

document.getElementById('PievienotToDoListu').addEventListener('click', () => {
    POP_UP.style.display = 'block';
})

document.getElementById('PieveinotJaunuToDo').addEventListener('click', () => {
    POP_UP.style.display = 'none';

    let ToDoList = {KoTuDarīsi: KoTuDarīsi.value, Cikos: Cikos.value};

    KoTuDarīsi.value = "";
    Cikos.value = "";

    ToDoListi.push(ToDoList);

    render();
})


function render() {
    let biblioteka = document.getElementById('biblioteka');
    biblioteka.innerHTML = "";

    for(let i = 0; i < ToDoListi.length; i++) {
        console.log(ToDoList[i]);
        let ToDoList = `
        <div class="ToDoList">
             <h3>KoTuDarīsi: ${ToDoList[i].KoTuDarīsi}</h3>
             <h4>Cikos: ${ToDoList[i].Cikos}</h4>
    
    </div>`;
        biblioteka.innerHTML += ToDoList;
    
    }
}
