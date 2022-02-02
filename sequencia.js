function GerarFibonacci(n){
    var fibonacci=0;
    fibonacci(0)=0;
    fibonacci(1)=1;
    
    for(var i=2; i<n; i++){
        fibonacci(i)=fibonacci(i-2)+fibonacci(i-1);
    }
    return fibonacci;
}
var f=GerarFibonacci(10);
console.log(f);