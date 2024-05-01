
let list=document.getElementById("list")
axios("https://api.tvmaze.com/shows")
.then(res=>{
    for (let index = 0; index < res.data.length; index++) {
        
       list.innerHTML+=`<div class="card  border-dark " style="width: 18rem;margin: 20px;">
       <img src="${res.data[index].image.medium}" class="card-img-top" alt="movie picture">
       <div class="card-body d-flex flex-column justify-content-between">
         <h5 class="card-title">${res.data[index].name}</h5>
         <span class="text-danger">Type</span><p class="card-text ">${res.data[index].type}</p>
         <span class="text-danger">Genres</span><p class="card-text ">${res.data[index].genres}</p>
         <a href="${res.data[index].url}"  class="btn btn-info rounded-pill p-3 ">Go somewhere</a>
       </div>
     </div>`
    }
})