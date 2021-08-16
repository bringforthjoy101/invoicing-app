// ** React Imports
import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import moment from 'moment'

// ** Store & Actions
import { useSelector, useDispatch } from 'react-redux'

// ** Reactstrap
import { Row, Col, Alert } from 'reactstrap'

// ** User View Components
import PlanCard from './PlanCard'
import TransferInfo from './TransferInfoCard'
// import InvoiceList from '../../invoice/list'

// ** Styles
import '@styles/react/apps/app-users.scss'

const TransferView = props => {
  // ** Vars
  const store = useSelector(state => state.appiaTransfers),
    { id } = useParams()

  return store.selectedTransfer !== null && store.selectedTransfer !== undefined ? (
    <div className='app-user-view'>
      <Row>
        <Col xl='12' lg='12' md='12'>
          <TransferInfo selectedTransfer={store.selectedTransfer} />
        </Col>
      </Row>
      {store.selectedTransfer.status === 'Pending' ?  <Row>
        <Col xl='3' lg='4' md='5'>
          <PlanCard selectedTransfer={store.selectedTransfer} />
        </Col>
      </Row> : ""}
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
export default TransferView
