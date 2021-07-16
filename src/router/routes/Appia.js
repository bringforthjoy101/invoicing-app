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
  },
  {
    path: '/appia/subscribers/list',
    component: lazy(() => import('../../views/appia/subscribers/list'))
  }, 
  {
    path: '/appia/dataPlans/list',
    component: lazy(() => import('../../views/appia/dataPlans/list'))
  },
  {
    path: '/appia/dataPlans/view',
    exact: true,
    component: () => <Redirect to='/appia/dataPlans/view/1' />
  },
  {
    path: '/appia/dataPlans/view/:id',
    component: lazy(() => import('../../views/appia/dataPlans/view')),
    meta: {
      navLink: '/appia/dataPlans/view'
    }
  },
  {
    path: '/appia/dataPlans/edit',
    exact: true,
    component: () => <Redirect to='/appia/dataPlans/edit/1' />
  },
  {
    path: '/appia/dataPlans/edit/:id',
    component: lazy(() => import('../../views/appia/dataPlans/edit')),
    meta: {
      navLink: '/appia/dataPlans/edit'
    }
  },
  {
    path: '/appia/allRewardItems/view',
    exact: true,
    component: () => <Redirect to='/appia/allRewardItems/view/1' />
  },
  {
    path: '/appia/allRewardItems/view/:id',
    component: lazy(() => import('../../views/appia/allRewardItems/view')),
    meta: {
      navLink: '/appia/allRewardItems/view'
    }
  },
  {
    path: '/appia/allRewardItems/list',
    component: lazy(() => import('../../views/appia/allRewardItems/list'))
  },
  {
    path: '/appia/allRewardItems/edit',
    exact: true,
    component: () => <Redirect to='/appia/allRewardItems/edit/1' />
  },
  {
    path: '/appia/allRewardItems/edit/:id',
    component: lazy(() => import('../../views/appia/allRewardItems/edit')),
    meta: {
      navLink: '/appia/allRewardItems/edit'
    }
  },
  {
    path: '/appia/claimedRewards/view',
    exact: true,
    component: () => <Redirect to='/appia/claimedRewards/view/1' />
  },
  {
    path: '/appia/claimedRewards/view/:id',
    component: lazy(() => import('../../views/appia/claimedRewards/view')),
    meta: {
      navLink: '/appia/claimedRewards/view'
    }
  },
  {
    path: '/appia/claimedRewards/list',
    component: lazy(() => import('../../views/appia/claimedRewards/list'))
  },
  {
    path: '/appia/claimedRewards/edit',
    exact: true,
    component: () => <Redirect to='/appia/claimedRewards/edit/1' />
  },
  {
    path: '/appia/claimedRewards/edit/:id',
    component: lazy(() => import('../../views/appia/claimedRewards/edit')),
    meta: {
      navLink: '/appia/claimedRewards/edit'
    }
  },
  {
    path: '/appia/settings/list',
    component: lazy(() => import('../../views/appia/settings/list'))
  },
  {
    path: '/appia/escrow/list',
    component: lazy(() => import('../../views/appia/escrow/list'))
  },
  {
    path: '/appia/escrow/edit',
    exact: true,
    component: () => <Redirect to='/appia/escrow/edit/1' />
  },
  {
    path: '/appia/escrow/edit/:id',
    component: lazy(() => import('../../views/appia/escrow/edit')),
    meta: {
      navLink: '/appia/escrow/edit'
    }
  },
  {
    path: '/appia/escrow/view',
    exact: true,
    component: () => <Redirect to='/appia/escrow/view/1' />
  },
  {
    path: '/appia/escrow/view/:id',
    component: lazy(() => import('../../views/appia/escrow/view')),
    meta: {
      navLink: '/appia/escrow/view'
    }
  },
  {
    path: '/appia/transfers/list',
    component: lazy(() => import('../../views/appia/transfers/list'))
  },
  {
    path: '/appia/transfers/view',
    exact: true,
    component: () => <Redirect to='/appia/transfers/view/1' />
  },
  {
    path: '/appia/transfers/view/:id',
    component: lazy(() => import('../../views/appia/transfers/view')),
    meta: {
      navLink: '/appia/transfers/view'
    }
  }
]

export default AppiaRoutes
