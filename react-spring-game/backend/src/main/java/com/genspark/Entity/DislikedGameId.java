package com.genspark.Entity;

import java.io.Serializable;

public class DislikedGameId implements Serializable {
    private int userId;
    private int gameId;

    public DislikedGameId() {}
    public DislikedGameId(int userId, int gameId) {
        this.userId = userId;
        this.gameId = gameId;
    }
}
