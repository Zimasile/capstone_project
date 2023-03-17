<template>
        <div class="plan-border"></div>
        <div class="container">
            <div class="card">
                <a class="login">Log in</a>
                <div class="inputBox">
                    <input type="email" v-model="email" placeholder="user314@gmail.com" required="required">
                    <span>E-mail</span>
                </div>
                <div class="inputBox">
                    <input type="password" v-model="password" placeholder="*********" required="required">
                    <span class="user">Password</span>
                </div>
                <button class="enter">Log-in</button>
            </div>
        </div>
        <div v-if="user">Welcome {{ user.firstName + user.lastName }}</div>

        <section class="footer">
            <div class="footer-heading">
              <h4>EVERYONE BUYS THEM BUT WE ARE THE BEST AT CLEANING THEM ....</h4>
            </div>
        
            <div class="footer-links">
              <div>
                <div class="text">
                  <p>OUR COMPANY</p>
                </div>
                <div class="list">
                  <ul>
                    <li><a href="#">HOW WE WORK</a></li>
                    <li><a href="#">ViSION</a></li>
                    <li><a href="#">REVIEWS</a></li>
                    <li><a href=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                      </svg>34 Mtimka Street New Brighton, Port Elizabeth</a></li>
                  </ul>
                </div>
              </div>
        
              <div>
                <div class="text">
                  <p>HELP ME</p>
                </div>
                <div class="list">
                  <ul>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">TERMS OF USE</a></li>
                    <li><a href="#">COOKIES</a></li>
                  </ul>
                </div>
              </div>
        
              <div>
                <div class="text">
                  <p>CONTACT</p>
                </div>
                <div class="list">
                  <ul>
                    <li><a href="#">SALES</a></li>
                    <li><a href="#">SUPPORT</a></li>
                    <li><a href="#">LIVE CHAT</a></li>
                  </ul>
                </div>
                </div>
        
              <div>
                <div class="text">
                  <p>OTHERS</p>
                </div>
                <div class="list">
                  <ul>
                    <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                      </svg>@THESHOECLINIC</a></li>
                    <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                      </svg>THE SHOE CLINIC</a></li>
                    <li><a href=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                      </svg>067 098 5452</a></li>
                    <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-at" viewBox="0 0 16 16">
                        <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z"/>
                        <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648Zm-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z"/>
                      </svg>matyuathi@gmail.com</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div><p>Copyrights © 2023 @The Shoe Clinic</p></div>
            <button><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-up" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z"/>
                <path fill-rule="evenodd" d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
              </svg></a></button>
          </section>
</template>
<script>
export default {
    computed: {
      user() {
          return this.$store.state.user;
      },
  data() {
      return {
          email: "",
          password: "",
      };
  },
  methods: {
      login() {
          this.$store.dispatch("login", {
              email: this.email,
              password: this.password,
          });
      },
  },
}
}
</script>

<style>
.login {
    color:hsl(124, 52%, 12%);
    text-transform: uppercase;
    letter-spacing: 2px;
    display: block;
    font-weight: bold;
    font-size: x-large;
}
.plan-border {
    border-top: 1px solid hsl(124, 52%, 12%);
    width: 1509px;
    height: 10px;
    margin-bottom: 99px;
  }
  
.card {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 450px;
    width: 380px;
    flex-direction: column;
    gap: 35px;
    background: #e3e3e3;
    box-shadow: 16px 16px 32px #c8c8c8,
          -16px -16px 32px #fefefe;
    border-radius: 8px;
    border: 1px solid hsl(124, 52%, 12%);
    margin: auto;
}
  
.inputBox {
    position: relative;
    width: 250px;
}
  
.inputBox input {
    width: 100%;
    padding: 10px;
    outline: none;
    border: none;
    color: hsl(0, 0%, 0%);
    font-size: 1em;
    background: transparent;
    border-left: 2px solid hsl(124, 52%, 12%);
    border-bottom: 2px solid hsl(124, 52%, 12%);
    transition: 0.1s;
    border-bottom-left-radius: 8px;
}
  
.inputBox span {
    margin-top: 5px;
    position: absolute;
    left: 0;
    transform: translateY(-4px);
    margin-left: 10px;
    padding: 10px;
    pointer-events: none;
    font-size: 12px;
    color: hsl(124, 52%, 12%);
    text-transform: uppercase;
    transition: 0.5s;
    letter-spacing: 3px;
    border-radius: 8px;
}
  
.inputBox input:valid~span,
.inputBox input:focus~span {
    transform: translateX(113px) translateY(-15px);
    font-size: 0.8em;
    padding: 5px 10px;
    background: hsl(124, 52%, 12%);
    letter-spacing: 0.2em;
    color: #fff;
    border: 2px;
}

.inputBox input:valid,
.inputBox input:focus {
    border: 2px solid hsl(124, 52%, 12%);
    border-radius: 8px;
}

.enter {
    height: 45px;
    width: 100px;
    border-radius: 5px;
    border: 1px solid hsl(124, 52%, 12%);
    cursor: pointer;
    background-color: transparent;
    transition: 0.5s;
    text-transform: uppercase;
    font-size: 10px;
    color: hsl(124, 52%, 12%);
    letter-spacing: 2px;
    margin-bottom: 1em;
}
  
.enter:hover {
    background-color: #c8c8c8;
    color:hsl(124, 52%, 12%);
}


.footer {
    background-color: #ffffff;
    background-repeat: no-repeat;
    background-position: top 20%;
    background-size: 40%;
    text-decoration: none;
}

.footer img {
    width: 20px;
    height: 20px;
    margin: 0 0 0 10px;
}

.footer-heading {
    display: flex;
    justify-content: space-between;
    width: 92vw;
    margin: 180px 0 0 0;
    padding: 35px;
    border-bottom: 1px solid hsl(273, 4%, 51%);
}

.social-media {
    width: 300px;
}


.footer-links {
    width: 80vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 70px 0 0 120px;
    font-size: 0.85rem;
    text-decoration: none;
}

.footer-links div {
    width: 150px;
    margin: 0 0 40px 0;
    text-decoration: none;
}

.footer-links ul {
    margin-top: 50px;
    padding: 0;
}

.footer-links p {
    color: hsl(273, 4%, 51%);
}

.footer-links a {
    color: hsl(270, 9%, 17%);
}

.footer-links a:hover {
    text-decoration: underline;
}
button{
    border: 1px solid hsl(124, 52%, 12%);
}
</style>
