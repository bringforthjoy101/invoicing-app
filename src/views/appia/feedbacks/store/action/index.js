import axios from 'axios'
import { paginateArray, sortCompare, apiRequest, swal } from '@utils'

// ** Get all Data
export const getAllData = () => {
  return async dispatch => {
    const response = await apiRequest({ url: '/admin/misc/feedbacks', method: 'GET' }, dispatch)
    if (response) {
      if (response.data.data && response.data.success) {
        await dispatch({
          type: 'GET_ALL_FEEDBACKS',
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
export const getFilteredData = (feedbacks, params) => {
  return async dispatch => {
    const { q = '', perPage = 10, page = 1, role = null, subject = null } = params

    /* eslint-disable  */
    const queryLowered = q.toLowerCase()
    const filteredData = feedbacks.filter(
      feedback =>
        (feedback.email.toLowerCase().includes(queryLowered) || feedback.name.toLowerCase().includes(queryLowered)) &&
        feedback.subject === (subject || feedback.subject)
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

export const getFeedback = (feedbacks, id) => {
  return async dispatch => {
    const feedback = feedbacks.find(i => i.id === id)
    console.log("feedback", feedback)
    dispatch({
      type: 'GET_FEEDBACK',
      selectedFeedback: feedback
    })
  }
}


export const getAdminActivity = () => {
  return async dispatch => {
    const response = await apiRequest({ url: '/feedback/activities', method: 'GET' }, dispatch)
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

// activate feedback account
export const activateAdmin = (feedbacks, id) => {
  const feedback = feedbacks.find(i => i.admin_id === id)
  return async dispatch => {
    const response = await apiRequest({ url: `/feedback/activate/${feedback.admin_id}`, method: 'GET' }, dispatch)
    if (response) {
      if (response.data.success) {
        dispatch({
          type: 'GET_ADMIN',
          selectedAdmin: {...feedback, status: "Active"}
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

// deactivate feedback account
export const deactivateAdmin = (feedbacks, id) => {
  console.log({ feedbacks, id })
  const feedback = feedbacks.find(i => i.admin_id === id)
  return async dispatch => {
    const response = await apiRequest({ url: `/feedback/deactivate/${feedback.admin_id}`, method: 'GET' }, dispatch)
    if (response) {
      if (response.data.success) {
        dispatch({
          type: 'GET_ADMIN',
          selectedAdmin: {...feedback, status: "Inactive"}
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
export const getAllRoles = (feedbacks) => {
  return async dispatch => {
    const response = await apiRequest({ url: '/feedback/admin_role', method: 'GET' }, dispatch)
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
    const response = await apiRequest({ url: '/feedback/change_role/', method: 'POST', body }, dispatch)
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

