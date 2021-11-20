import ClientResult from './lib/clientResult';

type Client =  {
  name?: string, //ok
  quantityQuestion: number, //ok
  quantityWrongAnswers: number,
  quantityCorrectAnswers: number,
  results: ClientResult[] //ok
}

export default Client;