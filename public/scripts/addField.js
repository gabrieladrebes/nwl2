// Procurar o botao
document
  .querySelector("#add-time")
  //QUand clicar no botao
  .addEventListener("click", cloneField);

//Executar uma ação
function cloneField() {
  //Duplicar os campos
  //Qual campo?
  const newFieldContainer = document
    .querySelector(".schedule-item")
    .cloneNode(true);

  //pegar os campos
  //Quais campos?
  const fields = newFieldContainer.querySelectorAll("input");

  //para cada campo, limpar
  fields.forEach(function (field) {
    //pegar o field do momento e limpa
    field.value = "";
  });

  // Colocar na pagina
  //Onde?
  document.querySelector("#schedule-items").appendChild(newFieldContainer);
}
