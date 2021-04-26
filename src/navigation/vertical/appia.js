import { Circle, Layers, Mail, User, List } from 'react-feather'

export default [
  {
    header: 'Users & Admins'
  },
  {
    id: 'appiaUsers',
    title: 'User',
    icon: <User size={20} />,
    navLink: '/appia/user/list'
    // children: [
    //   {
    //     id: 'list',
    //     title: 'List',
    //     icon: <Circle size={12} />,
    //     navLink: '/appia/user/list'
    //   },
    //   {
    //     id: 'edit',
    //     title: 'Edit',
    //     icon: <Circle size={12} />,
    //     navLink: '/appia/user/edit'
    //   }
    // ]
  },
  {
    id: 'admins',
    title: 'Admin',
    icon: <User size={20} />,
    navLink: '/appia/admin/list'
  },
  {
    id: 'funds',
    title: 'Funds',
    icon: <List size={20} />,
    navLink: '/appia/funds/'
  },
  {
    id: 'features',
    title: 'Features',
    icon: <Layers size={20} />,
    navLink: '/appia/features/'
  },
  {
    id: 'contact',
    title: 'Contact',
    icon: <Mail size={20} />,
    navLink: '/appia/contact/'
  }
]
