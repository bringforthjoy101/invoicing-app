// ** React Imports
import { Link } from 'react-router-dom'

// ** Custom Components
import moment from 'moment'

// ** Third Party Components
import { Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { MoreVertical, FileText, Trash2, Archive } from 'react-feather'


const statusObj = {
  Pending: 'light-warning',
  Active: 'light-success',
  Inactive: 'light-danger'
}

export const columns = [
  {
    name: 'User Id',
    minWidth: '120px',
    selector: 'id',
    sortable: true,
    cell: row => row.id
  },
  {
    name: 'Email',
    minWidth: '320px',
    selector: 'email',
    sortable: true,
    cell: row => row.email
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
    name: 'Date Subscribed',
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
            onClick={() => store.dispatch(getFeedback(store.getState().appiaAdmins.allData, row.admin_id))}
          >
            <FileText size={14} className='mr-50' />
            <span className='align-middle'>Details</span>
          </DropdownItem>
          <DropdownItem
            tag={Link}
            to={`/appia/admin/edit/${row.id}`}
            className='w-100'
            onClick={() => store.dispatch(getFeedback(store.getState().appiaSubscribers.allData, row.admin_id))}
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
