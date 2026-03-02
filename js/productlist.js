const params = new URLSearchParams(window.location.search);

const category = params.get("category");

console.log(category);

const listContainer = document.querySelector(".product_list_container");
const fetchUrl = `https://kea-alt-del.dk/t7/api/products?category=${category}`;

fetch(fetchUrl)
  .then((res) => res.json())
  .then((data) => {
    console.log("Produkter:", data);
  });

function getProducts() {
  fetch(fetchUrl).then((res) => res.json().then((products) => showProducts(products)));
}

function showProducts(products) {
  listContainer.innerHTML = "";

  products.forEach((product) => {
    let LagerStatus;

    if (product.soldout === 1) {
      LagerStatus = "Ikke på lager";
    } else {
      LagerStatus = "På lager";
    }
    if (product.discount) {
      const newPrice = product.price - (product.price * product.discount) / 100;

      priceHTML = `
     
      <p class="old_price">Before ${product.price} kr.</p>
      <p class="new_price">Now ${newPrice.toFixed(2)} kr.</p>
      <p class="discount_label">Spar ${product.discount}%</p>
    `;
    } else {
      priceHTML = `<p>DKK ${product.price} kr.</p>`;
    }

    listContainer.innerHTML += `
    
    <article class="product">

                <img src=https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp>
                <h1>${product.productdisplayname}</h1>
                <h3>${product.brandname}${priceHTML}</h3>
                    <p class=Lagerstatus> Lager status: ${LagerStatus} </p>
                <a class=productdetail href="product.html?id=${product.id}">
                    <button>Læs mere om produktet</button>
                </a>
            </article>
      
    `;
  });
}

getProducts();
