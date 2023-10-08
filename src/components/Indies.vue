<template>
<div class="d-flex flex-wrap">
	<div v-for="(item, index) in indiesRef" class="card col-6 text-center">
		<img :src="item.icon" alt="" class="card-img img-fluid m-auto mt-2"/>
		<div class="card-body">
			<h5 class="card-title">{{item.category}}</h5>
            <h5 class="text-secondary">{{item.name}}</h5>
		</div>
	</div>
	<!--
	<div class="card col-6 text-center">
		<img src="@/assets/images/icons/1.png" alt="" class="card-img img-fluid m-auto mt-2"/>
		<div class="card-body">
			<h5 class="card-title">标题22</h5>
            <h5 class="text-secondary">名称22</h5>
		</div>
	</div>
	-->
</div>
</template>

<script>
export default {
  name: 'Indies',
  components: {
   // HelloWorld
  },
  props : {
  	indiesRef : [],
  },
  
}


</script>

<style>
.card {
    border:5px solid white;
    background-color: #EFF1F7;
}
.card-img {
    max-width: 70px;
}
</style>