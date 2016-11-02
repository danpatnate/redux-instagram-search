import jsonp from 'jsonp';

export const SEARCH_USERS = 'SEARCH_USERS';
export const FOUND_SELF = 'FOUND_SELF';
export const GOT_TAGS = 'GOT_TAGS';

export const searchUsers = (dispatch) => {
  jsonp('https://api.instagram.com/v1/users/search?q=dannynate&access_token=', null, (err, data) => {
    if (err) {
      console.error(err.message);
    } else {
      dispatch({
        type: SEARCH_USERS,
        users: data.data,
      });
    }
  });
};

export const getSelf = (dispatch) => {
  jsonp('https://api.instagram.com/v1/users/self?access_token=', null, (err, data) => {
    if (err) {
      console.error(err.message);
    } else {
      dispatch({
        type: FOUND_SELF,
        self: data.data,
      });
    }
  });
};

export const getRecentTags = (dispatch, tag) => {
  jsonp(`https://api.instagram.com/v1/tags/${tag}/media/recent?access_token=`, null, (err, data) => {
    if (err) {
      console.error(err.message);
    } else {
      dispatch({
        type: GOT_TAGS,
        tags: data,
      });
    }
  });
};
