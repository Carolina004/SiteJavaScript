var i, sexo, idade, quantidademulher=0, quantidadehomem=0, maioridadehomem=0, menoridadehomem=0, idadehomem=0, idademulher=0, menoridademulher=0, maioridademulher=0, menoresdeidade=17;
var p1, p2, p3, p4, p5;

for(i=1;i<=5; i++){
    idade:parseInt(prompt("Sua idade[+i+]:"));
    sexo=prompt("Sexo: Masculino ou Feminino");

    if(sexo=="Masculino"){
        quantidadehomem++;
        idadehomem+=idade;
        menoridadehomem=menoridadehomem;
        maioridadehomem=maioridadehomem;
    }
    if(sexo=="Feminino"){
        quantidademulher++;
        idademulher+=idade;
        menoridademulher=menoridademulher;
        maioridademulher=maioridademulher;
    }
}
alert("Total de homens:"+quantidadehomem);
alert("Total de mulheres:"+quantidademulher);
alert("Homem mais novo:"+menoridadehomem);
alert("Homem mais velho:"+maioridadehomem);
alert("Mulher mais nova:"+menoridademulher);
alert("Mulher mais velha:"+maioridademulher);
alert("Total de menores de idade:"+menoresdeidade);

