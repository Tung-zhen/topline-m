import Vue from 'vue'

// 加载
import {
  Button,
  Cell,
  CellGroup,
  NavBar,
  Field,
  Toast } from 'vant'
// 注册
Vue.use(Button)
  .use(Cell)
  .use(CellGroup)
  .use(NavBar) // 导航栏
  .use(Field) // 输入框
  .use(Toast) // 轻提示
