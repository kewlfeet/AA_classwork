class ApplicationController < ActionController::Base
    helper_method :current_user, :signed_in?
    private
    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def signed_in?
        !!current_user
    end
    
    def sign_in(user)
        @current_user = user
        session[:session_token] = user.reset_session_token!
    end

    def sign_out
        current_user.try(:reset_session_token!)
        session[:session_token] = nil
    end
# In Rails, try() lets you call methods on an object without having to 
# worry about the possibility of that object being nil and thus raising an exception.
#  I know I sometimes forget about it, and I’ve looked at enough code from other developers 
#  to know that I’m not the only one. So today I’d like to give you a brief introduction to 
#  the method (and hopefully ingrain it a little deeper into my own brain). Let’s look at some
#   very simple code from a Rails view.

# **Disclaimer:** While handy, this technique is not a replacement for good techniques like 
# validations and default database values. Don't get lazy.
    def require_signed_in!
        redirect_to new_session_url unless signed_in?
    end
end
