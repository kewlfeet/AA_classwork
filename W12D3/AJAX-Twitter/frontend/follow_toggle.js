const APIUtil = require('./util/api_util')

class FollowToggle {
    constructor($el){
        this.$el = $el;
        // debugger
        this.userId = this.$el.data("user-id");
        // debugger;
        this.followState = (this.$el.data("initial-follow-state")) ? 'followed' : 'unfollowed'; 
        this.render();
        this.handleClick();
    }
    render() {
        if(this.followState === 'unfollowed'){
            this.$el.prop('disabled', false);
            this.$el.html('Follow!');
        }else if(this.followState === 'followed') {
            this.$el.prop('disabled', false);
            this.$el.html('Unfollow!');
        }else if(this.followState === 'following'){
            this.$el.prop('disabled', true);
        }else if(this.followState === 'unfollowing') {
            this.$el.prop('disabled', true);
        }
    }

    handleClick() {
        this.$el.on("click", (event) => {
            event.preventDefault()
            
            if (this.followState === 'followed') {
                this.followState = 'unfollowed';
                this.render();
                const id = this.userId;
                APIUtil.followUser(id);
                
            } else if (this.followState === 'unfollowed') {
                this.followState = 'followed';
                this.render();
                const id = this.userId;
                APIUtil.unfollowUser(id);
            }
            
        });
    }
    

}
module.exports = FollowToggle;