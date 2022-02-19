var data = dataAtualFormatada();
var hora = horaAtual();
document.getElementById('datahora').innerText = data + ' - ' + hora;

function dataAtualFormatada() {
    var data = new Date,
        dia = data.getDate().toString(),
        diaF = (dia.length == 1) ? '0' + dia : dia,
        mes = (data.getMonth() + 1).toString(),
        mesF = (mes.length == 1) ? '0' + mes : mes,
        anoF = data.getFullYear();
    return diaF + "/" + mesF + '/' + anoF
}
function horaAtual() {
    var data = new Date,
        hora = data.getHours().toString(),
        horaF = (hora.length == 1) ? '0' + hora : hora,
        minutos = data.getMinutes().toString(),
        minutosF = (minutos.length == 1) ? '0' + minutos : minutos,
        segundos = data.getSeconds().toString(),
        segundosF = (segundos == 1) ? '0' + segundos : segundos;
    return hora + ':' + minutosF + ':' + segundosF
}
function mudarcor() {
    var red = document.getElementById('red').value;
    var green = document.getElementById('green').value;
    var blue = document.getElementById('blue').value;
    document.getElementById('boxresultado').style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
    document.getElementById('inforesultado').innerText = 'RGB(' + red + ',' + green + ',' + blue + ')';
}
//animacao slider vermelho
const slideValuer = document.querySelector("#spanred");
const inputSliderr = document.querySelector("#red");
inputSliderr.oninput = (() => {
    let value = inputSliderr.value;
    slideValuer.textContent = value;
    slideValuer.style.left = (value / 12 + 13) + "%";
    slideValuer.classList.add("show");
});
inputSliderr.onblur = (() => {
    slideValuer.classList.remove("show");
});
//animacao slider verde
const slideValueg = document.querySelector("#spangreen");
const inputSliderg = document.querySelector("#green");
inputSliderg.oninput = (() => {
    let value = inputSliderg.value;
    slideValueg.textContent = value;
    slideValueg.style.left = (value / 12 + 41) + "%";
    slideValueg.classList.add("show");
});
inputSliderg.onblur = (() => {
    slideValueg.classList.remove("show");
});

//animacao slider azul
const slideValueb = document.querySelector("#spanblue");
const inputSliderb = document.querySelector("#blue");
inputSliderb.oninput = (() => {
    let value = inputSliderb.value;
    slideValueb.textContent = value;
    slideValueb.style.left = (value / 12 + 69) + "%";
    slideValueb.classList.add("show")
});
inputSliderb.onblur = (() => {
    slideValueb.classList.remove("show");
});
