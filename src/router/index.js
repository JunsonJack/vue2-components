import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/Index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      meta: {
        title: "首页",
      },
      children: [
        {
          path: 'form',
          name: 'form',
          component: () => import('../views/useForm.vue'),
          meta: {
            isShow: true,
            title: "表单练习",

          },
        },
        {
          path: 'echarts',
          name: 'echarts',
          component: () => import('../views/Echarts.vue'),
          meta: {
            isShow: true,
            title: "Echarts练习",
          },
        },
        {
          path: 'vue-qr',
          name: 'vue-qr',
          component: () => import('../views/Vueqr.vue'),
          meta: {
            isShow: true,
            title: "vueqr练习",
          },
        },
        {
          path: 'authBtn',
          name: 'authBtn',
          component: () => import('../views/AuthBtn.vue'),
          meta: {
            isShow: true,
            title: "authBtn练习",
            btnPermissions: ['people', 'admin']
          },
        },
        {

          path: 'webSocket',
          name: 'webSocket',
          component: () => import('../views/WebSocket.vue'),
          meta: {
            isShow: true,
            title: "webScoket练习",
          },

        },
        {

          path: 'vuePDF',
          name: 'vuePDF',
          component: () => import('../views/vuePDF.vue'),
          meta: {
            isShow: true,
            title: "vuePDF练习",
          },

        },
        {
          path: 'AutoWidthTable',
          name: 'AutoWidthTable',
          component: () => import('../views/AutoWidthTable.vue'),
          meta: {
            isShow: true,
            title: "AutoWidthTable练习",
          }
        },
        {
          path: 'MyTable',
          name: 'MyTable',
          component: () => import('../views/useMyTable.vue'),
          meta: {
            isShow: true,
            title: "MyTable练习",
          }
        },
        {
          path: 'MyMenu',
          name: 'MyMenu',
          component: () => import('../views/useMyMenu.vue'),
          meta: {
            isShow: true,
            title: "MyMenu练习",
          }
        }

      ]
    }
  ]
})
