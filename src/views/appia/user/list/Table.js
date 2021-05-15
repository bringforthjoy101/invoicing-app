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
import Select from 'react-select'
import ReactPaginate from 'react-paginate'
import { ChevronDown, Share, Printer, FileText } from 'react-feather'
import DataTable from 'react-data-table-component'
import { selectThemeColors } from '@utils'
import { Card, CardHeader, CardTitle, CardBody, UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle, Input, Row, Col, Label, CustomInput, Button } from 'reactstrap'

// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'
import jsPDF from 'jspdf'
import 'jspdf-autotable'

// ** Table Header
const CustomHeader = ({ downloadCSV, storeData, downloadPDF }) => {
  return (
    <div className='invoice-list-table-header w-100 mr-1 ml-50 mt-2 mb-75'>
      <Row>
        <Col
          xl='12'
          className='d-flex align-items-sm-center justify-content-lg-end justify-content-start flex-lg-nowrap flex-wrap flex-sm-row flex-column pr-lg-1 p-0 mt-lg-0 mt-1'
        >
         <UncontrolledButtonDropdown>
              <DropdownToggle color='secondary' caret outline>
                <Share size={15} />
                <span className='align-middle ml-50'>Download Table</span>
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem className='w-100' onClick={() => downloadCSV(storeData)}>
                  <FileText size={15} />
                  <span className='align-middle ml-50'>CSV</span>
                </DropdownItem>
                <DropdownItem className='w-100' onClick={() => downloadPDF()}>
                  <FileText size={15} />
                  <span className='align-middle ml-50'>PDF</span>
                </DropdownItem>
                <DropdownItem className='w-100' onClick={() => printOrder(filteredData)}>
                  <Printer size={15} />
                  <span className='align-middle ml-50'>Print</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledButtonDropdown>
        </Col>
      </Row>
    </div>
  )
}


const UsersList = () => {
  // ** Store Vars
  const dispatch = useDispatch()
  const store = useSelector(state => state.appiaUsers)

  // ** States
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [currentStatus, setCurrentStatus] = useState({ value: '', label: 'Select Status', number: 0 })

  // ** Get data on mount
  useEffect(() => {
    dispatch(getAllData())
    dispatch(
      getFilteredData(store.allData, {
        page: currentPage,
        perPage: rowsPerPage,
        status: currentStatus.value,
        q: searchTerm
      })
    )
  }, [dispatch])

  // ** User filter options
  const roleOptions = [
    { value: '', label: 'Select Role' },
    { value: 'admin', label: 'Admin' },
    { value: 'author', label: 'Author' },
    { value: 'editor', label: 'Editor' },
    { value: 'maintainer', label: 'Maintainer' },
    { value: 'subscriber', label: 'Subscriber' }
  ]

  const planOptions = [
    { value: '', label: 'Select Plan' },
    { value: 'basic', label: 'Basic' },
    { value: 'company', label: 'Company' },
    { value: 'enterprise', label: 'Enterprise' },
    { value: 'team', label: 'Team' }
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
        status: currentStatus.value,
        q: val
      })
    )
  }

  const filteredData = store.allData.filter(
    item => (item.email.toLowerCase() || item.first_name.toLowerCase() || item.last_name.toLowerCase() || item.referral_code.dataToRender())
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


   // ** Converts table to CSV
   function convertArrayOfObjectsToCSV(array) {
    let result

    const columnDelimiter = ','
    const lineDelimiter = '\n'
    const keys = Object.keys(store.allData[0])
    console.log("keyss", keys)

    result = ''
    result += keys.join(columnDelimiter)
    result += lineDelimiter

    array.forEach(item => {
      let ctr = 0
      keys.forEach(key => {
        if (ctr > 0) result += columnDelimiter

        result += item[key]

        ctr++
      })
      result += lineDelimiter
      console.log('esults', result)
    })

    return result
  }

  // ** Downloads CSV
  function downloadCSV(array) {
    const link = document.createElement('a')
    let csv = convertArrayOfObjectsToCSV(array)
    if (csv === null) return

    const filename = 'export.csv'

    if (!csv.match(/^data:text\/csv/i)) {
      csv = `data:text/csv;charset=utf-8,${csv}`
    }

    link.setAttribute('href', encodeURI(csv))
    link.setAttribute('download', filename)
    link.click()
  }

  // download PDF
  const downloadPDF = () => {
    const doc = new jsPDF({
      orientation: "landscape"
    })

    doc.autoTable({
        styles: { halign: 'center'},
        head: [['User', 'Email', 'Balance', 'Naira Wallet', 'Status']]
    })
    store.allData.map(arr => {
      doc.autoTable({
        styles: { halign: 'left' },
        columnStyles: {
          0: {cellWidth: 40},
          1: {cellWidth: 70},
          2: {cellWidth: 70},
          3: {cellWidth: 60},
          4: {cellWidth: 30}
        },
        body: [[(arr.names), (arr.email), (arr.balance), (arr.naira_wallet), (arr.status)]]
      })
    })
    doc.save("export.pdf")
  }

  // ** Table data to render
  const dataToRender = () => {
    const filters = {
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
            <Col md="4">
              <div className='d-flex align-items-center w-100'>
                <Label for='rows-per-page'>Show</Label>
                <CustomInput
                  className='form-control mx-50'
                  type='select'
                  id='rows-per-page'
                  value={rowsPerPage}
                  onChange={handlePerPage}
                  style={{
                    width: '25rem',
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
            <Col md='4'>
              <Select
                theme={selectThemeColors}
                isClearable={false}
                className='react-select'
                classNamePrefix='select'
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
            </Col>
            <Col md="4">
              <div className='d-flex align-items-center mb-sm-0 mb-1 mr-1'>
                <Label className='mb-0' for='search-invoice'>
                  Search:
            </Label>
                <Input
                  id='search-invoice'
                  className='ml-50 w-100'
                  type='text'
                  value={searchTerm}
                  onChange={e => handleFilter(e.target.value)}
                />
              </div>
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
          paginationComponent={CustomPagination}
          data={dataToRender()}
          subHeaderComponent={
            <CustomHeader
              handlePerPage={handlePerPage}
              rowsPerPage={rowsPerPage}
              searchTerm={searchTerm}
              handleFilter={handleFilter}
              downloadCSV={downloadCSV}
              storeData={store.allData}
              downloadPDF={downloadPDF}
            />
          }
        />
      </Card>
    </Fragment>
  )
}

export default UsersList
