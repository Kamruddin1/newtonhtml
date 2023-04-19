// const container = document.querySelector('.container')
// const unsplashURL = 'https://api.unsplash.com/photos/random/?client_id=poZoC-Nh4Y87gCWSlVkR_zAAnJ0dMrg9TFBUJHMEfqU'
// const rows = 5
// const photoArrays = [];

// for(let i = 0; i < rows * 3; i++) {
//     const img = document.createElement('img')
//     img.src = `${unsplashURL}${getRandomSize()}`
//     container.appendChild(img)
// }

// function getRandomSize() {
//     return `${getRandomNr()}x${getRandomNr()}`
// }

// async function getApi(){

//     try{

//         const response = await fetch(unsplashURL);
//        const dis = await response.json();

//         console.log(dis)


//     }
//     catch(errro){
//        console.log(error)
//     }

// }
// getApi()

// function getRandomNr() {
//     return Math.floor(Math.random() * 10) + 300
// }

// //console.log(unsplashURL)