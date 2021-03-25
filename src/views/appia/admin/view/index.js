// ** React Imports
import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import moment from 'moment'

// ** Store & Actions
import { getAdmin, getAdminActivity } from '../store/action'
import { useSelector, useDispatch } from 'react-redux'

// ** Reactstrap
import { Row, Col, Alert } from 'reactstrap'

// ** User View Components
import PlanCard from './PlanCard'
import UserInfoCard from './UserInfoCard'
import UserTimeline from './UserTimeline'
// import InvoiceList from '../../invoice/list'
import PermissionsTable from './PermissionsTable'

// ** Styles
import '@styles/react/apps/app-users.scss'

const UserView = props => {
  // ** Vars
  const store = useSelector(state => state.appiaAdmins),
    dispatch = useDispatch(),
    { id } = useParams()

  // ** Get suer on mount
  useEffect(() => {
    dispatch(getAdmin(store.allData, id))
    dispatch(getAdminActivity())
  }, [dispatch])

  return store.selectedAdmin !== null && store.selectedAdmin !== undefined ? (
    <div className='app-user-view'>
      <Row>
        <Col xl='9' lg='8' md='7'>
          <UserInfoCard selectedAdmin={store.selectedAdmin} />
        </Col>
        <Col xl='3' lg='4' md='5'>
          <PlanCard selectedAdmin={store.selectedAdmin} />
        </Col>
      </Row>
      <Row>
        <Col md='6'>
          <UserTimeline data={store.adminActivities.sort((a, b) => moment(b.date).format('YYYYMMDD') - moment(a.date).format('YYYYMMDD'))} />
        </Col>
        <Col md='6'>
          <PermissionsTable />
        </Col>
      </Row>
      {/* <Row>
        <Col sm='12'>
          <InvoiceList />
        </Col>
      </Row> */}
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
export default UserView
