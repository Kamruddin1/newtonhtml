const showdata = ()=>{
    let item = document.querySelector("#product");
    // let it = "";
     document.querySelector("#showItem").innerHTML = 
     `<div id="prise">${product[0].prise}</div>
     <div id="name">${product[0].name}</div>
    <img src="${product[0].img}">
     `                 
   //   console.log(item);
  
}
const product = [
   {
    prise: 2000,
    name: "iphone",
    img: "https://th.bing.com/th/id/OIP.8btwgFWdsNzQuKN0Y1lL3wHaFj?pid=ImgDet&rs=1"

   },
   {

   },
   {

   }
]

// let url = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo"
// fetch(url).then( response => response.json()).then(data=>{
//     console.log();
// })



