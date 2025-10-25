import Head from 'next/head';
import Link from 'next/link';
import PropTypes from 'prop-types';

const Header = ({
  headerPageTitle,
  headerMetaDesc,
}) => {

  return (
    <>
      <Head>
        <title>{ headerPageTitle ? headerPageTitle : 'Jordan Smith Studio'}</title>
        <meta name="description" content={ headerMetaDesc ? headerMetaDesc : 'Jordan Smith Studio' } />
        <meta property="og:title" content={ headerPageTitle ? headerPageTitle : 'Jordan Smith Studio'} />
        <meta property="og:description" content={ headerMetaDesc ? headerMetaDesc : 'Jordan Smith Studio' } />
        {/* <meta property="og:image" content={ headerContent?.share_image ? headerContent.share_image.url : process.env.API_URL + '/wp-content/uploads/2022/12/bhi-default_share_image.jpg' } /> */}
        {/* <meta property="og:image:height" content={ headerContent?.share_image ? headerContent?.share_image.height :'1200' }/> */}
        {/* <meta property="og:image:width" content={ headerContent?.share_image ? headerContent?.share_image.width :'630' }/> */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link id="favicon" rel="shortcut icon" href={ '/favicon-red.png' } />
        <link rel="icon" type="image/png" sizes="32x32" href={ '/favicon-32x32.png' } />
        <link rel="icon" type="image/png" sizes="16x16" href={ '/favicon-16x16.png' } />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#e52727" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <nav className="global_header">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between py-3">
            <div className="get_yourself_home">
              <Link href="/" className="home_link">J.</Link>
            </div>
            <div className="nav_links">[NAV LINKS GO HERE]</div>
          </div>
        </div>
      </nav>

    </>
  );
};

Header.propTypes = {
  headerPageTitle: PropTypes.any,
  headerMetaDesc: PropTypes.any,
};

export default Header;
