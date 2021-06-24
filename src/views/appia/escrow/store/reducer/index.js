// ** Initial State
const initialState = {
  allData: [],
  data: [],
  total: 1,
  params: {},
  selectedEscrow: null,
  selectedUserTransactions: []
}

const users = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_ESCROW':
      return { ...state, allData: action.data }
    case 'GET_DATA':
      return {
        ...state,
        data: action.data,
        total: action.totalPages,
        params: action.params
      }
    case 'GET_ESCROW':
      return { ...state, selectedEscrow: action.selectedEscrow }
    case 'GET__ALL_USER_ESCROW_TRANSACTIONS':
      return { 
        ...state, 
        selectedUserTransactions: action.data
      }
    default:
      return { ...state }
  }
}
export default users
