package com.genspark.Dao;

import com.genspark.Entity.DislikedGame;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
@Transactional
public interface DislikedGamesDao extends JpaRepository<DislikedGame, Integer> {
}
