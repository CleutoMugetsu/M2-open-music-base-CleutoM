import { categories } from "./productsData.js";

export const renderByGender = (gender) => {
    const genreUl = document.querySelector('.genre__list')

    genreUl.innerHTML = ''

    gender.forEach(element => {
        const genre = createGender(element)
        genreUl.append(genre)
    });
}

export const renderAlbums = (albums) => {    
    const albumsUl = document.querySelector('.albums__list')
    
    albumsUl.innerHTML = ''    

    albums.forEach(album => {
        const card = createCard(album)
        albumsUl.append(card)
    })
}


export function createCard(array){
    const cardContainer  = document.createElement('li')
    const cardImg = document.createElement('img')
    const descriptionContainer = document.createElement('div')
    const smallContainer = document.createElement('div')
    const cardBand = document.createElement('small')
    const cardYear = document.createElement('small')
    const cardTitle = document.createElement('h2')
    const priceContainer = document.createElement('div')
    const cardPrice = document.createElement('span')
    const cardBtn = document.createElement('button')

    cardContainer.classList.add('card__container')
    descriptionContainer.classList.add('description__container')
    smallContainer.classList.add('small__container')
    priceContainer.classList.add('price__container')
    cardBtn.id = array.id
    cardBtn.classList.add('purchcase__button')
    cardPrice.classList.add('card__price')
    cardBand.classList.add('card__band')
    cardYear.classList.add('card__year')
    cardTitle.classList.add('subTitle')
    cardImg.classList.add('card__img')

    cardImg.src = array.img 
    cardImg.alt = array.title 

    cardBand.innerText = array.band 
    cardYear.innerText = array.year
    cardTitle.innerText = array.title
    cardPrice.innerText = `R$ ${array.price}`
    cardContainer.id = array.id
    cardBtn.innerText = 'Comprar'

    smallContainer.append(cardBand, cardYear)
    priceContainer.append(cardPrice, cardBtn)
    descriptionContainer.append(smallContainer, cardTitle, priceContainer)

    cardContainer.append(cardImg, descriptionContainer)
    
    return cardContainer

}

export function createGender(name){
    
    const listItem = document.createElement('li')
    const button = document.createElement('button')

    listItem.classList.add('list__item')
    button.classList.add('list__button')
    button.id = categories.indexOf(name)
    

    button.innerText = name

    listItem.append(button)
    
    
    return listItem         
    
}