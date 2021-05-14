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
    name: '#',
    minWidth: '180px',
    selector: 'trans_id',
    cell: row => <span>{ `#${row.trans_id}` }</span>
  },
  // {
  //   name: <TrendingUp size={14} />,
  //   minWidth: '102px',
  //   selector: 'invoiceStatus',
  //   sortable: true,
  //   cell: row => {
  //     const color = invoiceStatusObj[row.invoiceStatus] ? invoiceStatusObj[row.invoiceStatus].color : 'light-secondary',
  //       Icon = invoiceStatusObj[row.invoiceStatus] ? invoiceStatusObj[row.invoiceStatus].icon : Send
  //     return <Avatar color={color} icon={<Icon size={14} />} />
  //   }
  // },
  {
    name: 'Type',
    minWidth: '300px',
    selector: 'trans_type',
    sortable: true,
    cell: row => row.trans_type
  },
  {
    name: 'Amount',
    selector: 'trans_amount',
    sortable: true,
    minWidth: '150px',
    cell: row => <span>{(row.trans_amount || 0).toLocaleString('en-US', { style: 'currency', currency: 'NGN' })}</span>
  },
  {
    name: 'Balance',
    selector: 'balance',
    sortable: true,
    minWidth: '164px',
    cell: row => {
      return row.balance !== 0 ? (
        <span>{(row.balance || 0).toLocaleString('en-US', { style: 'currency', currency: 'NGN' })}</span>
      ) : (
        <Badge color='light-success' pill>
          Paid
        </Badge>
      )
    }
  },
  {
    name: 'Date',
    selector: 'trans_date',
    sortable: true,
    minWidth: '200px',
    cell: row => moment(row.trans_date).format('lll')
  }
]
