window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded');


let database = []

function createBeers(){                                             /////////fetch api, push random beer into empty array, use renderBeer function to add beers to page
    fetch('https://api.punkapi.com/v2/beers/random')
    .then(res => res.json())
    .then( (data) => {data
        
       .forEach(renderBeer)
        database.push(data[0]) 
    })

}
for(i = 0; i < 100; i++){                                           ///////// for statement: loops over the fetch function and adds new beer to empty array each time before render to page. 
    createBeers()
}

const addBeers = document.querySelector("#beer-list")
const searchBar = document.querySelector("#mySearch")               ////////// keyup function which targets characters typed into search bar, filteres through the data, and returns results with matching characters

searchBar.addEventListener('keyup', (e)=>{
    const searchTypedCharacters = e.target.value
    const filteredBeersByFood = database.filter(beer => {
       return beer.food_pairing.some(food_pairing => {
       return food_pairing.includes(searchTypedCharacters);
       })
    })
    const filteredBeersByName = database.filter(beer => {
        return beer.tagline.includes(searchTypedCharacters);
        })
     
    addBeers.innerHTML = ''
    
    filteredBeersByFood.forEach(renderBeer);
    filteredBeersByName.forEach(renderBeer);
})

function renderBeer(data){
    
    let beerImage = document.createElement("img")
    beerImage.src = data.image_url 
    beerImage.textContent = data.name 
    
    if(data.image_url === null){
        beerImage.src = "https://envato-shoebox-0.imgix.net/2f3a/315d-3aa5-4c5f-8567-57176ed7b662/Brown+cold+beer+bottle+with+drops.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=1200&s=cf3dea9e6be25ac50eb691c0dc87fe53"
    }

    addBeers.append(beerImage)

    beerImage.addEventListener('click', function(){
        let newImage = document.querySelector(".detail-image")
        let newBeerName = document.querySelector(".name")
        let tagline = document.querySelector(".tagline")
        let abv = document.querySelector(".abv")
        let foodPair = document.querySelector("#food-display")
               
        
        newImage.src = data.image_url
        if(data.image_url === null){
            newImage.src = "https://envato-shoebox-0.imgix.net/2f3a/315d-3aa5-4c5f-8567-57176ed7b662/Brown+cold+beer+bottle+with+drops.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=1200&s=cf3dea9e6be25ac50eb691c0dc87fe53"
        }
            
        newBeerName.textContent = data.name
        tagline.textContent = data.tagline
        abv.textContent = data.abv + '% abv'
        foodPair.textContent = ''

        data.food_pairing.forEach(function(data){
            let foodList = document.createElement("li")
            foodList.textContent = data

            foodPair.append(foodList)
        })
    })
 }  

//  let newReviewSubmission = document.querySelector("#beer-review")
//  let appendReview = document.querySelector("#reviews-delete")
//  newReviewSubmission.addEventListener("submit", function(event){event.preventDefault()
//     let reviewList = document.createElement('li')
//     reviewList.textContent = event.target.review.value
//     console.log(reviewList);

  
//     appendReview.append(reviewList)
//     newReviewSubmission.clear()
//     })


});