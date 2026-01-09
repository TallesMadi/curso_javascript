// declaracao de funcao (function hoisting)
// funcao();
function funcao() {
    console.log('funcao');
}
// funcao();

// first-class objects (objetos e primeira classe)
// function expression
const souDado = function() {
    console.log('sou um dado');
};

function executaFuncao(funcao) {
    console.log('Executando função...');
    funcao();
}

executaFuncao(souDado);

//arrow function
const funcaoArrow = () => {
    console.log('Arrow function');
};

// dentro de um objeto
const obj = {
    falar() {
        console.log('Falando...');
   ; }
}
obj.falar();