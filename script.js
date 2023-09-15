


//example

/*const res = fetch("https://restcountries.com/v2/all")
res.then((data)=>data.json()).then((data1)=>{
    for (let i =0; i<data1.length; i++){
        console.log(data1[i].name);
    }
})*/


/*const res = fetch("https://restcountries.com/v2/all")
res.then((data)=>data.json()).then((data1)=>{
    for (let i =0; i<data1.length; i++){
        //console.log(data1[i].name);
        const div = document.createElement("div")
        div.innerHTML= `${data1[i].name}`
        document.body.append(div);
    }
})*/

/*<div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
    <div class="card">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  </div>*/


  const res = fetch("https://jsonplaceholder.typicode.com/users")

  res.then((data)=>data.json()).then((data1)=>{
      for (let i =0; i<data1.length; i++){
          console.log(data1[i]);
          const div = document.createElement("div")
      
          div.innerHTML= `<div class="row row-cols-1 row-cols-md-2 g-4">
          <div class="col">
            <div class="card">
                      <div class="card-body">
                <h5 class="card-title"> ${data1[i].name}</h5>
                <p class="card-text"><b><i>Email :  ${data1[i].email}</i></b></p>
                <p class="card-text"><b><i>Phone :  ${data1[i].phone}</i></b></p>
                

              </div>
            </div>
          </div>
          </div>`
          document.body.append(div);
      }
  })