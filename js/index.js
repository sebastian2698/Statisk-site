const listContainer = document.querySelector(".category_list_container");
const fetchUrl = `https://kea-alt-del.dk/t7/api/categories`;

console.log(listContainer);

function getCategories() {
  fetch(fetchUrl).then((res) => res.json().then((categories) => showCategories(categories)));
}
function showCategories(categories) {
  categories.forEach((category) => {
    listContainer.innerHTML += `
    <arcticle class="product-card">
  <a href="productlist.html?category=${category.category}">
                <h3>${category.category}</h3>
            </a>
</arcticle>

`;
  });
}

getCategories();
