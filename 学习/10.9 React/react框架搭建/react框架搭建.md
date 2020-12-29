# React框架搭建

### 1. 创建新项目
```js
    npx create-react-app my-app // (my-app项目名)
```

### 2. 根目录下创建.eslintrc.json
```js
    npm i eslint-plugin-react-app --save
```

### 3. 根目录下创建.stylelintrc.json

#### (1) 根目录package.json里添加
```js
    "stylelint": "^13.0.0",
    "stylelint-config-recess-order": "^2.0.3",
    "stylelint-config-standard": "^19.0.0",
    "stylelint-order": "^4.0.0",
    "stylelint-scss": "^3.13.0"

    // 然后 npm i 安装
```

### 4. 安装router
```js
    npm i react-router-dom --save 
```

### 5. 安装rudex
```
    npm i redux react-redux --save
```

### 6. src下创建文件夹
```js
    (1) Component  // 公用组件 引用到根目录index.js
    (2) Feature    // 页面
    (3) Common    // 公共函数
    (4) Assets    // 附件
    (5) Redux     // redux 全局状态管理
    (6) Router     // 路由
```

### 7. 进入src/Redux文件夹里创建文件夹
```js
    (1) Action
    (2) Reducer
    (3) Store
```

#### 7.(1) 进入Store创建 Store.js
```js
     Store.js // 创建 
     npm i redux-thunk --save
```

#### 7.(2) 首先进入Reducer创建 index.js & login.js & loading.js (login自己写的 演示而用)
```js
    /* 里面type明使用ActioneType里的定义名 */
    index.js & login.js & loading.js
```

#### 7.(3) 然后进入Redux 创建 ActionType.js 定义Reducer文件夹里的文件(login.js)方法名
```js
    /*  创建好后 安装 */
    npm i  redux-devtools-extension --save
```

#### 7.(4) 进入src/index.js
```js
    import { configStore } from './Redux/Store/Store'
    import { Provider } from 'react-redux'
    const store = configStore()

    <Provider store={ store }>
        <App />
    </Provider>
```

### 8. 进入src/Common新建PrivateRoute.js 

### 9. 进入src/Router新建index.js
```js
    // (1). 进入App.js
    import { BrowserRouter as Router ,Switch } from 'react-router-dom'
    import { routerConfig } from './Router/index'

    // (2). 安装lodash
    npm i lodash --save
    import _ from 'lodash'

    // (3). function renderRouter写在function App 里面 
    // 然后 import PrivateRouter from './Common/PrivateRoute'
    function renderRouter(){
        return _map(routerConfig,(item)=>{
            return (
                <PrivateRouter {...item}/>
            )
        })
    } 

    // 写在<div>里
    <Router>
        <div className='App'>
            <Switch>
                { renderRouter() }
            </Switch>
        </div>
    </Router>
    
```

## 10. 进入src/Common新建request.js (封装请求)
```js
    npm i axios --save
    npm i path-to-regexp --save
```

## 11. 进入src新建文件夹Request
```js
    import request from '../Common/request';
    // 将页面请求抽到这个文件夹中
    export async function loadShopList (){

    const result = await request({
        url:     'http://49.235.98.65:3000/shop/shopList',
        method:  'get'
     });

    return result;
}
```