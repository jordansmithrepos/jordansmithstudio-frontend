import Image from "next/image";
import PropTypes from 'prop-types';
import { RenderCopy } from '@/components';
import { returnImageURL } from '../../lib/helpers';

const GridOfImages = ({
  blockData,
}) => {
  return (
  <div className="grid_of_images row d-flex align-items-center py-5">
    <div className="col-12">
      {blockData.grid_title && <h2 className="section_title label_maker">{blockData.grid_title}</h2>}
      {blockData.grid_copy &&
        <RenderCopy copyData={blockData.grid_copy} />
      }
    </div>
    <div className="col-12">
      <div className="row g-1">
        {blockData.image_grid && blockData.image_grid.map((item, i) => {
          return (
            <div className="col-12 col-md-6 col-lg-4" key={i}>
              <div className="image_wrapper art_frame">
                <Image
                  src={returnImageURL(item)}
                  height={600}
                  width={600}
                  alt={item.alt_text ? item.alt_text : ''}
                  className="image w-100 h-auto"
                />
                {item.title && <div className="image_title"><RenderCopy copyData={item.title} /></div>}
              </div>
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
