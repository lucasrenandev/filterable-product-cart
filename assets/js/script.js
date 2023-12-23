// Strict mode
// Modo estrito
"use strict";

// Creating array products
// Criando array de produtos
const productsArray = [
    {
        id: 1,
        src: "assets/images/cloth-1.jpg",
        name: "Cloth",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, deleniti."
    },
    {
        id: 2,
        src: "assets/images/cloth-2.jpg",
        name: "Cloth",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, deleniti."
    },
    {
        id: 3,
        src: "assets/images/cloth-3.jpg",
        name: "Cloth",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, deleniti."
    },
    {
        id: 4,
        src: "assets/images/phone-1.jpg",
        name: "Phone",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, deleniti."
    },
    {
        id: 5,
        src: "assets/images/phone-2.jpg",
        name: "Phone",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, deleniti."
    },
    {
        id: 6,
        src: "assets/images/shoe-1.jpg",
        name: "Shoe",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, deleniti."
    },
    {
        id: 7,
        src: "assets/images/shoe-2.jpg",
        name: "Shoe",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, deleniti."
    },
    {
        id: 8,
        src: "assets/images/shoe-3.jpg",
        name: "Shoe",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, deleniti."
    }
];

// Dynamically creating products
// Criando produtos dinamicamente
let product = 0;
function loadProducts() {
    const content = document.querySelector(".content");

    for(let i = 0; i < productsArray.length; i ++) {
        const card = document.createElement("div");
        const img = document.createElement("img");
        const h3 = document.createElement("h3");
        const p = document.createElement("p");
        const button = document.createElement("button");
        card.setAttribute("class", "card");
        content.appendChild(card);
        card.append(img, h3, p, button);
        
        const element = productsArray[product];
        img.src = element.src;
        img.alt = element.name;
        h3.textContent = element.name;
        p.textContent = element.description;
        button.textContent = "Add to cart";
        button.type = "button";
        
        card.setAttribute("data-name", element.name); 

        product ++;
    }
};
loadProducts();

// Selecting elements
// Selecionando elementos
const input = document.querySelector(".input-box input");
const button = document.querySelector(".input-box button");

const cards = document.querySelectorAll(".card");
cards.forEach((card) => card.classList.remove("active"));

// Filter products
// Filtrar produtos
function filterProducts() {
    if(input.value) {
        cards.forEach((card) => {
            let dataName = card.getAttribute("data-name").toLowerCase();
            if(dataName.includes(input.value.toLowerCase())) {
                card.classList.remove("active");
            }
            else {
                card.classList.add("active");
            }
        });
    }
}

// Display products when input field is empty
// Exibir produtos quando o campo de entrada estiver vazio
input.addEventListener("input", () => {
    if(!input.value) {
        cards.forEach((card) => card.classList.remove("active"));
    }
});

// Filter products by pressing the ENTER key
// Filtrar produtos pressionando a tecla ENTER
input.addEventListener("keydown", (event) => {
    if(event.code === "Enter") {
        filterProducts();
    }
});

// Filter products by clicking the filter button
// Filtrar produtos clicando no botão de filtrar
button.addEventListener("click", filterProducts);