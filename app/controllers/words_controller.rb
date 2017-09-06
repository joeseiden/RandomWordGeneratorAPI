class WordsController < ApplicationController

  def index
    word_generator = WordGenerator.new(word_gen_params)
    @words = word_generator.generate_many_words(params[:count])

    render json: @words
  end

  private

  def word_gen_params
    params.require(:word_gen).permit(:consonants, :vowels, :syllable_structure, :length)
  end
end
