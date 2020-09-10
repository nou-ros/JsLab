// callback hell - callback inside callback inside callbacks...
function getRecipe(){
    setTimeout(() => {
        const recipeId = [12,23,43,55,432];
        console.log(recipeId);

        setTimeout((id) => {
            const recipe = {
                title: 'Fresh tomato pasta',
                publisher: 'Ny'
            };
            console.log(`${id}: ${recipe.title}`);

            setTimeout( publisher => {
                const recipie = {
                    title: 'Italian Pizza',
                    publisher: 'Ny'
                };
                console.log(recipie);

            }, 1500, recipe.publisher);

        }, 1000, recipeId[2]);

    }, 1500)
}

getRecipe();