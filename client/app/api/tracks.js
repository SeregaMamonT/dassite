import { rest } from './rest';

export function loadAll(callback) {
  rest('tracks/all', callback);
}


export function loadTrack(id, callback) {
  rest('tracks/' + id, callback);
}