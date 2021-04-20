console.log("Strādā");

document.getElementById('PievienotToDoListu').addEventListener('click', () => {
    console.log("poga nospiesta!");

    let popUp = document.getElementById('popUp');

    popUp.style.display = 'block'
})