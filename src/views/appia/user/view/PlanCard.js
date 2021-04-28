// ** Reactstrap
import { Card, CardHeader, CardBody, Badge, UncontrolledTooltip, Button } from 'reactstrap'

import { activateUser, deactivateUser } from '../store/action'
import {AddFunds, DeductFunds} from './AddFunds'
import { store } from '@store/storeConfig/store'


const PlanCard = ({ selectedUser, userData }) => {
  console.log({selectedUser})
  console.log({userData})
  return (
    <Card className='plan-card border-primary'>
      <CardHeader className='d-flex justify-content-between align-items-center pt-75 pb-1'>
        <h5 className='mb-0'>Current Plan</h5>
        <Badge id='plan-expiry-date' color='light-secondary'>
          July 22, {new Date().getFullYear()}
        </Badge>
        <UncontrolledTooltip placement='top' target='plan-expiry-date'>
          Expiry Date
        </UncontrolledTooltip>
      </CardHeader>
      <CardBody>
        {selectedUser.status === "Active" ? <Button.Ripple className='text-center mb-1' color= 'danger' outline  block onClick={() => { store.dispatch(deactivateUser(store.getState().appiaUsers.allData, selectedUser.user_id)) }}> Deactivate User</Button.Ripple> : <Button.Ripple 
         className='text-center mb-1' 
         color='success' 
         outline
         block
         onClick={() => { store.dispatch(activateUser(store.getState().appiaUsers.allData, selectedUser.user_id)) }}
       >
         Activate User
       </Button.Ripple>
        }
        <AddFunds userId={selectedUser.user_id} userData={userData} />
        <DeductFunds userId={selectedUser.user_id} userData={userData} />
      </CardBody>
    </Card>
  )
}

export default PlanCard
