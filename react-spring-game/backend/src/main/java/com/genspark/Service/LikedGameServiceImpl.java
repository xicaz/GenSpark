package com.genspark.Service;

import com.genspark.Dao.DislikedGamesDao;
import com.genspark.Dao.LikedGamesDao;
import com.genspark.Entity.DislikedGame;
import com.genspark.Entity.LikedGame;
import com.genspark.Request.LikedGamesRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;

@Service
public class LikedGameServiceImpl implements LikedGameService {

    @Autowired
    private LikedGamesDao likedGamesDao;
    @Autowired
    private DislikedGamesDao dislikedGamesDao;

    @Override
    public List<LikedGame> getAllLikedGames(int id) {
        List<LikedGame> likedGames = new ArrayList<>();
        for(LikedGame lg: likedGamesDao.findAll()) if(lg.getUserId() == id) likedGames.add(lg);
        return likedGames;
    }

    @Override
    public String addLikedGame(LikedGamesRequest likedGamesRequest) {
        LikedGame likedGame = new LikedGame();
        likedGame.setUserId(likedGamesRequest.getUserId());
        likedGame.setGameId(likedGamesRequest.getGameId());
        likedGamesDao.save(likedGame);
        for (DislikedGame dg : dislikedGamesDao.findAll()) if (dg.getGameId() == likedGamesRequest.getGameId()) dislikedGamesDao.delete(dg);
        return "Game added to liked list";
    }

    @Override
    public void removeLikedGame(int userId, int gameId) {
        try {
            likedGamesDao.delete(new LikedGame(userId, gameId));
        } catch (NoSuchElementException e) {
        }
    }
}
