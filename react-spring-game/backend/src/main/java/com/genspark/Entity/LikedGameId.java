package com.genspark.Entity;

import java.io.Serializable;

public class LikedGameId implements Serializable {
    private int userId;
    private int gameId;


    public LikedGameId() {}
    public LikedGameId(int userId, int gameId) {
        this.userId = userId;
        this.gameId = gameId;
    }
}
