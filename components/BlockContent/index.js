import Image from "next/image";
import Link from "next/link";
import PropTypes from 'prop-types';
import { returnImageURL } from '../../lib/helpers';
import { RenderCopy } from '@/components';

const BlockContent = ({
  blockData,
}) => {
  return (
  <div className="block_content row d-flex align-items-center py-5">
    <div className={`col-12${blockData.has_image ? ' col-md-6 mb-5 mb-md-0' : ''}`}>
      {blockData.block_title && <h2 className="section_title">{blockData.block_title}</h2>}
      {blockData.block_copy &&
        <RenderCopy copyData={blockData.block_copy} />
      }
      {blockData.has_cta &&
        <div className="cta_wrapper">
          <Link
            href={blockData.cta.url}
            target={blockData.cta.new_window ? '_blank' : '_self'}
            className="cta btn"
          >
            {blockData.cta.text}
          </Link>
        </div>
      }
    </div>
    {blockData.block_image &&
    <div className={`col-12${blockData.has_image ? ' col-md-6' : ''}`}>
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
                src={returnImageURL(image)}
                height={600}
                width={600}
                alt=""
                className={`image_layer layer-${i}`}
                key={i}
              />
            );
          })}
        </div>}
      </div>
    </div>}
  </div>
  );
};

BlockContent.propTypes = {
  blockData: PropTypes.any,
};

export default BlockContent;
