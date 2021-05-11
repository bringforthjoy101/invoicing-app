import axios from 'axios'
import { paginateArray, sortCompare, apiRequest, swal } from '@utils'

// ** Get all Data
export const getAllData = () => {
  return async dispatch => {
    const response = await apiRequest({ url: '/admin/get_admins', method: 'GET' }, dispatch)
    if (response) {
      if (response.data.data && response.data.success) {
        await dispatch({
          type: 'GET_ALL_ADMIN_DATA',
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
export const getFilteredData = (admins, params) => {
  return async dispatch => {
    const { q = '', perPage = 10, page = 1, role = null, status = null } = params

    /* eslint-disable  */
    const queryLowered = q.toLowerCase()
    const filteredData = admins.filter(
      admin =>
        (admin.email.toLowerCase().includes(queryLowered) || admin.first_name.toLowerCase().includes(queryLowered) || admin.last_name.toLowerCase().includes(queryLowered)) &&
        admin.role_name === (role || admin.role_name) &&
        admin.status === (status || admin.status)
    )
    /* eslint-enable  */

    dispatch({
      type: 'GET_FILTERED_ADMIN_DATA',
      data: paginateArray(filteredData, perPage, page),
      totalPages: filteredData.length,
      params
    })
  }
}

export const getAdmin = (admins, id) => {
  return async dispatch => {
    const admin = admins.find(i => i.admin_id === id)
    dispatch({
      type: 'GET_ADMIN',
      selectedAdmin: admin
    })
  }
}

export const getAdminActivity = () => {
  return async dispatch => {
    const response = await apiRequest({ url: '/admin/activiy/', method: 'GET' }, dispatch)
    console.log({response})
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

// activate admin account
export const activateAdmin = (admins, id) => {
  const admin = admins.find(i => i.admin_id === id)
  return async dispatch => {
    const response = await apiRequest({ url: `/admin/activate/${admin.admin_id}`, method: 'GET' }, dispatch)
    if (response) {
      if (response.data.success) {
        dispatch({
          type: 'GET_ADMIN',
          selectedAdmin: {...admin, status: "Active"}
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

// deactivate admin account
export const deactivateAdmin = (admins, id) => {
  console.log({ admins, id })
  const admin = admins.find(i => i.admin_id === id)
  return async dispatch => {
    const response = await apiRequest({ url: `/admin/deactivate/${admin.admin_id}`, method: 'GET' }, dispatch)
    if (response) {
      if (response.data.success) {
        dispatch({
          type: 'GET_ADMIN',
          selectedAdmin: {...admin, status: "Inactive"}
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
export const getAllRoles = (admins) => {
  return async dispatch => {
    const response = await apiRequest({ url: '/admin/admin_role', method: 'GET' }, dispatch)
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
    const response = await apiRequest({ url: '/admin/change_role/', method: 'POST', body }, dispatch)
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

