<template>
    <div class="info">
      <div>
        <div class="info-border"></div>
        <h3></h3>
      </div>
      <div class="info-container">
        <div class="description">
          <div class="img">
            <img src="https://i.postimg.cc/mrs8sf8t/FB-IMG-16744789054423222.jpg" alt="">
          </div>
          <h4>Deep cleaning</h4>
          <p></p>
        </div>
        <div class="description">
          <span>
            <img src="https://i.postimg.cc/jqMwNyyj/c1596c38ca0241bea76627fe079b051a.jpg" alt="" width="1000px">
          </span>
          <h3>Affordable Prices</h3>
          <p></p>
        </div>
        <div class="description">
          <span>
          </span>
          <h3></h3>
          <p></p>
        </div>
      </div>
      <div class="description-banner">
        <div class="description-banner-text">
          <h2>Find out more about how we work</h2>
        </div>
        <button>View</button>
      </div>
    </div>
</template>

<script>
export default {
  name: 'ServicesPage',
  props: {
    msg: String
  }
}
</script>

<style>
.img {
  height: 50px;
}
.info {
  margin: 20px 0 0 140px;
}

.info-border {
  border-top: 1px solid hsl(124, 52%, 12%);
  width: 1200px;
  margin-bottom: 10px;
}

.info h2 {
  font-size: 2.7rem;
  color: hsl(124, 52%, 12%);;
}

.info img {
  width: 50px;
  height: 50px;
  margin-bottom: 15px;
}

.info h3 {
  margin-bottom: 15px;
  font-size: 1.6rem;
}

.info-container {
  width: 82vw;
  display: flex;
  justify-content: space-between;
}

.description {
  width: 360px;
}

.info p {
  font-size: 0.9rem;
}

.description-banner {
  margin: 50px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: hsl(256, 26%, 20%);
  background-repeat: no-repeat;
  background-position: 96% 27%;
  background-size: 45%;
  width: 82vw;
  height: 200px;
}

.description-banner-text {
  width: 500px;
  margin: 0 70px;
}

.description-banner h2 {
  color: hsl(0, 0%, 98%);
}

.description-banner button {
  margin: 0 170px 20px 0;
}

.description-banner button:hover {
  background-color: hsl(0, 0%, 98%);
  color: hsl(256, 26%, 20%);
}
</style>