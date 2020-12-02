class LocationsController < ApplicationController

  def index
    @locations = Location.all;
    render json: @locations, :status => :ok;
  end

  def show
    @location = Location.find(params[:id]);
    render json: @location, :status => :ok;
  end
end
