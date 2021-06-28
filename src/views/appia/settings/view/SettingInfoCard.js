// ** Custom Components
import Avatar from '@components/avatar'
import moment from 'moment'

// ** Third Party Components
import { Card, CardBody, CardText, Row, Col } from 'reactstrap'
// import { DollarSign, TrendingUp, User, Check, Star, Flag, Phone } from 'react-feather'

const SettingInfo = ({ selectedSetting }) => {
  // ** render user img

  const renderUserImg = () => {
    if (selectedSetting !== null && selectedSetting.avatar) {
      return <img src={selectedSetting.avatar} alt='user-avatar' className='img-fluid rounded' height='104' width='104' />
    } else {
      const stateNum = Math.floor(Math.random() * 6),
        states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
        color = states[stateNum]
      return (
        <Avatar
          initials
          color={color}
          className='rounded'
          content={`${selectedSetting.name}`}
          contentStyles={{
            borderRadius: 0,
            fontSize: 'calc(36px)',
            width: '100%',
            height: '100%'
          }}
          style={{
            height: '90px',
            width: '90px'
          }}
        />
      )
    }
  }

  return (
    <Card>
      <CardBody>
        <Row className='my-2'>
          <Col className='d-flex align-items-center justify-content-center mb-2 mb-md-0' md='5' xs='12'>
            <div className='d-flex justify-content-start'>
              {renderUserImg()}
            </div>
          </Col>
          <div className='d-flex flex-column ml-1'>
            <Col>
            <h4>Name: { selectedSetting !== null ? `${selectedSetting.name}` : 'Appia Admin'}</h4>
              {/* <CardText className="mt-1">
                Email: { selectedSetting !== null ? selectedSetting.email : 'appia.admin@appiawave.com'}
              </CardText> */}
              <CardText className="mt-1">Setting Id: { selectedSetting.id}</CardText>
              <hr />
              <div className="d-flex">
                <h6>
                  Value: <span>{selectedSetting.value}</span>
                </h6>
                <h6 className="ml-5">Date <span>{moment(selectedSetting.created_at).format('lll')}</span></h6>
              </div>
              <br />
            </Col>
          </div>
        </Row>
      </CardBody>
    </Card>
  )
}

export default SettingInfo
