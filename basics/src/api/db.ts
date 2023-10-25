import { ImageProps } from 'react-native';

export type ProductInfo = {
  id: string;
  image: ImageProps['source'];
  name: string;
  description: string;
  price: string;
  offer: string;
  inOffer: boolean;
};

const listOfProducts: ProductInfo[] = [
  {
    id: '1',
    image: require('../assets/images/berserk-vol-1.jpg'),
    name: 'Berserk Vol. 1',
    description:
      'O misterioso Guts, o "Espadachim Negro", carrega em sua mão mecânica uma enorme espada, e em seu pescoço uma estranha marca que atrai forças demoníacas. Em sua busca por vingança contra um antigo inimigo, nem tudo sai a seu favor, e ele recebe ajuda de uma fantástica criatura.',
    price: 'R$ 24,90',
    offer: 'R$ 34,90',
    inOffer: true,
  },
  {
    id: '2',
    image: require('../assets/images/berserk-vol-2.jpg'),
    name: 'Berserk Vol. 2',
    description:
      'Guts se depara com o Behelit, uma misteriosa pedra que pode invocar os God Hand, os terríveis senhores da escuridão, que ele deseja encontrar para completar sua vingança. Mas o Conde, senhor do feudo e tirano que ameaça o povo com a "caça aos hereges", também parece ter relação com a pedra e os God Hand. Guts declara guerra ao Conde e invade seu castelo, deixando um rastro de sangue por onde passa.',
    price: 'R$ 34,90',
    offer: '',
    inOffer: false,
  },
  {
    id: '3',
    image: require('../assets/images/berserk-vol-3.jpg'),
    name: 'Berserk Vol. 3',
    description:
      'A batalha contra o Conde continua e se encaminha para um final inesperado. O despertar do Behelit acarreta a aparição dos God Hand, e entre eles está Griffith, que invoca a ira de Guts por lembranças de seu passado! Qual será a relação entre eles?',
    price: 'R$ 34,90',
    offer: '',
    inOffer: false,
  },
  {
    id: '4',
    image: require('../assets/images/berserk-vol-4.jpg'),
    name: 'Berserk Vol. 4',
    description:
      'Após um encontro com os membros da God Hand, a história retorna até as origens de Guts. Durante a infância, o espadachim teve de passar por duras provações e atestar sua capacidade diante do grupo de mercenários que o acolheu, sobretudo de seu protetor, Gambino. Com o passar dos anos, Guts se tornou um guerreiro habilidoso, e chamou a atenção do lendário Griffith, líder do Bando do Falcão, o grupo de mercenários mais temido da época.',
    price: 'R$ 34,90',
    offer: '',
    inOffer: false,
  },
  {
    id: '5',
    image: require('../assets/images/berserk-vol-5.jpg'),
    name: 'Berserk Vol. 5',
    description:
      'Depois de entrar para o Bando do Falcão, Guts começa a fazer sua fama como espadachim e a conquistar a confiança do líder do grupo, Griffith, que logo o inclui em seus planos ambiciosos. Após três anos lutando ao lado do renomado grupo de mercenários, que ao longo do tempo conquistou cada vez mais a atenção de poderosos nobres e reis, Guts se vê diante de um inimigo de poder e tamanho jamais visto, que desafia a compreensão humana.',
    price: 'R$ 34,90',
    offer: '',
    inOffer: false,
  },
  {
    id: '6',
    image: require('../assets/images/berserk-vol-6.jpg'),
    name: 'Berserk Vol. 6',
    description:
      'Enquanto presta serviços para o reino, Griffith atrai a atenção da princesa e a crescente confiança de sua majestade, despertando a inveja e a fúria de um dos filhos do rei, que planeja um ataque para assassiná-lo. Enquanto isso, Guts se vê envolvido nas manobras de Griffith para se tornar um nobre de confiança do rei e começa a se questionar sobre seu propósito.',
    price: 'R$ 34,90',
    offer: '',
    inOffer: false,
  },
  {
    id: '7',
    image: require('../assets/images/berserk-vol-7.jpg'),
    name: 'Berserk Vol. 7',
    description:
      'A cada campanha bem-sucedida, o Bando do Falcão adquire cada vez mais reconhecimento numa guerra que já dura mais de cem anos entre os reinos de Midland e Tudor. No entanto, Guts e Caska, os principais comandantes do bando, acabam caindo de um penhasco e se refugiam numa caverna, onde, num breve momento de vulnerabilidade, a jovem soldado acaba contando detalhes de sua vida e de sua jornada',
    price: 'R$ 34,90',
    offer: '',
    inOffer: false,
  },
  {
    id: '8',
    image: require('../assets/images/berserk-vol-8.jpg'),
    name: 'Berserk Vol. 8',
    description:
      'Os resultados da última campanha do Bando do Falcão renderam frutos amargos para os nobres de Midland. Uma nova conspiração se forma, ameaçando a vida de Griffith!',
    price: 'R$ 34,90',
    offer: '',
    inOffer: false,
  },
  {
    id: '9',
    image: require('../assets/images/berserk-vol-9.jpg'),
    name: 'Berserk Vol. 9',
    description:
      'Guts deixa o Bando do Falcão e, na solidão da floresta, recebe uma visita tenebrosa. Enquanto isso, Griffith, desnorteado, toma uma decisão que põe em risco tudo pelo qual sempre lutou.',
    price: 'R$ 34,90',
    offer: '',
    inOffer: false,
  },
  {
    id: '10',
    image: require('../assets/images/berserk-vol-10.jpg'),
    name: 'Berserk Vol. 10',
    description:
      'Após descobrir que seus antigos companheiros do Bando do Falcão Branco sofreram uma emboscada e os remanescentes estão sendo caçados, Guts volta para auxiliá-los e descobre um importante plano em andamento...',
    price: 'R$ 34,90',
    offer: '',
    inOffer: false,
  },
];

export async function getAllProducts(): Promise<Array<ProductInfo>> {
  return new Promise((resolve) => {
    resolve(listOfProducts);
  });
}

export async function getProductById(id: ProductInfo['id']): Promise<ProductInfo> {
  return new Promise((resolve, reject) => {
    const foundProduct = listOfProducts.find((product) => product.id === id);

    if (foundProduct) {
      resolve(foundProduct);
    }

    reject(new Error(`product with id: ${id} not found`));
  });
}
