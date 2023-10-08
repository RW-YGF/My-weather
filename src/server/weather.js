import { request, key} from "@/server/request"

const weatherUrl = 'https://devapi.qweather.com/v7'

export async function getGeneral(location){
	
	return request({
		url : `/weather/now?location=${location}&key=${key}`,
		method : 'get',
	}, weatherUrl);
}

export async function getAir(location){
	return request({
		url : `/air/now?location=${location}&key=${key}`,
		method : 'get',
	}, weatherUrl);
}

export async function getWeek(location){
	return request({
		url : `/weather/7d?location=${location}&key=${key}`,
		method : 'get',
	}, weatherUrl);
}

export async function getIndies(location){
	return request({
		url : `/indices/1d?type=1,3,5,9&location=${location}&key=${key}`,
		method : 'get',
	}, weatherUrl);
}

export async function getTopCity(){
	return request({
		url : `/indices/1d?type=1,3,5,9&location=${location}&key=${key}`,
		method : 'get',
	}, weatherUrl);
}





