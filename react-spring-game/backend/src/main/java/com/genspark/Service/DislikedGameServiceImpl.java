package com.genspark.Service;

import com.genspark.Dao.DislikedGamesDao;
import com.genspark.Dao.LikedGamesDao;
import com.genspark.Entity.DislikedGame;
import com.genspark.Entity.LikedGame;
import com.genspark.Request.DislikedGamesRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;

@Service
public class DislikedGameServiceImpl implements DislikedGameService {

    @Autowired
    private DislikedGamesDao dislikedGamesDao;
    @Autowired
    private LikedGamesDao likedGamesDao;

    @Override
    public List<DislikedGame> getAllDislikedGames(int id) {
        List<DislikedGame> dislikedGames = new ArrayList<>();
        for (DislikedGame dg : dislikedGamesDao.findAll()) if (dg.getUserId() == id) dislikedGames.add(dg);
        return dislikedGames;
    }

    @Override
    public String addDislikedGame(DislikedGamesRequest dislikedGamesRequest) {
        DislikedGame dislikedGame = new DislikedGame();
        dislikedGame.setUserId(dislikedGamesRequest.getUserId());
        dislikedGame.setGameId(dislikedGamesRequest.getGameId());
        dislikedGamesDao.save(dislikedGame);
        for (LikedGame lg : likedGamesDao.findAll()) if (lg.getGameId() == dislikedGamesRequest.getGameId()) likedGamesDao.delete(lg);
        return "Game added to disliked list";
    }

    @Override
    public void removeDislikedGame(int userId, int gameId) {
        try {
            dislikedGamesDao.delete(new DislikedGame(userId, gameId));
        } catch (NoSuchElementException e) {
        }
    }



}
