export const tags = (state = {}, action) => {
  switch (action.type) {
    case 'GOT_TAGS':
      return action.tags;
    default:
      return state;
  }
};

export const self = (state = {}, action) => {
  switch (action.type) {
    case 'FOUND_SELF':
      return action.self;
    default:
      return state;
  }
};
