class CategoriesController < ApplicationController
  

    before_action :archives
    PER = 18

  def category
    @articles = Article.where(category_id: params[:category_id]).order(created_at: :desc).page(params[:page]).per(PER)

  end

  def archive
    @archives = Article.pluck(:id)
    @archives = Article.where(id: params[:id]).order(created_at: :desc).page(params[:page]).per(PER)
  end

  def archives
    @articles = Article.all
    @article_months = @articles.group_by { |t| t.created_at.beginning_of_month}
  end

  def about

  end
end
