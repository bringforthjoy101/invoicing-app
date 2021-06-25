// ** React Imports
import { Link } from 'react-router-dom'
import moment from 'moment'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Third Party Components
import { Badge, UncontrolledDropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap'
import {
  Eye,
  TrendingUp,
  Send,
  MoreVertical,
  Download,
  Edit,
  Trash,
  Copy,
  CheckCircle,
  Save,
  ArrowDownCircle,
  Info,
  PieChart
} from 'react-feather'

// ** Vars
const invoiceStatusObj = {
  Sent: { color: 'light-secondary', icon: Send },
  Paid: { color: 'light-success', icon: CheckCircle },
  Draft: { color: 'light-primary', icon: Save },
  Downloaded: { color: 'light-info', icon: ArrowDownCircle },
  'Past Due': { color: 'light-danger', icon: Info },
  'Partial Payment': { color: 'light-warning', icon: PieChart }
}

// ** renders client column
const renderClient = row => {
  const stateNum = Math.floor(Math.random() * 6),
    states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
    color = states[stateNum]

  if (row.avatar) {
    return <Avatar className='mr-50' img={row.avatar} width='32' height='32' />
  } else {
    return <Avatar color={color} className='mr-50' content={row.client ? row.client.name : 'John Doe'} initials />
  }
}

// ** Table columns
export const columns = [
  {
    name: '#User Id',
    minWidth: '180px',
    selector: 'user_id',
    sortable: true,
    cell: row => (
      <div className='d-flex justify-content-left align-items-center'>
        {renderClient(row)}
        <div className='d-flex flex-column'>
          <Link
            to={`/appia/escrow/view/Transactions/${row.id}`}
            className='user-name text-truncate mb-0'
            onClick={() => store.dispatch(getEscrow(store.getState().appiaEscrow.allData, row.id))}
          >
            <span className='font-weight-bold'>{row.id}</span>
          </Link>
        </div>
      </div>
    )
  },
  {
    name: 'Transaction Name',
    minWidth: '200px',
    selector: 'trans_name',
    sortable: true,
    cell: row => row.trans_name
  },
  {
    name: 'Transaction Amount',
    selector: 'trans_amount',
    sortable: true,
    minWidth: '220px',
    cell: row => <span>{(row.trans_amount || 0).toLocaleString('en-US', { style: 'currency', currency: 'NGN' })}</span>
  },
  {
    name: 'Transaction Code',
    minWidth: '200px',
    selector: 'code',
    sortable: true,
    cell: row => row.code
  },
  {
    name: 'Decline Reason',
    minWidth: '200px',
    selector: 'decline_reason',
    sortable: true,
    cell: row => <span>{row.decline_reason !== null ? row.decline_reason : "No Issue"}</span>
  },
  {
    name: 'Details',
    minWidth: '200px',
    selector: 'details',
    sortable: true,
    cell: row => row.details
  },
  {
    name: 'Date',
    selector: 'date_created',
    sortable: true,
    minWidth: '200px',
    cell: row => moment(row.date_created).format('lll')
  }
]
