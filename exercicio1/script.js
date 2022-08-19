let produto = prompt(
  " Deseja comer mais coxinhas. “S” representa “sim”, e “N”  representa “não”"
);
let conta = 0;

while (produto !== "N") {
  conta = conta + 2.5;

  console.log(`Sua conta agora é: ${conta}`);
  produto=prompt("Deseja comer outra coxinha? S ou N?");
}

console.log("Total da conta é " + conta + ". Muito obrigado!!");
