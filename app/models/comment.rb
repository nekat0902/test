class Comment < ApplicationRecord

  validates :content, presence: true
  belongs_to :user
  belongs_to :article
  validates :article_id, presence: true
end
