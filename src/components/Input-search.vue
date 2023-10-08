<template>
   <div class="input-group flex-wrap position-relative">
   		<p>{{a}}</p>
    	<input type="text" class="form-control" placeholder="请输入要查询的城市/地区" v-model="keyWorld">
    	<img src="@/assets/images/icons/close.png" alt="" class="close position-absolute" 
    		v-show="isClose" @click="clear">
	</div>
	
	
</template>

<script>
import {ref, watchEffect} from 'vue'

export default {
  name: 'Input-search',
  emits : ['show', 'visible'],
  components: {
   // HelloWorld
  },
  
  setup(props, context){
  	const keyWorld = ref('');
  	const isClose = ref(false);
  	const clear = () => {
  		keyWorld.value = '';
  		isClose.value = false;
  	};
  	
  	// 监控
  	watchEffect(()=>{
  		if(keyWorld.value != ''){
  			isClose.value = true;
  			context.emit('show', keyWorld);
  		}else{
  			isClose.value = false;
  			context.emit('visible');
  		}
  		//console.log(keyWorld.value);
  	});
  	
  	return {
  		keyWorld, isClose, clear
  	}
  	
  },
}


</script>

<style>
.close {
    width: 18px;
    top: 10px;
    right: 10px;
    z-index: 9999;
}
</style>