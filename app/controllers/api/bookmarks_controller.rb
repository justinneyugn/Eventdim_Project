class Api::BookmarksController < ApplicationController
    def new 
        @bookmark = Bookmark.new
        render "api/bookmarks/new"
    end

    def create
        @bookmark = Bookmark.new(bookmark_params)
        if @bookmark.save
            render "api/bookmarks/show"
        else 
            render json: ["You cannot bookmark an event that does not exist"], status: 401
        end

    end

    def show
        @bookmark = Bookmark.find(params[:id])
        if @bookmark
            render "api/bookmarks/show"
        else
            render json @bookmark.errors.full_messages, status: 404
        end
    end

    def index 
        if params[:bookmarker_id]
            @bookmarks = Bookmark.where(bookmarker_id: params[:bookmarker_id])
        else
            @bookmarks = Bookmark.all
        end
        render :index
    end

    def edit
        @bookmark = Bookmark.find(params[:id])
        render :edit
    end

    def update 
        @bookmark = Bookmark.find(params[:bookmark][:id])
        if @bookmark.update(bookmark_params)
            render "api/bookmarks/show"
        else
            render json: ["Please try bookmarking the event again"], status: 401
        end
    end

    def destroy
        @bookmark = Bookmark.find(params[:id])
        if @bookmark.destroy
            render "api/bookmarks/show"
        else 
            render plain: "You can't destroy what's not there."
        end
    end

    private

    def bookmark_params
        params.require(:bookmark).permit(:id, :bookmarker_id, :event_id)
    end
end
