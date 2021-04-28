// ** React Imports
import { Fragment, useState, useEffect } from 'react'

// ** Invoice List Sidebar
import Sidebar from './Sidebar'

// ** Columns
import { columns } from './columns'

// ** Store & Actions
import { getAllData, getFilteredData } from '../store/action'
import { useDispatch, useSelector } from 'react-redux'

// ** Third Party Components
import ReactPaginate from 'react-paginate'
import { ChevronDown } from 'react-feather'
import DataTable from 'react-data-table-component'
import { Card, CardHeader, CardTitle, CardBody, Input, Row, Col, Label, CustomInput, Button } from 'reactstrap'

// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'

// ** Table Header
const CustomHeader = ({ handlePerPage, rowsPerPage }) => {
  return (
    <div className='invoice-list-table-header w-100 mr-1 ml-50 mt-2 mb-75'>
      <Row>
        <Col xl='6' className='d-flex align-items-center p-0'>
          <div className='d-flex align-items-center w-100'>
            <Label for='rows-per-page'>Show</Label>
            <CustomInput
              className='form-control mx-50'
              type='select'
              id='rows-per-page'
              value={rowsPerPage}
              onChange={handlePerPage}
              style={{
                width: '5rem',
                padding: '0 0.8rem',
                backgroundPosition: 'calc(100% - 3px) 11px, calc(100% - 20px) 13px, 100% 0'
              }}
            >
              <option value='10'>10</option>
              <option value='25'>25</option>
              <option value='50'>50</option>
            </CustomInput>
            <Label for='rows-per-page'>Entries</Label>
          </div>
        </Col>
      </Row>
    </div>
  )
}

const AdminsList = () => {
  // ** Store Vars
  const dispatch = useDispatch()
  const store = useSelector(state => state.appiaAdmins)

  // ** States
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [currentRole, setCurrentRole] = useState({ value: '', label: 'Select Role', number: 0})
  const [currentStatus, setCurrentStatus] = useState({ value: '', label: 'Select Status', number: 0 })

  // ** Function to toggle sidebar
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen)

  // ** Get data on mount
  useEffect(() => {
    dispatch(getAllData())
    dispatch(
      getFilteredData(store.allData, {
        page: currentPage,
        perPage: rowsPerPage,
        role: currentRole.value,
        status: currentStatus.value,
        q: searchTerm
      })
    )
  }, [dispatch])
  
  // ** User filter options
  const roleOptions = [
    { value: '', label: 'Select Role', number: 0 },
    { value: 'Admin', label: 'Admin', number: 1 },
    { value: 'Customer Support', label: 'Customer Support', number: 2 },
    { value: 'Super Admin', label: 'Super Admin', number: 3 },
    { value: 'Control Admin', label: 'Control Admin', number: 4 }
  ]

  const statusOptions = [
    { value: '', label: 'Select Status', number: 0 },
    { value: 'Pending', label: 'Pending', number: 1 },
    { value: 'Active', label: 'Active', number: 2 },
    { value: 'Inactive', label: 'Inactive', number: 3 }
  ]

  // ** Function in get data on page change
  const handlePagination = page => {
    dispatch(
      getFilteredData(store.allData, {
        page: page.selected + 1,
        perPage: rowsPerPage,
        role: currentRole.value,
        status: currentStatus.value,
        q: searchTerm
      })
    )
    setCurrentPage(page.selected + 1)
  }

  // ** Function in get data on rows per page
  const handlePerPage = e => {
    const value = parseInt(e.currentTarget.value)
    dispatch(
      getFilteredData(store.allData, {
        page: currentPage,
        perPage: value,
        role: currentRole.value,
        status: currentStatus.value,
        q: searchTerm
      })
    )
    setRowsPerPage(value)
  }

  // ** Function in get data on search query change
  const handleFilter = val => {
    setSearchTerm(val)
    dispatch(
      getFilteredData(store.allData, {
        page: currentPage,
        perPage: rowsPerPage,
        role: currentRole.value,
        status: currentStatus.value,
        q: val
      })
    )
  }

  const filteredData = store.allData.filter(
    item => (item.email.toLowerCase() || item.first_name.toLowerCase() || item.last_name.toLowerCase())
  )

    // ** Custom Pagination
  // const CustomPagination = () => {
  //   const count = Math.ceil(filteredData.length / rowsPerPage)

  //   return (
  //     <ReactPaginate
  //       previousLabel={''}
  //       nextLabel={''}
  //       pageCount={count || 1}
  //       activeClassName='active'
  //       forcePage={currentPage !== 0 ? currentPage - 1 : 0}
  //       onPageChange={page => handlePagination(page)}
  //       pageClassName={'page-item'}
  //       nextLinkClassName={'page-link'}
  //       nextClassName={'page-item next'}
  //       previousClassName={'page-item prev'}
  //       previousLinkClassName={'page-link'}
  //       pageLinkClassName={'page-link'}
  //       containerClassName={'pagination react-paginate justify-content-end my-2 pr-1'}
  //     />
  //   )
  // }


  // ** Table data to render
  const dataToRender = () => {
    const filters = {
      role: currentRole.value,
      status: currentStatus.value,
      q: searchTerm
    }

    const isFiltered = Object.keys(filters).some(function (k) {
      return filters[k].length > 0
    })

    if (store.data.length > 0) {
      return store.data
    } else if (store.data.length === 0 && isFiltered) {
      return []
    } else {
      return store.allData.slice(0, rowsPerPage)
    }
  }

  return (
    <Fragment>
      <Card>
        <CardHeader>
          <CardTitle tag='h4'>Search Filter</CardTitle>
        </CardHeader>
        <CardBody>
          <Row>
            <Col md='8'>
            <div className='d-flex align-items-center w-100'>
            <Label for='rows-per-page'>Show</Label>
            <CustomInput
              className='form-control mx-50'
              type='select'
              id='rows-per-page'
              value={rowsPerPage}
              onChange={handlePerPage}
              style={{
                width: '5rem',
                padding: '0 0.8rem',
                backgroundPosition: 'calc(100% - 3px) 11px, calc(100% - 20px) 13px, 100% 0'
              }}
            >
              <option value='10'>10</option>
              <option value='25'>25</option>
              <option value='50'>50</option>
            </CustomInput>
            <Label for='rows-per-page'>Entries</Label>
          </div>
            </Col>
            <Col md="4" className="d-flex">
            <Label className='mb-0 mt-1' for='search-invoice'>
              Search:
            </Label>
              <Input
                id='search-invoice'
                className='ml-50 w-100'
                type='text'
                value={searchTerm}
                onChange={e => handleFilter(e.target.value)}
              />
          </Col>
          </Row>
        </CardBody>
      </Card>

      <Card>
        <DataTable
          noHeader
          pagination
          subHeader
          responsive
          paginationServer
          columns={columns}
          sortIcon={<ChevronDown />}
          className='react-dataTable'
          // paginationComponent={CustomPagination}
          data={dataToRender()}
        />
      </Card>

    </Fragment>
  )
}

export default AdminsList
