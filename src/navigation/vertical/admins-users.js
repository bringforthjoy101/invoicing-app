import { Users, ThumbsUp, Mail, User, List } from 'react-feather'

export default [
  {
    id: 'usersAdmins',
    title: 'Users & Admins',
    icon: <Users size={20} />,
    badge: 'light-warning',
    badgeText: '2',
    children: [
      {
    id: 'users',
    title: 'Users',
    icon: <User size={20} />,
    navLink: '/appia/user/list'
      },
  {
    id: 'admins',
    title: 'Admins',
    icon: <User size={20} />,
    navLink: '/appia/admin/list'
  }
]
}
]
