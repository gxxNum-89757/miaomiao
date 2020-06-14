export default {
  path: '/movie',
  component: () => import('@/views/Movie'),
  children: [
    {
      path: '/movie',
      redirect:'/movie/NowPlaying'
    },
    {
      path: 'city',
      component: () => import('@/components/City')
    },
    {
      path: 'comingsoon',
      component: () => import('@/components/ComingSoon')
    },
    {
      path: 'nowplaying',
      component: () => import('@/components/NowPlaying')
    },
    {
      path: 'search',
      component: () => import('@/components/Search')
    },
  ]
}
