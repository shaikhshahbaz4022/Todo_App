let boxele = document.getElementById('appendHere') as HTMLDivElement

fetchAndRender()
function fetchAndRender() : void{
    fetch(`http://localhost:3000/data`)
    .then(r=>r.json())
    .then((data)=>{console.log(data); DisplayData(data);Delete()})
    .catch(e=>console.log(e))
}


const DisplayData = (data: []) : void => {
    boxele.innerHTML += `
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        ${data.map((ele : any, i) => (
          `<div class="bg-white p-6 rounded-md shadow-md">
              <h2 class="text-xl font-semibold mb-2">Title: ${ele.title}</h2>
              <p class="text-gray-700 mb-4">Description: ${ele.desc}</p>
              <div class="flex justify-between items-center">
                <div class="text-green-600 font-semibold">Status: ${ele.status}</div>
                <div class="text-gray-500">Date: ${ele.date}</div>
              </div>
              <div class="mt-4 flex justify-end space-x-2">
                <button data-id=${ele.id}  class="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 editele">Edit</button>
                <button data-id=${ele.id}  class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 deleteele">Delete</button>
              </div>
            </div>`
        )).join('')}
      </div>
    `;
  }
  
function Delete() : void{
    let deletebtn = document.querySelectorAll(".deleteele")
    for(let btn of deletebtn){
        btn.addEventListener("click",(e:any) =>{
            let id :number = e.target.dataset.id
            fetch(`http://localhost:3000/data/${id}`,{
                method : "DELETE"
            })
            .then(r=>r.json())
            .then((data)=>{
                console.log(data)
                DisplayData(data)
            })
            .catch(e=>console.log(e))


        })
    }
}