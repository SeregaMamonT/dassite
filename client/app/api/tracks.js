import { rest } from './rest';

export function loadAll(callback) {
  rest('tracks/all', callback);
}