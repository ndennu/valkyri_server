-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema valkyri
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema valkyri
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `valkyri` DEFAULT CHARACTER SET utf8 ;
USE `valkyri` ;

-- -----------------------------------------------------
-- Table `valkyri`.`level`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `valkyri`.`level` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `number` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `number_UNIQUE` (`number` ASC),
  UNIQUE INDEX `name_UNIQUE` (`name` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `valkyri`.`place`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `valkyri`.`place` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `number` INT(11) NOT NULL,
  `level_number` INT(11) NOT NULL,
  `createdAt` DATE NOT NULL,
  `updatedAt` DATE NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_place_level1_idx` (`level_number` ASC),
  UNIQUE INDEX `number_UNIQUE` (`number` ASC),
  CONSTRAINT `fk_place_level1`
    FOREIGN KEY (`level_number`)
    REFERENCES `valkyri`.`level` (`number`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `valkyri`.`access`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `valkyri`.`access` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `h1` TIME NOT NULL,
  `h2` TIME NOT NULL,
  `place_id` INT(11) NOT NULL,
  `level_number` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_access_place1_idx` (`place_id` ASC),
  INDEX `fk_access_level1_idx` (`level_number` ASC),
  CONSTRAINT `fk_access_level1`
    FOREIGN KEY (`level_number`)
    REFERENCES `valkyri`.`level` (`number`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_access_place1`
    FOREIGN KEY (`place_id`)
    REFERENCES `valkyri`.`place` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `valkyri`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `valkyri`.`user` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `matricule` VARCHAR(10) NOT NULL,
  `lastname` VARCHAR(45) NOT NULL,
  `firstname` VARCHAR(45) NOT NULL,
  `createdAt` DATE NOT NULL,
  `updatedAt` DATE NOT NULL,
  `image_path` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(129) NOT NULL,
  `digicode` VARCHAR(9) NOT NULL,
  `phone` VARCHAR(45) NOT NULL,
  `level_number` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_user_level1_idx` (`level_number` ASC),
  UNIQUE INDEX `matricule_UNIQUE` (`matricule` ASC),
  CONSTRAINT `fk_user_level1`
    FOREIGN KEY (`level_number`)
    REFERENCES `valkyri`.`level` (`number`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `valkyri`.`auth_token`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `valkyri`.`auth_token` (
  `id` INT(9) NOT NULL AUTO_INCREMENT,
  `id_user` INT(9) NOT NULL,
  `createdAt` DATE NOT NULL,
  `updatedAt` DATE NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `id_user` (`id_user` ASC),
  CONSTRAINT `auth_token_ibfk_1`
    FOREIGN KEY (`id_user`)
    REFERENCES `valkyri`.`user` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `valkyri`.`history`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `valkyri`.`history` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `createdAt` DATETIME NOT NULL,
  `authorize` TINYINT(1) NULL DEFAULT NULL,
  `user_id` INT(11) NOT NULL,
  `place_id` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_history_user1_idx` (`user_id` ASC),
  INDEX `fk_history_place1_idx` (`place_id` ASC),
  CONSTRAINT `fk_history_place1`
    FOREIGN KEY (`place_id`)
    REFERENCES `valkyri`.`place` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_history_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `valkyri`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
