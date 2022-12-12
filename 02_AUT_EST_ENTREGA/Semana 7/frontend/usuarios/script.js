var calcResDiv = "#calc";

//Evento após a submissão do form
$('#form1').on('submit', function(event) {     
    // Prevenir recarregamento de página
    event.preventDefault();
    // Obter os valores vindos do form
    let num1 = $('#num1').val();
    let num2 = $('#num2').val();
    let op   = $('#op').val();
    Calculadora(num1, num2, op);
});

/* Função que calcula uma soma e mostra a operação realizada e o resultado obtido */
function Calculadora(x, y, op){
    let resultado = eval(x + op + y);
    $(calcResDiv).empty();
    $(calcResDiv).append(`${x} ${op} ${y} = ${resultado} `);
}

$('.carrousel').slick;

var getResDiv = "#get";
var getDBResDiv = "#getDB";

    /* Função que faz um requisição GET */
function TestGET(){
    var url = "https://jsonplaceholder.typicode.com/todos/1";
    var xhttp = new XMLHttpRequest();

    xhttp.open("GET", url, false);
    xhttp.send();//A execução do script pára aqui até a requisição retornar do servidor
    $(getResDiv).append("<br />" + xhttp.responseText);
    $(getResDiv).append("<br />" + xhttp.responseText.title);
    console.log(xhttp.responseText);
}

    /* Função que faz um requisição GET no nosso banco de dados */
function TestGETDB(){
    var url = "http://127.0.0.1:3071/usuarios";
    var resposta;

    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, false);
    xhttp.send();//A execução do script pára aqui até a requisição retornar do servidor

    resposta = JSON.parse(xhttp.responseText);
    $(getDBResDiv).append("<br /><br />" + JSON.stringify(resposta));
    console.log(xhttp.responseText);
}
