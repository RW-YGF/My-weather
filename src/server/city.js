import { request, key} from "@/server/request"
/*
export async function getCity2(){
	const location = await getPosition();
	console.log(location);
	const service = axios.create({
		baseURL : 'https://geoapi.qweather.com/v2/city',
		timeout : 1000,
	});
	
	service.get(`/lookup?location=${location}&key=706de027d10149c2a995665124868b63`)
		  .then(res=>{
		  	console.log(res);
		  });
}
*/

const cityUrl = 'https://geoapi.qweather.com/v2/city';

export async function getCity(type=0){
	//const location = await getPosition();
	//const location = await getLocation();
	const location =  type == 1 ? await getPosition() : await getLocation();
	//const location = type == 1 ? await getPosition() : await getLocation()
	return request({
		url : `/lookup?location=${location}&key=${key}`,
		method : 'get',
	}, cityUrl);
}

export function getVaguaCity(city)
{
	return request({
		url : `/lookup?location=${city}&key=${key}`,
		method : 'get',
	}, cityUrl);
}

export async function getTopCity()
{
	return request({
		url : `/top?number=9&range=cn&key=${key}`,
		method : 'get',
	}, cityUrl);
	
}

export async function getLocation(){
	if(sessionStorage.getItem('location')){
		return sessionStorage.getItem('location');
	}else{
		let location = await getPosition();
		setLocation(location);
		return location;
	}
}

export function setLocation(location){
	sessionStorage.setItem('location', location);
}

export function getRecord(){
	//// 判断是否存在
	if(sessionStorage.getItem('cities')){
		//console.log(typeof sessionStorage.getItem('cities'));	//string
		//console.log(typeof JSON.parse(sessionStorage.getItem('cities'))); //object
		return JSON.parse(sessionStorage.getItem('cities'));
	}else{
		return [];
	}
}
export function setRecord(location, cityname){
	// 永久本地存储
	if(sessionStorage.getItem('cities')){
		//console.log('have store--'+typeof sessionStorage.getItem('cities'));	//string
		// 得到经纬度和城市
		const cl = cityname+'-'+location;
		// 获取存储里的历史
		const  arr = JSON.parse(sessionStorage.getItem('cities'));
		//console.log(typeof arr+'--'+arr);	//obj
		//console.log(arr.indexOf(cl));
		// 判断数组中是否存在重复元素
		if(arr.indexOf(cl) !== -1){
			//console.log('hace two');
			arr.splice(arr.indexOf(cl), 1);
		}else if(arr.length>=5){
			// 删掉最后的元素
			arr.splice(4,1);
		}
		
		// 给数组添加新的历史
		arr.unshift(cl);
		sessionStorage.setItem('cities', JSON.stringify(arr));
	}else{
		// 当没有存储时
		console.log('no store--');
		const arr = [cityname+'-'+location];
		//console.log(JSON.stringify(arr));
		sessionStorage.setItem('cities', JSON.stringify(arr));
	}
}

function getPosition(){
	return new Promise(function(resolve){
	  	if("geolocation" in navigator){
	  		//定位服务可用;
	  		navigator.geolocation.getCurrentPosition(function(position){
	  			console.log("定位服务可用1");
	  			console.log(position.coords.longitude+',' + position.coords.latitude);
	  			resolve(position.coords.longitude+',' + position.coords.latitude);
	  		}, function(){
	  			console.log("定位服务到北京");
	  			resolve("116.41,39.92");
	  		}, {
	  			timeout : 20
	  		});
	  	}else{
	  		console.log('定位服务不可用，默认到北京');
	  		resolve("116.41.39.92");
	  	}
	  	
  	});
}
