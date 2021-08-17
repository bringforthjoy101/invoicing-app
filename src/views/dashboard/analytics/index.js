import { useContext, useState, useEffect } from 'react'
import { apiRequest, swal, kFormatter, isUserLoggedIn } from '@utils'
import { ThemeColors } from '@src/utility/context/ThemeColors'
import UsersCountInfo from '@src/views/ui-elements/cards/analytics/UsersCountInfo'
import AdminCountsInfo from '@src/views/ui-elements/cards/analytics/AdminCountsInfo'
import FundsCountsInfo from '@src/views/ui-elements/cards/analytics/FundsCountsInfo'
import FeedbacksCountsInfo from '@src/views/ui-elements/cards/analytics/FeedbacksCountInfo'
import { Row, Col } from 'reactstrap'
import ContactsCount from '@src/views/ui-elements/cards/statistics/ContactsCountInfo'
import CardCongratulations from '@src/views/ui-elements/cards/advance/CardCongratulations'
import SubscribersGained from '@src/views/ui-elements/cards/statistics/SubscribersGained'


import '@styles/react/libs/charts/apex-charts.scss'


const AnalyticsDashboard = () => {
  const { colors } = useContext(ThemeColors)


  const [userData, setUserData] = useState(null)
  const [dashData, setDashData] = useState({})

  useEffect(() => {
    if (isUserLoggedIn) {
      setUserData(JSON.parse(localStorage.getItem('userData')))
    }
  }, [])

  // ** Get all Dashboard Data
  const dashboardData = async () => {
    const response = await apiRequest({ url: '/admin/data', method: 'GET' })
    if (response) {
      if (response?.data?.data && response?.data?.success) {
        await setDashData(response.data.data)
      } else {
        console.log(response.error)
      }
    } else {
      swal('Oops!', 'Somthing went wrong with your network.', 'error')
    }

  }

  // ** Get admin activities
  useEffect(() => {
    dashboardData()
  }, [])

  return (
    <div id='dashboard-analytics'>
      <Row className='match-height'>
        <Col lg='6' sm='12'>
          <CardCongratulations userData={userData} />
        </Col>
        <Col lg='3' sm='6'>
          <SubscribersGained kFormatter={kFormatter} dashData={dashData} />
        </Col>
        <Col lg='3' sm='6'>
          <ContactsCount kFormatter={kFormatter} warning={colors.warning.main} dashData={dashData} />
        </Col>
      </Row>
      <Row className='match-height'>
        <Col lg='6' xs='12'>
          <UsersCountInfo primary={colors.primary.main} danger={colors.danger.main} dashData={dashData} />
        </Col>
        <Col lg='6' xs='12'>
          <AdminCountsInfo primary={colors.primary.main} danger={colors.danger.main} dashData={dashData} />
        </Col>
        <Col lg='6' xs='12'>
          <FundsCountsInfo primary={colors.primary.main} danger={colors.danger.main} dashData={dashData} />
        </Col>
        <Col lg='6' xs='12'>
          <FeedbacksCountsInfo primary={colors.primary.main} danger={colors.danger.main} dashData={dashData} />
        </Col>
      </Row>
    </div>
  )
}

export default AnalyticsDashboard
