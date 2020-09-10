// ES6 
const getID = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([11,22,33,44,55]);
        // reject([11,22,33,44,55]);
    }, 1500);
});

const getRecipie = recipeID => {
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

getID.then(id => {
    console.log(id);
    return getRecipie(id[2]);
})
.then( recipe => {
    console.log(recipe);
    // console.log(this);
    // return getRelated(recipe.publisher);
    return getRelated('ny');
})
.then(recipe => {
    console.log(recipe);
})
.catch(error => {
    console.log(error);
});