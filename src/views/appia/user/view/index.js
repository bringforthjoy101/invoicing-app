// ** React Imports
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

// ** Store & Actions
import { getUser, getUserAllTransactions } from '../store/action'
import { useSelector, useDispatch } from 'react-redux'

// ** Reactstrap
import { Row, Col, Alert, Card, Nav, NavItem, NavLink } from 'reactstrap'

// ** User View Components
import PlanCard from './PlanCard'
import UserInfoCard from './UserInfoCard'
import AllTransactionList from './AllTransactions'
import UtilitiesTransactionList from './UtilityTransactions'
import BankTransactionList from './BankTransactions'
import EscrowTransactionList from './EscrowTransactions'
import { isUserLoggedIn, apiRequest, swal } from '@utils'

// ** Styles
import '@styles/react/apps/app-users.scss'

const UserView = props => {
  // ** Vars
  const store = useSelector(state => state.appiaUsers),
    dispatch = useDispatch(),
    { id } = useParams()

  const [userData, setUserData] = useState(null)
  const [detail, setDetail] = useState(null)

  const [activeTransaction, setActiveTransaction] = useState("all")

  // get users details
  const userDetails = async (id) => {
    const response = await apiRequest({ url: `/admin/users/details/${id}`, method: 'GET' }, dispatch)
    if (response && response.data.success) {
      await setDetail(response.data)
    } else {
      // console.log(response)
      swal('Oops!', 'Something went wrong.', 'error')
    }
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
        {userData?.role_name === "Control Admin" || userData?.role_name === "Super Admin" ? <Col xl='3' lg='4' md='5'>
          <PlanCard selectedUser={store.selectedUser} userData={userData} />
        </Col> : ""}
      </Row>
      <Card className="mb-3 d-flex justify-content-around">
        <Row className="d-sm-block d-lg-flex justify-content-center">
          <Nav pills className='nav-pill-primary my-2'>
            <NavItem>
              <NavLink onClick={() => setActiveTransaction('all')} active={activeTransaction === "all"}>User Transactions</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={() => setActiveTransaction('utilities')} active={activeTransaction === "utilities"}>Utilities</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={() => setActiveTransaction('bank')} active={activeTransaction === "bank"}>Banks</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={() => setActiveTransaction('escrow')} active={activeTransaction === "escrow"}>Escrow History</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={() => setActiveTransaction('reward')} active={activeTransaction === "reward"}>Reward History</NavLink>
            </NavItem>
          </Nav>
        </Row>
      </Card>
      <Row>
        {activeTransaction === "all" ? <Col sm='12'>
          <AllTransactionList />
        </Col> : activeTransaction === "utilities" ? <Col sm='12'>
          <UtilitiesTransactionList />
        </Col> : activeTransaction === "bank" ? <Col sm='12'>
          <BankTransactionList />
        </Col> : activeTransaction === "escrow" ? <Col sm='12'>
          <EscrowTransactionList />
        </Col> : ""}
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
