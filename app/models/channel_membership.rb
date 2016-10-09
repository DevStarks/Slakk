# == Schema Information
#
# Table name: channel_memberships
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  channel_id :integer          not null
#

class ChannelMembership < ActiveRecord::Base
  validates :user, :channel, presence: true

  belongs_to :user
  belongs_to :channel
end
