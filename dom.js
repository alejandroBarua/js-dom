/* setTimeout(() => {
    
    console.log(document.getSelection().toString()); // mostrara lo seleccionado con el mouse en cada momento
    
}, 3000); */

//document.write("<h2> hola mundo desde el DOM</h2>"); // no es buena practica utilizarlo


// seleccionar elementos del dom

console.log(document.getElementById("menu")); // me devuelve el codigo html

console.log(document.querySelector("li")); // me devulvera el html del figure que este primero
console.log(document.querySelectorAll("li")); // me devuelve una nodelista con todas las etiquetas li del documento
console.log(document.querySelectorAll("li").length);

console.log(document.querySelector(".card")); // me mostrara el primero que aparesca
console.log(document.querySelectorAll(".card")[2]);

console.log(document.querySelector("#menu")); // no reemplaza a getElementById

console.log(document.querySelectorAll("#menu li")); // solo quiero las li que estan dentro del menu

document.querySelectorAll("a").forEach(el => console.log(el)); // muestro cada etiqueta en codigo html
// la nodeLista lo puedo recorrer y acceder a una posicion como lo hago en un array

console.clear();


// atributos 

const $linkDOM = document.querySelector(".link-dom"); // $ hace referencia a que es un elemento del DOM

$linkDOM.setAttribute("href", "https://developer.mozilla.org/es/docs/Glossary/DOM");
$linkDOM.setAttribute("target", "_blank");
$linkDOM.setAttribute("rel", "noopener"); // por seguridad de la nueva ventana que estamos abriendo

console.log($linkDOM.getAttribute("href"))
console.log($linkDOM.hasAttribute("rel")); // me devuelve true si encuentra el atributo en el elemento

$linkDOM.removeAttribute("rel"); // borramos el atributo


// Data-Attributes ( para crear nuestros propios atributos)

console.log($linkDOM.dataset); // me ba a guardar en un mapa todos los data-atributos que tenemos en el documento

$linkDOM.setAttribute("data-description", "modelo de objeto del documento");
$linkDOM.dataset.description = "otra forma de cambiar el valor de la propiedad";

console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset.description);

console.clear();


//estilos y variables css

console.log($linkDOM.style); // este se suele usar mas!
console.log($linkDOM.getAttribute("style"));

console.log($linkDOM.style.color);

// formas de cambiar el valor a una propiedad
$linkDOM.style.setProperty("text-decoration", "none");
$linkDOM.style.width = "25%";
$linkDOM.style.padding = "12px";
$linkDOM.style.borderRadius = "2rem";

//variables en css

const $html = document.documentElement,
    $body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
    varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

$body.style.backgroundColor = varDarkColor;
$body.style.setProperty("background-color", varDarkColor); // es otra forma de aserlo

$body.style.color = varYellowColor;

//$html.style.setProperty("--dark-color", "pink");// asi modifico las propiedades de la variable css

$body.style.backgroundColor = "#222";
$body.style.color = "white";

console.clear();


//clases en css

const $card = document.querySelector(".card"); // me da el primero

$card.classList.add("rotate-45"); // agrego la clase al elemento
console.log($card.classList.contains("rotate-45")); // verifico si lo agrege me devuelve true
console.log($card.classList); // me da una lista con todas las clases que tenga el elemento
$card.classList.remove("rotate-45"); // quito la clase

$card.classList.toggle("rotate-45"); // si no tiene la clase se la agrega, si la tiene se la quita

$card.classList.replace("rotate-45", "rotate-135");

$card.classList.add("opacity-80", "sepia"); // puedo agregar mas de una clase a la ves si la reparo por comas, lo mismo pasa con REMOVE y TOGGLE

$card.classList.remove("rotate-135");
$card.classList.remove("sepia");

console.clear();


//manejo de texto

const $whatIsDOM = document.getElementById("que-es");

let text = `
    <h2>DOM: Document Object Model</h2>
    <h2>BOM: Browser Object Model</h2>
    <h2>CSSOM: CSS Object Model</h2>`
;

$whatIsDOM.textContent = text; // no interpreta el codigo html y lo pone todo de corrido
$whatIsDOM.innerHTML = text; // interpreta el codigo html
  
$whatIsDOM.outerHTML = text; // se usa para reemplazar la etiqueta que tenia antes por la que le paso, osea que ya no voy a tener el elemento "que es", ahora tendre tres parrafos por separado, sin ninguna caja que las contenga



