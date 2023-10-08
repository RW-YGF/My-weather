<template>
  <div class="container-fluid">
  	<Navbar  :city="city"/>
    <Weather :weatherRt="weatherRt"/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Weather from '@/components/Weather.vue'
import { useRoute } from "vue-router"
import { getLocation } from '@/server/city'
import { getGeneral, getAir, getWeek, getIndies } from '@/server/weather'
import {onMounted, reactive, ref} from "vue"
import { getImageUrl } from '@/server/untils'

const weather = () =>{
  	const weatherRt = reactive({});
  	onMounted(async () =>{
  		// 获取当前的经纬度
  		const location  = await  getLocation();
  		// 获取当前天气概况
  		const weatherObject = (await getGeneral(location)).now;
  		console.log('weatherObject--'+weatherObject);
  		//
  		weatherRt.time = weatherObject.obsTime.substring(0,10);
  		weatherRt.temp = weatherObject.temp;
  		weatherRt.text = weatherObject.text;
  		weatherRt.icon = getImageUrl(weatherObject.icon);
  		weatherRt.pressure = weatherObject.pressure;
  		weatherRt.humidity = weatherObject.humidity;
  		weatherRt.precip= weatherObject.precip;
  		weatherRt.vis = weatherObject.vis;
  		weatherRt.windScale = weatherObject.windScale;
  		weatherRt.windDir = weatherObject.windDir;
  		
  	});
  	
  	return {
  		weatherRt
  	};
}

export default {
  name: 'Details',
  components: {
    Navbar, Weather
  },
  
  setup(){
  	const route = useRoute();
  	const { weatherRt }  = weather();
  	return {
  		 city :　route.params.city,
  		 weatherRt
  	}
  	
  }
  
}


</script>

<style>

</style>