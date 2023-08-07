export const theme = () => {
    const darkButton = document.querySelector('.mode__controller')
    const moonImg = document.createElement('img')
    const sunImg = document.createElement('img')

    moonImg.src = '../src/assets/img/moon.svg'
    moonImg.alt = 'moon'
    sunImg.src = '../src/assets/img/sun.svg'
    sunImg.alt = 'sun'

    const html = document.querySelector('html')

    const modePreference = JSON.parse(localStorage.getItem('dark__mode'))

    if(modePreference){
        darkButton.append(sunImg)
        html.classList.add('dark__mode')
    }else{
        darkButton.append(moonImg)
        html.classList.remove('dark__mode')
    }

    darkButton.addEventListener('click', () => {
        html.classList.toggle('dark__mode')
        darkButton.innerHTML = ''

        if(html.classList.contains('dark__mode')){
            darkButton.append(sunImg)
            localStorage.setItem('dark__mode', true)
        }else{
            darkButton.append(moonImg)
            localStorage.setItem('dark__mode', false)
        }
    })
}

