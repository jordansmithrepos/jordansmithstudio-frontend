import PropTypes from 'prop-types';
import Header from '../Header';
import Footer from '../Footer';


const Layout = ({
  children,
  footerData,
  headerData,
  headerMetaDesc,
  headerPageTitle,
  headerShareImage,
}) => {

  return (
    <>
      <Header
        headerData={headerData}
        headerMetaDesc={headerMetaDesc}
        headerPageTitle={headerPageTitle}
        headerShareImage={headerShareImage}
      />
        {children}
      <Footer
        footerContent={footerData}
      />
    </>
  );
};

Layout.propTypes = {
  footerData: PropTypes.any,
  headerData: PropTypes.any,
  headerMetaDesc: PropTypes.any,
  headerPageTitle: PropTypes.any,
  headerShareImage: PropTypes.any,
};

export default Layout;
