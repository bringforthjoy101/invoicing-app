// ** Reactstrap
import { Card, CardHeader, CardBody, Badge, UncontrolledTooltip, Button } from 'reactstrap'

import { activateAdmin, deactivateAdmin } from '../store/action'
import { store } from '@store/storeConfig/store'

const PlanCard = ({ selectedAdmin }) => {
  return (
    <Card className='plan-card border-primary'>
      <CardHeader className='d-flex justify-content-between align-items-center pt-75 pb-1'>
        <h5 className='mb-0'>Actions</h5>
      </CardHeader>
      <CardBody>
        <Badge className='text-capitalize' color='light-primary'>
          {selectedAdmin !== null ? selectedAdmin.currentPlan : 'Basic'}
        </Badge>
        {selectedAdmin.status === "Active" ? <Button.Ripple className='text-center' color= 'danger'  block onClick={() => { store.dispatch(deactivateAdmin(store.getState().appiaAdmins.allData, selectedAdmin.id)) }}> Deactivate Admin</Button.Ripple> : <Button.Ripple 
         className='text-center' 
         color='success'
         block
         onClick={() => { store.dispatch(activateAdmin(store.getState().appiaAdmins.allData, selectedAdmin.id)) }}
       >
         Activate Admin
       </Button.Ripple>
        }
      </CardBody>
    </Card>
  )
}

export default PlanCard
