var listaFilmes = [
    
    "https://br.web.img3.acsta.net/pictures/14/10/31/20/39/476171.jpg",
    
    "https://clubnation.com.br/wp-content/uploads/2021/12/a-chegada-aclamado-vencedor-do-oscar-sera-removido-da-netflix-em-breve-saiba-quando.jpg",
    
    "https://m.media-amazon.com/images/M/MV5BY2JiYTNmZTctYTQ1OC00YjU4LWEwMjYtZjkwY2Y5MDI0OTU3XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_.jpg",

    "https://m.media-amazon.com/images/I/71zdnXB5oFL._AC_SL1500_.jpg",

];

var nomeFilmes = [
    "Interestelar",
    "A Chegada",
    "Ready Player One",
    "Jarhead"
];

var listaElement = document.getElementById("catalogo-filmes");

printList(nomeFilmes, listaFilmes);


function addFilm() {
    var newName = document.getElementById("entrada-nome").value;
    var newMovie = document.getElementById("entrada-texto").value;

    if(newMovie.endsWith(".jpg") || newMovie.endsWith(".png")){
        listaElement.innerHTML = "";
        listaFilmes.push(newMovie);
        nomeFilmes.push(newName);

        printList(nomeFilmes, listaFilmes);
    }
    else {
        alert("Por favor, coloque o nome e o endereço de uma imagem válida!")
    }
    document.getElementById("entrada-texto").value = "";
    document.getElementById("entrada-nome").value = "";

}

function removeFilm() {
    let newName = document.getElementById("entrada-nome-remover").value;
    let pos = nomeFilmes.indexOf(newName);

    console.log(newName);
    console.log(pos);

    if(newName === nomeFilmes[pos]){
        listaFilmes.splice(pos,1);
        nomeFilmes.splice(pos,1);
    }
    else{
        alert("Erro! Filme não encontrado.")
    }
    
    listaElement.innerHTML = "";

    printList(nomeFilmes, listaFilmes);

    document.getElementById("entrada-nome-remover").value = "";
    
}

function printList(nomeFilmes, listaFilmes) {
    for(i = 0; i < listaFilmes.length; i++){
        listaElement.innerHTML = listaElement.innerHTML + "<div class='catalogo-filme-indiv' id=" + "catalogo-filme-indiv" + ">" + "<h3 class=" + "titulo-filme" + ">" + nomeFilmes[i] + "</h3>" + "<img src=" + listaFilmes[i] + " class=" + "catalogo-imagens" +">" + "</div>";
    }
}