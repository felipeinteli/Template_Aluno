function chama(v) {
    let qtd = parseInt(document.getElementById('qtd').value);
    document.getElementById('qtd').value = qtd + v;
}

function exerc1A () {
    let x = Number(document.getElementById('x').value);
    let periodo = Number(document.getElementById('periodo').value);
    let taxa = Number(document.getElementById('taxa').value); 
    let pv
    
    pv = x / ((1+taxa)**periodo)
    document.getElementById("pv").innerHTML = pv
}

function exerc1B () {
    let x = Number(document.getElementById('x').value);
    let periodo = Number(document.getElementById('periodo').value);
    let taxa = Number(document.getElementById('taxa').value); 
    let fv
    
    fv = x * ((1+taxa)**periodo)
    document.getElementById("fv").innerHTML = fv
}

function exerc2() {
    let n = Number(document.getElementById('n').value);
    let p = Number(document.getElementById('p').value);
    let i = Number(document.getElementById('i').value); 
    let j
    let m

    j = p*i*n
    m = p+j

    document.getElementById("m").innerHTML = m
    document.getElementById("j").innerHTML = j

}

function exerc3() {
    let text = String(document.getElementById('text').value);
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
    let x = Number(document.getElementById('x').value);
    let binario = "";
    let one = "1";
    let zero = "0";

    
    for (let i=7; i>=1; i--) {
        if (x >= 2**i) {
            x = x - 2**i;
            binario = binario.concat(one);
        } else {
            x = x;
            binario = binario.concat(zero);
        }
    }
    binario = binario.concat(zero);
    document.getElementById("binario").innerHTML = binario
}
