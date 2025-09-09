

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
         
            <button id="category-btn-${category.id}" onclick="loadByCategories(${category.id})" class="btn my-2 text-gray-700 category-btn w-full btn-soft btn-success">${category.category_name}</button>
            
          

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
        .then(json => displayAllPlants(json.plants || json.data || []));
}

const displayAllPlants = (plants) => {







    const plantsContainer = document.getElementById("plants-container")
    plantsContainer.innerHTML = "";



    for (let plant of plants) {
        const plantsDiv = document.createElement("div")
        plantsDiv.innerHTML = `
             <div class="bg-white card-details rounded-lg p-4">
                <img class=" rounded-lg h-[330px] w-full" src="${plant.image}" alt="">



                <h1 onclick="loadCardDetails(${plant.id})" class="text-xl tree-name font-bold">${plant.name}</h1>
                <p class="text-gray-500">${plant.description}</p>
                <div class="flex justify-between items-center">
                    <a> <button class="btn rounded-2xl my-2 text-[#15803d] bg-[#DCFCE7]">${plant.category}</button></a>
                    <p class=" tree-price">৳${plant.price}</p>
                </div>

                <button class="btn add-to-cart-btn w-full bg-[#15803d] text-white rounded-3xl">Add to Cart</button>
            </div>
        `;

        // event handler for add to cart button

        setTimeout(() => {
            const addToCartBtn = plantsDiv.querySelector('.add-to-cart-btn');
            addToCartBtn.addEventListener('click', () => {
                const name = plantsDiv.querySelector('.tree-name').textContent.trim();
                const priceText = plantsDiv.querySelector('.tree-price').textContent.trim();
                const price = parseInt(priceText.replace('৳', '').trim());

                if (!isNaN(price)) {
                    addToCart(name, price);
                }
            });
        }, 0);



        plantsContainer.append(plantsDiv);

    }
}

loadAllPlants()





// Load by category section api

const removeActive = () => {
    const categoryBtn = document.querySelectorAll(".category-btn");
    categoryBtn.forEach(btn => btn.classList.remove("active"));

};


const loadByCategories = (id) => {
    const url = `https://openapi.programming-hero.com/api/category/${id}`
    fetch(url)
        .then(res => res.json())
        .then(json => {
            removeActive();
            const clickedBtn = document.getElementById(`category-btn-${id}`);

            clickedBtn.classList.add("active");

            displayByCategories((json).plants || json.data || [])
        });

}





const displayByCategories = (cards) => {
    const plantsByCategoryContainer = document.getElementById("plants-container")
    plantsByCategoryContainer.innerHTML = "";
    for (let card of cards) {
        const plantsByCategoryContainerDiv = document.createElement("div")

        plantsByCategoryContainerDiv.innerHTML = `
        <div class="bg-white card-details rounded-lg p-4">
                <img class=" rounded-lg h-[330px] w-full" src="${card.image}" alt="">



                <h1 onclick="loadCardDetails(${card.id})"  class="text-xl tree-name font-bold"  >${card.name}</h1>
                <p class="text-gray-500">${card.description}</p>
                <div class="flex justify-between items-center">
                    <a> <button class="btn rounded-2xl my-2 text-[#15803d] bg-[#DCFCE7]">${card.category}</button></a>
                    <p class="tree-price">৳${card.price}</p>
                </div>

                <button class="btn w-full add-to-cart-btn bg-[#15803d] text-white rounded-3xl">Add to Cart</button>
            </div>
        
        `;
        setTimeout(() => {

            const addToCartBtn = plantsByCategoryContainerDiv.querySelector('.add-to-cart-btn');
            addToCartBtn.addEventListener('click', () => {


                const name = plantsByCategoryContainerDiv.querySelector('.tree-name').textContent.trim();
                const priceText = plantsByCategoryContainerDiv.querySelector('.tree-price').textContent.trim();


                const price = parseInt(priceText.replace('৳', '').trim());

                if (!isNaN(price)) {
                    addToCart(name, price);
                }
            });
        }, 0);





        plantsByCategoryContainer.append(plantsByCategoryContainerDiv);
    }


}
loadByCategories()





// Card details
const loadCardDetails = async (id) => {
    const url = `https://openapi.programming-hero.com/api/plant/${id}`




    const res = await fetch(url);
    const details = await res.json();
    displayCardDetails(details.plants);






}
const displayCardDetails = (plants) => {
    const detailsContainer = document.getElementById("details-container");
    detailsContainer.innerHTML = `
   <div class="bg-white rounded-lg max-w-[600px] space-y-2 p-5">
        <h1 class="text-2xl  font-bold"> ${plants.name}</h1>
        <img class=" rounded-lg h-[330px] w-full" src="${plants.image}" alt="">
        <p ><span class="font-bold">Category:</span>${plants.category}</p>
        <p><span class="font-bold">Price:</span> ৳${plants.price}</p>
        <p><span class="font-bold">Description:</span> ${plants.description}</p>

    </div>
  
  `;
    document.getElementById("word_modal").showModal();
}


// loading spinner

window.onload = function () {
    const loadingSpinner = document.getElementById('loading-spinner');
    loadingSpinner.style.display = 'none';

};



//  code for adding the item on card


const cartItems = [];
let total = 0;

function updateCart() {
    const cartContainer = document.querySelector('.cart-items');
    const totalElement = document.querySelector('.cart-total');
    cartContainer.innerHTML = '';

    cartItems.forEach((item, index) => {
        const div = document.createElement('div');
        div.classList.add('cart-item', 'flex', 'justify-between', 'items-center');

        div.innerHTML = `
      <span>${item.name} <br> ৳${item.price}</span>
      
      <button onclick="removeFromCart(${index})" class=" remove-btn "><i class="fa-solid fa-x"></i></button>
    `;

        cartContainer.appendChild(div);
    });

    totalElement.innerHTML = `<div>Total:  ৳${total}</div>`;
}


function addToCart(name, price) {
    cartItems.push({ name, price });
    total += price;
    updateCart();
}


function removeFromCart(index) {
    total -= cartItems[index].price;
    cartItems.splice(index, 1);
    updateCart();
}