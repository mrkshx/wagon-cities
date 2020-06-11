export default function(state, action) {
  if (state === undefined) {
    return null;
  }

  switch (action.type) {
    case 'SELECT_CITIES':
      return action.payload;
    default:
      return state;
  }
}
