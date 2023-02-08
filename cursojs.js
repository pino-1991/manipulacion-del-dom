// ciclos  for//
for (let i = 0; i < 5; i++){
console.log("el valor de i es : "+i);
}

// ciclos while //
let i =0 ;

while ( i < 5 ){
    console.log("el valor de i es :" +i);
    i++;
}

let i = 100;
while ( i >= 2){
    console.log("el valor de i es :" +i);
    i--;
}

// realizar un cuestionario donde se le pregunte a los usuarios cuanto es 2+2 utilizando prompt()//
// !=  : significa diferente 
let respuesta ;

while (respuesta != "4"){
    let pregunta = prompt(" cuanto es  2+2")
    respuesta =pregunta;
}