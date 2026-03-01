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
      <div class="informationer">
 
  <h1 class="modelname">Model name:</h1>
    <h2> ${data.productdisplayname}</h2>
    <p class="pris">Pris:</p>
    <p>${data.price} kr</p>
    <p class="color">Color:</p>
<p>${data.basecolour}</p>
    <button>Læg i kurv</button>
    <h1 class="brand">${data.brandname}</h1>
    <p class="nike">${data.brandbio}</p>
     <p class=productinformation>Produkt Information:</p>
  <p class="inventory">Inventory number: ${data.relid}</p>
    </div>

    </div>
  `;
}

getData();
