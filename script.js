/*let foto = document.createElement("img");
foto.src = "anby icon.jpg";

function consultar(){
    let datosjso;
    fetch("resumen.json")
    .then(response => response.json())
    .then((salida) => {
        document.getElementById("titular")
        titular.textContent = salida.titular;
        document.getElementById("identificacion")
        identificacion.textContent = salida.identificacion;
        document.getElementById("foto")
        foto.textContent = salida.foto;
        document.getElementById("direccion")
        direccion.textContent = salida.direccion;
        document.getElementById("telefono")
        telefono.textContent = salida.telefono;
        document.getElementById("correo")
        correo.textContent = salida.correo;
        document.getElementById("saldo_usd")
        saldo_usd.textContent = salida.saldo_usd;
        document.getElementById("saldo_eur")
        saldo_eur.textContent = salida.saldo_eur;
        document.getElementById("fecha_inicial")
        fecha_inicial.textContent = salida.fecha_inicial;
    })
}
*/


function consultar(){
    let datosjson;
    fetch('organizacion.json')
    .then(respuesta => respuesta.json())
    .then((salida)=>{datosjson = salida;
        document.getElementById("nombre")
        nombre.textContent = datosjson.nombre;
        document.getElementById("tipo")
        tipo.textContent = datosjson.tipo;
        document.getElementById("descripcion")
        descripcion.textContent = datosjson.descripcion;
        document.getElementById("correo")
        correo.textContent = datosjson.correo;
        document.getElementById("direccion")
        direccion.textContent = datosjson.direccion;
        document.getElementById("url")
        url.textContent = datosjson.url;
    })
}
    
