const APIUtil = {
    followUser: id => {
        $.ajax({
            url: `/users/${id}/follow`,
            method: 'POST',
            // data: {user: {id}},
            dataType: 'json'
        });
    },
  
    unfollowUser: id => {
        $.ajax({
            url: `/users/${id}/follow`,
            method: 'DELETE',
            // data: {user: {id}},
            dataType: 'json'
        });
    }
  };
  
  module.exports = APIUtil;