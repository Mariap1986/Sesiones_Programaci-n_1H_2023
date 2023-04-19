// alert("Hola Javascript")

var color= "Cafe, azul, verde, negro"; 
var piel = "trigueña, morena, blanca" ;
var pelo = "castaño, negro, rubio";
var edad = "edad"

// document.write(nombre);

var datos = document.getElementById ("datos");

datos.innerHTML = `
<h2>Colorimetría</h2> 
<h2>Mi color es: ${color}</h2>
<h2>Mi color de piel: ${piel}</h2>
<h2>Mi color de pelo: ${pelo}</h2>
<h2>edad: ${pelo}</h2>
;
`
// sentencia condicional 
if(edad>50)
{
    datos.innerHTML += `<h1> Eres una persona joven </h1>`;
}
else
{
    datos.innerHTML += `<h1> Eres una persona no tan joven </h1>`;
}