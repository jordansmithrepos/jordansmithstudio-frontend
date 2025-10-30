// import Image from "next/image";
import Link from "next/link";
import PropTypes from 'prop-types';
import { PortableText } from '@portabletext/react';
import { returnImageURL } from '../../lib/helpers';

const HeroRow = ({
  rowData,
}) => {
  return (
    <section className="hero_row" style={{backgroundImage: 'url(' + returnImageURL(rowData.image) + ')'}}>
      <div className="hero_wrapper">
        <div className="container">
          <div className="hero_content">
            <h1>{rowData.title ?? 'Welcome!'}</h1>
            {rowData.copy && <div className="hero_copy"><PortableText value={rowData.copy} /></div>}
            {rowData.has_button &&
            <div className="cta_wrapper">
              <Link href={rowData.cta.url} target={rowData.cta.new_window ? '_blank' : ''} className="cta btn">{rowData.cta.text}</Link>
            </div>
            }
          </div>
        </div>
      </div>
    </section>
  );
};

HeroRow.propTypes = {
  rowData: PropTypes.any,
};

export default HeroRow;
