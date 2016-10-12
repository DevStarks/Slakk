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
  has_many :channel_memberships, dependent: :destroy
  has_many :users, through: :channel_memberships
  has_many :messages, as: :messageable, dependent: :destroy

  def self.get_direct_message_names(ids)
    direct_message_names = {}
    ids.each do |id|
      direct_message = Channel.find(id).join(:users)
      usernames = direct_message.users.map { |user| user.username }.join(", ")
      direct_message_names[id] = { name: usernames }
    end
    direct_message_names
  end
end
