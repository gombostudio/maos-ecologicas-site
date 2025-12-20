import videoBlog from '/video/video-blog.mp4';
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
          <span>fazemos nascer um futuro de oportunidades.</span>
        </p>

        <button>Comunidade</button>*
      </div>
    </div>
  );
};

export default Hero;
