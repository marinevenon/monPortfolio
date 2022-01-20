import { v4 as uuidv4 } from 'uuid';
import UTrackerImg from '../images/myuka.jpg';
import GreenCtgImg from '../images/portfolio.jpg';
import CoinTrackerImg from '../images/cointracker.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Myuka',
    desc:
      'Cette application renseigne des informations sur les produits alimentaires grâce à une API.',
    img: UTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'Mon portfolio',
    desc:
      'Mon portfolio a été réalisé avec REACT afin de faciliter le contact avec les entreprises.',
    img: GreenCtgImg,
  },
  {
    id: uuidv4(),
    name: 'Serious Game',
    desc:
      'Lors de ma formation il nous a été demandé de réaliser des jeux ludiques en JavaScript de type : pendu, juste prix...etc',
    img: CoinTrackerImg,
  },
];

export default projects;
/*  {
    id: uuidv4(),
    name: "Cavin's Portfolio",
    desc:
      'A portfolio for Cavin jr. A artist from New york city. The portfolio is made using ReactJs and GatsbyJs.',
    img: CavinImg,
  },
  {
    id: uuidv4(),
    name: 'Tracking Soft',
    desc:
      'A tracking website that will show the performance of the website. Also you will get some useful advice to improve the performance.',
    img: ProjectImg,
  }, */
