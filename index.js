// const toggleLeftbtn = document.querySelector("toggleLeft");
// const main = document.querySelector("main");

// toggleLeftbtn.addEventListener("click", () => {
//     main.classList.toggle("reduce-width");
// });


const selectBrand = document.getElementById("selectBrand");

document.getElementById("hideLeft").addEventListener("click", ()=>{
  document.getElementById("left").classList.toggle("show");
});

let products = [
  {
    id: 1,
    name: "dairymilk",
    category: "food",
    price: 10,
    quantity: 100,
    pic: "./food2.jpg",
  },
  {
    id: 2,
    name: "coke",
    category: "drink",
    price: 30,
    quantity: 60,
    pic: "./food2.jpg",
  },
  {
    id: 3,
    name: "cheese",
    category: "dairy",
    price: 100,
    quantity: 10,
    pic: "./logo.png",
  },
  {
    id: 4,
    name: "chocolate",
    category: "food",
    price: 10,
    quantity: 20,
    pic: "./food2.jpg",
  },
  {
    id: 5,
    name: "fanta",
    category: "drink",
    price: 50,
    quantity: 40,
    pic: "./food2.jpg",
  },
  {
    id: 6,
    name: "Biscuits",
    category: "food",
    price: 10,
    quantity: 200,
    pic: "./food2.jpg",
  },
  {
    id: 7,
    name: "Butter",
    category: "Dairy",
    price: 50,
    quantity: 100,
    pic: "./logo.png",
  },
];

function displayData(obj){
  document.getElementById('tbody').innerHTML="";


  obj.forEach((ele,i)=>{
    createTr = document.createElement('tr');

    idTd =  document.createElement('td');
    nameTd =  document.createElement('td');
    categoryTd =  document.createElement('td');
    priceTd =  document.createElement('td');
    quantityTd =  document.createElement('td');
    picTd =  document.createElement('td');
    imgTd = document.createElement('img');
    imgTd.setAttribute('src','./logo.png')
    picTd.appendChild(imgTd);

    
    idTd.append(i+1);
    nameTd.append(ele.name);
    categoryTd.append(ele.category);
    priceTd.append(ele.price);
    quantityTd.append(ele.quantity);

    createTr.appendChild(idTd);
    createTr.appendChild(nameTd);
    createTr.appendChild(categoryTd);
    createTr.appendChild(priceTd);
    createTr.appendChild(quantityTd);
    createTr.appendChild(picTd);

    document.getElementById('tbody').appendChild(createTr);
  })
}

displayData(products);

let newproducts = {
  name: null,
  category : null,
  quantity : null,
  minPrice : null,
  maxPrice : null,
  price:null
}

function addNewProducts(property,value){

  if(value !== ""){
    newproducts[property] = value;
  }
  else{
    newproducts[property] = null;
  }
  // console.log(newproducts);
}
// console.log(newproducts);
function filter(){
  let filterData = products;

  if( newproducts.name !== null){
    filterData = filterData.filter((ele, index)=>{
      return ele.name.toUpperCase() === newproducts.name.toUpperCase();
    })
  }

  if( newproducts.category !== null){
    filterData = filterData.filter((ele, index)=>{
      return ele.category.toUpperCase() === newproducts.category.toUpperCase();
    })
  }
  // console.log(filterData);

  if(newproducts.quantity !== null){
    console.log(newproducts.quantity);
    filterData = filterData.filter((ele,index)=>{
      return newproducts.quantity >= ele.quantity;
    })

  }

  if(newproducts.price !== null){
    filterData = filterData.filter((ele,index)=>{
      // console.log(ele);
      console.log(ele.price);

      console.log(Number(newproducts.price) >= ele.price);
      return Number(newproducts.price) >= ele.price;
    })
    //  console.log(newproducts);
  }

  if(newproducts.minPrice !== null){
    console.log(newproducts.minPrice);
    filterData = filterData.filter((ele,index)=>{
      // console.log(ele);
      console.log(ele.minPrice);

      console.log(Number(newproducts.minPrice) >= ele.price);
      return Number(newproducts.minPrice) >= ele.price;
    })
    //  console.log(newproducts);
  }

  // if(newproducts.minPrice !== null){


  //   filterData = filterData.filter((ele,index)=>{
  //     if(newproducts[minPrice]<= ele.price){
  //       return ele.price;
  //     }
  //     // console.log();
  //     // return Number(newproducts.minPrice) >= ele.minPrice;
  //   })
  //    console.log(filterData);
  // }


  // if(newproducts.minPrice !== null){
  //   filterData = filterData.filter((ele,index)=>{
  //     return Number(newproducts.minPrice) <= ele.minPrice;
  //   })
  // }

  // if(newproducts.maxPrice !== null){
  //   filterData = filterData.filter((ele,index)=>{
  //     return Number(newproducts.maxPrice) >= ele.maxPrice;
  //   })
  //   console.log(newproducts);
  // }
  displayData(filterData);
}

// displayData(filterData);
