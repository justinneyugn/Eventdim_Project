class Api::EventsController < ApplicationController
    def new 
        @event = Event.new
        render "api/events/new"
    end

    def create
        @event = Event.new(event_params)
        @event.creator_id = current_user.id
        if @event.save
            render "api/events/show"
        else 
            render json: ["All areas must be filled out before submitting"], status: 401
        end

    end

    def show
        @event = Event.find(params[:id])
        if @event
            render "api/events/show"
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
        @event = Event.find(params[:event][:id])
        if @event.update(event_params)
            render "api/events/show"
        else
            render json: ["All areas must be filled out before submitting"], status: 401
        end
    end

    def destroy
        @event = Event.find(params[:id])
        if @event.destroy
            render "api/events/show"
        else 
            render plain: "You can't destroy what's not there."
        end
    end

    private

    def event_params
        params.require(:event).permit(:id, :title, :details, :creator_id, :location, :ticket_price, :date, :photo)
    end
end
