class LocationsController < ApplicationController

  def index
    @locations = Location.all;
    render :json => @locations, except: [:created_at, :updated_at], :status => :ok;
  end

  def show
    @location = Location.find(params[:id]);
    render :json => @location, except: [:created_at, :updated_at], :status => :ok;
  end
end
