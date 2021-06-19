// ** React Imports
import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Store & Actions
import { getSetting } from '../store/action'
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
    return <Avatar color={color || 'primary'} className='mr-1' content={`${row.name}` || 'John Doe'} initials />
  }
}

export const columns = [
  {
    name: 'Name',
    minWidth: '297px',
    selector: 'name',
    sortable: true,
    cell: row => (
      <div className='d-flex justify-content-left align-items-center'>
        {renderClient(row)}
        <div className='d-flex flex-column'>
          <Link
            to={`/appia/settings/view/${row.id}`}
            className='user-name text-truncate mb-0'
            onClick={() => store.dispatch(getSetting(store.getState().appiaSettings.allData, row.id))}
          >
            <span className='font-weight-bold'>{row.name}</span>
          </Link>
          <small className='text-truncate text-muted mb-0'> Setting Id: {row.id}</small>
        </div>
      </div>
    )
  },
  {
    name: 'Description',
    minWidth: '280px',
    selector: 'description',
    sortable: true,
    cell: row => (
      <div>
        <span>{ row.description !== null ? row.description : "An Update" }</span>
      </div>
    )
  },
  {
    name: 'Value',
    minWidth: '200px',
    selector: 'value',
    sortable: true,
    cell: row => row.value
  },
  {
    name: 'Date',
    minWidth: '200px',
    selector: 'created_at',
    sortable: true,
    cell: row => moment(row.created_at).format('lll')
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
            to={`/appia/admin/view/${row.admin_id}`}
            className='w-100'
            onClick={() => store.dispatch(getFeedback(store.getState().appiaSettings.allData, row.admin_id))}
          >
            <FileText size={14} className='mr-50' />
            <span className='align-middle'>Details</span>
          </DropdownItem>
          <DropdownItem
            tag={Link}
            to={`/appia/admin/edit/${row.id}`}
            className='w-100'
            onClick={() => store.dispatch(getFeedback(store.getState().appiaSettings.allData, row.admin_id))}
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
