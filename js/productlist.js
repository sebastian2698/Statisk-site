const params = new URLSearchParams(window.location.search);
const category = params.get("category");
const sortByPriceBtn = document.querySelector("#sortByPriceBtn");
const listContainer = document.querySelector(".product_list_container");
const filterWomenBtn = document.querySelector("#filterWomenBtn");
const showAllBtn = document.querySelector("#showAllBtn");
const fetchUrl = `https://kea-alt-del.dk/t7/api/products?category=${category}`;

let allProducts = [];

function getProducts() {
  fetch(fetchUrl)
    .then((res) => res.json())
    .then((products) => {
      allProducts = products;
      showProducts(allProducts);
    });
}

function showProducts(products) {
  listContainer.innerHTML = "";

  products.forEach((product) => {
    listContainer.innerHTML += `
<article class="product">
<img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp">
        <h1>${product.productdisplayname}</h1>
        <h3>${product.brandname}</h3>
<p>
  ${(product.discount > 0 && `<span style="text-decoration: line-through;">${product.price} KR.</span>`) || ""}
  ${product.discount > 0 ? (product.price * (1 - product.discount / 100)).toFixed(2) + " KR." : product.price + " KR."}
</p>
 
${product.discount ? `<p class="tilbud">Spar ${product.discount}%</p>` : ""}
<p>${product.soldout === 1 ? "Ikke på lager" : "På lager"}</p>
    
<a class="productdetail" href="product.html?id=${product.id}">
          <button>Læs mere om produktet</button>
        </a>


      </article>
    `;
  });
}
function sortByPriceAsc() {
  const sorted = [...allProducts].sort((a, b) => a.price - b.price);
  showProducts(sorted);
}
sortByPriceBtn.addEventListener("click", sortByPriceAsc);
function filterByGender(targetGender) {
  const filtered = allProducts.filter((product) => (product.gender || "").toLowerCase() === targetGender.toLowerCase());

  showProducts(filtered);
}

filterWomenBtn.addEventListener("click", () => filterByGender("Women"));
showAllBtn.addEventListener("click", () => showProducts(allProducts));

getProducts();
