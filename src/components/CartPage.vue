<template>
    <div>
            <div class="grid">
              <div class="col-sx">
                <div class="products">
                  <h2>Products</h2>
                  <ul class="products-list">
                    <li class="product" v-for="(prod, ind) in products" :key="'ind-' + ind">
                      <div class="box">
                        <div class="image"></div>
                        <h3 class="title">{{ prod.title }}</h3>
                        <p class="price">{{ prod.price }}</p>
                        <button @click="addItem(prod)">Add to cart</button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-dx">
                <div class="cart">
                  <h2>Your Cart</h2>
                  <table class="cart-list" v-if="cart.length">
                    <thead>
                      <tr>
                        <th class="head-title">Product</th>
                        <th class="head-price">Price</th>
                        <th class="head-quantity">Quantity</th>
                        <th class="head-total">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="cart-item" v-for="(item, id) in cart" :key="'id-' + id">
                        <td><h4 class="title">{{ item.title }}</h4></td>
                        <td><div class="price">{{ item.price }}</div></td>
                        <td>
                          <div class="quantity">
                            {{ item.quantity }}
                            <span class="qty-handler">
                              <span @click="add(item)">+</span>
                              <span @click="sub(item)">-</span>
                            </span>
                          </div>
                        </td>
                        <td><div class="total">{{item.price * item.quantity}}</div></td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <th colspan="3"><h4 class="total-title">Total</h4></th>
                        <th>{{total }}</th>
                      </tr>
                    </tfoot>
                  </table>
                  <div class="empty-contents" v-else>
                    <div class="draw">
                      <div class="cactus">
                        <div class="arm"></div>
                        <div class="arm"></div>
                      </div>
                      <div class="cactus">
                        <div class="arm"></div>
                        <div class="arm"></div>
                      </div>
                      <div class="cactus">
                        <div class="arm"></div>
                        <div class="arm"></div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
                

          
    
</template>
<script>
export default {
    
}
</script>
<style>
h1 {
    margin: 0 0 3rem;
    text-transform: uppercase;
    text-align: center;
    font-weight: 400;
}
  
.grid {
    display: flex;
}
  
.grid .col-sx,
.grid .col-dx {
    width: 50%;
}
  
.products {
    padding: 0 1rem 0 0;
}
  
.products h2 {
    margin-top: 0;
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    font-weight: 400;
    border-bottom: 1px solid #555;
}
  
.products .products-list {
    margin: 0.5rem 0 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
}
  
.products .products-list .product {
    margin: 0;
    list-style: none;
    width: 50%;
}
  
.products .products-list .product:nth-child(odd) {
    padding-right: 1rem;
}
  
.products .products-list .product:nth-child(even) {
    padding-left: 1rem;
}
  
.products .products-list .product .box {
    margin-bottom: 2.15rem;
    padding: 1rem;
    text-align: center;
    box-shadow: 0 0 3px 2px rgba(black, 0.15);
}
  
.products .products-list .product .box:nth-child(even) {
    margin-left: 0.5rem;
}
  
.products .products-list .product .box .image {
    display: block;
    width: 100%;
    height: 100px;
    background: #eee;
    margin-bottom: 1rem;
}

.products-list .product .box .title {
  margin-top: 0;
}

.products-list .product .box button {
  padding: 0.35rem 0.7rem 0.28rem;
  border: 0;
  text-transform: uppercase;
  font-size: 0.85em;
  color: white;
  background: rgba(black, 0.5);
  box-shadow: 0 18px 10px -10px;
} 
</style>