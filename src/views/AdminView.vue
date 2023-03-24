<template>
  <div class="admin-view">
    <table class="table" >
      <thead>
        <tr>
          <th scope="col">User ID</th>
          <th scope="col">FirstName</th>
          <th scope="col">LastName</th>
          <th scope="col">Gender</th>
          <th scope="col">cellphone number</th>
          <th scope="col">Email Address</th>
          <!-- <th scope="col">User Password</th> -->
          <th scope="col">User Profile</th>
          <th scope="col">Join Date</th>
          <th scope="col">Edit/Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users" :key="index">
          <td>{{ user.userID }}</td>
          <td>{{ user.firstName }}</td>
          <td>{{ user.lastName }}</td>
          <td>{{ user.gender }}</td>
          <td>{{ user.cellphoneNumber }}</td>
          <td>{{ user.emailAdd }}</td>
          <!-- <td>{{ user.userPass }}</td> -->
          <img :src="user.userProfile">
          <td>{{ user.joinDate }}</td>
          <td>
            <button type="button" class="btn btn warning" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="editUser(user)">Edit</button>
          <button type="button" class="btn btn danger" @click="deleteUser(index)">Delete</button>
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                </div>
                <div class="modal-body">
                  <form>
                    <div class="mb-3">
                      <label for="recipient-name" class="col-form-label">firstName</label>
                      <input type="text" class="form-control" placeholder="firstName" id="recipient-name">
                    </div>
                    <div class="mb-3">
                      <label for="message-text" class="col-form-label" placeholder="0834597356"></label>
                      <input type="text" class="form-control" id="cellphoneNumber">
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">Save</button>
                </div>
              </div>
            </div>
          </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

<!--  ==================================================================================== -->
  <div class="table-products">
      <table class="table">
<thead>
  <tr>
    <th scope="col">Product ID</th>
    <th scope="col">Product Name</th>
    <th scope="col">Product Description</th>
    <th scope="col">Category</th>
    <th scope="col">Price</th>
    <th scope="col">Product Quantity</th>
    <th scope="col">Product Image</th>
  </tr>
</thead>
<tbody>
  <tr v-for="(product, index) in products" :key="index">
    <th scope="row">{{ product.id  }}</th>
    <td>{{ product.prodName }}</td>
    <td>{{ product.prodDescription}}</td>
    <td>{{ product.category }}</td>
    <td>{{ product.price }}</td>
    <td>{{ product.prodQuantity }}</td>
    <img :src="product.imgURL">
  </tr>
</tbody>
</table>
  </div>
    </template>
    
  <script >
export default {
    name: 'AdminView',
    components: {
    },
    computed: {
        users() {
            return this.$store.state.users;
        },
        products() {
            return this.$store.state.products;
        },
    },
    mounted() {
        this.$store.dispatch("getUsers")
        this.$store.dispatch("getProducts")
    },
}
  </script>

  <style>
  table{
    /*  display: inline;*/
    border: 1px;
    text-align: center;
    position: absolute;
    display: centered;
    align-self: auto;
    padding: 0px;
    font-size: 15px;
    }
    
    .table-products{
      margin-top: 400px;
    }
    
    img{
      width: 5rem;
    }
    
    h6{
    margin-bottom: 30px;
    margin-top: 10px;
    color: white;
    }
    
    .btn {
        margin: 1rem;
        border: none;
        border-radius: 4px;
        font-weight: bold;
        font-size: .8em;
        text-transform: uppercase;
        padding: 0.6em 1.2em;
        background-color:#14134A;
        color: hsl(124, 52%, 12%);
        box-shadow: 0 0 20px #14134A;
        transition: all .3s ease-in-out;
    }
    .btn-link {
        color: #14134A;
        display: block;
        font-size: .75em;
        transition: color .3s ease-out;
    }
    
    .field input:focus::placeholder {
        opacity: 0;
        transition: opacity .3s;
    }
    .btn:hover {
        background-color: #A300FF;
        color: #14134A;
        box-shadow: 0 8px 24px 0 rgb(16 39 112 / 20%);
    }
    .btn-link:hover {
        color:#A300FF;
    }
    .products-view{
    margin-top: 170px;
    }
  </style>


