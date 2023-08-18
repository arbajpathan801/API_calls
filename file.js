const Form= document.querySelector('#my-form');

const SP=document.querySelector("#price")
const PN=document.querySelector("#product")
const CC=document.querySelector("#category")
const Elist=document.querySelector("#Eitems");
const Flist=document.querySelector("#Fitems");
const Slist=document.querySelector("#Sitems");


Form.addEventListener('submit',onsubmit)

function onsubmit(e) {
    e.preventDefault();


    let obj ={
        SP:SP.value,
        CC:CC.value,
        PN:PN.value
    }
     axios.post('https://crudcrud.com/api/55c6239b76704cdab0318e98f1d7931b/Products',obj)
    .then(res=> {
        show(res.data)
    }).catch(err => {
        console.error(err.message)
    })

    
}
function show(data) {
    const dlebtn=document.createElement('button');
    dlebtn.value=delete
    dlebtn.appendChild(document.createTextNode('Delete Product'))
    dlebtn.onclick=() =>{
        deleteP(data._id)
    }
    let li=document.createElement('li');
    li.appendChild(document.createTextNode(`${data.SP} - ${data.CC}  ${data.PN} `));
    li.appendChild(dlebtn)
    
      if (data.CC=='Electronics'){
        Elist.appendChild(li)
      }else if(data.CC=='Food'){
        Flist.appendChild(li)
      }else {
        Slist.appendChild(li)
      }
}

 function deleteP(ProductId){
    const dlt= axios.delete(`https://crudcrud.com/api/55c6239b76704cdab0318e98f1d7931b/Products/${ProductId}`)
    .then(res => {
        
      console.log ('done')
    }).catch(err => {
        console.error (err.message)
    })
    console.log (dlt)
      
   
 }

 window.addEventListener('DOMContentLoaded', ()=> {
    let get= axios.get('https://crudcrud.com/api/55c6239b76704cdab0318e98f1d7931b/Products')
    .then(res => {
        for (let i=0;i<res.data.length;i++) {
            show(res.data[i])
        }
    }).catch(err => {
        console.log (err.message)
    })
    console.log (get)
 })

 