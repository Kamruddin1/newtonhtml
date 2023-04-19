
let photoArrays = [];
const count = 20;
const apiKey = "Eew-jFVrKMXhD0XnwifuQ5bLIkl7jm0azMWJXm_Af7Y";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

const imageContainer = document.getElementById("img-container")




function displayPhotos(){
    photoArrays.forEach((photo)=>{

        const item  = document.createElement("a");
        item.setAttribute("href", photo.links.html);
        item.setAttribute("target", "_black");

        const img = document.createElement("img");
        img.setAttribute("src", photo.urls.regular);
        img.setAttribute("alt",photo.alt_discription0);
        img.setAttribute("tittle",photo.alt_discription0);

        item.append(img);
        
        imageContainer.append(item)

    })
}

 async function getPhotos(){
    try{
       const respons = await fetch(apiUrl);
       photoArrays = await respons.json();
       displayPhotos();
    }
    catch(error){
        console.log(error)

    }
 }
 getPhotos()