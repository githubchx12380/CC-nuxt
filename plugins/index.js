import Vue from 'vue'
import Element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'

Vue.use(Element, { locale })
Vue.prototype.$bus = new Vue()


import vueSwiper from 'vue-awesome-swiper'
import '../node_modules/swiper/css/swiper.css'
Vue.use(vueSwiper)