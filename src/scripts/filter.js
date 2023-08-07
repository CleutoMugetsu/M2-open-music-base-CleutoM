import { renderAlbums, renderByGender } from "./render.js";

export const filterByGender = (albums) => {
    const genderButton = document.querySelectorAll('.list__button')
    const list = document.querySelector('.albums__list')
    

    genderButton.forEach(button => {
       
        button.addEventListener('click', () => {   
            
            if(button.id == 0){
                renderAlbums(albums)
            }else{
                const filterByGender = albums.filter((gender) => {
                                             
                    return gender.category == button.id
                 })
                 renderAlbums(filterByGender)
            }        

        })
    })
    
    
}

export const filterByRange = (array) => {
    const rangeController = document.querySelector('#range__controller')
    

    rangeController.addEventListener('input', () => {
        const price = document.querySelector('.price')
        
        price.innerText = `R$ ${rangeController.value}`
        
        const albumFilter = array.filter((album) => {
            return album.price <= rangeController.value
        })
        
        renderAlbums(albumFilter)
    })
    
   
}