// ** React Imports
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

// ** Store & Actions
import { getUser, getUserAllTransactions, userDetails } from '../store/action'
import { useSelector, useDispatch } from 'react-redux'

// ** Reactstrap
import { Row, Col, Alert } from 'reactstrap'

// ** User View Components
import PlanCard from './PlanCard'
import UserInfoCard from './UserInfoCard'
import UserTimeline from './UserTimeline'
import TransactionList from './Transactions'
import { isUserLoggedIn, apiRequest, swal } from '@utils'
import PermissionsTable from './PermissionsTable'

// ** Styles
import '@styles/react/apps/app-users.scss'

const UserView = props => {
  // ** Vars
  const store = useSelector(state => state.appiaUsers),
    dispatch = useDispatch(),
    { id } = useParams()

  const [userData, setUserData] = useState(null)
  const [detail, setDetail] = useState(null)

  // get users details
const userDetails = async(id) => {
  console.log("uddddf", id)
  // return async dispatch => {
   const response = await apiRequest({url:`/admin/users/details/${id}`, method:'GET'}, dispatch)
    console.log("detll", response.data)
    if (response && response.data.success) {
        await setDetail(response.data)
    } else {
      // console.log(response)
      swal('Oops!', 'Something went wrong.', 'error')
    }
  // }
}

  // ** Get user on mount
  useEffect(() => {
    dispatch(getUser(store.allData, id))
    dispatch(getUserAllTransactions(id))
    userDetails(id)
  }, [dispatch])


  useEffect(() => {
    if (isUserLoggedIn() !== null) {
      setUserData(JSON.parse(localStorage.getItem('userData')))
    }
  }, [])


  return store.selectedUser !== null && store.selectedUser !== undefined ? (
    <div className='app-user-view'>
      <Row>
        <Col xl='9' lg='8' md='7'>
          <UserInfoCard selectedUser={store.selectedUser} detail={detail} />
        </Col>
        <Col xl='3' lg='4' md='5'>
          <PlanCard selectedUser={store.selectedUser} userData={userData} />
        </Col>
      </Row>
      <Row>
        <Col sm='12'>
          <TransactionList />
        </Col>
      </Row>
    </div>
  ) : (
    <Alert color='danger'>
      <h4 className='alert-heading'>Users not found</h4>
      <div className='alert-body'>
        Users with id: {id} doesn't exist. Check list of all Users: <Link to='/appia/user/list'>Users List</Link>
      </div>
    </Alert>
  )
}
export default UserView
