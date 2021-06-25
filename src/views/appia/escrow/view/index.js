// ** React Imports
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

// ** Store & Actions
import { getEscrow, getAllUserEscrowTransactions } from '../store/action'
import { useSelector, useDispatch } from 'react-redux'

// ** Reactstrap
import { Row, Col, Alert } from 'reactstrap'

// ** User View Components
import UserInfoCard from './UserInfoCard'
import TransactionList from './Transactions'
import { isUserLoggedIn, apiRequest, swal } from '@utils'

// ** Styles
import '@styles/react/apps/app-users.scss'
import PlanCard from '../../escrow/view/PlanCard'

const UserView = props => {
  // ** Vars
  const store = useSelector(state => state.appiaEscrow),
    dispatch = useDispatch(),
    { id } = useParams()

  const [userData, setUserData] = useState(null)
  const [detail, setDetail] = useState(null)


  // ** Get user on mount
  useEffect(() => {
    dispatch(getEscrow(store.allData, id))
    dispatch(getAllUserEscrowTransactions(id))
  }, [dispatch])


  useEffect(() => {
    if (isUserLoggedIn() !== null) {
      setUserData(JSON.parse(localStorage.getItem('userData')))
    }
  }, [])

  return store.selectedEscrow !== null && store.selectedEscrow !== undefined ? (
    <div className='app-user-view'>
      <Row>
        <Col xl='9' lg='8' md='7'>
          <UserInfoCard selectedEscrow={store.selectedEscrow} />
        </Col> 
        <Col xl='3' lg='4' md='5'>
          <PlanCard selectedEscrow={store.selectedEscrow} />
        </Col> 
      </Row>
      <Row>
        <Col sm='12'>
          <TransactionList selectedEscrow={store.selectedEscrow} />
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
