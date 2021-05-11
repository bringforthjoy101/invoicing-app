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
    minWidth: '200px',
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
    name: 'Date',
    selector: 'trans_date',
    sortable: true,
    minWidth: '200px',
    cell: row => moment(row.trans_date).format('lll')
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
  }
  // {
  //   name: 'Action',
  //   minWidth: '110px',
  //   selector: '',
  //   sortable: true,
  //   cell: row => (
  //     <div className='column-action d-flex align-items-center'>
  //       <Send size={17} />
  //       <Link to={`/apps/invoice/preview/${row.trans_id}`}>
  //         <Eye size={17} className='mx-1' />
  //       </Link>
  //       <UncontrolledDropdown>
  //         <DropdownToggle tag='span'>
  //           <MoreVertical size={17} className='cursor-pointer' />
  //         </DropdownToggle>
  //         <DropdownMenu right>
  //           <DropdownItem tag='a' href='/' className='w-100' onClick={e => e.preventDefault()}>
  //             <Download size={14} className='mr-50' />
  //             <span className='align-middle'>Download</span>
  //           </DropdownItem>
  //           <DropdownItem tag={Link} to={`/apps/invoice/edit/${row.id}`} className='w-100'>
  //             <Edit size={14} className='mr-50' />
  //             <span className='align-middle'>Edit</span>
  //           </DropdownItem>
  //           <DropdownItem tag='a' href='/' className='w-100' onClick={e => e.preventDefault()}>
  //             <Trash size={14} className='mr-50' />
  //             <span className='align-middle'>Delete</span>
  //           </DropdownItem>
  //           <DropdownItem tag='a' href='/' className='w-100' onClick={e => e.preventDefault()}>
  //             <Copy size={14} className='mr-50' />
  //             <span className='align-middle'>Duplicate</span>
  //           </DropdownItem>
  //         </DropdownMenu>
  //       </UncontrolledDropdown>
  //     </div>
  //   )
  // }
]
