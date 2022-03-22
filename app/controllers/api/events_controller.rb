class Api::EventsController < ApplicationController
    def new 
        @event = Event.new
        render "api/events/new"
    end

    def create
        @event = Event.new(event_params)
        @event.creator_id = current_user.id
        if @event.save
            render :show
        else 
            render json: @event.errors.full_messages, status: 422
        end
    end

    def show
        @event = Event.find(params[:id])
        if @event
            render :show
        else
            render json @event.errors.full_messages, status: 404
        end
    end

    def index 
        if params[:user_id]
            @events = Event.where(creator_id: params[:user_id])
        else
            @events = Event.all
        end
        render :index
    end

    def edit
        @event = Event.find(params[:id])
        render :edit
    end

    def update 
        @event = Event.find(params[:id])
        if @event.update(event_params)
            redirect_to event_url(@event)
        else
            render json: @event.errors.full_messages, status: 422
        end
    end

    def destroy
        @event = Event.find(params[:id])
        if @event.destroy
            redirect_to events_url
        else 
            render plain: "You can't destroy what's not there."
        end
    end

    private

    def event_params
        params.require(:event).permit(:title, :details, :creator_id, :date, :location, :ticket_price)
    end
end
