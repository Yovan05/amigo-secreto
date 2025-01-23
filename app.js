let amigos = [];

function agregarAmigo(amigo){
    let regex = /^[A-Za-z\s]+$/;

    if(amigo === ""){
        alert("El campo no puede estar vacío");
        return;
    }

    if(!regex.test(amigo)){
        alert("Solo se permiten letras");
        return;
    }

    amigos.push(amigo);
    return true;
}

function mostrarAmigos(amigos){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = '';
    for(let amigo of amigos){
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    }
    return;
}

function limpiarCaja(){
    document.getElementById("amigo").value = '';
    return;
}

function botonAgregar(){
    let amigo = document.getElementById("amigo").value;
    agregarAmigo(amigo);
    mostrarAmigos(amigos);
    limpiarCaja();
    return;
}











