class SubsController < ApplicationController
  
    def index
        @subs = Sub.all
        render :index
    end

    def new
        #    <input type="hidden" name="sub[moderator_id]" value="<%current_user.id%>">
       if signed_in?
        @sub = Sub.new
        render :new
       else
        redirect_to new_session_url
       end
    end

    def create
        
        @sub = Sub.new(sub_params)
        @sub.moderator_id = current_user.id

        if @sub.save
            redirect_to subs_url
        else
            flash.now[:errors] = @sub.errors.full_messages
            render :new
        end
    end

    def edit
        @sub = Sub.find(params[:id]) #init mod id =4 
        # current user =2
        # debugger
        if @sub.moderator_id == current_user.id
            render :edit
        else
            redirect_to subs_url
        end
        
    end

    def update
        @sub = Sub.find_by(moderator_id: current_user.id)
        @sub.update_attributes(sub_params)
        redirect_to sub_url(@sub.id)
    end

    def show
        @sub = Sub.find(params[:id])
        render :show
    end



    
    private
    def sub_params
        params.require(:sub).permit(:title, :description)
    end
end
