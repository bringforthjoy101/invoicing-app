import axios from 'axios'
import { paginateArray, sortCompare, apiRequest, swal } from '@utils'

export const apiUrl = process.env.REACT_APP_API_ENDPOINT

// ** Get all Data
export const getAllData = () => {
  return async dispatch => {
    const response = await apiRequest({url:'/admin/escrows', method:'GET'}, dispatch)
    console.log({response})
    if (response && response.data.data && response.data.success) {
        await dispatch({
          type: 'GET_ALL_ESCROW',
          data: response.data.data
        })
    } else {
      console.log(response)
      swal('Oops!', 'Something went wrong.', 'error')
    }
  }
}

// ** Get filtered data on page or row change
export const getFilteredData = (escrows, params) => {
  return async dispatch => {
    const { q = '', perPage = 10, page = 1, role = null, status = null } = params
    /* eslint-disable  */
    const queryLowered = q.toLowerCase()
    const filteredData = escrows.filter(
      escrow =>
        ( escrow.user_id.toLowerCase().includes(queryLowered)) &&
        escrow.role === (role || escrow.role) &&
        escrow.status === (status || escrow.status)
    )
    /* eslint-enable  */

    dispatch({
      type: 'GET_DATA',
      data: paginateArray(filteredData, perPage, page),
      totalPages: filteredData.length,
      params
    })
  }
}

// ** Get data on page or row change
export const getData = params => {
  return async dispatch => {
    await axios.get('/api/users/list/data', params).then(response => {
      dispatch({
        type: 'GET_DATA',
        data: response.data.users,
        totalPages: response.data.total,
        params
      })
    })
  }
}

//  Get User
export const getEscrow = (escrows, id) => {
  return async dispatch => {
    const escrow = escrows.find(i => i.user_id === id)
    dispatch({
      type: 'GET_ESCROW',
      selectedEscrow: escrow
    })
  }
}

// Get data

export const getAllUserEscrowTransactions = (user_id) => {
  return async dispatch => {
    const body = JSON.stringify({user_id})
    const response = await apiRequest({url:`/admin/escrows/${user_id}`, method:'GET'}, dispatch)
    if (response && response.data.data && response.data.success) {
        await dispatch({
          type: 'GET__ALL_USER_ESCROW_TRANSACTIONS',
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
      const { q = '', perPage = 10, page = 1, status = null } = params
      /* eslint-enable */

      const queryLowered = q.toLowerCase()
      // console.log({userTransactions}, typeof userTransactions)
      const filteredData = userTransactions.filter(
          transaction => {
            let found = false
            
              if ((transaction.trans_id || '').toLowerCase().includes(queryLowered)) {
                found = true
              }

            
              if ((transaction.trans_type || '').toLowerCase().includes(queryLowered)) {
                found = true
              }
            return found
          }
            /* eslint-disable operator-linebreak, implicit-arrow-linebreak */
            // (transaction.trans_id.toLowerCase().includes(queryLowered) ||
            // transaction.trans_type.toLowerCase().includes(queryLowered)) 
            // && transaction.invoiceStatus.toLowerCase() === (status.toLowerCase() || transaction.invoiceStatus.toLowerCase())
          
        )
        .sort(sortCompare('trans_id'))
        .reverse()
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
    console.log({body})
    const response = await apiRequest({url:`/admin/users/add`, method:'POST', body}, dispatch)
    console.log({response})
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
    // console.log({response})
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
  console.log("iuss", user_id)
  return async dispatch => {
    const body = JSON.stringify({user_id})
    console.log(user_id)
    const response = await apiRequest({url:`/admin/users/reset/`, method:'POST', body}, dispatch)
    console.log("resss", {response})
    if (response && response.data.success) {
      swal('Good!', `User password reset Sucessfully.`, 'success')
    } else {
      console.log(response)
      swal('Oops!', 'Somthing went wrong with your network.', 'error')
    }
  }
}