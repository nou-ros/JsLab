// Async await was designed to consume promises not to produce them

const getID = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([11,22,33,44,55]);
        // reject([11,22,33,44,55]);
    }, 1500);
});

const getRecipe = recipeID => {
    return new Promise((resolve, reject) => {
        setTimeout(ID => {
            const recipe = {
                title : 'Fresh tomato pasta',
                publisher: 'Ny'
            };
            resolve(`${ID}:${recipe.title}`);
        }, 1500, recipeID);
    });
};

const getRelated = publisher => {
    return new Promise((resolve, reject) => {
        setTimeout(pub => {
            const recipe = {
                title: 'Italian Pizza',
                publisher: 'Ny'
            };
            resolve(`${pub}: ${recipe.title}`);
        }, 1500, publisher);
    });
};

// consuming promises
async function getRecipeAW(){
    const ID = await getID;
    console.log(ID);

    const recipe = await getRecipe(ID[2]);
    console.log(recipe);

    const related = await getRelated('Ny');
    console.log(related);

    return recipe;

}
// getRecipeAW();
const rec = getRecipeAW().then(result => console.log(`${result} is good!`));