// ** Initial State
const initialState = {
  allData: [],
  data: [],
  total: 1,
  params: {},
  selectedReward: null,
  allHistory: [],
  history: []
}

const admins = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_REWARDS':
      return { ...state, allData: action.data }
    case 'GET_FILTERED_REWARDS':
      return {
        ...state,
        data: action.data,
        total: action.totalPages,
        params: action.params
      }
    case 'GET_REWARD':
      return { ...state, selectedReward: action.selectedReward }
      case 'GET_ALL_HISTORY':
      return { ...state, allHistory: action.history }
    case 'GET_FILTERED_HISTORY':
      return {
        ...state,
        hsitory: action.history,
        total: action.totalPages,
        params: action.params
      }
    default:
      return { ...state }
  }
}
export default admins
