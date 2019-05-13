//El algoritmo tiene como objetivo entregar la menor cantidad de billetes
// The algorithm aims to deliver the least amount of bills

class Billete {
  constructor(v, c) {
    this.valor = v;
    this.cantidad = c;
    this.imagen = new Image();
    this.imagen.width = 100;
    this.imagen.src = imagenes[this.valor];
  }
}

function entregarDinero() { // funcion disparada al hacer click a extraer
  resultado.innerHTML = "";
  entregado = [];
  var t = document.getElementById("dinero"); // el valor q ingreso en el input de lo q quiero retirar
  dinero = parseInt(t.value); // convierto ese string a numero entero
  for (const bi of caja) { // itera los billetes de la caja (recorro los elem de caja)
    if (dinero > 0) { 
      div = Math.floor(dinero / bi.valor); //  Redondea hacia abajo. dinero /valor del billete q estoy iterando de la caja
      papeles = (div > bi.cantidad) ? bi.cantidad : div  // if(div > bi.cantidad) {}
      // si es mayor papeles = bi.cantidad (no tengo esa cantidad para entregar), si no papeles = div (si puedo entregar esa cantidad de billetes de x denominacion)

      entregado.push(new Billete(bi.valor, papeles)); //cantidad de billetes q voy a entregar del valor o denominacion x en la q va la iteracion
      dinero -= (bi.valor * papeles); // a dinero le resto lo q entregue anteriormente
      bi.cantidad -= papeles; // para saber q cantidad de papeles (billetes) de x denominacion me quedan
    } 
  }

  if (dinero > 0) { // despues de las iteraciones vuelvo a preguntar si dinero > 0 (porque de pronto pedi mas de lo que el me puede dar)
    resultado.innerHTML = "Soy un cajero pobre y no tengo suficiente dinero"; //es como un document.write
  } else { // si tenia el dinero suficiente para entregar entonces muestro lso billetes
    mostrarBilletes(); 
  }
}

function mostrarBilletes() {
  for (const e of entregado) { //recorro cada instancia de e (entregado)
    if (e.cantidad > 0) { // para que no me muestre cero billetes de x denominacion
      resultado.innerHTML += e.cantidad + " billetes de ";
      resultado.appendChild(e.imagen)
      resultado.innerHTML += '<br />'
    }
  }
}

var total = 0;
function saldo() {
  var saldo = 0
  for (const v of caja) {
    saldo += v.valor * v.cantidad;
    resultado.innerHTML = "Su saldo es: $" + saldo + "<hr />";
  }
}

function actualizar() {  //actualiza el saldo despues de recargar
  var saldoAct = 0;
  for (var v of caja) {
    saldoAct +=  v.valor * v.cantidad;
    total = saldoAct;
  }
}

function recargar() {
  var monto = prompt("Por favor indique el valor a depositar de $: 100, 50, 20, 10, o 5 ", "100");
  if (monto == 100 || monto == 50 || monto == 20 || monto == 10 || monto == 5) {

    if (monto == 100) {

      var cant_cien = prompt("Indíque la cantidad", 1);

      while (isNaN(cant_cien)) {
        cant_cien = prompt(cant_cien + " No es un valor correcto, Por favor indíque un valor");
      }

      caja[0].cantidad = caja[0].cantidad + parseInt(cant_cien);
      actualizar();
      resultado.innerHTML += "Se ha depositado " + cant_cien + " Billetes de: $" + monto + "<hr />";

    }

    if (monto == 50) {
      var cant_cincuenta = prompt("Indíque la cantidad", 1);

      while (isNaN(cant_cincuenta)) {
        cant_cincuenta = prompt(cant_cincuenta + " No es un valor correcto, Por favor indíque un valor");
      }

      caja[1].cantidad = caja[1].cantidad + parseInt(cant_cincuenta);
      actualizar();
      resultado.innerHTML += "Se ha depositado " + cant_cincuenta + " Billetes de: $" + monto + "<hr />";
    }

    if (monto == 20) {
      var cant_veinte = prompt("Indíque la cantidad", 1);

      while (isNaN(cant_veinte)) {
        cant_veinte = prompt(cant_veinte + " No es un valor correcto, Por favor indíque un valor");
      }

      caja[2].cantidad = caja[2].cantidad + parseInt(cant_veinte);
      actualizar();
      resultado.innerHTML += "Se ha depositado " + cant_veinte + " Billetes de: $" + monto + "<hr />";
    }

    if (monto == 10) {
      var cant_diez = prompt("Indíque la cantidad", 1);

      while (isNaN(cant_diez)) {
        cant_diez = prompt(cant_diez + " No es un valor correcto, Por favor indíque un valor");
      }

      caja[3].cantidad = caja[3].cantidad + parseInt(cant_diez);
      actualizar();
      resultado.innerHTML += "Se ha depositado " + cant_diez + " Billetes de: $" + monto + "<hr />";
    }

    if (monto == 5) {
      var cant_cinco = prompt("Indíque la cantidad", 1);

      while (isNaN(cant_cinco)) {
        cant_cinco = prompt(cant_cinco + " No es un valor correcto, Por favor indíque un valor");
      }

      caja[4].cantidad = caja[4].cantidad + parseInt(cant_cinco);
      actualizar();
      resultado.innerHTML += "Se ha depositado " + cant_cinco + " Billetes de: $" + monto + "<hr />";

    }
  }
  else {
    resultado.innerHTML = ("Valor no valido, por favor indicar los valores correspondientes para depositar" + "<hr />");
  }
}

document.getElementById('borrar').onclick = function borra() {
  //Esta funciona hace que cuando apretas el boton "Borrar" se borra el resultado y billetes entregados
  resultado.innerHTML = "";
  entregado = [];
}

var imagenes = {};
imagenes["100"] = "cien.png";
imagenes["50"] = "cincuenta.png";
imagenes["20"] = "veinte.png";
imagenes["10"] = "diez.png";
imagenes["5"] = "cinco.png";

var caja = [];
var entregado = []; //billetes q le entrego al ususario
caja.push(new Billete(100, 2)); // agregandole billetes a caja
caja.push(new Billete(50, 4));
caja.push(new Billete(20, 5));
caja.push(new Billete(10, 10));
caja.push(new Billete(5, 10));

var dinero; // lo que voy a retirar 
var div = 0; // resultado de la division c/vez q iteramos
var papeles = 0; //cantidad de papeles 

var resultado = document.getElementById("resultado");  // la etiqueta p q creamos para reemplazar document.write
var b = document.getElementById("extraer"); // boton de retirar
b.addEventListener("click", entregarDinero);
var s = document.getElementById("consultar_saldo") //boton de consultar saldo
s.addEventListener("click", saldo);
var btnRecargar = document.getElementById("recargar");
btnRecargar.addEventListener("click", recargar);



