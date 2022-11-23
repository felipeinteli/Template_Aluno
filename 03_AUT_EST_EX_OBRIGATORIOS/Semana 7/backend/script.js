function chama(v) {
    let qtd = parseInt(document.getElementById('qtd').value);
    document.getElementById('qtd').value = qtd + v;
}

function exerc1 () {
    var numTabuada = Number(document.getElementById('numTabuada').value);
    var numInicial = Number(document.getElementById('numInicial').value);
    var numFinal = Number(document.getElementById('numFinal').value);
    
    for (let i=numInicial; i<=numFinal; i++) {
        let tabuada = i*numTabuada
        document.write(tabuada + " ")
        console.log(tabuada)
        // Entender se tem como fazer os números sairem um em baixo do outro
    }
}


function exerc2() {
    let num = String(document.getElementById('num').value);
    let numInv = ''

    for (var i = (num.length - 1); i >= 0; i--) { 
       numInv += num[i]; 
    }
    console.log(numInv);

    if (num == numInv) {
        document.write("Seu número é palíndromo");
    } else{
        document.write("Seu número não é palíndromo");
    }
}
    /*var teste = Number(document.getElementById('num').value);
    let j = 0;
    let cont=0;

    if (Number.isInteger(teste) == true) {
        for ( let i=0; i < Number.parseInt((num.length / 2)); i++) {
            console.log(i);
            if (num.slice(i, i+1) == num.slice(((num.length - j-2)),(num.length - j-1))) {
                cont = cont + 1;
                j = j+1;
                console.log(j);
                console.log(cont);
            }
        }
        if (cont == (Number(Number.parseInt(num.length/2)))) {
            document.write("Seu número é palíndromo");
        }
    } else {
        document.write("Seu número não é palíndromo");
    }
}*/

/*function exerc2 () {
    var a = Number(document.getElementById('a').value)
    var b = Number(document.getElementById('b').value)
    var c = Number(document.getElementById('c').value)
    if (a != 0) {
        xv = -b/2/a;
        yv = - (b^2-4*a*c)/4/a;
    } else {
        xv = null;
        yv = null;
    }  
    document.getElementById("xv").innerHTML = xv
    document.getElementById("yv").innerHTML = yv
}
*/

function exerc3() {
    let num = Number(document.getElementById('numex3').value);
    var lista=[];

    for (let i = 1; i <= num; i++) { 
        lista.push(i);
        if (i % 3  === 0) {
            lista.push("pi");
        }
    }
        document.write(lista);
}

function exerc4() {
    let lparede = Number(document.getElementById('lparede').value);
    let hparede = Number(document.getElementById('hparede').value);
    let lazulejo = Number(document.getElementById('lazulejo').value);
    let hazulejo = Number(document.getElementById('hazulejo').value);

    let nazulejos = Math.ceil(((lparede/lazulejo)*(hparede/hazulejo)*1.05))

    document.write(nazulejos);
}
