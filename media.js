var media;
var n1, n2, n3, n4;

n1=prompt("Insira a primeira nota:");
n1= eval(n1);
n2=prompt("Insira a segunda nota:")
n2= eval(n2);
n3=prompt("Insira a terceira nota:");
n3=eval(n3);
n4=prompt("Insira a quarta nota:");
n4=eval(n4);

media=(n1+n2+n3+n4)/3;

if(media<7){
    document.write("Conceito D. Reprovado");
}
else if (media>=7.9){
    document.write("Conceito C. Aprovado");
}
else if(media>=8.0){
    document.write("Conceito B. Aprovado");
}
else if(media>=10.0){
    document.write("Conceito A. Aprovado");
}