class UsersController < ApplicationController

  def show
    @user = User.find(params[:id]);
    render :json => @user.as_json(include: :locations)
  end

  def create
  end

  def update
  end

  def destroy
  end


end
