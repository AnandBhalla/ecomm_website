displayproducts();
function displayproducts(){
    product_container_element=document.querySelector(".shop-products");
    innerhtml='';
    products.forEach(product => {
        innerhtml+=`<div class="product-container"> <div class="product" onclick=displaySingleProduct(${product.id});>
        <img src="${product.product_image}" alt="">
    </div>
    <div class="desc">
        <span class="company">
        ${product.product_company}
        </span>
        <span class="name">
        ${product.product_name}
        </span>
        <div class="price">
            <span class="current-price">
            ${product.product_current_price}
            </span>
            <span class="original-price">
            ${product.product_original_price}
            </span>
        </div>
    </div>
    </div>`
        
    });
    product_container_element.innerHTML=innerhtml;
}



