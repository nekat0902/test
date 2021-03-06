class Article < ApplicationRecord

  validates :title, presence: true
  validates :body, presence: true

  attachment :image

  belongs_to :category
  
  has_many :comments
end
