const initialState = {
  activeTheme: 'yeti',
  themes: [
    'cosmo',
    'yeti',
    'solar',
  ],
}

function uiReducer(state = initialState, action) {
  switch (action.type) {
    case 'ui.changeTheme': {
      return { ...state, activeTheme: action.theme }
    }
    default:
      return state
  }
}

export default uiReducer
