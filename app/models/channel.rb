# == Schema Information
#
# Table name: channels
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  purpose    :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Channel < ActiveRecord::Base
  validates :name, presence: true

  has_many :channel_memberships, dependent: :destroy
  has_many :users, through: :channel_memberships
  has_many :messages, as: :messageable
end
