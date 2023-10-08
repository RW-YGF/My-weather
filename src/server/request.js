import axios from "axios"

export const key = 'your key';	//key是一串包含数字字母的字符串
//export function request2(config, url){
export function request(config, url){
	const service = axios.create({
		baseURL : url,
		timeout : 1000,
	});
	
 //请求拦截
 service.interceptors.request.use(config =>{
 	// 在这里可以拦截判断登录、loading等操作
    // return config表示通过了
    // 本实例暂时用不着，先封着
    return config;
 }, error =>{
 	console.log(error);
 });

//响应拦截
 service.interceptors.response.use(res =>{
 	// 这里是服务器返回数据给我们
    // 在这之前处理一些内容，比如判断状态码200之类的
    //console.log('response'+res);
    return res.data ? res.data : res;
 }, error =>{
 	console.log(error);
 });

return service(config);

};