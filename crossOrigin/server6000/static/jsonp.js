
function MyJsonP(url, params, callback) {
    params.callbackName = params.callbackName || 'jsonp'

    let query = '';

    if (params && Object.keys(params).length > 0) {
        Object.keys(params).forEach((key, index, arr) => {
            query += key + '=' + params[key]
            if (index !== arr.length - 1) {
                query += '&'
            }
        })
    }

    // 1. 定义callback函数
    window[params.callbackName] = function (data) {
        callback(data)
    }


    // 2. 创建script标签
    const ele = document.createElement('script')

    // 3. 添加src属性
    ele.setAttribute('src', url + '?' + query)

    // 4. 把script插入页面
    document.body.appendChild(ele)
}


// function myJasonp(url, params, callback) {
//     params.callbackName = params.callbackName || 'jsonp'
//     window[params.callbackName] = function (data) {
//         callback(data)
//     }
//     const ele = document.createElement('script')
//     ele.setAttribute('src', url)
//     document.body.appendChild(ele)
// }
