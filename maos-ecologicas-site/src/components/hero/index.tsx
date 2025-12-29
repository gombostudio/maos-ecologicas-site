import style from './style.module.css';

const Hero = () => {
  return (
    <section className={style.hero}>
      {/* Container do vídeo */}
      <div className={style.video_container}>
        <iframe
          className={style.hero_video}
          src="https://player.vimeo.com/video/1150136069?background=1"
          title="Vídeo institucional — Mãos Ecológicas"
          allow="autoplay; fullscreen"
          loading="lazy"
        />
      </div>

      <div className={style.hero_texts}>
        <h1>
          Organização
          <span> não governamental</span>
        </h1>

        <p>
          Transformamos comunidades através
          <span> da educação ambiental e ação climática.</span>
        </p>

        <button>Junte-se à Comunidade</button>
      </div>
    </section>
  );
};

export default Hero;
