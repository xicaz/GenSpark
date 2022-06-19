package com.genspark.Dao;


import com.genspark.Entity.LikedGame;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
@Transactional
public interface LikedGamesDao extends JpaRepository <LikedGame, Integer> {


}
