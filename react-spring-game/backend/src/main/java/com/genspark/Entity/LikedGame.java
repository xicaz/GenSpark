package com.genspark.Entity;

import javax.persistence.*;

@Entity
@IdClass(LikedGameId.class)
@Table(name = "liked_games")
public class LikedGame {

    @Id
    @Column(name = "user_id")
    private int userId;

    @Id
    @Column(name = "game_id")
    private int gameId;

    public LikedGame() {}

    public LikedGame(int userId, int gameId) {
        this.userId = userId;
        this.gameId = gameId;
    }

    public void setGameId(int gameId) {
        this.gameId = gameId;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public int getGameId() {
        return gameId;
    }

    @Override
    public String toString() {
        return "LikedGame{" +
                ", userId=" + userId +
                ", gameId=" + gameId +
                '}';
    }
}
