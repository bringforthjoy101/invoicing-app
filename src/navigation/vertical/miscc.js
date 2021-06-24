import { Users, ThumbsUp, Mail, Send, List, Settings } from 'react-feather'

export default [
    {
        header: 'Others'
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
  }, 
  {
    id: 'settings',
    title: 'Settings',
    icon: <Settings size={20} />,
    navLink: '/appia/settings/list'
  },
  {
    id: 'escrow',
    title: 'Escrow',
    icon: <Send size={20} />,
    navLink: '/appia/escrow/list'
  }
]