//recorriendo los elementos del DOM

let $cards = document.querySelector(".cards");

console.log($cards); // me manda el html
console.log($cards.children); // crea una lista con los elementos con esta clase
console.log($cards.children[2]);
console.log($cards.firstElementChild); // da el primero con la clase
console.log($cards.lastElementChild); // da el ultimo con la clase
console.log($cards.parentElement); // el elemento padre

console.log($cards.previousElementSibling); // da el elemento que esta antes de que aparesca la clase
console.log($cards.nextElementSibling);

//$cards.removeChild($cards.lastElementChild);  // elimina el ultimo elemento

console.clear();    


// creando elementos dinamicamente

const $figure = document.createElement("figure"),
    $img = document.createElement("img"),
    $figcaption = document.createElement("figcaption");

$figure.classList.add("card");
$img.setAttribute("src", "https://placeimg.com/400/200/people");
$figcaption.textContent = "People";

$cards.appendChild($figure);  
$figure.appendChild($img);
$figure.appendChild($figcaption);

//

const contenido = ["seleccionar elementos", "atributos", "data-attributes", "estilos css", "variables css", "classList", "manejo de texto", "recorrer los elementos hijos", "crear elementos dinamicamente", "templates html", "insertando elementos"];

const $ul = document.createElement("ul"),
    $h2 = document.createElement("h2");

$h2.textContent = "Contenido";
    
contenido.forEach((el) => {
    const $li = document.createElement("li");
    $li.textContent = el;
    $ul.appendChild($li);
})
    
const $divContenido = document.querySelector(".contenido").children[1];

$divContenido.appendChild($h2);
$divContenido.appendChild($ul);

// en este caso estamos insertando los elementos uno por uno, en un ejemplo real donde hay que insertar 100 productos es ineficiente hacerlos uno a uno ya que el proceso cuesta, lo que se debe hacer en ese caso es cargarlo todo en un "fragmento" y despues hacer un sola insercion, esto mejora el rendimiento de la aplicacion


//templates html 
// y usamos fragmento

const $template = document.getElementById("template-card").content,
    $fragment = document.createDocumentFragment();
const cardContent = [
        {
            title: "Animals",
            img:"https://placeimg.com/400/200/animals"
        },
        {
            title: "Nature",
            img:"https://placeimg.com/400/200/nature"
        }
    ];

cardContent.forEach(el => {
    
    $template.querySelector("img").setAttribute("src", el.img);
    $template.querySelector("img").setAttribute("alt", el.title);
    $template.querySelector("figcaption").textContent = el.title;

    let $clone = document.importNode($template, true);
    $fragment.appendChild($clone);
})

 $cards.appendChild($fragment);


 // insertar elemento

 const $newCard = document.createElement("figure");

 $newCard.innerHTML =  `
    <img src = "https://placeimg.com/400/200/any" alt="Any">
    <figcaption>Any</figcaption>
 `;

 $newCard.classList.add("card");

 //$cards.insertBefore($newCard, $cards.firstChild);  // se agrega antes del primer hijo
 $cards.insertAdjacentElement("afterbegin", $newCard); // se agrega como primer hijo
 //$cards.insertAdjacentElement("beforeend", $newCard); // se agrega como ultimo hijo

 //$cards.replaceChild($newCard, $cards.children[2]); // para reemplazar un elemento por el nuevo


/*
.insertAdjacent... 
    .insertAdjacentElement(posicion, elemento);
    .insertAdjacentHTML(posicion, codigo html);

posiciones:
    beforebegin = hermano anterior
    afterBegin = primer hijo
    beforeend = ultimo hijo
    afterend = hermano siguiente
*/

const $newCard2 = document.createElement("figure");

let $contenCard =  `
    <img src = "https://placeimg.com/400/200/arch" alt="Arch">
    <figcaption>Arch</figcaption>
 `;

$newCard2.classList.add("card");

$newCard2.insertAdjacentHTML("beforeend", $contenCard);
$cards.insertAdjacentElement("afterbegin", $newCard2);

$cards.before($newCard2); // lo agrega antes de cards (osea como hermano anterior)
$cards.after($newCard2); // lo agrega como hermano posterior
$cards.append($newCard2); // lo agrega como ultimo hijo
$cards.prepend($newCard2); // lo agrega como primer hijo

