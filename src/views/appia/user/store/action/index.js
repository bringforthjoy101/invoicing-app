import { paginateArray, sortCompare, apiRequest, swal } from '@utils'

export const apiUrl = process.env.REACT_APP_API_ENDPOINT

// ** Get all Data
export const getAllData = () => {
  return async dispatch => {
    const response = await apiRequest({url:'/admin/users', method:'GET'}, dispatch)
    if (response && response.data.data && response.data.success) {
        await dispatch({
          type: 'GET_ALL_DATA',
          data: response.data.data
        })
    } else {
      console.log(response)
      swal('Oops!', 'Something went wrong.', 'error')
    }
  }
}

export const getFilteredData = (users, params) => {
  return async dispatch => {
    const { q = '', perPage = 10, page = 1, status = null } = params

    /* eslint-disable  */
    const queryLowered = q.toLowerCase()
    const filteredData = users.filter(
      user =>
        (user.email.toLowerCase().includes(queryLowered) || user.names.toLowerCase().includes(queryLowered) || user.referral_code.toLowerCase().includes(queryLowered)) &&
        user.status === (status || user.status)
    )
    /* eslint-enable  */

    dispatch({
      type: 'GET_FILTERED_USER_DATA',
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

//  Get User
export const getUser = (users, id) => {
  return async dispatch => {
    const user = users.find(i => i.user_id === id)
    dispatch({
      type: 'GET_USER',
      selectedUser: user
    })
  }
}

// Get data

export const getUserAllTransactions = (user_id) => {
  return async dispatch => {
    const body = JSON.stringify({user_id})
    const response = await apiRequest({url:'/admin/users/transactions/all', method:'POST', body}, dispatch)
    if (response && response.data.data && response.data.success) {
        await dispatch({
          type: 'GET_USER_ALL_TRANSACTIONS',
          data: response.data.data
        })
    } else {
      console.log(response)
      swal('Oops!', 'Somthing went wrong with your network.', 'error')
    }
  }
}

export const getFilteredUserTransactions = (userTransactions, params) => {
  return async dispatch => {
      const { q = '', perPage = 10, page = 1 } = params
      /* eslint-enable */

    const queryLowered = q.toLowerCase()
    const filteredData = userTransactions.filter(
      transaction => (transaction.trans_id.toLowerCase().includes(queryLowered) || transaction.trans_type.toLowerCase().includes(queryLowered)))
      /* eslint-enable  */
        await dispatch({
          type: 'GET_USER_TRANSACTIONS',
          data: paginateArray(filteredData, perPage, page),
          totalPages: filteredData.length,
          params
        })
  }
}

export const addFunds = ({user_id, reason, amount}) => {
  return async dispatch => {
    const body = JSON.stringify({user_id, reason, amount})
    const response = await apiRequest({url:`/admin/users/add`, method:'POST', body}, dispatch)
    if (response && response.data.success) {
      swal('Good!', `Funds of ${amount} was successfully added and is pending aproval!.`, 'success')
    } else {
      console.log(response)
      swal('Oops!', 'Somthing went wrong with your network.', 'error')
    }
  }
}

export const deductFunds = ({user_id, reason, amount}) => {
  return async dispatch => {
    const body = JSON.stringify({user_id, reason, amount})
    const response = await apiRequest({url:`/admin/users/deduct`, method:'POST', body}, dispatch)
    if (response && response.data.success) {
      swal('Good!', `Funds of ${amount} was successfully deducted and is pending aproval!.`, 'success')
    } else {
      console.log(response)
      swal('Oops!', 'Somthing went wrong with your network.', 'error')
    }
  }
}

// ACtivate  User account
export const activateUser = (users, id) => {
  const user = users.find(i => i.user_id === id)
  return async dispatch => {
    const response = await apiRequest({url:`/admin/users/activate/${user.user_id}`, method:'GET'}, dispatch)
      if (response) {
        if (response.data.success) {
          dispatch({
            type: 'GET_USER',
            selectedUser:{...user, status: "Active"}
          })
          swal('Good!', `${response.data.message}.`, 'success')
          dispatch(getAllData())
        } else {
          swal('Oops!', `${response.data.message}.`, 'error')
        }
      } else {
        swal('Oops!', 'Something went wrong with your network.', 'error')
      }
      
  }
}

// deactivate User account
export const deactivateUser = (users, id) => {
    const user = users.find(i => i.user_id === id)
    return async dispatch => {
    const response = await apiRequest({url:`/admin/users/deactivate/${user.user_id}`, method:'GET'}, dispatch)
      if (response) {
        if (response.data.success) {
          dispatch({
            type: 'GET_USER',
            selectedUser:{...user, status: "Inactive"}
          })
          swal('Good!', `${response.data.message}.`, 'success')
          dispatch(getAllData())
        } else {
          swal('Oops!', `${response.data.message}.`, 'error')
        }
      } else {
        swal('Oops!', 'Something went wrong with your network.', 'error')
      }
      
  }
}

//  Reset User Password
export const passwordReset = ({user_id}) => {
  return async dispatch => {
    const body = JSON.stringify({user_id})
    const response = await apiRequest({url:`/admin/users/reset/`, method:'POST', body}, dispatch)
    if (response && response.data.success) {
      swal('Good!', `User password reset Sucessfully.`, 'success')
    } else {
      console.log(response)
      swal('Oops!', 'Somthing went wrong with your network.', 'error')
    }
  }
}

// Blacklist A User
export const blacklistUser = ({user_id, reason}) => {
  return async dispatch => {
    const body = JSON.stringify({user_id, reason})
    const response = await apiRequest({url:`/admin/users/blacklist/${user_id}`, method:'GET', body}, dispatch)
    if (response && response.data.success) {
      swal('Good!', `${response.data.message}.`, 'success')
    } else {
      console.log(response)
      swal('Oops!', 'Somthing went wrong with your network.', 'error')
    }
  }
}

// Blacklist A User Asset
export const blacklistUserAsset = ({user_id, reason}, phone) => {
  return async dispatch => {
    const body = JSON.stringify({user_id, reason})
    const response = await apiRequest({url:`/admin/blacklist-asset/${phone}`, method:'GET', body}, dispatch)
    console.log({response})
    if (response && response.data.success) {
      swal('Good!', `${response.data.message}.`, 'success')
    } else {
      console.log(response)
      swal('Oops!', 'Somthing went wrong with your network.', 'error')
    }
  }
}
