class Api::SessionsController < ApplicationController
#     skip_before_action :verify_authenticity_token
# protect_from_forgery with: :null_session
    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user.nil?
            render json: ['Nope. Wrong credentials!'], status: 401
        else
            login!(@user)
            render 'api/users/show';
        end
    end
    
    def destroy
        @user = current_user
        if @user
            logout!
            render "api/users/show"
        else
            render json: ["Nobody signed in"], status: 404
        end
    end
end
