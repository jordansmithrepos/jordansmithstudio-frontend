import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

const Header = ({
  headerData,
  headerMetaDesc,
  headerPageTitle,
}) => {
  const router = useRouter();
  const thePageSlug = router.pathname.slice(1).toLowerCase();

  const [ mobileNavState, setMobileNavState ] = useState( false );
  const toggleMobileNav = () => {
    setMobileNavState( !mobileNavState );
  }

  useEffect( () => {
    const handleResize = () => {
      setMobileNavState( false );
    };
    window.addEventListener( 'resize', handleResize );
  },[ setMobileNavState ]);


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
        {/* <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" /> */}
        <link id="favicon" rel="shortcut icon" href={ '/jss_multiplied_favicon.png' } />
        <link rel="icon" type="image/png" sizes="32x32" href={ '/jss_multiplied_favicon.png' } />
        <link rel="icon" type="image/png" sizes="16x16" href={ '/jss_multiplied_favicon.png' } />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#222222" />
        <meta name="msapplication-TileColor" content="#fffefd" />
        <meta name="theme-color" content="#fffefd" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <nav className={`global_header${thePageSlug ? ' ' + thePageSlug : ' home'}`}>
        <div className="container">
          <div className="d-flex align-items-center justify-content-between py-3">
            <div className="get_yourself_home">
              {headerData?.home_link &&
              <Link href={headerData.home_link.url} className={`home_link${ mobileNavState ? ' label_maker' : '' }`} onClick={() => setMobileNavState(false)}>{headerData.home_link.text}</Link>
              }
            </div>
            <div className="nav_links d-none d-md-flex">
              {headerData?.nav_links && headerData.nav_links.map( ( item, i ) => (
                <Link key={i} href={item.url} className="nav_link btn">{item.text}</Link>
              ))}
            </div>
            <div className="nav_links d-flex d-md-none">
              <button className={`mobile_nav_toggle${ mobileNavState ? ' active' : '' } btn`} onClick={() => toggleMobileNav()}>Menu</button>
            </div>
          </div>
        </div>
      </nav>

      <div className={`mobile_nav${ mobileNavState ? ' active' : '' } d-md-none`}>
        <div className="wrapper">
          <div className="container">
            <div className="nav_links">
              {mobileNavState && headerData?.nav_links && headerData.nav_links.map( ( item, i ) => (
                <Link key={i} href={item.url} className="nav_link btn" onClick={() => setMobileNavState(false)}>{item.text}</Link>
              ))}
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

Header.propTypes = {
  headerData: PropTypes.any,
  headerMetaDesc: PropTypes.any,
  headerPageTitle: PropTypes.any,
};

export default Header;
