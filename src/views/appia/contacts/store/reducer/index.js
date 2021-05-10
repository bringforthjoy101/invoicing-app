// ** Initial State
const initialState = {
  allData: [],
  data: [],
  total: 1,
  params: {},
  selectedContact: null
}

const contacts = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_CONTACT_DATA':
      return { ...state, allData: action.data }
    case 'GET_FILTERED_CONTACTS_DATA':
      return {
        ...state,
        data: action.data,
        total: action.totalPages,
        params: action.params
      }
    case 'GET_CONTACT':
      return { ...state, selectedContact: action.selectedContact }
    default:
      return { ...state }
  }
}
export default contacts