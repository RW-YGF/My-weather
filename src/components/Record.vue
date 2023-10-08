<template>

<div class="card">
	<div class="card-body">
		<div class="card-title">
            <h5>历史记录</h5>
        </div>
        <div class="row align-items-center justify-content-between text-center">
        	<div class="col-4">
        		<span class="d-block" @click="setCity(positionRt.location, positionRt.city)">
               	 	<img src="@/assets/images/icons/location.png" class="location" alt="">
               	 	{{positionRt.city}}
               	 </span>
        	</div>
        	
        	<div class="col-4" v-for="(item, index) in recordRef">
               	 <span @click="setCity(item.location, item.city)" class="d-block">
               	 	{{item.city}}
               	 </span>
            </div>
        </div>
        
	</div>
</div>

</template>

<script>
//import {onMounted, reactive, ref} from "vue"
import { setLocation, setRecord } from '@/server/city'
import router from "@/router"

export default {
  name: 'Record',
  components: {
   // HelloWorld
  },
  props : {
  	recordRef : [],
  	positionRt : {},
  },
  
  methods : {
  	setCity(location, cityname){
  		//console.log('opp2--'+location);
  		setLocation(location);
  		setRecord(location, cityname);
  		router.push('/');
  	},
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
div:after{
    content: '';
    width: 30%;
}
.location {
    max-width: 18px;
    position: relative;
    top: -1px;
}
</style>