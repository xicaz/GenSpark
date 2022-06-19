package com.genspark.Controller;

import com.genspark.Entity.DislikedGame;
import com.genspark.Entity.LikedGame;
import com.genspark.Request.DislikedGamesRequest;
import com.genspark.Service.DislikedGameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class DislikedGamesController {

    @Autowired
    private DislikedGameService service;

    @GetMapping("/disliked-games/{id}")
    public List<DislikedGame> getDislikedGames(@PathVariable(value = "id") int id) {
        return service.getAllDislikedGames(id);
    }

    @PostMapping("/add-to-disliked-games")
    public String addToDislikedGames(@RequestBody DislikedGamesRequest dislikedGamesRequest) {
        service.addDislikedGame(dislikedGamesRequest);
        return "Game added to disliked games";
    }

    @DeleteMapping("/remove-from-disliked-list/{userId}/{gameId}")
    public String removeFromDislikedList(@PathVariable(value = "userId") int userId, @PathVariable(value = "gameId") int gameId) {
        service.removeDislikedGame(userId, gameId);
        return "Game removed from disliked list.";
    }
}