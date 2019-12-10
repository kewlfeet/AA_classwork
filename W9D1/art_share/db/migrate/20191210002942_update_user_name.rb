class UpdateUserName < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :username, :string, unique: true, presence: true
  end
end
