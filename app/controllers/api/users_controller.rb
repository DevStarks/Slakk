class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def check
    if User.find_by(username: params[:username])
      render json: ["username not available"], status: 422
    else
      render json: {}
    end
  end

  def user_params
    params.require(:user).permit(
      :username,
      :first_name,
      :last_name,
      :picture_url,
      :password,
      :session_token
    )
  end

  def username_check_params
    params.permit(:username)
  end
end
