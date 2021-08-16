// ** React Imports
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getUserClaimHistory} from '../store/action'
import moment from 'moment'

// ** Store & Actions
import { useSelector, useDispatch } from 'react-redux'
import { isUserLoggedIn } from '@utils'


// ** Reactstrap
import { Row, Col, Alert } from 'reactstrap'

// ** User View Components
import PlanCard from './PlanCard'
import ClaimedHistory from './Claimed'
import UserClaimedHistory from './UserClaimHistory'

// ** Styles
import '@styles/react/apps/app-users.scss'

const ClaimedView = props => {
  // ** Vars
  const store = useSelector(state => state.appiaClaimedRewards),
    dispatch = useDispatch(),
    { id } = useParams()

  const [userData, setUserData] = useState(null)

  useEffect(() => {
    if (isUserLoggedIn() !== null) {
      setUserData(JSON.parse(localStorage.getItem('userData')))
    }
  }, [])

  const reward_id = store.selectedClaim.reward_id

  useEffect(() => {
    dispatch(getUserClaimHistory(reward_id))
  }, [dispatch])


  return store.selectedClaim !== null && store.selectedClaim !== undefined ? (
    <div className='app-user-view'>
      <Row>
        <Col xl='9' lg='8' md='7'>
          <ClaimedHistory selectedClaim={store.selectedClaim} />
        </Col>
        <Col xl='3' lg='4' md='5'>
          <PlanCard selectedClaim={store.selectedClaim} />
        </Col> 
      </Row>
      <Row xl='9' lg='8' md='7'>
        <Col md='6'>
        <UserClaimedHistory claimHistory={store.claimHistory} />
        </Col>
      </Row>
    </div>
  ) : (
    <Alert color='danger'>
      <h4 className='alert-heading'>Users not found</h4>
      <div className='alert-body'>
        Users with id: {id} doesn't exist. Check list of all Users: <Link to='/app/user/list'>Users List</Link>
      </div>
    </Alert>
  )
}
export default ClaimedView
