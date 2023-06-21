//Fibonacci series 

const number = 10
let n1 = 0;
let n2 = 1;

document.write("Fibonacci series : ")
for (i = 1; i <= number; i++) {

    document.write(n1 + " ");

    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;


}