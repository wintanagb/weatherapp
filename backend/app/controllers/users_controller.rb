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
    @user = User.new(params[:user])
    user_validation(false);

    session[:user_id] = @user.id
    #Log in user
  end

  def update
    @user = User.find(params[:id]);
    user_validation(true)
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
