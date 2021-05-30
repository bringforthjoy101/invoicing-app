// ** Initial State
const initialState = {
  allData: [],
  data: [],
  total: 1,
  params: {},
  selectedReward: null
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
    default:
      return { ...state }
  }
}
export default admins
