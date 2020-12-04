class SessionsController < ApplicationController

  def create
    @user = User.find_by(username: params[:username])
    if @user && @user.authenticate(params[:password]) then
      session[:user_id] = @user.id
      render json: @user, except: [:password_digest]
    else
      render json: "Login Failed: Invalid Password or Username"
    end
  end

  def logout
    session.destroy
  end

end
