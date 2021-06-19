import axios from 'axios'
import { paginateArray, sortCompare, apiRequest, swal } from '@utils'

// ** Get all Data
export const getAllData = () => {
  return async dispatch => {
    const response = await apiRequest({ url: '/admin/settings', method: 'GET' }, dispatch)
    console.log({response})
    if (response) {
      if (response.data.data && response.data.success) {
        await dispatch({
          type: 'GET_ALL_SETTINGS',
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
export const getFilteredData = (settings, params) => {
  return async dispatch => {
    const { q = '', perPage = 10, page = 1, role = null} = params

    /* eslint-disable  */
    const queryLowered = q.toLowerCase()
    const filteredData = settings.filter(
      setting =>
        (setting.name.toLowerCase().includes(queryLowered))
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

export const getSetting = (settings, id) => {
  return async dispatch => {
    const setting = settings.find(i => i.id === id)
    dispatch({
      type: 'GET_SETTING',
      selectedSetting: setting
    })
  }
}

export const updateSetting = ({payload}) => {
  return async dispatch => {
    const body = JSON.stringify({payload})
    console.log({body})
    const response = await apiRequest({url:`/admin/settings/update`, method:'POST', body}, dispatch)
    console.log({response})
    if (response && response.data.success) {
      swal('Good!', `${response.data.message}.`, 'success')
      dispatch(getAllData())
    } else {
      console.log(response)
      swal('Oops!', 'Somthing went wrong with your network.', 'error')
    }
  }
}