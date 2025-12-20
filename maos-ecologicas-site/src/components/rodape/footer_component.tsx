import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedin, faInstagram, } from '@fortawesome/free-brands-svg-icons';
import styles from './footer.module.css';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const year = new Date().getFullYear();

const Footer: React.FC = () => {

  const footerSections: FooterSection[] = [
    {
      title: 'Sobre a ONG',
      links: [
        { label: 'Documentação', href: '#' },
        { label: 'Artigos', href: '#' },
        { label: 'Contactos', href: '#' },
        { label: 'Comunidade', href: '#' },
      ],
    },
    {
      title: 'SiteMap',
      links: [
        { label: 'Quem Somos', href: '#quemsomos' },
        { label: 'Parceiros', href: '#parceiros' },
        { label: 'Galeria', href: '#galeria' },
        { label: 'Eventos', href: '#eventos' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Termos de Serviço', href: '#' },
        { label: 'Privacidade e Política', href: '#' },
        { label: 'Processamento de Dados', href: '#' },
      ],
    },
  ];

  const socialLinks = [
    { icon: faFacebookF, href: '#', label: 'Facebook' },
    { icon: faLinkedin, href: 'https://www.linkedin.com/company/movimento-m%C3%A3os-ecol%C3%B3gicas/?originalSubdomain=ao', label: 'Twitter' },
    { icon: faInstagram, href: 'https://www.instagram.com/maos_ecologicas/', label: 'Instagram' },
  
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          {/* Newsletter Section */}
          <div className={styles.newsletter}>
            <h2 className={styles.newsletterTitle}>
              Acompanhe-nos nas nossas <br/>
              mídias de comunicação!
            </h2>
            <p className={styles.newsletterText}>
              Fique ligado sobre actualização,<br />
              de novos de conteúdos e eventos do movimento.
            </p>
            {/*<button className={styles.subscribeButton}>
              Subscribe now
            </button>*/}
          </div>

          {/* Links Sections */}
          <div className={styles.linksGrid}>
            {footerSections.map((section) => (
              <div key={section.title} className={styles.linkSection}>
                <h3 className={styles.linkTitle}>{section.title}</h3>
                <ul className={styles.linkList}>
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className={styles.link}>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className={styles.bottomSection}>
          <div className={styles.copyright}>
            ©{year} Mãos Ecológicas - Todos os direitos reservados.
          </div>

          <div className={styles.bottomLinks}>
            <a href="#" className={styles.bottomLink}>Design e Desenvolvimento - Paulo Gombo</a>
          </div>

          <div className={styles.socialLinks}>
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className={styles.socialLink}
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={social.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;