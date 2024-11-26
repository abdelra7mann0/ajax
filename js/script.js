let divv= document.querySelector(".card")
let ajax = new XMLHttpRequest
ajax.open("GET" ,"https://fakestoreapi.com/products")
ajax.send()
ajax.onreadystatechange=()=>{
    let z= "";
    if(ajax.readyState == 4 ){
        let data = JSON.parse(ajax.response)
        console.log(data)

        for(let p = 0 ; p <data.length ; p++){
            z +=`
        <img src="${data[p].image}" class="card-img-top" alt="${data[p].category}">
        <div class="card-body">
          <h5 class="card-title">${data[p].title}</h5>
          <p class="card-text">${data[p].description}</p>
        </div>
      `
        }
        divv.innerHTML=z


    }
}