// ** Reactstrap
import { Card, CardHeader, CardBody, Badge, UncontrolledTooltip, Button } from 'reactstrap'

import { activateUser, deactivateUser } from '../store/action'
import { PasswordReset, BlacklistUser, BlacklistUserAsset} from './AddFunds'
import { store } from '@store/storeConfig/store'


const PlanCard = ({ selectedUser, userData, userDetails }) => {

  return (
    <Card className='plan-card border-primary'>
      <CardHeader className='d-flex justify-content-between align-items-center pt-75 pb-1'>
      </CardHeader>
      <CardBody>
        {selectedUser?.status === "Active" ? <Button.Ripple className='text-center mb-1' color= 'danger' outline  block onClick={() => { store.dispatch(deactivateUser(store.getState().appiaUsers.allData, selectedUser.user_id)) }}> Deactivate User</Button.Ripple> : <Button.Ripple 
         className='text-center mb-1' 
         color='success' 
         outline
         block
         onClick={() => { store.dispatch(activateUser(store.getState().appiaUsers.allData, selectedUser.user_id)) }}
       >
         Activate User
       </Button.Ripple>
        }
        <PasswordReset userId={userDetails.user_id} userData={userData} />
        <BlacklistUser userId={userDetails.user_id} userData={userData} />
        <BlacklistUserAsset userId={userDetails.user_id} phone={userDetails.phone} />
      </CardBody>
    </Card>
  )
}

export default PlanCard
