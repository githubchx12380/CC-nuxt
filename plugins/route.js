
export default ({ app }) => {
    app.router.afterEach((to, from) => {
        if(to.fullPath == '/category/3'){
            app.router.push('/category/3?page=0&pagesize=16')
        }
    })
    // app.router.beforeEach((to,from,next) => {
    //     console.log(to.matched.length)
    //     if(!to.matched.length){
    //         app.router.push('/')
    //     }
    //     next()
    // })
  }

 