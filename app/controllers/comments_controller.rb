class CommentsController < ApplicationController
  def create
    #raise params.inspect
    @article = Article.find(params[:article_id])
    @comment = @article.comments.build(comment_params)
    @comment.user_id = current_user.id
    if @comment.save
    redirect_to article_path(@article)
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    if @comment.destroy
      redirect_to :back
    else
      render :back
    end
  end

  private
  def comment_params
    params.require(:comment).permit(:content, :article_id, :user_id)
  end


end
