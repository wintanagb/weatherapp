class UsersController < ApplicationController

  def show
    @user = User.find(params[:id]);
    render json: @user.as_json(include: :locations)
  end

  def create
    @user = User.new(username: params[:username])
    user_validation(false)

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

  def user_validation(shouldUpdate)
    byebug
    if @user.valid?
      if shouldUpdate
        @user.update(username: params[:username])
      else
        @user.save
      end
      render json: @user
    else
      render json: {errors: @user.errors.messages}
    end
  end
end
