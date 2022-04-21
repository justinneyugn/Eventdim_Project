class Api::TicketsController < ApplicationController
    def new 
        @ticket = Ticket.new
        render "api/tickets/new"
    end

    def create
        @ticket = Ticket.new(ticket_params)
        @ticket.purchaser_id = current_user.id
        if @ticket.save
            render "api/tickets/show"
        else 
            render json: ["You must enter how many tickets you would like to purchase."], status: 401
        end

    end

    def show
        @ticket = Ticket.find(params[:id])
        if @ticket
            render "api/tickets/show"
        else
            render json @ticket.errors.full_messages, status: 404
        end
    end

    def index 
        if params[:purchaser_id]
            @tickets = Ticket.where(purchaser_id: params[:purchaser_id])
        else
            @tickets = Ticket.all
        end
        render :index
    end

    def edit
        @ticket = Ticket.find(params[:id])
        render :edit
    end

    def update 
        @ticket = Ticket.find(params[:ticket][:id])
        if @ticket.update(ticket_params)
            render "api/tickets/show"
        else
            render json: ["An amount of tickets must be inputted"], status: 401
        end
    end

    def destroy
        @ticket = Ticket.find(params[:id])
        if @ticket.destroy
            render "api/tickets/show"
        else 
            render plain: "You can't destroy what's not there."
        end
    end

    private

    def ticket_params
        params.require(:ticket).permit(:id, :amount, :purchaser_id, :event_id)
    end
end
