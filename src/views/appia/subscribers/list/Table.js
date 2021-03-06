// ** React Imports
import { Fragment, useState, useEffect } from 'react'


// ** Columns
import { columns } from './columns'
import Flatpickr from 'react-flatpickr'
import moment from 'moment'

// ** Store & Actions
import { getAllData, getFilteredData } from '../store/action'
import { useDispatch, useSelector } from 'react-redux'

// ** Third Party Components
import Select from 'react-select'
import ReactPaginate from 'react-paginate'
import { ChevronDown } from 'react-feather'
import DataTable from 'react-data-table-component'
import { selectThemeColors } from '@utils'
import { Card, CardHeader, CardTitle, CardBody, Input, Row, Col, Label, CustomInput, Button } from 'reactstrap'

// import Breadcrumbs from '@components/breadcrumbs'
import '@styles/react/libs/flatpickr/flatpickr.scss'

// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'
import FormGroup from 'reactstrap/lib/FormGroup'


const SubscribersTable = () => {
  // ** Store Vars
  const dispatch = useDispatch()
  const store = useSelector(state => state.appiaSubscribers)

  // ** States
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [currentStatus, setCurrentStatus] = useState({ value: '', label: 'Select Status', number: 0 })
  const [picker, setPicker] = useState('')


  const start = picker && picker[0]
  const end = picker && picker[1]

  console.log("start", start)
  console.log("end", end)

  // ** Get data on mount
  useEffect(() => {
    dispatch(getAllData())
    dispatch(
      getFilteredData(store.allData, {
        page: currentPage,
        perPage: rowsPerPage,
        status: currentStatus.value,
        q: searchTerm,
        created_at: picker
      })
    )
  }, [dispatch])

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
        status: currentStatus.value,
        q: searchTerm,
        created_at: picker
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
        status: currentStatus.value,
        q: searchTerm,
        created_at: picker
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
        status: currentStatus.value,
        q: val,
        created_at: picker
      })
    )
  }

  const handleRange = (date) => {
    setPicker(date)
    dispatch(
      getFilteredData(store.allData, {
        page: currentPage,
        perPage: rowsPerPage,
        status: currentStatus.value,
        q: searchTerm,
        created_at: date
      })
    )
  }

  const filteredData = store.allData.filter(
    item => (item.email.toLowerCase() || item.created_at.toLowerCase())
  )

  // ** Custom Pagination
  const CustomPagination = () => {
    const count = Math.ceil(filteredData.length / rowsPerPage)

    return (
      <ReactPaginate
        previousLabel={''}
        nextLabel={''}
        pageCount={count || 1}
        activeClassName='active'
        forcePage={currentPage !== 0 ? currentPage - 1 : 0}
        onPageChange={page => handlePagination(page)}
        pageClassName={'page-item'}
        nextLinkClassName={'page-link'}
        nextClassName={'page-item next'}
        previousClassName={'page-item prev'}
        previousLinkClassName={'page-link'}
        pageLinkClassName={'page-link'}
        containerClassName={'pagination react-paginate justify-content-end my-2 pr-1'}
      />
    )
  }


  // ** Table data to render
  const dataToRender = () => {
    const filters = {
      status: currentStatus.value,
      q: searchTerm
    }
    const dateFilter = store.allData.filter((contact) => {
      if (Date.parse(contact.created_at) >= start &&
        Date.parse(contact.created_at) <= end) {
        return contact
      }
    })

    console.log("datefilter", dateFilter)

    const isFiltered = Object.keys(filters).some(function (k) {
      return filters[k].length > 0
    })

    if (!searchTerm && start && end) {
      return dateFilter.slice(0, rowsPerPage)
    } else if (store.data.length > 0) {
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
          <Row  form className='mt-1 mb-50'>
            <Col lg='4' md='6'>
              <FormGroup>
                <Label for='select'>Select Status:</Label>
                <Select
                  theme={selectThemeColors}
                  isClearable={false}
                  className='react-select'
                  classNamePrefix='select'
                  id='select'
                  options={statusOptions}
                  value={currentStatus}
                  onChange={data => {
                    setCurrentStatus(data)
                    dispatch(
                      getFilteredData(store.allData, {
                        page: currentPage,
                        perPage: rowsPerPage,
                        status: data.value,
                        q: searchTerm
                      })
                    )
                  }}
                />
              </FormGroup>
            </Col>
            <Col lg="4" md="6">
              <FormGroup>
                <Label className='mb-0' for='search-invoice'>
                  Search:
              </Label>
                <Input
                  id='search-invoice'
                  type="text"
                  value={searchTerm}
                  placeholder='Email Search'
                  onChange={e => handleFilter(e.target.value)}
                />
              </FormGroup>
            </Col>
            <Col md='4' className="d-flex mt-2">
              <Label className='mb-0 mt-1' for='range-picker'>Range: </Label>
              <Flatpickr
                value={picker}
                id='range-picker'
                className='form-control'
                onChange={(handleRange)}
                onChange={date => setPicker(date)}
                options={{
                  mode: 'range'
                }}
              />
            </Col>
          </Row>
        </CardBody>
      </Card>

      <Card>
        <Row className='mx-0 mt-3'>
          <Col sm='6'>
            <div className='d-flex align-items-center'>
              <Label for='rows-per-page'>Show</Label>
              <CustomInput
                className='form-control mx-50'
                type='select'
                id='rows-per-page'
                value={rowsPerPage}
                onChange={handlePerPage}
                style={{
                  width: '10rem',
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
        <DataTable
          noHeader
          pagination
          subHeader
          responsive
          paginationServer
          columns={columns}
          sortIcon={<ChevronDown />}
          className='react-dataTable'
          paginationComponent={CustomPagination}
          data={dataToRender()}
        />
      </Card>
    </Fragment>
  )
}

export default SubscribersTable
