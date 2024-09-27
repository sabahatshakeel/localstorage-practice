// async function products_fun(){
//     try{
//         const data = await fetch('https://fakestoreapi.com/products')
//         const jsonData = await data.json()
//         console.log(jsonData)
//     }
//     catch(err){
//         console.log(err)
//     }
// }
// products_fun()

let products = document.querySelector(".product")
var categoryList = document.querySelector(".category_list")
let allCategory = [];

let displayProducts = async (allCheckCat=[]) => {

    products.innerHTML = ''
    // categoryList.innerHTML = "";

    let product = await fetch('https://fakestoreapi.com/products');
    let finalProduct = await product.json();
    // console.log(finalProduct)

    finalProduct.forEach(element => {



// CATEGORY DATA-----------------------------------------------------------------------------//
        if (!allCategory.includes(element.category)){
            categoryList.innerHTML += ` <label>
            <input type="checkbox" onclick='categoryFilter()' value="${element.category}"> ${element.category}
        </label> `;
        allCategory.push(element.category)
        }

        
if(allCheckCat.length == 0){
    // console.log("hello")
    allCheckCat=allCategory;
}
 // console.log(element)

if(allCheckCat.includes(element.category)){



       
// PRODUCTS DATA----------------------------------------------------------------------------//
        products.innerHTML += `<div class="produt_items">
    <img src="${element.image}" alt="">
      <h4>${element.category}</h4>
    <p>Price Rs. ${element.price} | ${element.rating.rates} </p>
    <h3>${element.title}</h3>
</div>`

}

    })

}
displayProducts();


let categoryFilter=() => {
// alert("Hello to products")
let checkInput = document.querySelectorAll("input[type='checkbox']");
// console.log(checkInput)
let checkdata =[];
checkInput.forEach((e)=>{
    // console.log(e)
    if(e.checked){
        // console.log(e);
        checkdata.push(e.value)
    }
})
// console.log(checkdata)
displayProducts(checkdata);
}