let x=5

const promesa = new Promise((resolve,reject)=>{
    if(x==10){
            resolve(" El numero ingresado es: 5")
        }else{
            reject(" El numero ingresado no es 5 ")
        }
})

promesa.then(res=>{
    console.log('Mensaje:' + res)
})
.catch(error=>{
    console.log('Error:' + error)
})