import Image from "next/image";
import PropTypes from 'prop-types';
import { returnImageURL } from '../../lib/helpers';

const GridOfImages = ({
  blockData,
}) => {
  return (
  <div className="grid_of_images row d-flex align-items-center mb-5">
    <div className="col-12">
      {blockData.grid_title && <h2 className="section_title">{blockData.grid_title}</h2>}
    </div>
    <div className="col-12">
      <div className="row g-5">
        {blockData.image_grid && blockData.image_grid.map((item, i) => {
          return (
            <div className="col-12 col-md-6 col-lg-4" key={i}>
              <div className="image_wrapper">
                <Image
                  src={returnImageURL(item)}
                  height={600}
                  width={600}
                  alt={item.alt_text ? item.alt_text : ''}
                  className="image w-100 h-auto mb-3"
                />
              </div>
              {item.title && <div className="image_title">{item.title}</div>}
            </div>
          );
        })}
      </div>
    </div>
  </div>
  );
};

GridOfImages.propTypes = {
  blockData: PropTypes.any,
};

export default GridOfImages;
