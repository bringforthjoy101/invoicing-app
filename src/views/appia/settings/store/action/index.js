import { paginateArray, apiRequest, swal } from '@utils'

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

export const getSetting = (settings, id) => {
  return async dispatch => {
    const setting = settings.find(i => i.id === id)
    dispatch({
      type: 'GET_SETTING',
      selectedSetting: setting
    })
  }
}

export const updateSetting = (values) => {
  return async dispatch => {
    const body = JSON.stringify(values)
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