<template>

<div class="card">
	<div class="card-body">
		<div class="card-title">
            <h5>热门城市</h5>
        </div>
        <div class="row align-items-center justify-content-between text-center">
        	<div class="col-4" v-for="(item, index) in topCityRef">
               	 <span @click="setCity(item.location, item.name)" class="d-block">{{item.name}}</span>
            </div>
        </div>
        
	</div>
</div>

</template>

<script>
import {onMounted, reactive, ref} from "vue"
import { setLocation,  setRecord, getRecord } from '@/server/city'
import router from "@/router"

export default {
  name: 'TopCity',
  components: {
   // HelloWorld
  },
  props : {
  	topCityRef : []
  },
  
  methods : {
  	setCity(location, cityname){
  		//console.log('opp--'+location);
  		setLocation(location);
  		setRecord(location, cityname);
  		router.push('/');
  	},
  },
  
  
  
  //另一种写法
  setup(){
   /*
  	function setCity(location){
  		setLocation(location);
  		setRecord(location, cityname);
  		router.push('/');
  	};
  	*/
  },
  
  
  
}


</script>

<style>
.card {
    background-color: #EFF1F7;
    margin: 10px 0;
}
.row div {
    background-color: #CDD5E7;
    max-width: 30%;
    margin: 5px 0;
    padding: 5px 0;
    color: #333;
    border-radius: 10px;
}
</style>