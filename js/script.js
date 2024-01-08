// creo una lista della spesa
listaSpesa = ['uova', 'latte', 'pesce', 'pasta', 'pepe', 'carne'];

console.log(listaSpesa);

let i = 0;

//recupero il contenitore della lista

const containerListaSpesa = document.querySelector(".container-lista-spesa");


//inizializzo la lista

let UlSpesa ="<ul>";

//creo il ciclo while fino alla fine della lista per stampare nelle li gli elementi della lista spesa
while (i < listaSpesa.length){
    console.log(listaSpesa[i]);
    UlSpesa += `<li><span>${listaSpesa[i]}</span></li>` ;
    i++;
}

//chiudo la lista 
UlSpesa += "</ul>";

//stampo la lista nell'html

containerListaSpesa.innerHTML += UlSpesa;