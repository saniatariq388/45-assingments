// print name in lowercase
var personName = "Sania Tariq";
console.log("lowercase:", personName.toLowerCase());
//print name in uppercase
console.log("uppercase:", personName.toLocaleUpperCase());
//print name in titlecase
console.log("titlecase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
