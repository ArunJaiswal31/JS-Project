const CrudApi={
    root:"https://crudcrud.com/api/a94396ef9b4d49caae48d570f97c1922/productdata"
};
var parentElem=0;
async function formsubmit(e){
   e.preventDefault();
   const sell=e.target.sellprice.value;
   const product=e.target.pname.value;
   const category=e.target.category.value;
   const obj={
    sell,
    product,
    category
   };
   const response=await axios.post(CrudApi.root,obj);
   showUSersonScreen(response.data);
   document.getElementById("my-form").reset();

}

function showUSersonScreen(obj){

    if(obj.category=="Electronic"){
        var childElem=`<div id=${obj._id}>${obj.sell}-${obj.category}-${obj.product}
        <button onclick=deleteUser('${obj._id}')>Delete Product</button>
        </div>`;
        var parentElem=document.getElementById("listOfitems");
        parentElem.innerHTML+=childElem;
    }
    else if(obj.category.name=="Food"){
        var childElem=`<div id=${obj._id}>${obj.sell}-${obj.category}-${obj.product}
        <button onclick=deleteUser('${obj._id}')>Delete Product</button>
        </div>`;
        var parentElem=document.getElementById("listOfitems");
        parentElem.innerHTML+=childElem;

    }
    else{
        var childElem=`<div id=${obj._id}>${obj.sell}-${obj.category}-${obj.product}
        <button onclick=deleteUser('${obj._id}')>Delete Product</button>
        </div>`;
        var parentElem=document.getElementById("listOfitems");
        parentElem.innerHTML+=childElem;

    }

   
  
}



async function deleteUser(objId){
await axios.delete(`${CrudApi.root}/${objId}`);
const parentElem=document.getElementById("listOfitems");
const childElem=document.getElementById(objId);
if(childElem){
    parentElem.removeChild(childElem);
}

}

document.addEventListener("DOMContentLoaded",async()=>{
   const response=await axios.get(CrudApi.root);
   for(var i=0;i<response.data.length;i++){
    showUSersonScreen(response.data[i]);
   }
});
