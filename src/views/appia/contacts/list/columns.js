// ** React Imports
import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Store & Actions
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
    return <Avatar color={color || 'primary'} className='mr-1' content='John Doe' initials />
  }
}

export const columns = [
  {
    name: 'Full Name',
    minWidth: '297px',
    selector: 'Name',
    sortable: true,
    cell: row => (
      <div className='d-flex justify-content-left align-items-center'>
        {renderClient(row)}
        <div className='d-flex flex-column'>
          <Link
            to={`/appia/admin/view/${row.dmin_id}`}
            className='user-name text-truncate mb-0'
            onClick={() => store.dispatch(getAdmin(store.getState().appiaAdmins.allData, row.dmin_id))}
          >
            <span className='font-weight-bold'>{row.irst_name} {row.ast_name}</span>
          </Link>
          <small className='text-truncate text-muted mb-0'>{row.mail}</small>
        </div>
      </div>
    )
  },
  {
    name: 'User Name',
    minWidth: '320px',
    selector: 'mail',
    sortable: true,
    cell: row => row.mail
  },
  {
    name: 'Email',
    minWidth: '320px',
    selector: 'mail',
    sortable: true,
    cell: row => row.mail
  },
  {
    name: 'Phone',
    minWidth: '320px',
    selector: 'hone',
    sortable: true,
    cell: row => row.hone
  },
  {
    name: 'Subject',
    minWidth: '172px',
    selector: 'subject',
    sortable: true,
    cell: row => row.subject
  }
]
