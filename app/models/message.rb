# == Schema Information
#
# Table name: messages
#
#  id               :integer          not null, primary key
#  messageable_id   :integer
#  messageable_type :string
#  author_id        :integer          not null
#  body             :text             not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

class Message < ActiveRecord::Base
  validates :author, :conversation, :body, presence: true

  belongs_to :messageable, polymorphic: true
  belongs_to :author, class_name: :User, foreign_key: :author_id

  def conversation
    self.messageable
  end
end
