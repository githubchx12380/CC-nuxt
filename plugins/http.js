import http from './config'
const categoryData = () => {
    return http.get('move/chrome_category')
}

const viewData = (str) => {
    return http.get('/chrome/views' + str)
}

const inputLike = (str) => {
    return http.post('/inputLike',str)  //搜索数据    
}

const detailDatas = (id) => {
    return http.get('/detail/' + id)  //详情页
}

const newsIndex = () => {
    return http.get('/newindex')
}

export {
    categoryData,
    viewData,
    inputLike,
    detailDatas,
    newsIndex
}