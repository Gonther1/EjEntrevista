let a,b;
a=prompt("Ingrese la primer contraseña: ")
b=prompt("Ingrese la segunda contraseña: ")
let contraseñaA=[]
for (let i=0; i<a.length;i++) {
    if (a[i]!=isNaN || a[i]==" ") {
        console.log('No es posible agregar numeros')
        i+=a.length
    }
}
console.log(contraseñaA)