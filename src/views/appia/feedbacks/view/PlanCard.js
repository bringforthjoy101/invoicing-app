import { useState } from 'react'
// ** Reactstrap
import { Card, CardHeader, CardBody, Badge, UncontrolledTooltip, Button } from 'reactstrap'

import { activateAdmin, deactivateAdmin } from '../store/action'
import { store } from '@store/storeConfig/store'


const PlanCard = ({ selectedFeedback }) => {

  // state
  const [toggleButton, setToggleButton] = useState(false)

  // ** Function to toggle sidebar
  const openButton = () => setToggleButton(!toggleButton)

  return (
    <Card className='plan-card border-primary'>
      <CardHeader className='d-flex justify-content-between align-items-center pt-75 pb-1'>
        <h5 className='mb-0'>Actions</h5>
      </CardHeader>
    </Card>
  ) 
}

export default PlanCard
