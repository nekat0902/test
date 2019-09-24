
class ArticlesController < ApplicationController
  before_action :find_article, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!, only: [:edit, :update, :destroy]
  layout 'blog_application'
  #before_action :archives
  PER = 18





  def index
      @articles = Article.order(created_at: :desc).page(params[:page]).per(PER)
  end

  def show
    @comments = @article.comments
    @comment = Comment.new
  end

  def new
    @article = Article.new
  end

  def edit
  end

  def create
    @article = Article.new(article_params)
    if @article.save!
      redirect_to articles_path, notice: '作成できました'
    else
      render :new, alert: '作成できませんでした'
    end
  end

  def update
    if @article.update(article_params)
      redirect_to articles_path, notice: '更新できました'
    else
      render :edit, alert: '更新できませんでした。'
    end
  end

  def destroy
    if @article.destroy
      redirect_to articles_path, notice: '削除に成功しました。'
    else
      redirect_to articles_path, alert: '削除できませんでした'
    end
  end

#  def archive
#  @archives = Article.where(id: params[:id]).order(created_at: :desc).page(params[:page]).per(PER)
#  end



  private

  def find_article
    @article = Article.find(params[:id])
  end

  #def archives
  #  @articles = Article.all
  #  @article_months = @articles.group_by { |t| t.created_at.beginning_of_month}
  #end


  def article_params
    params.require(:article).permit(:title, :body, :image, :category_id)
  end


end
