let boton = document.getElementById(`button`);
let div = document.getElementById(`result`);
let buttonAll = document.getElementById(`buttonAll`);


boton.onclick = () =>{

div.innerHTML = `<h1>Aqui estan los primeros 150 Pokemons!</h1>`
let contenedor = document.createElement(`ol`);
div.append(contenedor);

    fetch(`https://pokeapi.co/api/v2/pokemon?limit=150`)
.then( (resp) => resp.json())
.then( (data) => {
    data.results.forEach(element => {
        
        let li = document.createElement(`li`);
        li.innerHTML = `${(element.name).toUpperCase()}`
        contenedor.append(li);
    });
})
boton.remove();
buttonAll.remove();

}

buttonAll.onclick = () =>{
    div.innerHTML = `<h1>Aqui estan TODOS los Pokemons!</h1>`
let contenedor = document.createElement(`ol`);
div.append(contenedor);

    fetch(`https://pokeapi.co/api/v2/pokemon?limit=1115`)
.then( (resp) => resp.json())
.then( (data) => {
    data.results.forEach(element => {
        
        let li = document.createElement(`li`);
        li.innerHTML = `${(element.name).toUpperCase()}`
        contenedor.append(li);
    });
})
boton.remove();
buttonAll.remove();
}