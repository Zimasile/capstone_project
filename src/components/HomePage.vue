<template>
  <div class="intro">
    <div class="plan-container">
      <div class="plan">
        <div class="plan-border"></div>
        <h1>Just because you've got better things to do</h1>
        <p>Dubbed the best in the business, we pamper your shoes back to life.</p>
        <p>1 Corinthians 15:21: "For since death came through a man, the resurrection of the dead comes also through a man."</p>
        <p>1 Restorians 15:21 "for since the death of ye shoe came through man, the resurrection of them comes through our hands"</p>
        <button>VIEW MORE</button>
      </div>
      <div class="image-container">
        <img src="https://i.postimg.cc/jqMwNyyj/c1596c38ca0241bea76627fe079b051a.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.intro {
  background-color: hsl(124, 52%, 12%);
  background-repeat: no-repeat;
  background-position: bottom -0px left, top -120px right;
  background-size: 10%, 27%;
  height: 620px;
  display: flex;
  margin-right: 0;
  width: 1529px;
  justify-content: center;
  color: hsl(0, 0%, 98%);
}

.plan-container {
  display: flex;
  justify-content: space-between;
  width: 80%;
  height: 150px;
}

.plan-border {
  border-top: 1px solid hsl(39, 100%, 51%);
  width: 570px;
  height: 10px;
  margin-bottom: 99px;

}

.plan {
  width: 570px;
  margin: 50px 30px 0 0;
}

.plan h1 {
  margin: 8px 0;
  font-size: 3.5rem;
}

.plan p {
  font-size: 1em;
}

.plan button:hover {
  background-color: hsl(0, 0%, 98%);
  color: hsl(124, 52%, 12%);
}

.intro img {
  width: 410px;
  height: 430px;
  margin: 100px 60px 0 0;
}


.intro button:hover{
  background-color: hsl(39, 100%, 51%);
  color: hsl(124, 52%, 12%);
  border: 1px solid hsl(124, 52%, 12%);

}
</style>
