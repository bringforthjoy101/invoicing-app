// ** Initial State
const initialState = {
  allData: [],
  data: []
}

const admins = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_SETTINGS':
      return { ...state, allData: action.data }
    default:
      return { ...state }
  }
}
export default admins
