<template>
  <div class="container-fluid">
  	<Navbar  :city="city"/>
  	<input-search @show="showP" @visible="visible"/>
  	<search-list  v-show="!isShow" :listCityRef="listCityRef"></search-list>
  	<Record :recordRef ="recordRef"  :positionRt="positionRt" v-show="isShow"/>
  	<TopCity :topCityRef="topCityRef" v-show="isShow"/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import InputSearch from '@/components/Input-search.vue'
import TopCity from '@/components/Top-city.vue'
import Record from '@/components/Record.vue'
import SearchList from '@/components/SearchList.vue'
import { getTopCity,  getRecord, getCity, getVaguaCity} from '@/server/city'
import {onMounted, reactive, ref} from "vue"
import { useRoute } from "vue-router"

// topCity模块
const topCity = () => {
  	const topCityRef = ref([]);
  	onMounted( async()=>{
  		const topCityArr = (await getTopCity()).topCityList;
  		topCityArr.map( item=>{
  			// 城市名
  			if(item.name != item.adm2){
  				item.name = item.adm2 + '·' + item.name
  			}
  			// 经纬度
  			item.location = item.lon + ',' + item.lat;
  		});
  		
  		topCityRef.value = topCityArr;
  	});
  	return { topCityRef };
  	
}

// record模块
const record = () =>{
	const recordRef  = ref([]);
	onMounted( async()=>{
  		//console.log('mounted');
  		const recordObj = getRecord();
  		let arr = [];
  		recordObj.map( item => {
  		//console.log(item);
  			arr.push({
  				city : item.split('-')[0],
  				location : item.split('-')[1]
  			});
  		});
  		
  		recordRef.value = arr;
  	});
	return   { recordRef } ;
}

//position 模块
const position = () =>{
	const positionRt = reactive({});
	onMounted( async()=>{
		const cityObj = (await getCity(1)).location[0];
		
		// 当前城市
		if(cityObj.name === cityObj.adm2)
		{
			positionRt.city = cityObj.name;
		}else{
			positionRt.city = cityObj.adm2 + '·' + cityObj.name;
		}
		positionRt.location = cityObj.lon + ',' + cityObj.lat;
		
	});
	
	return { positionRt,  };
}

//listCity模块
const listCity = () => {
	const listCityRef = ref([]);
	// 显示开关
	const isShow = ref(true);
	// 显示方法
	
	const showP = async(keyword) => {
        isShow.value = false;
        const vaguaCityObj = (await getVaguaCity(keyword.value)).location;
        
        vaguaCityObj.map(
        	item=>{
        		// 城市名
        		if (item.name === item.adm2) {
            		item.city = item.name;
        		} else {
            		item.city = item.adm2 + '·' + item.name;
        		}
        		// 经纬度
        		item.location = item.lon + ',' + item.lat;
        	}
        );
        
        listCityRef.value = vaguaCityObj;
    };
    
    const visible = () =>{
    	isShow.value = true;
    };
    
	// 隐藏方法
	
	return { listCityRef, 
		isShow, 
		showP,
		visible
		};
}

export default {
  name: 'Search',
  components: {
  	Navbar, InputSearch, TopCity, Record, SearchList
  },

  setup(){
  	const route = useRoute();
  	const { topCityRef } = topCity();
  	const { recordRef }  = record();
  	const { positionRt } = position();
  	const { listCityRef, isShow, showP, visible } = listCity();
  	
  	return {
  		 city :　route.params.city,
  		 topCityRef,
  		 recordRef,
  		 positionRt,
  		 listCityRef, 
  		 isShow,
  		 showP, 
  		 visible
  	}
  	
  }
  
}


</script>

<style>

</style>