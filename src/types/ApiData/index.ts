import { Result } from './lib/result';

type ApiData = {
  responseCode: number,
  results: Result[],
}

export default ApiData;