import { paginateArray, sortCompare, apiRequest, swal } from '@utils'

// ** Get all Data
export const getAllData = () => {
  return async dispatch => {
    const response = await apiRequest({ url: '/admin/misc/feedbacks', method: 'GET' }, dispatch)
    console.log({response})
    if (response) {
      if (response.data.data && response.data.success) {
        await dispatch({
          type: 'GET_ALL_DATA',
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
    const { q = '', perPage = 10, page = 1, subject = null, created_at = ''} = params
    /* eslint-disable  */
    const queryLowered = q.toLowerCase()
    const dateLowered = created_at
    const filteredData = feedbacks.filter(
      feedback =>
        (feedback.email.toLowerCase().includes(queryLowered, dateLowered) || feedback.name.toLowerCase().includes(queryLowered,dateLowered)) &&
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

// get individual feedback
export const getFeedback = (feedbacks, id) => {
    console.log("contasss", feedbacks)
    return async dispatch => {
    const feedback = feedbacks.find(i => i.id === id)
    console.log(feedback)
    dispatch({
      type: 'GET_FEEDBACK',
      selectedFeedback: feedback
    })
  }
}