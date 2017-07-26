import { rest, restPlain } from './rest';

export function loadAll(callback) {
  rest('tracks/all', callback);
}


export function loadInfo(id, callback) {
  rest('tracks/info/' + id, callback);
}


export function loadTrack(id, callback) {
  restPlain('tracks/load/' + id, callback);
}