class Billete {
  constructor(v, c) {
    this.valor = v;
    this.cantidad = c;
    this.imagen = new Image();
    this.imagen.width = 100;
    this.imagen.src = imagenes[this.valor];
  }
}

function entregarDinero() {
  resultado.innerHTML = "";
  entregado = [];
  var t = document.getElementById("dinero");
  dinero = parseInt(t.value);
  for (const bi of caja) {
    if (dinero > 0) { 
      div = Math.floor(dinero / bi.valor);
      papeles = (div > bi.cantidad) ? bi.cantidad : div 

      entregado.push(new Billete(bi.valor, papeles));
      dinero -= (bi.valor * papeles);
      bi.cantidad -= papeles;
    }
  }

  if (dinero > 0) {
    resultado.innerHTML = "Soy un cajero pobre y no tengo suficiente dinero";
  } else {
    mostrarBilletes();
  }
}

function mostrarBilletes() {
  for (const e of entregado) {
    if (e.cantidad > 0) {
      resultado.innerHTML += e.cantidad + " billetes de ";
      resultado.appendChild(e.imagen)
      resultado.innerHTML += '<br />'
    }
  }
}

function saldo() {
  total = 0;
  for (const v of caja) {
    total += v.valor * v.cantidad;
    resultado.innerHTML = "Su saldo es: $" + total + "<hr />";
  }
}

var imagenes = {};
imagenes["100"] = "cien.png";
imagenes["50"] = "cincuenta.png";
imagenes["20"] = "veinte.png";
imagenes["10"] = "diez.png";
imagenes["5"] = "cinco.png";

var caja = [];
var entregado = [];
caja.push(new Billete(100, 2));
caja.push(new Billete(50, 4));
caja.push(new Billete(20, 5));
caja.push(new Billete(10, 10));
caja.push(new Billete(5, 10));

var dinero;
var div = 0;
var papeles = 0;

var resultado = document.getElementById("resultado"); 
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);
var s = document.getElementById("consultar_saldo")
s.addEventListener("click", saldo);



