const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const productURL = "https://kea-alt-del.dk/t7/api/products/" + id;
const productcontainer = document.querySelector("#productContainer");

function getData() {
  fetch(productURL).then((res) => res.json().then((data) => show(data)));
}

function show(data) {
  productcontainer.innerHTML = `
     <div class="product-information">
      <article class="Indian-cricket">
        <img src="https://kea-alt-del.dk/t7/images/webp/640/${data.id}.webp" alt="${data.productdisplayname}">
      </article>
      <div class="informationer">
 
  <article class="product-pris">
    <h2> ${data.productdisplayname}</h2>
     ${(data.discount > 0 && `<span style="text-decoration: line-through;" "font-size:25px;">${data.price} KR.</span>`) || ""}
  ${data.discount > 0 ? (data.price * (1 - data.discount / 100)).toFixed(2) + " KR." : data.price + " KR."}
    </article>
  <p class="color">Color: ${data.basecolour}</p>
    <article class="produkt-information>
  <p class="lagerstatus">Lager status:</p>
    <p>${data.soldout === 1 ? "Ikke på lager" : "På lager"}</p>
    </article>
 <button>Læg i kurv</button>
 <h3> Produkt-information</h3>
<div class="produktinformation">
<p>Inventory number: ${data.relid}</p>
    <p>Gender: ${data.gender}</p>
    <p>Season: ${data.season}</p>
    <p>Usage: ${data.usagetype}</p>
    <p>Production year: ${data.productionyear}</p>
 </div>
    <h1 class="brand">${data.brandname}
       <p class="nike">${data.brandbio}</p>
 </h1>
       </div>
    
   
    
   
 
   

   
  `;
}

getData();
