// 1-3

const arr = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    ]

    // 4

arr.pop();

arr.push("j");

arr.shift() ;

arr.unshift("y");

console.log(arr);

//5

const mixedDataTypes =
[
    1,
    2,
    3,
    4,
    5,
    6,
]

//6

const  itCompanies = {
   namef :"Facebook",
   nameG:"Google",
   nameM:"Microsoft",
   nameA:"Apple", 
    nameb:"BMw",
    nameo:"Oracle" ,
    nameN:"Amazon",
    values:{
        valuesF:90000,
        valuesG:100000,
        valuesM:20000,
        valuesb:70000,
        valueso:80000,
        valuesN:60000,
    }
};

// 7
console.log( itCompanies.namef);

console.log( itCompanies.nameG);

console.log( itCompanies.nameM);

console.log( itCompanies.nameA);

console.log( itCompanies.nameb);

console.log( itCompanies.nameo);

console.log( itCompanies.nameN);

//8
console.log( itCompanies.values.valuesF);

console.log( itCompanies.values.valuesG);

console.log( itCompanies.values.valuesM);

console.log( itCompanies.values.valuesN);

console.log( itCompanies.values.valueso);

console.log( itCompanies.values.valuesb);

//9
console.log(
    itCompanies.nameA,itCompanies.values.valuesG
);
console.log(
    itCompanies.nameN,itCompanies.values.valuesN
);
console.log(
    itCompanies.nameb,itCompanies.values.valuesb
);
console.log(
    itCompanies.nameo,itCompanies.values.valueso
);
console.log(
    itCompanies.nameM,itCompanies.values.valuesM
);

//10
console.log(
    "First", itCompanies.nameA,
    "middle", itCompanies.nameb,
    "last", itCompanies.nameo,
);

//16
let str = "Hello";

console.log( str.split('') ); 

