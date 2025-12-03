import videoBlog from '../../assets/video/mixkit-very-close-shot-of-the-leaves-of-a-tree-wet-18310-medium.mp4';
import style from './style.module.css';

const Hero = () => {
  return (
    <div className={style.hero}>
      <video src={videoBlog} autoPlay muted loop />

      <div className={style.hero_texts}>
        <h1>
          ONG ambiental 
          <span>não governamental</span>
          <span>de Angola</span>
        </h1>

        <p>
          Mãos Ecológicas: unidos no trabalho,
          firmes pela sustentabilidade,
          <span>fazemos nascer um futuro de oportunidade.</span>
        </p>

        <button>Comunidade</button>
      </div>
    </div>
  );
};

export default Hero;
