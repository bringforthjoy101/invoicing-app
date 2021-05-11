import { lazy } from 'react'
import { Redirect } from 'react-router-dom'

const AppiaRoutes = [
  {
    path: '/appia/admin/list',
    component: lazy(() => import('../../views/appia/admin/list'))
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
  },
  {
    path: '/appia/contact/list',
    component: lazy(() => import('../../views/appia/contacts/list'))
  },
  {
    path: '/appia/contacts/view',
    exact: true,
    component: () => <Redirect to='/appia/contacts/view/1' />
  },
  {
    path: '/appia/contacts/view/:id',
    component: lazy(() => import('../../views/appia/contacts/view')),
    meta: {
      navLink: '/appia/contacts/view'
    }
  },
  {
    path: '/appia/feedbacks/list',
    component: lazy(() => import('../../views/appia/feedbacks/list'))
  },
  {
    path: '/appia/feedbacks/view',
    exact: true,
    component: () => <Redirect to='/appia/feedbacks/view/1' />
  },
  {
    path: '/appia/feedbacks/view/:id',
    component: lazy(() => import('../../views/appia/feedbacks/view')),
    meta: {
      navLink: '/appia/feedbacks/view'
    }
  }
]

export default AppiaRoutes
