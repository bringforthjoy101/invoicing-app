// ** React Imports
import { useParams, Link } from 'react-router-dom'
import moment from 'moment'


// ** Store & Actions
import { useSelector } from 'react-redux'

// ** Reactstrap
import { Row, Col, Alert } from 'reactstrap'

// ** User View Components
import PlanCard from './PlanCard'
import SettingInfoCard from './SettingInfoCard'
// import InvoiceList from '../../invoice/list'

// ** Styles
import '@styles/react/apps/app-users.scss'

const FeedbackView = props => {
  // ** Vars
  const store = useSelector(state => state.appiaSettings),
    { id } = useParams()


  return store.selectedSetting !== null && store.selectedSetting !== undefined ? (
    <div className='app-user-view'>
      <Row>
        <Col xl='9' lg='8' md='7'>
          <SettingInfoCard selectedSetting={store.selectedSetting} />
        </Col>
        <Col xl='3' lg='4' md='5'>
          <PlanCard selectedSetting={store.selectedSetting} />
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
export default FeedbackView
