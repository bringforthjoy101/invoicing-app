
import moment from 'moment'

// ** Third Party Components
import { Card, CardBody, CardText, Button, Row, Col } from 'reactstrap'
import { DollarSign, TrendingUp, User, Check, Star, Flag, Phone, BarChart, Key, Layers, Clock, Pocket } from 'react-feather'

const DataPlanInfo = ({ selectedClaim }) => {

  return (
    <Card>
      <CardBody>
        <Row>
          <Col xl='6' lg='12' className='mt-2 mt-xl-0'>
            <div className='user-info-wrapper'>
              <div className='d-flex flex-wrap align-items-center mb-1'>
                <div className='d-flex align-items-center'>
                  <div className='color-box bg-light-info'>
                    <Key className='text-info' />
                  </div>
                  <CardText tag='span' className='user-info-title font-weight-bold mb-0 ml-1'>
                    User Id
                  </CardText>
                </div>
                <CardText className='mb-0'>
                  {selectedClaim.user_id}
                </CardText>
              </div>
              <div className='d-flex flex-wrap align-items-center mb-1'>
                <div className='d-flex align-items-center'>
                  <div className='color-box bg-light-info'>
                    <Key className='text-info' />
                  </div>
                  <CardText tag='span' className='user-info-title font-weight-bold mb-0 ml-1'>
                      Reward Id
                  </CardText>
                </div>
                <CardText className='mb-0'>
                  {selectedClaim.reward_id}
                </CardText>
              </div>
              <div className='d-flex flex-wrap align-items-center mb-1'>
                <div className='d-flex align-items-center'>
                  <div className='color-box bg-light-warning'>
                    <BarChart className='text-warning' />
                  </div>
                  <CardText tag='span' className='user-info-title font-weight-bold mb-0 ml-1'>
                    Transaction Id
                  </CardText>
                </div>
                <CardText className='mb-0'>
                  {selectedClaim.transaction_id}
                </CardText>
              </div>
              <div className='d-flex flex-wrap align-items-center mb-1'>
                <div className='d-flex align-items-center'>
                  <div className='color-box bg-light-secoundary'>
                    <Clock className='text-secoundary' />
                  </div>
                  <CardText tag='span' className='user-info-title font-weight-bold mb-0 ml-1'>
                    Date Claimed
                  </CardText>
                </div>
                <CardText className='text-capitalize mb-0'>
                  {moment(selectedClaim?.created_at).format('lll')}
                </CardText>
              </div>
            </div>
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

export default DataPlanInfo
