class UsersController < ApplicationController
    #before_action :authenticate_user!
    #before_action :only_current_user
    
    def show
        @user = User.find(params[:id])
    end
end