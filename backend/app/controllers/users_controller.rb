class UsersController < ApplicationController

  def index
    @users = User.all;
    render json: @users
  end

  def show
    @user = User.find(params[:id]);
    render json: @user.as_json(include: :locations)
  end

  def create
    @user = User.new(username: params[:username])
<<<<<<< HEAD
    user_validation(false)
  end

  def update
    @user = User.find(params[:id]);
    user_validation(true)
=======
    user_validation
>>>>>>> wintana
  end

  def destroy
    @user = User.find(params[:id])
    UserLocation.destroy_by(user_id: @user.id)
    @user.delete
  end

  private

  def user_validation()
    if @user.valid?
      @user = User.find_or_create_by(username: @user.username)
      render json: @user.as_json(include: :locations)
    else
      render json: {errors: @user.errors.messages}
    end
  end
end
