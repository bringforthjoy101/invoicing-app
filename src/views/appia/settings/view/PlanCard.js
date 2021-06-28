// ** Reactstrap
import { Card, CardHeader, CardBody } from 'reactstrap'
import UpdateSetting from './UpdateSetting'

const PlanCard = ({ }) => {

  return (
    <Card className='plan-card border-primary'>
      <CardHeader className='d-flex justify-content-between align-items-center pt-75 pb-1'>
        <h5 className='mb-0'>Actions</h5>
      </CardHeader>
      <CardBody>
      <UpdateSetting />
      </CardBody>
    </Card>
  ) 
}

export default PlanCard
