function PA(){
    var valor=parseInt(document.getElementById('inicial').value);
    var razão=parseInt(document.getElementById('razão').value);
    var termo=parseInt(document.getElementById('termo').value);
    var pa='';

    for (var count=1; count<=termo ; count++){
        pa+"termo"+count+"="+valor+"<br>";
        valor+=razão;
    }
    document.write(pa);
}