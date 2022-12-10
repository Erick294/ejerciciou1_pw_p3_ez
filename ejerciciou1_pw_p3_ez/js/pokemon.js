function incorrecto(){
        document.getElementById('mensaje').innerText='Pokémon incorrecto, la respuesta es: excadrill';
        this.mostrarPokemon();
        document.getElementById('mensaje').style.display='inline-block';
        document.getElementById('id_titulo').style.color = 'red';
}       

function correcto(){
    document.getElementById('mensaje').innerText='Felicitaciones has seleccionado la respuesta correcta';
    document.getElementById('mensaje').style.display='inline-block';
    this.mostrarPokemon()
    document.getElementById('id_titulo').style.color = 'yellow';
}

function resetear(){
    document.getElementById('mensaje').innerText='';
    document.getElementById('mensaje').style.display='none';
    document.getElementsByClassName('oculto').className = 'oculto';
    document.getElementById('id_titulo').style.color = 'black';
    document.getElementById('pokemon').src = "../img/pnegro.jpg"
    document.getElementById('pokemon').className = "oculto"
}

function mostrarPokemon(){
    var estado = document.getElementById('pokemon').className

   if(estado == "oculto"){
        document.getElementById('pokemon').src = "../img/pcolor.jpg"
        document.getElementById('pokemon').className = "visible"
   }
}