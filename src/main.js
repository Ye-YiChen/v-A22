import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
  Button,
  Checkbox,
  Toast,
  Swipe,
  SwipeItem,
  Lazyload,
  NoticeBar,
  Tab,
  Tabs,
  Empty,
  Step,
  Steps,
  Collapse,
  CollapseItem,
  Cell,
  CellGroup,
  Popup,
  CountDown,
  Image as VanImage,
  Search,
  Icon,
  Card,
  Tag,
  Sticky,
  PasswordInput, 
  NumberKeyboard
} from 'vant'
import '@/assets/fonts/iconfont.css'
import 'amfe-flexible'
import axios from 'axios'
import Minxin from '../goRoute'

Vue.mixin(Minxin)
Vue.prototype.axios = axios;
// 关闭生产提示
Vue.config.productionTip = false;
// vant 组件引入 
Vue.use(Checkbox);
Vue.use(Button);
Vue.use(Toast);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);
Vue.use(NoticeBar);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Empty);
Vue.use(Step);
Vue.use(Steps);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Popup);
Vue.use(CountDown);
Vue.use(VanImage);
Vue.use(Search);
Vue.use(Icon); 
Vue.use(Card);
Vue.use(Tag);
Vue.use(Sticky);
Vue.use(PasswordInput);
Vue.use(NumberKeyboard);
// axios基本设置
// axios.defaults.baseURL = 'http://47.113.180.139:8080'
axios.defaults.baseURL = 'http://127.0.0.1:8080/'

axios.defaults.withCredentials = false
// axios.defaults.headers.post['Contetn-Type'] = 'application/x-www-form-urlencoded'
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
