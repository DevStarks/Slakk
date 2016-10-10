class Api::MessagesController < ApplicationController

  def index
    @messages = Message.where(messageable_id: params[:message][:conversation_id]).includes(:author)
  end

  def create
    conversation_id = params[:message][:conversation_id]
    channel = Channel.find(conversation_id)
    @message = channel.messages.new(message_params)
    @message.author = current_user

    if @message.save
      Pusher.trigger("conversation-#{conversation_id}", 'message_created', {})
      render :show
    else
      render json: @message.errors.full_messages, status: 422
    end
  end

  def update
    @message = Message.find(params[:id])
    if @message.update(message_params)
      render :show
    else
      render @message.errors.full_messages, status: 422
    end
  end

  def destroy
    @message = Message.find(params[:id])
    @message.destroy
    render :show
  end

  private

  def message_params
    params.require(:message).permit(:body)
  end
end
