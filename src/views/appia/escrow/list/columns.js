// ** React Imports
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Store & Actions
import { getEscrow } from '../store/action'
import { store } from '@store/storeConfig/store'
import moment from 'moment'

// ** Third Party Components
import { Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { Slack, User, Settings, Database, Edit, MoreVertical, FileText, Trash2, Archive } from 'react-feather'

// ** Renders Client Columns
const renderClient = row => {
  const stateNum = Math.floor(Math.random() * 6),
    states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
    color = states[stateNum]

  if (row.avatar) {
    return <Avatar className='mr-1' img={row.avatar} width='32' height='32' />
  } else {
    return <Avatar color={color || 'primary'} className='mr-1' content={`${row.user_id}` || 'John Doe'} initials />
  }
}

// ** Renders Role Columns

const renderRole = row => {
  const roleObj = {
    receiver: {
      class: 'text-primary',
      icon: User
    },
    sender: {
      class: 'text-success',
      icon: Database
    }
  }

  const Icon = roleObj[row.role] ? roleObj[row.role].icon : User

  return (
    <span className='text-truncate text-capitalize align-middle'>
      <Icon size={18} className={`${roleObj[row.role] ? roleObj[row.role].class : 'text-primary'} mr-50`} />
      {row.role}
    </span>
  )
}

const statusObj = {
  Pending: 'light-warning',
  Contested: 'light-danger',
  Completed: 'light-success'
}
const {users} = store.getState()
export const columns = [
  {
    name: 'User Id',
    minWidth: '180px',
    selector: 'user_id',
    sortable: true,
    cell: row => (
      <div className='d-flex justify-content-left align-items-center'>
        {renderClient(row)}
        <div className='d-flex flex-column'>
          <Link
            to={`/appia/escrow/view/${row.user_id}`}
            className='user-name text-truncate mb-0'
            onClick={() => store.dispatch(getEscrow(store.getState().appiaEscrow.allData, row.user_id))}
          >
            <span className='font-weight-bold'>{row.user_id}</span>
          </Link>
        </div>
      </div>
    )
  },
  {
    name: 'Code',
    minWidth: '150px',
    selector: 'code',
    sortable: true,
    cell: row => row.code
  },
  {
    name: 'Transaction Amount',
    minWidth: '250px',
    selector: 'trans_amount',
    sortable: true,
    cell: row => <span className="text-capitalize">{row?.trans_amount?.toLocaleString('en-US', {style: 'currency', currency: 'NGN'})}</span>
  },
  {
    name: 'Transaction Name',
    minWidth: '200px',
    selector: 'trans_name',
    sortable: true,
    cell: row => row.trans_name
  },
  {
    name: 'Role',
    minWidth: '100px',
    selector: 'role',
    sortable: true,
    cell: row => renderRole(row)
  },
  {
    name: 'Status',
    minWidth: '100px',
    selector: 'status',
    sortable: true,
    cell: row => (
      <Badge className='text-capitalize' color={statusObj[row.status]} pill>
        {row.status}
      </Badge>
    )
  },
  {
    name: 'Date',
    minWidth: '200px',
    selector: 'date_created',
    sortable: true,
    cell: row => moment(row.date_created).format('lll')
  },
  {
    name: 'Actions',
    minWidth: '100px',
    selector: 'fullName',
    sortable: true,
    cell: row => (
      <UncontrolledDropdown>
        <DropdownToggle tag='div' className='btn btn-sm'>
          <MoreVertical size={14} className='cursor-pointer' />
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem
            tag={Link}
            to={`/appia/escrow/view/${row.user_id}`}
            className='w-100'
            onClick={() => store.dispatch(getEscrow(store.getState().appiaEscrow.allData, row.user_id))}
          >
            <FileText size={14} className='mr-50' />
            <span className='align-middle'>Details</span>
          </DropdownItem>
          <DropdownItem
            tag={Link}
            to={`/appia/escrow/edit/${row.user_id}`}
            className='w-100'
            onClick={() => store.dispatch(getEscrow(row.user_id))}
          >
            <Archive size={14} className='mr-50' />
            <span className='align-middle'>Edit</span>
          </DropdownItem>
          <DropdownItem className='w-100'>
            <Trash2 size={14} className='mr-50' />
            <span className='align-middle'>Delete</span>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    )
  }
]
