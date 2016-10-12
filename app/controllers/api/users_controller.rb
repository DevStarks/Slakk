class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      @user.channels = Channel.limit(2)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def check
    if User.find_by(username: params[:username])
      render json: ["Sorry username not available..."], status: 422
    else
      render json: {}
    end
  end

  def count
    render json: User.count
  end

  def search
    searchData = params[:searchData]
    t = User.arel_table
    @users = User.where(
      t[:username].matches("%#{searchData}%")
      .or(t[:first_name].matches("%#{searchData}%"))
      .or(t[:last_name].matches("%#{searchData}%"))
    )
    render :search_results
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
