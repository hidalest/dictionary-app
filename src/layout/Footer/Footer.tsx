import './Footer.scss';

interface FooterInterface {
  header: string;
  url: string;
  urlIcon: string;
}

function Footer(params: FooterInterface) {
  const { header, url, urlIcon } = params;

  return (
    <footer className='footer'>
      <hr className='footer__division' />
      <section className='footer__container'>
        <p className='footer__header'>{header}</p>
        <p className='footer__url'>{url}</p>
        <a className='footer__button' target={'_blank'} href={url}>
          <img src={urlIcon} alt='New Page' />
        </a>
      </section>
    </footer>
  );
}

export default Footer;
