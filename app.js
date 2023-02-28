

// const formulario = document.querySelector("#formulario");
// -----------------------------------


// - -------------



// function getPlan (idPlan){

    
//     const prueba = document.getElementById(idPlan);
//     console.log (prueba);
//     return prueba;

// 
// }

// const btn = document.querySelectorAll("button");

const botones = document.querySelectorAll("button");

botones.forEach(boton => boton.addEventListener("click", ()=>{
    // let planName = boton.id;
    let planName = boton.innerHTML;

    document.cookie = `${planName}`;
    console.log(document.cookie);
    // console.log(boton.type); 


}));











// ----------------

// function getName (name){

//     let cookie = name

//     return name;

 //   const prueba = document.getElementById(name);
// }
// console.log (cookie);



// document.cookie = `cookie=${getName()}`;

// ----------------------------------------

// const btn = document.querySelector("button");

// btn.addEventListener("click", (botoncito)=>{
//     console.log(botoncito)
// });



// ----------------------------------

// function getName2 (name2){

//     const prueba = document.getElementById(name2);
// console.log (prueba.innerHTML)

// }


// ----------------------------------





// formulario.addEventListener("click", validarFormulario);

// function validarFormulario(e){
        // e.preventDefault();   

// const AnualPlan = document.querySelector('#AnualPlan').value
// const MonthyPlan = document.querySelector('#MonthyPlan').value
// const WeekPlan = document.querySelector('#WeekPlan').value onclick

// }

// console.log()

// const formulario2 = document.querySelector("#formulario");
// formulario.addEventListener("click", validarFormulario);
// function validarFormulario(e){
    // prevenir el evento por defecto de los navegadores (esto me permite que el navegador no se recargue automaticqamente y por ende, me muestre en la misma pagina lo que quiero imprimir en console.log)
//     e.preventDefault();   
//     const MonthyPlan = document.querySelector('#MonthyPlan').value

// }



