function chama(v) {
    let qtd = parseInt(document.getElementById('qtd').value);
    document.getElementById('qtd').value = qtd + v;
}

function exerc1a () {
    var vel = Number(document.getElementById('velocidadeinicial').value)
    var hmax = vel*vel/2/10;
    console.log(hmax)
    document.getElementById("hmax").innerHTML = hmax
}


function exerc1b () {
    var vel = Number(document.getElementById('velocidadeinicial').value)
    var temposubida = vel/10;
    console.log(vel)
    document.getElementById("temposubida").innerHTML = temposubida
}

function exerc2 () {
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

function exerc3CtoF () {
    var c = Number(document.getElementById('temperaturaC').value)
    f = 9*c/5+32;
    document.getElementById("Fahrenheit").innerHTML = f
}

function exerc3FtoC () {
    var f = Number(document.getElementById('temperaturaF').value)
    c = (5*f-5*32)/9;
    document.getElementById("Celsius").innerHTML = c
}

function exerc4 () {
    var a = Number(document.getElementById('kwhconsumidos').value)
    var b = Number(document.getElementById('valorunitconsumidos').value)
    if (a <= 100) {
        valor = a*b;
    }
    else if (a >100 && a <= 200) {
        valor = a*b*1.25;
    }
    else if (a > 200) {
        valor = a*b*1.50;
    }
    document.getElementById("Valor").innerHTML = valor
}