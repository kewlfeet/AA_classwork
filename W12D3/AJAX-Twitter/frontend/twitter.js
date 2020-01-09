const FollowToggle = require('./follow_toggle');
const UsersSearch = require('./users_search');
$(() => {
    const $buttons = $(".follow-toggle");
    // debugger;
    $buttons.each(function(idx, ele)  {
        new FollowToggle($(ele))
    }) 
    const $nav = $("nav.users-search");
    $nav.each(function(idx, ele)  {
        new UsersSearch($(ele))
    })
});

