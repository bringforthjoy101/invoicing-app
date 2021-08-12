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
  selectedUserUtilitiesTransactions: [],
  selectedUserUtilityTransactions: [],
  selectedUserTotalUtilityTransactions: 1,
  selectedUserUtilityTransactionParams: {},
  selectedUserBanksTransactions: [],
  selectedUserBankTransactions: [],
  selectedUserTotalBankTransactions: 1,
  selectedUserBankTransactionParams: {},
  selectedUserEscrowsTransactions: [],
  selectedUserEscrowTransactions: [],
  selectedUserTotalEscrowTransactions: 1,
  selectedUserEscrowTransactionParams: {}
}

const users = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_DATA':
      return { ...state, allData: action.data }
    case 'GET_FILTERED_USER_DATA':
      return {
        ...state,
        data: action.data,
        total: action.totalPages,
        params: action.params
      }
    case 'GET_USER':
      return { ...state, selectedUser: action.selectedUser }
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
      case 'GET_USER_ALL_UTILITIES_TRANSACTIONS':
        return { 
          ...state, 
          selectedUserUtilitiesTransactions: action.data
        }
      case 'GET_USER_UTILITY_TRANSACTIONS':
        return {
          ...state,
          selectedUserUtilityTransactions: action.data,
          selectedUserTotalUtilityTransactions: action.totalPages,
          selectedUserUtilityTransactionParams: action.params
        }
        case 'GET_USER_ALL_BANK_TRANSACTIONS':
          return { 
            ...state, 
            selectedUserBanksTransactions: action.data
          }
        case 'GET_USER_BANK_TRANSACTIONS':
          return {
            ...state,
            selectedUserBankTransactions: action.data,
            selectedUserTotalBankTransactions: action.totalPages,
            selectedUserBankTransactionParams: action.params
          }
          case 'GET_USER_ALL_ESCROW_TRANSACTIONS':
            return { 
              ...state, 
              selectedUserEscrowsTransactions: action.data
            }
          case 'GET_USER_ESCROW_TRANSACTIONS':
            return {
              ...state,
              selectedUserEscrowTransactions: action.data,
              selectedUserTotalEscrowTransactions: action.totalPages,
              selectedUserEscrowTransactionParams: action.params
            }
    default:
      return { ...state }
  }
}
export default users
