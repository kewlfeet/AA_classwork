class SessionsController < ApplicationController

    def new
      render :new
    end

    def create
      user = User.find_by_credentials(params[:user_name], params[:password])
      if user
        session[:session_token] = user.reset_session_token!
        flash[:success] = "Login Successful"
        redirect_to cats_url
      else
        flash[:error] = "Invalid Email/Password"
        render :new, status: 401
      end
    end

    def destroy
      if current_user 
        current_user.reset_session_token!
        session[:session_token] = nil
      end
    end

end