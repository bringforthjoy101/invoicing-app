import { paginateArray, sortCompare, apiRequest, swal } from '@utils'

// ** Get all Data
export const getAllData = () => {
  return async dispatch => {
    const response = await apiRequest({ url: '/admin/misc/contacts', method: 'GET' }, dispatch)
    console.log({response})
    if (response) {
      if (response.data.data && response.data.success) {
        await dispatch({
          type: 'GET_ALL_CONTACT_DATA',
          data: response.data.data
        })
      } else {
        console.log(response.error)
      }
    } else {
      swal('Oops!', 'Somthing went wrong with your network.', 'error')
    }

  }
}

// ** Get filtered data on page or row change
export const getFilteredData = (contacts, params) => {
  return async dispatch => {
    const { q = '', perPage = 10, page = 1, subject = null, created_at = null} = params
    /* eslint-disable  */
    const queryLowered = q.toLowerCase()
    const filteredData = contacts.filter(
      contact =>
        (contact.email.toLowerCase().includes(queryLowered) || contact.name.toLowerCase().includes(queryLowered)) &&
        contact.subject === (subject || contact.subject)
    )
    /* eslint-enable  */

    dispatch({
      type: 'GET_FILTERED_CONTACTS_DATA',
      data: paginateArray(filteredData, perPage, page),
      totalPages: filteredData.length,
      params
    })
  }
}

// get individual contact
export const getContact = (contacts, id) => {
    console.log("contasss", contacts)
    return async dispatch => {
    const contact = contacts.find(i => i.id === id)
    console.log(contact)
    dispatch({
      type: 'GET_CONTACT',
      selectedContact: contact
    })
  }
}