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