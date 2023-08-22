let salarios = [500, 600, 700, 900, 1200, 1500, 2000, 2200, 100000, 5000]

let salariosComAumento = salarios.map(salario => {
    if (salario <= 2000) {
      return salario * 1.15; 
    } else {
      return salario * 1.10; 
    }
  });
  
  console.log(salariosComAumento);
  
let salariosAcimaDe2500 = salariosComAumento.filter(salario => salario > 2500);

console.log(salariosAcimaDe2500);

let somaDosSalarios = salariosAcimaDe2500.reduce((total, salario) => total + salario, 0);

console.log(somaDosSalarios);