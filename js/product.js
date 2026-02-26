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
      <div class="informationer">
  <h3>Model name</h3>
    <h2>${data.productdisplayname}</h2>
    <p>Pris: ${data.price}</p>
    <p>Color:Blue</p>
    <button>Læg i kurv</button>
    </div>
 </article>
    </div>
  `;
}

getData();
