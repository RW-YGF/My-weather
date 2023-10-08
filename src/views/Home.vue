<template>
	<div class="container-fluid"> 
		<General :city-rt="cityRt"/>
		<Week :week-ref="weekRef"/>
		<Indies :indies-ref="indiesRef"/>
	</div>
  	
  
</template>

<script>
// @ is an alias to /src
import General from '@/components/General.vue'
import Week from '@/components/Week.vue'
import Indies from '@/components/Indies.vue'
import { getCity, getLocation } from '@/server/city'
import { getGeneral, getAir, getWeek, getIndies } from '@/server/weather'
import { getImageUrl } from '@/server/untils'
import {onMounted, reactive, ref} from "vue"

// general模块
const general = () => {
	// 创建一个用于显示rt
  	const cityRt = reactive({});
  	
  	onMounted( async () => {
  		const cityObject = (await getCity()).location[0];
  		//console.log(cityObject);
  		//获取 “城市/地区” 这种格式
  		if(cityObject.name === cityObject.adm2){
  			cityRt.name = cityObject.name;
  		}else{
  			cityRt.name = cityObject.name + ' . ' + cityObject.adm2;
  		}
  		cityRt.name1 = cityObject.name;
  		// 获取经纬度，用于查询天气概况
  		cityRt.location = cityObject.lon + ',' + cityObject.lat;
  		
  		// 获取当前天气概况
  		const weatherObject = (await getGeneral(cityRt.location)).now;
  		// 当前时间
  		cityRt.time = weatherObject.obsTime.substring(0, 10);
  		// 温度
  		cityRt.temp = weatherObject.temp;
  		// 天气描述
  		cityRt.text = weatherObject.text;
  		// 天气图标
  		cityRt.icon = getImageUrl(weatherObject.icon);
  		// 天气概况
  		cityRt.general = `今天${weatherObject.text}，${weatherObject.windDir}
			${weatherObject.windScale}级，现在温度为${weatherObject.temp}°，
			体感温度${weatherObject.feelsLike}°`;
			
		//获取空气质量指数
		const airObject = (await getAir(cityRt.location)).now;
		switch(airObject.level){
		 case '1':
		 	cityRt.bgcolor = "background-color:limegreen";
		 break;
		  case '2':
		 	cityRt.bgcolor = "background-color:gold";
		 break;
		  case '3':
		 	cityRt.bgcolor = "background-color:orange";
		 break;
		  case '4':
		 	cityRt.bgcolor = "background-color:red";
		 break;
		 defalut:
		 	cityRt.bgcolor = "background-color:maroon";
		 break;
		}
		// 设置pm2.5级别文字
		cityRt.category = airObject.category;
  	});
  	
  	return { cityRt };
};

// week模块
const week = () => {
	const weekRef = ref([]);
  	onMounted( async () =>{
  		const location  = await  getLocation();
  		//weekObj = [];
  		const weekObj = (await getWeek(location)).daily;
  		weekRef.value = weekObj;
  		
  		//星期转换
  		var today = new Date().getDay();  
  		const week = [];
  		week[0] = '周日';
  		week[1] = '周一';
  		week[2] = '周二';
  		week[3] = '周三';
  		week[4] = '周四';
  		week[5] = '周五';
  		week[6] = '周六';	
  		
  		for(let i=0; i<weekObj.length; i++)
  		{
  			weekObj[i]['iconD'] = getImageUrl(weekObj[i].iconDay);
  			weekObj[i]['iconN'] = getImageUrl(weekObj[i].iconNight);
  			weekObj[i]['day'] = week[(today+i)%7];
  		}
  	});
	return { weekRef };
};

const indies = () => {
	//天气质量指数
  	const indiesRef = ref([]);
  	onMounted( async()=>{
  		const location  = await  getLocation();
  		const indiesObj = (await getIndies(location)).daily;
  		//console.log(indiesObj);
  		for(let i=0; i<indiesObj.length; i++)
  		{
  			indiesObj[i]['icon'] = require(`@/assets/images/icons/${indiesObj[i].type}.png`);;
  		}
  		
  		indiesRef.value = indiesObj;
  		//console.log('indiesRef--'+indiesRef.value.length);
  	});
	return { indiesRef };
}


export default {
  name: 'Home',
  components: {
    General, Week, Indies
  },
  
  setup(){
  	const { cityRt } = general();
  	const { weekRef }  = week();
  	const { indiesRef } = indies();
  	///////////////////////////////
  	return {
  		cityRt, weekRef, indiesRef
  	};
  },
  
  
  
}
</script>

<style>

</style>
