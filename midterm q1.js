//1
let randomarray = [5,6,7,8,9];
console.log(randomarray)
//2
let minrand = Math.min(...randomarray)
console.log(minrand);
//3
let maxrand = Math.max(...randomarray)
console.log(maxrand);
//4
let sum=0;
for(let i = 0; i < randomarray.length; i++) {
    sum += randomarray[i];
}
console.log(sum);