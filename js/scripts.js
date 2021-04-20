const POP_UP = document.getElementById('popUp');
let biblioteka = []

document.getElementById('PievienotToDoListu').addEventListener('click', () => {
    POP_UP.style.display = 'block'
})

document.getElementById('PieveinotJaunuToDo').addEventListener('click', () => {
    POP_UP.style.display = 'none'

    let ToDoList = {KoTuDarīsi: KoTuDarīsi.value, Cikos: Cikos.value};

    console.log(ToDoList)
})
