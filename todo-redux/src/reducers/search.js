const search = (state = '', action) => {
  if (action.type === 'SEARCH') {
    return action.text;
  }
  return state;
};

export default search;
