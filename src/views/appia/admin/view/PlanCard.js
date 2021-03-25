// ** Reactstrap
import { Card, CardHeader, CardBody, Badge, UncontrolledTooltip, Button } from 'reactstrap'

import { activateOrDeactivateAdmin } from '../store/action'
import { store } from '@store/storeConfig/store'

const PlanCard = ({ selectedAdmin }) => {
  console.log({selectedAdmin})
  return (
    <Card className='plan-card border-primary'>
      <CardHeader className='d-flex justify-content-between align-items-center pt-75 pb-1'>
        <h5 className='mb-0'>Actions</h5>
      </CardHeader>
      <CardBody>
        <Badge className='text-capitalize' color='light-primary'>
          {selectedAdmin !== null ? selectedAdmin.currentPlan : 'Basic'}
        </Badge>
        {/* <ul className='list-unstyled my-1'>
          <li>
            <span className='align-middle'>5 Users</span>
          </li>
          <li className='my-25'>
            <span className='align-middle'>10 GB Storage</span>
          </li>
          <li>
            <span className='align-middle'>Basic Support</span>
          </li>
        </ul> */}
        <Button.Ripple 
          className='text-center' 
          color={selectedAdmin.status === 'Active' ? 'danger' : 'success'} 
          block
          onClick={() => { store.dispatch(activateOrDeactivateAdmin(store.getState().appiaAdmins.allData, selectedAdmin.id, selectedAdmin.status === 'Active' ? 'deactivate' : 'activate')) }}
        >
          {selectedAdmin.status === 'Active' ? 'Deactivate Admin' : 'Activate Admin'}
        </Button.Ripple>
      </CardBody>
    </Card>
  )
}

export default PlanCard
