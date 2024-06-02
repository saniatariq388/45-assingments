// print name in lowercase
let personName:string = "Sania Tariq";
console.log("lowercase:", personName.toLowerCase());

//print name in uppercase
console.log("uppercase:", personName.toLocaleUpperCase());

//print name in titlecase
console.log("titlecase:", personName.replace(/\bw/g,n =>n.charAt(0).toUpperCase()+ n.slice(1).toLowerCase()));