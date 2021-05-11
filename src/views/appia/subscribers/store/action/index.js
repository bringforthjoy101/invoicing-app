import axios from 'axios'
import { paginateArray, sortCompare, apiRequest, swal } from '@utils'

// ** Get all Data
export const getAllData = () => {
  return async dispatch => {
    const response = await apiRequest({ url: '/admin/misc/subscribers', method: 'GET' }, dispatch)
    if (response) {
      if (response.data.data && response.data.success) {
        await dispatch({
          type: 'GET_ALL_SUBSCRIBERS',
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

export const getFilteredData = (feedbacks, params) => {
  return async dispatch => {
    const { q = '', perPage = 10, page = 1, status = null, created_at = ""} = params
    /* eslint-disable  */
    const queryLowered = q.toLowerCase()
    const filteredData = feedbacks.filter(
      feedback => feedback.email.toLowerCase().includes(queryLowered, created_at) &&
      feedback.status === (status || feedback.status) &&
      feedback.created_at === (created_at || feedback.created_at)
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
