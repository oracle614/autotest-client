import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import ScriptRun from '@/components/ScriptRun'
import ScriptManager from '@/components/ScriptManager'
import EnvEdit from '@/components/EnvEdit'
import Report from '@/components/Report'
import Log from '@/components/Log'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/scriptrun',
      name: 'ScriptRun',
      component: ScriptRun
    },
    {
      path: '/scriptmanager',
      name: 'ScriptManager',
      component: ScriptManager
    },
    {
      path: '/envedit',
      name: 'EnvEdit',
      component: EnvEdit
    },
    {
      path: '/report',
      name: 'Report',
      component: Report
    },
    {
      path: '/log',
      name: 'Log',
      component: Log
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
