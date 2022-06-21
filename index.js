document.addEventListener('DOMContentLoaded', () => {







    fetch('https://last-airbender-api.herokuapp.com/api/v1/characters')
    .then(res => res.json())
    .then(data => data.forEach(renderCharacter))
    .catch(error => {
        console.log(error)
        document.querySelector('div').innerHTML = `<h2>Sorry, we are currently down</h2>`
    })


    function renderCharacter(data){
        let name = document.createElement('h4')
        let affiliation = document.createElement('h5')
        let allies = document.createElement('p')
        let enemies = document.createElement('p')
        let image = document.createElement('img')

        name.textContent = data.name
        affiliation.textContent = data.affiliation
        allies.textContent = data.allies
        enemies.textContent = data.enemies 
        image.src = data.photoUrl

        newCharacter.append(name)
        newCharacter.append(affiliation)
        newCharacter.append(allies)
        newCharacter.append(enemies)
        newCharacter.append(image)

}




    console.log("hi")
    const newCharacter = document.querySelector("#characters")

    // function renderBrewery(data) {
    //     const li = document.createElement("li")
    //     const name = document.createElement("h4")
    //     const city = document.createElement("h5")
    //     const conference = document.createElement("p")
    //     const logo = document.createElement("img") 
    //     const btn = document.createElement("btn")
    
    
    //     name.textContent = data.name
    //     city.textContent = data.city 
    //     conference.textContent = data.conference
    //     logo.src = data.img
    //     logo.classList.add('logo')
    //     btn.textContent = "Delete"
    //     btn.classList.add("delete")
        
    
        
    //     li.className = 'class-li'
    
    //     btn.addEventListener('click', () => li.remove())
    
    //     li.append(logo, name, city, conference, btn )
    //     document.querySelector('ul').append(li)
    // }
    
})
