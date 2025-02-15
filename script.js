// Rezept-Datenbank (du kannst hier mehr Rezepte hinzufügen!)
const recipes = [
    {
        name: "Omas Apfelkuchen",
        category: "Dessert",
        image: "https://source.unsplash.com/400x300/?apple,pie",
        description: "Ein klassischer Apfelkuchen nach Omas Rezept.",
        icon: "fa-apple-alt"
    },
    {
        name: "Spaghetti Bolognese",
        category: "Hauptgericht",
        image: "https://source.unsplash.com/400x300/?pasta,bolognese",
        description: "Hausgemachte Bolognese mit frischen Zutaten.",
        icon: "fa-utensils"
    },
    {
        name: "Tomatensuppe",
        category: "Vorspeise",
        image: "https://source.unsplash.com/400x300/?tomato,soup",
        description: "Leckere Tomatensuppe mit frischen Kräutern.",
        icon: "fa-seedling"
    },
    {
        name: "Pfannkuchen",
        category: "Frühstück",
        image: "https://source.unsplash.com/400x300/?pancakes",
        description: "Fluffige Pfannkuchen mit Ahornsirup.",
        icon: "fa-egg"
    }
];

// Rezepte auf der Seite anzeigen
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
        `;

        container.appendChild(recipeCard);
    });
}

// Seite laden
window.onload = loadRecipes;
