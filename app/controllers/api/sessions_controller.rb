class Api::SessionsController < ApplicationController
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
        if !logged_in?
            render json: ['There is not a current user to log out.'], status: 401
        end
        logout!
        render json: { message: '{}' }
    end
end
