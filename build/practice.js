// Dates
const d = new Date()
console.log(d.toDateString());
console.log(d.getMonth());

//The Math Object
console.log(Math.PI)
const num = 4.56
console.log(Math.trunc(num));
console.log(Math.pow(8,2));
console.log(Math.abs(-4.7));
const arrMov = [0, 150, 30, 20, -8, -200]
arrMov.forEach((el,ind) => {
    arrMov[ind] = Math.abs(el)
});
console.log(arrMov);