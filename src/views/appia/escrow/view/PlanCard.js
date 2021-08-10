// ** Reactstrap
import { Card, CardHeader, CardBody, Badge, UncontrolledTooltip, Button } from 'reactstrap'
import ResolveEscrow from './ResolveEscrow'


const PlanCard = ({ selectedEscrow, userData }) => {

  return (
    <Card className='plan-card border-primary'>
      <CardBody>
        <ResolveEscrow code={selectedEscrow.code} status={selectedEscrow.status} />
      </CardBody>
    </Card>
  )
}

export default PlanCard
