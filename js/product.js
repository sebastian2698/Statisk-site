const id = 1163;
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
        <article class="Indian-cricket">
        <h1 class=productinformation>Produkt Information</h1>
        <p class="modelname">Model name</p>
        <p class="modelname">${data.productdisplayname}</p>
        <p class="color">Color ${data.basecolour}</p>
        <p class="inventory">${data.relid}</p>
        <p class="nike">${data.brandbio}</p>
        </article>
      <div class="informationer">
  
    <h2>${data.productdisplayname}</h2>
    <p>Pris: ${data.price} kr</p>

    
    <p>På lager</p>
    <p>${data.brandname} ${data.articletype}</p>
    <button>Læg i kurv</button>
    </div>
 </article>
    </div>
  `;
}

getData();
