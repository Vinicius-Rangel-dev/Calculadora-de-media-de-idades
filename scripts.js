var CalcularMedia = new function() {
    this.totalidades = 0;

    this.exibirEntradas = function() {
        this.totalidades = parseInt(document.getElementById("totalidades").value);
        var calculoDiv = document.getElementById("calculo");
        calculoDiv.style.display = "block";

        var elementoHtml = '';
        for (var i = 0; i < this.totalidades; i++) {
            elementoHtml += '<input type="text" id="idade_' + i + '" value=""><br>';
        }
        var entradasDiv = document.getElementById("entradas");
        entradasDiv.innerHTML = elementoHtml;
    };

    this.calcularMedia = function() {
        var total = 0;
        for (var i = 0; i < this.totalidades; i++) {
            total += parseFloat(document.getElementById("idade_" + i).value);
        }
        var media = total / this.totalidades;
        alert("A média é: " + media);
    };
};
