import NowPlaying from '@/views/films/NowPlaying'
import ComingSoon from '@/views/films/ComingSoon'
import index from '@/views/films/'
import FilmId from '@/views/films/FilmId'

var bar = [
    {
        path: '/films',
        component: index,
        children:[
          {path:'nowPlaying' , component:NowPlaying},
          {path:'comingSoon', component:ComingSoon}
        ]
      },
      {
        path:'/film/:filmId',
        component:FilmId
      }
]

export default bar