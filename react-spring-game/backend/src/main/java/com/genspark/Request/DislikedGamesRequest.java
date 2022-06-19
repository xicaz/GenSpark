package com.genspark.Request;

public class DislikedGamesRequest {

    private int userId;
    private int gameId;

    public DislikedGamesRequest() {}

    public DislikedGamesRequest(int userId, int gameId) {
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
