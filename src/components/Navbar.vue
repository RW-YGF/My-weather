<template>
<nav class="navbar">
        <h4><router-link to="/">&lt; {{city}} </router-link></h4>
        <!-- <h4><router-link to="/">&lt;  {{$route.params.city}}</router-link></h4> -->
</nav>
</template>

<script>
export default {
  name: 'Nabar',
  components: {
   // HelloWorld
  },
  props : {
  	city : {
  		type : String
  	}
  },
  
  setup(){
  	//console.log("nav--"+city);
  },
}

</script>

<style>

</style>