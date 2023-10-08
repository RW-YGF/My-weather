<template>
	<div class="card">
    	<div class="card-header">
            <div class="card-title text-center">
                <span class="float-end text-secondary">{{weatherRt.time}}</span>
            </div>
        </div>
        
        <div class="card-body text-center">
        	<img :src="weatherRt.icon" alt="" class="img-fluid">
            <div class="fs-4 mb-4">{{weatherRt.temp}}° / {{weatherRt.text}}</div>
            <table class="table table-details table-striped">
            	<tbody>
            		<tr>
	                    <td>
	                        <img src="@/assets/images/icons/100.svg" alt="">
	                        <div class="text-secondary fs-6">{{weatherRt.windDir}} {{weatherRt.windScale}}级</div>
	                    </td>
	                    <td>
	                        <img src="@/assets/images/icons/100.svg" alt="">
	                        <div class="text-secondary fs-6">紫外线 中等</div>
	                    </td>
                    </tr>
                    
                    <tr>
	                    <td>
	                        <img src="@/assets/images/icons/100.svg" alt="">
	                        <div class="text-secondary fs-6">相对湿度{{weatherRt.humidity}}%</div>
	                    </td>
	                    <td>
	                        <img src="@/assets/images/icons/100.svg" alt="">
	                        <div class="text-secondary fs-6">大气压 {{weatherRt.pressure}}hPa</div>
	                    </td>
                	</tr>
	                <tr>
	                    <td>
	                        <img src="@/assets/images/icons/100.svg" alt="">
	                        <div class="text-secondary fs-6">降水量 {{weatherRt.precip}}mm</div>
	                    </td>
	                    <td>
	                        <img src="@/assets/images/icons/100.svg" alt="">
	                        <div class="text-secondary fs-6">能见度 {{weatherRt.vis}}KM</div>
	                    </td>
	                </tr>
                    
            	</tbody>
            
            </table>
    	</div>
  	</div>
</template>

<script>
export default {
  name: 'Weather',
  components: {
   // HelloWorld
  },
  props : {
  	weatherRt : Object,
  }
}

</script>

<style>

</style>