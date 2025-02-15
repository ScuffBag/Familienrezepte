// Rezept-Datenbank mit neuen Rezepten
const recipes = [
    {
        name: "Gefüllte Paprika",
        category: "Hauptgericht",
        image: "https://source.unsplash.com/400x300/?stuffed-pepper",
        description: "Paprika gefüllt mit Hackfleisch und Reis in einer Tomatensoße.",
        icon: "fa-pepper-hot",
        id: "gefuellePaprika"
    },
    {
        name: "Einbrennsuppe",
        category: "Suppe",
        image: "https://source.unsplash.com/400x300/?soup",
        description: "Traditionelle Mehlsuppe mit Gewürzen und Kräutern.",
        icon: "fa-bowl-rice",
        id: "einbrennsuppe"
    },
    {
        name: "Krautfleckle",
        category: "Vegetarisch",
        image: "https://source.unsplash.com/400x300/?cabbage,pasta",
        description: "Köstliche Nudeln mit karamellisiertem Weißkraut.",
        icon: "fa-leaf",
        id: "krautfleckle"
    },
    {
        name: "Zschuschpeis",
        category: "Hausmannskost",
        image: "https://source.unsplash.com/400x300/?rustic,food",
        description: "Deftige, regionale Spezialität mit Eiern und Kartoffeln.",
        icon: "fa-egg",
        id: "zschuschpeis"
    },
    {
        name: "Zwetschgenknödel",
        category: "Dessert",
        image: "https://source.unsplash.com/400x300/?plum,dumplings",
        description: "Süße Knödel mit Zwetschgenfüllung und Zimt-Zucker.",
        icon: "fa-cookie-bite",
        id: "zwetschgenknoedel"
    }
];

// Rezepte auf der Hauptseite anzeigen
function loadRecipes() {
    const container = document.getElementById("recipeContainer");
    container.innerHTML = "";

    recipes.forEach(recipe => {
        const recipeCard = document.createElement("div");
        recipeCard.classList.add("recipe-card");
        recipeCard.innerHTML = `
            <i class="fas ${recipe.icon}"></i>
            <h2>${recipe.name}</h2>
            <img src="${recipe.image}" alt="${recipe.name}">
            <p>${recipe.description}</p>
            <button onclick="openRecipe('${recipe.id}')">Rezept anzeigen</button>
        `;

        container.appendChild(recipeCard);
    });
}

// Suchfunktion für Rezepte
function searchRecipes() {
    let input = document.getElementById("searchBar").value.toLowerCase();
    let filteredRecipes = recipes.filter(recipe =>
        recipe.name.toLowerCase().includes(input) ||
        recipe.category.toLowerCase().includes(input)
    );

    const container = document.getElementById("recipeContainer");
    container.innerHTML = "";

    filteredRecipes.forEach(recipe => {
        const recipeCard = document.createElement("div");
        recipeCard.classList.add("recipe-card");
        recipeCard.innerHTML = `
            <i class="fas ${recipe.icon}"></i>
            <h2>${recipe.name}</h2>
            <img src="${recipe.image}" alt="${recipe.name}">
            <p>${recipe.description}</p>
            <button onclick="openRecipe('${recipe.id}')">Rezept anzeigen</button>
        `;

        container.appendChild(recipeCard);
    });
}

// Rezept-Detailseite öffnen
function openRecipe(recipeId) {
    localStorage.setItem("selectedRecipe", recipeId);
    window.location.href = "rezept.html";
}

// Seite laden
window.onload = loadRecipes;
