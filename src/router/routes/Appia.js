import { lazy } from 'react'
import { Redirect } from 'react-router-dom'

const AppiaRoutes = [
  {
    path: '/appia/admin/list',
    component: lazy(() => import('../../views/appia/admin/list'))
  },
  {
    path: '/appia/admin/edit',
    exact: true,
    component: () => <Redirect to='/appia/admin/edit/1' />
  },
  {
    path: '/appia/admin/edit/:id',
    component: lazy(() => import('../../views/appia/admin/edit')),
    meta: {
      navLink: '/appia/admin/edit'
    }
  },
  {
    path: '/appia/admin/view',
    exact: true,
    component: () => <Redirect to='/appia/admin/view/1' />
  },
  {
    path: '/appia/admin/view/:id',
    component: lazy(() => import('../../views/appia/admin/view')),
    meta: {
      navLink: '/appia/admin/view'
    }
  },
  {
    path: '/appia/user/list',
    component: lazy(() => import('../../views/appia/user/list'))
  },
  {
    path: '/appia/user/edit',
    exact: true,
    component: () => <Redirect to='/appia/user/edit/1' />
  },
  {
    path: '/appia/user/edit/:id',
    component: lazy(() => import('../../views/appia/user/edit')),
    meta: {
      navLink: '/appia/user/edit'
    }
  },
  {
    path: '/appia/user/view',
    exact: true,
    component: () => <Redirect to='/appia/user/view/1' />
  },
  {
    path: '/appia/user/view/:id',
    component: lazy(() => import('../../views/appia/user/view')),
    meta: {
      navLink: '/appia/user/view'
    }
  },
  {
    path: '/appia/funds',
    component: lazy(() => import('../../views/appia/funds/list'))
  }
]

export default AppiaRoutes
