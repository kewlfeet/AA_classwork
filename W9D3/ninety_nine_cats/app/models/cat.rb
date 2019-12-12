# require 'action_viewer'
COLORS = ["brown", "white", "black", "smokey", "yellow", "orange"]

class Cat < ApplicationRecord
    include ActionView::Helpers::DateHelper

    validates :color, inclusion: { in: COLORS,
      message: "#{:color} is not a valid color" }
    validates :birth_date, :color, :name, :sex, :description, presence: true

    def age
        time_ago_in_words(self.birth_date)
    end

end
