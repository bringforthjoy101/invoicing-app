// ** Reactstrap
import { Card, CardHeader, CardBody, Badge, UncontrolledTooltip, Button } from 'reactstrap'

import {AddFunds, DeductFunds} from './AddFunds'

const PlanCard = ({ selectedUser }) => {
  console.log({selectedUser})
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
        <Badge className='text-capitalize' color='light-primary'>
          {selectedUser !== null ? selectedUser.currentPlan : 'Basic'}
        </Badge>
        <Button.Ripple className='text-center mb-1' color='success' outline block>
          Activate User
        </Button.Ripple>
        <AddFunds userId={selectedUser.user_details.user_id} />
        <DeductFunds userId={selectedUser.user_details.user_id} />
      </CardBody>
    </Card>
  )
}

export default PlanCard
