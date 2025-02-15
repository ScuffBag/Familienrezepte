// Rezept-Datenbank (muss mit `script.js` übereinstimmen)
const recipes = [
    {
        name: "Gefüllte Paprika",
        category: "Hauptgericht",
        image: "https://source.unsplash.com/400x300/?stuffed-pepper",
        description: "Paprika gefüllt mit Hackfleisch und Reis in einer Tomatensoße.",
        ingredients: ["4 Paprika", "250g Hackfleisch", "100g Reis", "1 Dose Tomaten", "Gewürze"],
        steps: ["Paprika aushöhlen", "Hackfleisch anbraten", "Reis kochen", "Alles mischen und in Paprika füllen", "Im Ofen backen"],
        icon: "fa-pepper-hot",
        id: "gefuellePaprika"
    },
    {
        name: "Einbrennsuppe",
        category: "Suppe",
        image: "https://source.unsplash.com/400x300/?soup",
        description: "Traditionelle Mehlsuppe mit Gewürzen und Kräutern.",
        ingredients: ["Butter", "Mehl", "Wasser", "Gewürze"],
        steps: ["Butter schmelzen", "Mehl anschwitzen", "Wasser zugeben", "Würzen und servieren"],
        icon: "fa-bowl-rice",
        id: "einbrennsuppe"
    }
];

// Rezept laden
function loadRecipe() {
    const recipeId = localStorage.getItem("selectedRecipe");
    const recipe = recipes.find(r => r.id === recipeId);

    if (!recipe) {
        document.getElementById("recipeDetail").innerHTML = "<p>Rezept nicht gefunden!</p>";
        return;
    }

    document.getElementById("recipeDetail").innerHTML = `
        <h2>${recipe.name}</h2>
        <img src="${recipe.image}" alt="${recipe.name}">
        <p>${recipe.description}</p>
        <h3>Zutaten</h3>
        <ul>${recipe.ingredients.map(ing => `<li>${ing}</li>`).join("")}</ul>
        <h3>Zubereitung</h3>
        <ol>${recipe.steps.map(step => `<li>${step}</li>`).join("")}</ol>
        <a href="index.html">🔙 Zurück zur Übersicht</a>
    `;
}

// Rezept laden, wenn Seite aufgerufen wird
window.onload = loadRecipe;
