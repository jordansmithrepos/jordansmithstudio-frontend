import Image from "next/image";
import PropTypes from 'prop-types';
import { returnImageURL } from '../../lib/helpers';

const BlockImage = ({
  blockData,
}) => {
  return (
  <div className="block_image row d-flex align-items-center py-5">
    <div className={`col-12`}>
      <div className={`image_wrapper${blockData.layered_image && ' has_layers'}`}>
        <Image
          src={blockData.block_image.asset.url ?? returnImageURL(blockData.block_image)}
          height={blockData.block_image.asset.metadata.dimensions.height ?? 600}
          width={blockData.block_image.asset.metadata.dimensions.width ?? 600}
          alt={blockData.block_image.asset.altText ? blockData.block_image.asset.altText : ''}
          className="w-100 h-auto position-relative"
        />
        {blockData.layered_image &&
        <div className="layered_images">
          {blockData.image_layers && blockData.image_layers.map( (image, i) => {
            return (
              <Image
                src={image.asset.url ?? returnImageURL(image)}
                height={image.asset.metadata.dimensions.height ?? 600}
                width={image.asset.metadata.dimensions.width ?? 600}
                alt=""
                className={`image_layer layer-${i}`}
                key={i}
              />
            );
          })}
        </div>}
      </div>
    </div>
  </div>
  );
};

BlockImage.propTypes = {
  blockData: PropTypes.any,
};

export default BlockImage;
