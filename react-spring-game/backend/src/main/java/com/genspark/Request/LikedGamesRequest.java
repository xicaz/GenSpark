package com.genspark.Request;

public class LikedGamesRequest {

    private int userId;
    private int gameId;

    public LikedGamesRequest() {}

    public LikedGamesRequest(int userId, int gameId) {
        this.userId = userId;
        this.gameId = gameId;
    }

    public int getUserId() {
        return userId;
    }

    public int getGameId() {
        return gameId;
    }
}
