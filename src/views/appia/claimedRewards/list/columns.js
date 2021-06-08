// ** React Imports
import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Store & Actions
import { getClaim } from '../store/action'
import moment from 'moment'
import { store } from '@store/storeConfig/store'

// ** Third Party Components
import { Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { Slack, User, Settings, Database, Edit, MoreVertical, FileText, Trash2, Archive } from 'react-feather'

export const columns = [
  {
    name: 'User Id',
    minWidth: '120px',
    selector: 'user_id',
    sortable: true,
    cell: row => (
      <div className='d-flex justify-content-left align-items-center'>
        <div className='d-flex flex-column'>
          <Link
            to={`/appia/claimedRewards/view/${row.id}`}
            className='user-name text-truncate mb-0'
            onClick={() => store.dispatch(getClaim(store.getState().appiaClaimedRewards.allData, row.id))}
          >
            <span className='font-weight-bold'>{row.user_id}</span>
          </Link>
        </div>
      </div>
    )
  },
  {
    name: 'Reward Id',
    minWidth: '140px',
    selector: 'reward_id',
    sortable: true,
    cell: row => row.reward_id
  },
  {
    name: 'Transaction Id',
    minWidth: '200px',
    selector: 'transaction_id',
    sortable: true,
    cell: row => row.transaction_id
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
            to={`/appia/admin/view/${row.id}`}
            className='w-100'
            onClick={() => store.dispatch(getAdmin(store.getState().appiaDataPlans.allData, row.id))}
          >
            <FileText size={14} className='mr-50' />
            <span className='align-middle'>Details</span>
          </DropdownItem>
          <DropdownItem
            tag={Link}
            to={`/appia/admin/edit/${row.id}`}
            className='w-100'
            onClick={() => store.dispatch(getAdmin(store.getState().appiaDataPlans.allData, row.id))}
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
