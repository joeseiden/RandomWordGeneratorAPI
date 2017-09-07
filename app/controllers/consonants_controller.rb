class ConsonantsController < ApplicationController
  def index
    if params[:inventory]
      @consonants = Consonant.find(params[:inventory])
    else
      @consonants = Consonant.all
    end
    if params[:chartable]
      render "api/consonants/chartable_index"
    else
      render "api/consonants/index"
    end
  end

  def show
    @consonant = Consonant.find(params[:id])
    if @consonant
      render "api/consonants/show"
    else
      render json: @consonant.errors.full_messages, status: 404
    end
  end
end
