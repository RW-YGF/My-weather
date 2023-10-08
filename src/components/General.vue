<template>
<div class="card">
  <div class="card-header">
  	<span class="float-end text-secondary">{{cityRt.time}}</span>
  	<h3>
  		<router-link v-if="cityRt.name != undefined "
  		:to="{ name: 'Search', params:{city: cityRt.name}}">
  			{{cityRt.name}}+ 
  		</router-link>
  	</h3>
  </div>
  
  <div class="card-body position-relative">
  	<div class="d-flex justify-content-center aligh-items-center">
  		<router-link v-if="cityRt.name != undefined "
  		:to="{ name: 'Details', params:{city: cityRt.name}}">
  			<img :src="cityRt.icon" alt="" class="img-fluid"/>
  			<span class="fs-2">{{cityRt.temp}}°/{{cityRt.text}} </span>
  			<span class="card-aqi position-absolute top-0" :style="cityRt.bgcolor">AQI {{cityRt.category}}</span>
  		</router-link>
  	</div>
  	<!--<div class="card-text text-center weather-explain">明天雷阵雨，比今天热很多（32°），有风, 空气不错。</div>-->
  	<div class="card-text text-center weather-explain">{{cityRt.general}}</div>
  </div>

</div> 
</template>

<script>

export default {
  name: 'General',
  components: {
   // HelloWorld
  },
  props : {
  	cityRt : Object,
  },
  
}


</script>

<style>
.card { 
background:#B6C2D1 url("~@/assets/images/bg_general.png") no-repeat center top; 
background-size:100%; padding: 10px 0; margin: 0 0 10px 0; 
} 
.card-header { 
border: none; background: none; 
} 
.card-aqi { 
padding: 2px 8px; 
border-radius: 10px; color: #fff; 
} 
.weather-explain { 
margin: 0 20%; 
} 
.img-fluid { 
max-width: 100px; 
max-height: 100px; 
}
</style>