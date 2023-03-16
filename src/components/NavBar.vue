<template>
    <nav class="navbar">
        <a href="/" class="logo"><img src="https://i.postimg.cc/5ts7qKSy/TSC-logo-3.png" alt="Logo" width="200" height="60"></a>
        <ul class="nav-links">
            <li class="nav-item">
                <a href="/"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16">
                    <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"/>
                  </svg>Home</a>
            </li>
            <li class="nav-item">
                <router-link to="/services"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-view-list" viewBox="0 0 16 16">
                    <path d="M3 4.5h10a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1H3zM1 2a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 2zm0 12a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 14z"/>
                  </svg>Services</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/products"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-check" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                  </svg>Products</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/about"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-journal" viewBox="0 0 16 16">
                    <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
                    <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
                  </svg>About</router-link>
            </li>
            <li>
                <router-link to="/log-in"><button class="nav-button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                  </svg>Log-in</button></router-link>
            </li>
            <li>
                <router-link to="/registration"><button class="nav-button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                </svg>Register</button></router-link>
              </li>
        </ul>
      </nav>
      
    
</template>
<script>
export default {
  name: 'NavBar',
  props: {
    msg: String
  }
}
</script>
<style>
/*
.nav-menu a {
    color: hsl(39, 100%, 51%);
}
.nav-menu a:active {
    color: hsl(124, 52%, 12%);
}

.nav-menu a:hover {
    color: hsl(124, 52%, 12%);
}
nav a:active {
    color:  hsl(124, 52%, 12%);
}

a {
    text-decoration: none;
    cursor: pointer;
}

a:hover {
    transition: 1s;
    scale : 1.2;
}

ul {
    list-style-type: none;
    padding: 5px 9px;
    justify-content: space-between;
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'DM Serif Display', serif;
    font-weight: bolder;
    height: 80px;
    padding: 0px 10px;
}

.nav-menu {
    display: flex;
    margin-right: 10px;
    justify-content: space-between;
    align-items: center;
    gap: 0px;
}

button {
    background-color: transparent;
    border: 1px solid hsl(39, 100%, 51%);
    color: hsl(0, 0%, 98%);
    width: 100px;
    height: 30px;
    text-align: center;
    margin-top: 30px;
}

.nav-menu button {
    border: 1px solid   hsl(124, 52%, 12%);
    text-align: center;
    margin-top: 0;
    color: hsl(39, 100%, 51%);
    cursor: pointer;
}

.nav-menu button:hover {
    background-color:  hsl(39, 100%, 51%);
    color: hsl(124, 52%, 12%);
    border: 1px solid   hsl(39, 100%, 51%);

}

.nav-list {
    display: flex;
    width: 720px;
    justify-content: space-between;
    align-items: center;
    margin-right: 90px;
}
  
.nav-branding {
    height: 80px;
    width: 220px;
}
*/

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    color: hsl(124, 52%, 12%);
    padding: 10px;
}
  
.navbar .logo {
    margin-right: 30px;
}
  
.navbar .nav-links {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style: none;
}
  
.navbar .nav-links li {
    margin-left: 20px;
}
.nav-item a:hover {
    color: hsl(39, 100%, 51%);
}
  
.navbar .nav-links li:first-child {
    margin-left: 0;
}
  
.navbar .nav-links a {
    color: hsl(124, 52%, 12%);
    text-decoration: none;
}

.navbar a:active {
    color:  hsl(39, 100%, 51%);
}
a:hover {
    transition: 1s;
    scale : 1.2;
}
  
.navbar .more-button {
    display: none;
    color:hsl(124, 52%, 12%);
    font-size: 24px;
}
button {
    background-color: transparent;
    border: 1px solid hsl(39, 100%, 51%);
    color: hsl(124, 52%, 12%);
    width: 70px;
    height: 27px;
    text-align: center;
}
.nav-button button:hover {
    background-color:  hsl(39, 100%, 51%);
    color: hsl(124, 52%, 12%);
    border: 1px solid   hsl(39, 100%, 51%);
}
  
@media screen and (max-width: 268px) {
.navbar .nav-links {
      display:table-column-group;
    }

    .navbar.responsive .nav-links {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 60px;
      left: 0;
      right: 0;
    }
    
    .navbar.responsive .nav-links li {
      margin: 10px 0;
    }
    
    .navbar.responsive .more-button {
      position: absolute;
      top: 10px;
      right: 10px;
    }

  }
  
</style>