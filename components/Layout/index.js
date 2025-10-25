import PropTypes from 'prop-types';
import Header from '../Header';
import Footer from '../Footer';


const Layout = ({
  children,
  headerPageTitle,
  headerMetaDesc,
  footerContentData,
}) => {

  return (
    <>
      <Header
        headerPageTitle={headerPageTitle}
        headerMetaDesc={headerMetaDesc}
      />
        {children}
      <Footer
        footerContent={footerContentData}
      />
    </>
  );
};

Layout.propTypes = {
  footerContentData: PropTypes.any,
  headerPageTitle: PropTypes.any,
  headerMetaDesc: PropTypes.any,
};

export default Layout;
