import { PlayerModel } from "../models/player-model";
import * as PlayerRepository from "../repositories/players-repository";
import * as httpResponse from "../utils/http-helper";

export const getPlayerService = async () => {
  const data = await PlayerRepository.findAllPlayers();
  let response = null;

  if (data) {
    response = await httpResponse.ok(data);
  } else {
    response = await httpResponse.noContent();
  }
  return response;
};

export const getPlayerByIdService = async (id: number) => {
  // pedir ao repositório de dados
  const data = await PlayerRepository.findPlayerById(id);
  let response = null;

  if (data) {
    response = await httpResponse.ok(data);
  } else {
    response = await httpResponse.noContent();
  }
  return response;
};

export const createPlayerService = async (player: PlayerModel) => {
  let response = null;

  // verifica se está vazio
  if (Object.keys(player).length !== 0) {
    await PlayerRepository.insertPlayer(player);
    response = httpResponse.created(player);
  } else {
    response = httpResponse.badRequest();
  }
  return response;
};

export const deletePlayerService = async (id: number) => {
  let response = null;
  await PlayerRepository.deleteOnePlayer(id);

  response = httpResponse.ok({ message: "Player deleted successfully" });
  return response;
};
