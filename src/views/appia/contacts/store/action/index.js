import axios from 'axios'
import { paginateArray, sortCompare, apiRequest, swal } from '@utils'

// ** Get all Data
export const getAllData = () => {
  return async dispatch => {
    const response = await apiRequest({ url: '/admin/misc/contacts', method: 'GET' }, dispatch)
    if (response) {
      if (response.data.data && response.data.success) {
        await dispatch({
          type: 'GET_ALL_CONTACTS',
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
    const { q = '', perPage = 10, page = 1, role = null, status = null } = params

    /* eslint-disable  */
    const queryLowered = q.toLowerCase()
    const filteredData = contacts.filter(
      contact =>
        (contact.email.toLowerCase().includes(queryLowered) || contact.first_name.toLowerCase().includes(queryLowered) || contact.last_name.toLowerCase().includes(queryLowered)) &&
        contact.role_name === (role || contact.role_name) &&
        contact.status === (status || contact.status)
    )
    /* eslint-enable  */

    dispatch({
      type: 'GET_FILTERED_DATA',
      data: paginateArray(filteredData, perPage, page),
      totalPages: filteredData.length,
      params
    })
  }
}

export const getContact = (contacts, id) => {
  return async dispatch => {
    const contact = contacts.find(i => i.admin_id === id)
    dispatch({
      type: 'GET_CONTACT',
      selectedContact: contact
    })
  }
}


export const getAdminActivity = () => {
  return async dispatch => {
    const response = await apiRequest({ url: '/contact/activities', method: 'GET' }, dispatch)
    if (response) {
      if (response.data.data && response.data.success) {
        await dispatch({
          type: 'GET_ALL_ADMIN_ACTIVITY',
          data: response.data.data
        })
      } else {
        console.log(response.error)
      }
    } else {
      swal('Oops!', 'Something went wrong with your network.', 'error')
    }

  }
}

// activate contact account
export const activateAdmin = (contacts, id) => {
  const contact = contacts.find(i => i.admin_id === id)
  return async dispatch => {
    const response = await apiRequest({ url: `/contact/activate/${contact.admin_id}`, method: 'GET' }, dispatch)
    if (response) {
      if (response.data.success) {
        dispatch({
          type: 'GET_ADMIN',
          selectedAdmin: {...contact, status: "Active"}
        })
        swal('Good!', `${response.data.message}.`, 'success')
        await dispatch(getAllData())
      } else {
        swal('Oops!', `${response.data.message}.`, 'error')
      }
    } else {
      swal('Oops!', 'Something went wrong with your network.', 'error')
    }

  }
}

// deactivate contact account
export const deactivateAdmin = (contacts, id) => {
  console.log({ contacts, id })
  const contact = contacts.find(i => i.admin_id === id)
  return async dispatch => {
    const response = await apiRequest({ url: `/contact/deactivate/${contact.admin_id}`, method: 'GET' }, dispatch)
    if (response) {
      if (response.data.success) {
        dispatch({
          type: 'GET_ADMIN',
          selectedAdmin: {...contact, status: "Inactive"}
        })
        swal('Good!', `${response.data.message}.`, 'success')
        await dispatch(getAllData())
      } else {
        swal('Oops!', `${response.data.message}.`, 'error')
      }
    } else {
      swal('Oops!', 'Something went wrong with your network.', 'error')
    }

  }
}

// Get all roles
export const getAllRoles = (contacts) => {
  return async dispatch => {
    const response = await apiRequest({ url: '/contact/admin_role', method: 'GET' }, dispatch)
    console.log({response})
    if (response) {
      if (response.data.data && response.data.success) {
        await dispatch({
          type: 'GET_ALL_ROLES',
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

// Get all roles
export const changeAdminRole = (admin_id, new_role_id) => {
  console.log(admin_id, new_role_id)
  return async dispatch => {
    const body = JSON.stringify({admin_id, new_role_id})
    const response = await apiRequest({ url: '/contact/change_role/', method: 'POST', body }, dispatch)
    console.log({response})
    if (response) {
      if (response.data.success) {
        swal('Good!', `${response.data.message}.`, 'success')
      } else {
        swal('Oops!', `${response.data.message}.`, 'error')
      }
    } else {
      // console.log(response.error)
      swal('Oops!', 'Somthing went wrong with your network.', 'error')
    }

  }
}

