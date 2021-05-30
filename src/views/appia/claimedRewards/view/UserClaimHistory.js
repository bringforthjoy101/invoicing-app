// ** Custom Components
import Avatar from '@components/avatar'
import Timeline from '@components/timeline'

// ** Images
import ceo from '@src/assets/images/avatars/12-small.png'
import pdf from '@src/assets/images/icons/file-icons/pdf.png'
import { getAdminActivity } from '../store/action'

// ** Third Party Components
import { Card, CardHeader, CardTitle, CardBody, Media } from 'reactstrap'
import moment from 'moment'

// ** Timeline Data
const claimHistory = [
  {
    title: '12 Invoices have been paid',
    content: 'Invoices have been paid to the company.',
    meta: '12 min ago',
    customContent: (
      <Media className='align-items-center'>
        <img className='mr-1' src={pdf} alt='pdf' height='23' />
        <Media body>invoice.pdf</Media>
      </Media>
    )
  },
  {
    title: 'Client Meeting',
    content: 'Project meeting with john @10:15am.',
    meta: '45 min ago',
    color: 'warning',
    customContent: (
      <Media className='align-items-center'>
        <Avatar color={'primary'} className='mr-1' content={`Emmanuel Adelugba` || 'John Doe'} initials />
        <Media className='ml-50' body>
          <h6 className='mb-0'>John Doe (Client)</h6>
          <span>CEO of Infibeam</span>
        </Media>
      </Media>
    )
  },
  {
    title: 'Create a new project for client',
    content: 'Add files to new design folder',
    meta: '2 days ago'
  }
]

const UserTimeline = ({claimHistory}) => {
  const activityData = []
  claimHistory.forEach(claim => {
    activityData.push({
      title:  claim.user_id,
      content: claim.claim,
      meta: moment(claim.created_at).format('lll'),
      customContent: (
        <Media className='align-items-center'>
          <Avatar color={'primary'} className='mr-1' content={ claim.user_id  || 'Appia Admin'} initials />
          <Media className='ml-50' body>
            <h6 className='mb-0'>Transaction Id: {claim.transaction_id}</h6>
            <span>Claim Code: {claim.code || '123'}</span>
          </Media>
        </Media>
      )
    })
  })
  return (
    <Card>
      <CardHeader>
        <CardTitle tag='h4' className='mb-2'>
          User Claimed History
        </CardTitle>
      </CardHeader>
      <CardBody className="overflow-auto" style={{ maxHeight: "350px" }}>
        <Timeline data={activityData} />
      </CardBody>
    </Card>
  )
}

export default UserTimeline
