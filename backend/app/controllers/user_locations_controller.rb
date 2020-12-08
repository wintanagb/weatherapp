class UserLocationsController < ApplicationController
  def create
    @location_list = UserLocation.new(fetch_params);
    location_list_validation
  end

  def destroy
    @location_list = UserLocation.find(params[:id]);
    @location_list.destroy();
    render json: {message: "Successfully Removed"}
  end

  private

  def fetch_params
    params.require(:location_list).permit(:user_id, :location_id)
  end

  def location_list_validation
    if @location_list.valid?
      @location_list.save
      render json: @location_list
    else
      render json: {errors: @location_list.errors.messages}
    end
  end

end
