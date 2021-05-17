// ** Initial State
const initialState = {
  allData: [],
  data: [],
  total: 1,
  params: {},
  selectedUser: null,
  selectedUserAllTransactions: [],
  selectedUserTransactions: [],
  selectedUserTotalTransactions: 1,
  selectedUserTransactionParams: {},
  userDetail: null
}

const users = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_DATA':
      return { ...state, allData: action.data }
    case 'GET_DATA':
      return {
        ...state,
        data: action.data,
        total: action.totalPages,
        params: action.params
      }
    case 'GET_USER':
      return { ...state, selectedUser: action.selectedUser }
    case 'USER_DETAIL':
      return { ...state, userDetail: action.userDetail }
    case 'GET_USER_ALL_TRANSACTIONS':
      return { 
        ...state, 
        selectedUserAllTransactions: action.data
      }
    case 'GET_USER_TRANSACTIONS':
      return {
        ...state,
        selectedUserTransactions: action.data,
        selectedUserTotalTransactions: action.totalPages,
        selectedUserTransactionParams: action.params
      }
    default:
      return { ...state }
  }
}
export default users
