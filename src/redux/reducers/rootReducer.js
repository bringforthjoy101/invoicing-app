// ** Redux Imports
import { combineReducers } from 'redux'

// ** Reducers Imports
import auth from './auth'
import navbar from './navbar'
import layout from './layout'
import chat from '@src/views/apps/chat/store/reducer'
import todo from '@src/views/apps/todo/store/reducer'
import users from '@src/views/apps/user/store/reducer'
import appiaUsers from '@src/views/appia/user/store/reducer'
import appiaAdmins from '@src/views/appia/admin/store/reducer'
import appiaFunds from '@src/views/appia/funds/store/reducer'
import appiaContacts from '@src/views/appia/contacts/store/reducer'
import appiaFeedbacks from '@src/views/appia/feedbacks/store/reducer'
import appiaSubscribers from '@src/views/appia/subscribers/store/reducer'
import email from '@src/views/apps/email/store/reducer'
import invoice from '@src/views/apps/invoice/store/reducer'
import calendar from '@src/views/apps/calendar/store/reducer'
import ecommerce from '@src/views/apps/ecommerce/store/reducer'
import dataTables from '@src/views/tables/data-tables/store/reducer'

const rootReducer = combineReducers({
  auth,
  todo,
  chat,
  email,
  users,
  appiaUsers,
  appiaAdmins,
  appiaFunds,
  appiaContacts,
  appiaFeedbacks,
  appiaSubscribers,
  navbar,
  layout,
  invoice,
  calendar,
  ecommerce,
  dataTables
})

export default rootReducer
