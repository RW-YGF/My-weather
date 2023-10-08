# weather

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

###项目简介
这是一个简易的天气显示和查询项目，首页可自动定位到所在城市（浏览器无法自动定位），无法自动定位的会默认定位北京。主页头部可显示当日天气信息，包含温度，天气状况，空气指数等。
中部展示了一个星期的天气预报列表。底部为详细的生活指数参考。
点击页面头部进入查询页面，可查询其他城市天气状态，包含历史记录和热门城市。
该项目基于vue3组合式API进行的开发，数据交互使用了Axios,数据来源于https://www.qweather.com提供的API。