<template>
     <div>
  <b-carousel
    id="carousel-no-animation"
    style="text-shadow: 0px 0px 2px #000"
    no-animation
    img-width="1024"
    img-height="480"
  >
    <b-carousel-slide
      img-src="https://picsum.photos/1024/480/?image=10"
    >
     <div class="title" style="color:white;font-size:100px">TOUCH.cONTACT!</div></b-carousel-slide>
  </b-carousel>
</div>
</template>

<style>
#Home {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}
.title{
width:70%;
height: 400px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
