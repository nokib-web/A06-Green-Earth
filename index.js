

// Categories section

const loadCategories = () => {
    fetch("https://openapi.programming-hero.com/api/categories")
        .then(response => response.json())
        .then(json => displayCategories(json.categories));
}

const displayCategories = (categories) => {
    const categoriesContainer = document.getElementById("categories-container")
    categoriesContainer.innerHTML = "";

    for (let category of categories) {
        const categoriesDiv = document.createElement("div")
        categoriesDiv.innerHTML = `
        <div id="categories-container">
         
            <button id="category-btn-${category.id}" onclick="loadByCategories(${category.id})" class="btn my-2 text-gray-700  w-full btn-soft btn-success">${category.category_name}</button>
            
          

         </div>
        
        `
        categoriesContainer.append(categoriesDiv)
    }
}
loadCategories()




// All Plants section api



    const loadAllPlants = () => {
        fetch("https://openapi.programming-hero.com/api/plants")
            .then(response => response.json())
            .then(json => displayAllPlants(json.plants||json.data||[]));
    }

    const displayAllPlants = (plants) => {

        const plantsContainer = document.getElementById("plants-container")
        plantsContainer.innerHTML = "";



        for (let plant of plants) {
            const plantsDiv = document.createElement("div")
            plantsDiv.innerHTML = `
             <div class="bg-white rounded-lg p-4">
                <img class=" rounded-lg h-[330px] w-full" src="${plant.image}" alt="">



                <h1  class="text-xl  font-bold">${plant.name}</h1>
                <p class="text-gray-500">${plant.description}</p>
                <div class="flex justify-between items-center">
                    <a> <button class="btn rounded-2xl my-2 text-[#15803d] bg-[#DCFCE7]">${plant.category}</button></a>
                    <p>৳${plant.price}</p>
                </div>

                <button class="btn w-full bg-[#15803d] text-white rounded-3xl">Add to Cart</button>
            </div>
        `

            plantsContainer.append(plantsDiv);

        }
    }

 loadAllPlants()
              












// Load by catagory section api




const loadByCategories = (id) => {
    const url = `https://openapi.programming-hero.com/api/category/${id}`
    fetch(url)
        .then(res => res.json())
        .then(json => displayByCategories((json).plants||json.data || [] ));

}

const displayByCategories = (cards) => {
    const plantsByCategoryContainer = document.getElementById("plants-container")
    plantsByCategoryContainer.innerHTML = "";

    for (let card of cards) {
        const plantsByCategoryContainerDiv = document.createElement("div")
        plantsByCategoryContainerDiv.innerHTML = `
        <div class="bg-white rounded-lg p-4">
                <img class=" rounded-lg h-[330px] w-full" src="${card.image}" alt="">



                <h1  class="text-xl  font-bold">${card.name}</h1>
                <p class="text-gray-500">${card.description}</p>
                <div class="flex justify-between items-center">
                    <a> <button class="btn rounded-2xl my-2 text-[#15803d] bg-[#DCFCE7]">${card.category}</button></a>
                    <p>৳${card.price}</p>
                </div>

                <button class="btn w-full bg-[#15803d] text-white rounded-3xl">Add to Cart</button>
            </div>
        
        `;
        plantsByCategoryContainer.append(plantsByCategoryContainerDiv);
    }

}
loadByCategories()











