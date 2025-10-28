// import Image from "next/image";
// import Link from "next/link";
import PropTypes from 'prop-types';

const Footer = ({
  footerContent,
}) => {
  const copyrightYear = new Date().getFullYear();

  return (
    <footer className="global_footer">
      <div className="container">
        {footerContent?.copyright_text &&
        <div className="footer_copyright">
          <div className="small">&copy;{ copyrightYear } {footerContent.copyright_text ? footerContent.copyright_text : 'Jordan Smith Studio | All Rights Reserved'}</div>
        </div>}
      </div>
    </footer>
  );
};

Footer.propTypes = {
  footerContent: PropTypes.any,
};

export default Footer;
