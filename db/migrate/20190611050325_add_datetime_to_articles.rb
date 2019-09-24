class AddDatetimeToArticles < ActiveRecord::Migration[5.0]
  def change
    add_column :articles, :timestamp, :datetime
  end
end
