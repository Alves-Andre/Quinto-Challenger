var data = dataAtualFormatada();
var hora = horaAtual();
document.getElementById('datahora').innerText = data+' - '+hora;

function dataAtualFormatada(){
    var data = new Date,
        dia = data.getDate().toString(),
        diaF = (dia.length==1) ? '0'+dia : dia,
        mes = (data.getMonth()+1).toString(),
        mesF = (mes.length == 1) ? '0'+mes : mes,
        anoF = data.getFullYear();
    return diaF+"/"+mesF+'/'+anoF
}
function horaAtual(){
    var data= new Date,
        hora = data.getHours().toString(),
        horaF = (hora.length==1) ? '0'+hora : hora,
        minutos = data.getMinutes().toString(),
        minutosF = (minutos.length==1)? '0'+minutos : minutos,
        segundos = data.getSeconds().toString(),
        segundosF = (segundos==1)? '0'+segundos : segundos;
    return hora+':'+minutosF+':'+segundosF
}
function mudarcor(){
    var red = document.getElementById('red').value;
    var green = document.getElementById('green').value;
    var blue = document.getElementById('blue').value;
    document.getElementById('boxresultado').style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
    document.getElementById('inforesultado').innerText = 'RGB(' + red + ',' + green + ',' + blue + ')';
}