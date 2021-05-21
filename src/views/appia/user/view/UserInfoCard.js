// ** React Imports
import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Third Party Components
import { Card, CardBody, CardText, Button, Row, Col } from 'reactstrap'
import { Pocket, DollarSign, TrendingUp, User, Check, Star, Flag, Phone } from 'react-feather'
import CardTitle from 'reactstrap/lib/CardTitle'

const UserInfoCard = ({ selectedUser, detail }) => {
  // ** render user img
  const renderUserImg = () => {
    if (selectedUser !== null && selectedUser.avatar) {
      return <img src={selectedUser.avatar} alt='user-avatar' className='img-fluid rounded' height='104' width='104' />
    } else {
      const stateNum = Math.floor(Math.random() * 6),
        states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
        color = states[stateNum]
      return (
        <Avatar
          initials
          color={color}
          className='rounded'
          content={selectedUser.names}
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
        <Row>
          <Col xl='6' lg='12' className='d-flex flex-column justify-content-between border-container-lg'>
            <div className='user-avatar-section'>
              <div className='d-flex justify-content-start'>
                {renderUserImg()}
                <div className='d-flex flex-column ml-1'>
                  <div className='user-info mt-2'>
                    <h4 className='mb-0'>{selectedUser !== null ? selectedUser.names : 'Eleanor Aguilar'}</h4>
                    <CardText tag='span'>
                      {selectedUser !== null ? selectedUser.email : 'eleanor.aguilar@gmail.com'}
                    </CardText>
                  </div>
                </div>
              </div>
            </div>
            <div className='d-flex align-items-center user-total-numbers'>
              <div className='d-flex align-items-center mr-2'>
                <div className='color-box bg-light-primary'>
                  <Pocket className='text-primary' />
                </div>
                <div className='ml-1'>
                  <h5 className='mb-0'>{selectedUser.naira_wallet.toLocaleString('en-US', { style: 'currency', currency: 'NGN' })}</h5>
                  <small>Naira Wallet</small>
                </div>
              </div>
              <div className='d-flex align-items-center'>
                <div className='color-box bg-light-success'>
                  <Pocket className='text-success' />
                </div>
                <div className='ml-1'>
                  <h5 className='mb-0'>{selectedUser.commission_wallet.toLocaleString('en-US', { style: 'currency', currency: 'NGN' })}</h5>
                  <small>Commision Wallet</small>
                </div>
              </div>
            </div>
          </Col>
          <Col xl='6' lg='12' className='mt-2 mt-xl-0'>
            <div className='user-info-wrapper'>
              <div className='d-flex flex-wrap align-items-center'>
                <div className='user-info-title'>
                  <User className='mr-1' size={14} />
                  <CardText tag='span' className='user-info-title font-weight-bold mb-0'>
                    Username
                  </CardText>
                </div>
                <CardText className='mb-0'>
                  {selectedUser !== null ? selectedUser.user_id : 'eleanor.aguilar'}
                </CardText>
              </div>
              <div className='d-flex flex-wrap align-items-center my-50'>
                <div className='user-info-title'>
                  <Check className='mr-1' size={14} />
                  <CardText tag='span' className='user-info-title font-weight-bold mb-0'>
                    Status
                  </CardText>
                </div>
                <CardText className='text-capitalize mb-0'>
                  {selectedUser !== null ? selectedUser.status || 'Active' : 'Active'}
                </CardText>
              </div>
              <div className='d-flex flex-wrap align-items-center my-50'>
                <div className='user-info-title'>
                  <Star className='mr-1' size={14} />
                  <CardText tag='span' className='user-info-title text-capitalize font-weight-bold mb-0'>
                    Role
                  </CardText>
                </div>
                <CardText className='text-capitalize mb-0'>
                  {selectedUser !== null ? selectedUser.role || 'User' : 'User'}
                </CardText>
              </div> 
              <div className='d-flex flex-wrap align-items-end mt-2 mb-0'>
              <div className='user-info-title'>
                <CardTitle>Bank Details: </CardTitle>
              </div>
              </div>
              <div className='d-flex flex-wrap align-items-center mt-0'>
                <div className='user-info-title'>
                  <Flag className='mr-1' size={14} />
                  <CardText tag='span' className='user-info-title font-weight-bold mb-0'>
                    Account Name
                  </CardText>
                </div>
                <CardText className='mb-0'>{detail?.user_providus_details?.account_name}</CardText>
              </div>
              <div className='d-flex flex-wrap align-items-center mt-1'>
                <div className='user-info-title'>
                  <Flag className='mr-1' size={14} />
                  <CardText tag='span' className='user-info-title font-weight-bold mb-0'>
                    Account Number
                  </CardText>
                </div>
                <CardText className='mb-0'>{detail?.user_providus_details?.account_number}</CardText>
              </div>
              <div className='d-flex flex-wrap align-items-center mt-1'>
                <div className='user-info-title'>
                  <Phone className='mr-1' size={14} />
                  <CardText tag='span' className='user-info-title font-weight-bold mb-0'>
                    Bank Name
                  </CardText>
                </div>
                <CardText className='mb-0'>{detail?.user_providus_details?.bank_name}</CardText>
              </div>
            </div>
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

export default UserInfoCard
