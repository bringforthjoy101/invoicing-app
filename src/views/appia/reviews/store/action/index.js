import { paginateArray, sortCompare, apiRequest, swal } from '@utils'

//  Get all Data
export const getAllData = () => {
  return async dispatch => {
    const response = await apiRequest({ url: 'admin/misc/feedbacks', method: 'GET' }, dispatch)
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
export const getFilteredData = (reviews, params) => {
  return async dispatch => {
    const { q = '', perPage = 10, page = 1, feature = null} = params

    /* eslint-disable  */
    const queryLowered = q.toLowerCase()
    const filteredData = reviews.filter(
      review =>
        (review.email.toLowerCase().includes(queryLowered) || review.name.toLowerCase().includes(queryLowered)) &&
        review.feature === (feature || review.feature)
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

// get individual Review
export const getReview = (reviews, id) => {
  return async dispatch => {
    const review = reviews.find(i => i.id === id)
    dispatch({
      type: 'GET_REVIEW',
      selectedReview: review
    })
  }
}