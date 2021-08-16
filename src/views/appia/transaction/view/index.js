// ** React Imports
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

// ** Store & Actions
import { getTransaction } from '../store/action'
import { useSelector, useDispatch } from 'react-redux'

// ** Reactstrap
import { Row, Col, Alert, Button } from 'reactstrap'

// ** User View Components
import UserInfoCard from './UserInfoCard'
import { isUserLoggedIn, apiRequest, swal } from '@utils'

// ** Styles
import '@styles/react/apps/app-users.scss'

const TransactionView = props => {
  // ** Vars
  const store = useSelector(state => state.appiaTransaction),
    dispatch = useDispatch(),
    { id } = useParams()

  const [userData, setUserData] = useState(null)
  const [detail, setDetail] = useState(null)

  // ** Get user on mount
  useEffect(() => {
    dispatch(getTransaction(store.allData, id))
  }, [dispatch])


  useEffect(() => {
    if (isUserLoggedIn() !== null) {
      setUserData(JSON.parse(localStorage.getItem('userData')))
    }
  }, [])


  return store.selectedTransaction !== null && store.selectedTransaction !== undefined ? (
    <div className='app-user-view'>
      <Row>
        <Col xl='9' lg='8' md='7'>
          <UserInfoCard selectedTransaction={store.selectedTransaction} detail={detail} />
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
export default TransactionView
