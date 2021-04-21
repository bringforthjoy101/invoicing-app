// ** React Imports
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Store & Actions
import { getUser } from '../store/action'
import { store } from '@store/storeConfig/store'

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
    return <Avatar color={color || 'primary'} className='mr-1' content={`${row.names}` || 'John Doe'} initials />
  }
}

// ** Renders Role Columns
const renderRole = row => {
  
  const roleObj = {
    subscriber: {
      class: 'text-primary',
      icon: User
    },
    maintainer: {
      class: 'text-success',
      icon: Database
    },
    editor: {
      class: 'text-info',
      icon: Edit
    },
    author: {
      class: 'text-warning',
      icon: Settings
    },
    admin: {
      class: 'text-danger',
      icon: Slack
    }
  }

  const Icon = roleObj[row.role] ? roleObj[row.role].icon : User

  return (
    <span className='text-truncate text-capitalize align-middle'>
      <Icon size={18} className={`${roleObj[row.role] ? roleObj[row.role].class : 'text-primary'} mr-50`} />
      {row.role_name || 'User'}
    </span>
  )
}

const statusObj = {
  pending: 'light-warning',
  active: 'light-success',
  inactive: 'light-secondary'
}
const {users} = store.getState()
console.log({users})
export const columns = [
  {
    name: 'User',
    minWidth: '297px',
    selector: 'fullName',
    sortable: true,
    cell: row => (
      <div className='d-flex justify-content-left align-items-center'>
        {renderClient(row)}
        <div className='d-flex flex-column'>
          <Link
            to={`/appia/user/view/${row.user_id}`}
            className='user-name text-truncate mb-0'
            onClick={() => store.dispatch(getUser(store.getState().appiaAdmins.allData, row.user_id))}
          >
            <span className='font-weight-bold'>{row.names}</span>
          </Link>
          <small className='text-truncate text-muted mb-0'>{row.email}</small>
        </div>
      </div>
    )
  },
  {
    name: 'Email',
    minWidth: '200px',
    selector: 'email',
    sortable: true,
    cell: row => row.email
  },
  {
    name: 'Role',
    minWidth: '80px',
    selector: 'role',
    sortable: true,
    cell: row => renderRole(row)
  },
  {
    name: 'Savings',
    minWidth: '138px',
    selector: 'savings_naira_wallet',
    sortable: true,
    cell: row => <span className='text-capitalize'>{row.naira_wallet.toLocaleString('en-US', { style: 'currency', currency: 'NGN' })}</span>
  },
  {
    name: 'Status',
    minWidth: '138px',
    selector: 'status',
    sortable: true,
    cell: row => (
      <Badge className='text-capitalize' color={statusObj[row.status] || 'light-success'} pill>
        {row.status || 'Active'}
      </Badge>
    )
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
            to={`/appia/user/view/${row.user_id}`}
            className='w-100'
            onClick={() => store.dispatch(getUser(row.user_id))}
          >
            <FileText size={14} className='mr-50' />
            <span className='align-middle'>Details</span>
          </DropdownItem>
          <DropdownItem
            tag={Link}
            to={`/appia/user/edit/${row.user_id}`}
            className='w-100'
            onClick={() => store.dispatch(getUser(row.user_id))}
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
