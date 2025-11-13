import Link from "next/link";
import PropTypes from 'prop-types';
import { Parallax } from "react-scroll-parallax";
import { returnImageURL } from '../../lib/helpers';
import { RenderCopy } from '@/components';

const HeroRow = ({
  rowData,
}) => {
  return (
    <section className="hero_row_big">
      <Parallax
        shouldAlwaysCompleteAnimation={ true }
        translateY={[ '0vh', '100vh' ]}
        scale={[1,1.25]}
      >
        <div className="bg_img_container" style={{backgroundImage: 'url(' + returnImageURL(rowData.image) + ')'}} />
      </Parallax>
      <div className="hero_wrapper">
        <div className="container">
          <div className="hero_content">
            <h1 className="page_title">{rowData.title ?? 'Welcome!'}</h1>
            {rowData.copy && <div className="hero_copy"><RenderCopy copyData={rowData.copy} /></div>}
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
