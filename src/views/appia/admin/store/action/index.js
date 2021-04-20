import axios from 'axios'
import { paginateArray, sortCompare, apiRequest, swal } from '@utils'

// ** Get all Data
export const getAllData = () => {
  return async dispatch => {
      const response = await apiRequest({url:'/admin/get_admins', method:'GET'}, dispatch)
        console.log({response})
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
    const { q = '', perPage = 10, page = 1, role = null, currentPlan = null, status = null } = params

    /* eslint-disable  */
    const queryLowered = q.toLowerCase()
    const filteredData = admins.filter(
      admin =>
        (admin.email.toLowerCase().includes(queryLowered) || admin.first_name.toLowerCase().includes(queryLowered) || admin.last_name.toLowerCase().includes(queryLowered)) &&
        admin.role_name === (role || admin.role_name) &&
        admin.currentPlan === (currentPlan || admin.currentPlan) &&
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

// ** Get data on page or row change
// export const getData = params => {
//   return async dispatch => {
//     await axios.get('/api/users/list/data', params).then(response => {
//       dispatch({
//         type: 'GET_DATA',
//         data: response.data.users,
//         totalPages: response.data.total,
//         params
//       })
//     })
//   }
// }


export const getAdmin = (admins, id) => {
  console.log({admins, id})
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
    const response = await apiRequest({url:'/admin/activities', method:'GET'}, dispatch)
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

export const activateOrDeactivateAdmin = (admins, id, action) => {
  console.log({admins})
  return async dispatch => {
    const response = await apiRequest({url:`/admin/${action}/${id}`, method:'POST'}, dispatch)
      console.log({response})
      if (response) {
        if (response.data.success) {
          swal('Good!', `${response.data.message}.`, 'success')
          // dispatch(getAdmin(admins, id))
        } else {
          swal('Oops!', `${response.data.message}.`, 'error')
        }
      } else {
        swal('Oops!', 'Something went wrong with your network.', 'error')
      }
      
  }
}