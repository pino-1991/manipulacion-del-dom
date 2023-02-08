var miauto = {
    marca:"toyota",
    modelo:"corolla",
    annio:2020,
    detalledelauto:function(){
        console.log("auto $¨{this.annio}");
    }
}

function auto(marca,modelo,annio){
this.marca = marca;
this.modelo = modelo;
this.annio = annio;


var articulos = [
{ nombre : "bici",costo:2500},
{ nombre : "moto",costo:2900},
{ nombre : "carro",costo:4900},
{ nombre : "pc",costo:100},
{ nombre : "celular ",costo:5900},
{ nombre : "teclado",costo:6900},

]

var articulofiltrados = articulos.filter(function(articulo){
return articulo.costo <=3000
});

var nombrearticulos = articulos.map(function(articulo){
    return articulo.nombre
});

var encuentraarticulos = articulos.find(function(articulo){
    return articulo.nombre ==="pc"
});

articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

var articulosbaratos = articulos.some(function(articulo){
    return articulo.costo >=2000
});

let numarray =[1,2,3,4,5]
function newnum(){
    numarray.push(6,7)
    console.log(numarray)
}

let array =[1,2,3,4,5]
console.log(array)
function newnum(){
    numarray.push(6,7)
    console.log(numarray)
}