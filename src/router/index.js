import {
  createRouter,
  createWebHistory
} from 'vue-router'

const Page = () => import("views/page/Page.vue")
const Home = () => import("views/home/Home.vue");
const Strategy = () => import("views/strategy/Strategy.vue");
const Fitment = () => import("views/fitment/Fitment.vue");
const Profile = () => import("views/profile/Profile.vue");
const Detail = () => import("views/detail/Detail.vue")
const SearchView = () => import("views/search/SearchView.vue")
const Feedback = () => import("../views/feedback/Feedback.vue")

const routes = [
  {
    path: '',
    redirect: '/page'
  },
  {
    path: '/page',
    name: 'page',
    component: Page,
    children: [
      {
        path: '',
        redirect: '/page/home'
      },
      {
        path: 'home',
        name: 'home',
        meta: {
          title: '首页',
        },
        component: Home
      },
      {
        path: 'strategy',
        name: 'strategy',
        meta: {
          title: '攻略',
        },
        component: Strategy
      },
      {
        path: 'fitment',
        name: 'fitment',
        meta: {
          title: '装修',
        },
        component: Fitment
      },
      {
        path: 'profile',
        name: 'profile',
        meta: {
          title: '我的',
        },
        component: Profile
      },
    ]
  },
  {
    path: '/detail/:path/:type',
    name: 'detail',
    meta: {
      title: '详情',
    },
    component: Detail
  },
  {
    path: '/searchview/:url',
    name: 'searchview',
    meta: {
      title: '搜索',
    },
    component: SearchView
  },
  {
    path: '/feedback',
    name: 'feedback',
    meta: {
      title: '我要反馈',
    },
    component: Feedback
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// 路由改变之前时
router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title || to.matched[1].meta.title;
  next();
})

export default router