// ** Reactstrap
import { Card, CardHeader, CardBody, Badge, UncontrolledTooltip, Button } from 'reactstrap'
import ResolveEscrow from './ResolveEscrow'

const PlanCard = ({ selectedEscrow }) => {
  console.log("escrow", selectedEscrow.escrow_id)

  return (
    <Card className='plan-card border-primary'>
      <CardBody>
        <ResolveEscrow code={selectedEscrow.escrow_id} status={selectedEscrow.status} />
      </CardBody>
    </Card>
  )
}

export default PlanCard
