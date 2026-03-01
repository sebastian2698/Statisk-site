const listURL = "https://kea-alt-del.dk/t7/api/products?limit=21 ";
const listContainer = document.querySelector(".product_list_container");

function getProducts() {
  fetch(listURL).then((res) => res.json().then((products) => showProducts(products)));
}

function showProducts(products) {
  // Start med tom container
  listContainer.innerHTML = "";

  // products er et array af objekter
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
                <p>Category:${product.category}</p>
                <p>Gender: ${product.gender}</p>
                <p>${product.brandname}</p>
                
                 ${priceHTML}
              <p class=Lagerstatus> Lager status: ${LagerStatus} </p>
                <a class=productdetail href="product.html">
                    <p>Læs mere om produktet</p>
                </a>
            </article>
      
    `;
  });
}

getProducts();
