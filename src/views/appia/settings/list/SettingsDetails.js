// ** Custom Components
import Avatar from '@components/avatar'

// ** Third Party Components
import { Card, CardBody, CardTitle, Button, CardText, Row, Col } from 'reactstrap'
import EditSetting from './EditSetting'

const SettingInfo = ({ allData }) => {


  return (
    <Card className="p-5">
      <CardTitle>
        <h1>
          Settings
        </h1>
      </CardTitle>
      <hr/>
      <CardBody>
        <Row>
          {allData.map((data) => <div key={data.id} className=' py-2 pr-5'>
            <h4>Name: {data.name}</h4>
            <h6>Value: {data.value} </h6>
            <p>Description: {data.description !== '' ? data.description : "No Description"}</p>
            <EditSetting data={data} />
            <hr />
          </div>
          )}
        </Row>
      </CardBody>
    </Card>
  )
}

export default SettingInfo
