<template>
	<div class="card">
		<ul class="list-group list-group-flush">
            <li class="list-group-item
                list-group-item-action"
                v-for="(item, index) in listCityRef"
                @click="setCity(item.location, item.city)">{{ item.city }}</li>
        </ul>
	
	</div>

</template>

<script>
import { setLocation, setRecord } from '@/server/city'
import router from "@/router"
export default {
  name: 'SearchList',
  components: {
   // HelloWorld
  },
  props : {
  	listCityRef : [],
  },
  
  methods : {
  	setCity(location, cityname){
  		setLocation(location);
  		setRecord(location, cityname);
  		router.push('/');
  	},
  },
}


</script>

<style>

</style>