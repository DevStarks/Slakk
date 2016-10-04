class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if @user
      login!(@user)
      render 'api/users/show.json.jbuilder'
    else
      render json: ["invalid credentials"], status: 422
    end
  end

  def destroy
    if !logged_in?
      render json: ["Not logged in!"], status: 404
    else
      logout!
      render json: {}
    end
  end

  def session_params
    params.require(:user).permit(:username, :password)
  end
end
