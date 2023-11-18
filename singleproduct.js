
function displaySingleProduct(id) {
    id=Number(id);
    container_element = document.querySelector(".pro-details");
    innerhtml='';
    const product = products.find((p) => p.id === id);
    console.log(id);
    if (product) {
        innerhtml += `<div class="container">
        <div class="single-pro-image">
            <img src="${product.product_image}" width="100%" id="main-image">
        </div>
        <div class="details">
            <h6>Home/Men</h6>
            <h4>Men Fashion Wear</h4>
            <h2>${product.product_current_price}<span class="original-price" style="font-size: 20px;">${product.product_original_price}</span></h2>
            <select>
                <option>select size</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
            </select>
            <input type="number" value="1">
            <button class="normal">add to cart</button>
            <h4>Product Details</h4>
            <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis iusto sed velit quidem! Doloribus esse at recusandae eligendi vero eaque quis, quia reiciendis sunt consequuntur.</span>
        </div>
    </div>
   `;
    };
    window.location.href='product1.html';
    container_element.innerHTML = innerhtml;
}
