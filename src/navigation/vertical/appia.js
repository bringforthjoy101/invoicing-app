import { Users, ThumbsUp, Mail, User, List } from 'react-feather'

export default [
  {
    header: 'Users & Admins'
  },
  {
    id: 'appiaUsers',
    title: 'Users',
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
    title: 'Admins',
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
    id: 'subscribers',
    title: 'Subscribers',
    icon: <Users size={20} />,
    navLink: '/appia/subscribers/list'
  },
  {
    id: 'feedback',
    title: 'Feedbacks',
    icon: <ThumbsUp size={20} />,
    navLink: '/appia/feedbacks/list'
  },
  {
    id: 'contact',
    title: 'Contact us',
    icon: <Mail size={20} />,
    navLink: '/appia/contact/list'
  }
]
