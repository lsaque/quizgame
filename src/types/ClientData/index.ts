import ClientResult from './lib/clientResult';

type Client =  {
  name: string,
  quantityQuestion: number,
  quantityWrongAnswers: number,
  quantityCorrectAnswers: number,
  results: ClientResult[],
}

export default Client;