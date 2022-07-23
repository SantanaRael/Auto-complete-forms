/**
 * It creates a div, adds a button to it, and then adds a button to the page that toggles the
 * visibility of the div.
 */
 ///EXTENSÃO PARA AUTOMATIZAÇÃO DE FORMULARIOS

 var apontarDiv = document.querySelector("body")
 var createDiv = document.createElement("div");
 createDiv.id = "abelha"; ///Cria o a div com os elementos que vao aparecer
 apontarDiv.appendChild(createDiv);


 let btnAdd = document.createElement("input");
 btnAdd.type = "button"
 btnAdd.className = "btn"; /// cria um botão com onclick dentro da div que foi criada acima
 btnAdd.value = "Tabulação padrão"
 createDiv.appendChild(btnAdd);
 btnAdd.onclick = function () {
     add()
 }


 let btnhide = document.createElement("input");
 btnhide.type = "button"
 btnhide.value = "☰"
 apontarDiv.appendChild(btnhide); ///Cria o botão que vai chamar a div com os elementos
 btnhide.onclick = function () {
     Mudarestado('abelha')
 }


 createDiv.style.backgroundColor = "#202020"
 createDiv.style.width = "170px"
 createDiv.style.height = "1px"
 createDiv.style.transition = "1s"
 createDiv.style.visibility = "hidden"
 createDiv.style.textAlign = "center"
 createDiv.style.position = "absolute"
 createDiv.style.right = "100px"
 createDiv.style.top = "0"
 createDiv.style.overflow = "hidden"
 btnhide.style.position = "absolute"
 btnhide.style.backgroundColor = "transparent"
 btnhide.style.borderColor = "black"
 btnhide.style.color = "black"
 btnhide.style.left = "96%"
 btnhide.style.width = "50px"
 btnhide.style.right = "215px"
 btnhide.style.top = "10px"



 function Mudarestado() {

     if (createDiv.style.height == "40px") {
         createDiv.style.height = "1px"
         createDiv.style.visibility = "hidden"
         console.log("ssss")
     } else { /// Criar a função de menu dropdown
         createDiv.style.height = "40px"
         createDiv.style.visibility = "visible"
     }
 }

 function add() {

     var truee = true
     var fusca = document.createElement("option");
     fusca.innerHTML = "Fusca"
     fusca.setAttribute("selected", truee);
     var mostraLocal = document.querySelector('#cars');
     mostraLocal.appendChild(fusca); /// adiciona as opções de acordo com o selecionado aqui

     var miojo = document.querySelector("#miojo");
     miojo.setAttribute("selected", truee);
     var mostraLocal = document.querySelector('#comidas');
     mostraLocal.appendChild(miojo);

 }