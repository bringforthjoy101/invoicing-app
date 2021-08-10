// ** Initial State
const initialState = {
  allData: [],
  data: [],
  total: 1,
  params: {},
  selectedClaim: null,
  claimHistory: []
}

const ClaimedRewards = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_CLAIMED_REWARDS':
      return { ...state, allData: action.data }
    case 'GET_FILTERED_CLAIMED_DATA':
      return {
        ...state,
        data: action.data,
        total: action.totalPages,
        params: action.params
      }
    case 'GET_CLAIM':
      return { ...state, selectedClaim: action.selectedClaim }
      case 'GET_USER_CLAIM_HISTORY':
      return {...state, claimHistory: action.data}
    default:
      return { ...state }
  }
}
export default ClaimedRewards
