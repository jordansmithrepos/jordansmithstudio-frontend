import Image from "next/image";
import Link from "next/link";
import PropTypes from 'prop-types';
import { PortableText } from '@portabletext/react';
import { returnImageURL } from '../../lib/helpers';

const BlockContent = ({
  blockData,
}) => {
  console.log( '--> jds BlockContent:', blockData.layered_image, blockData.image_layers );
  return (
  <div className="block_content row d-flex align-items-center py-5">
    <div className={`col-12${blockData.has_image ? ' col-md-6 mb-5 mb-md-0' : ''}`}>
      {blockData.block_title && <h2 className="section_title">{blockData.block_title}</h2>}
      {blockData.block_copy &&
        <PortableText value={blockData.block_copy} />
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
      <div className="image_wrapper">
        <Image
          src={returnImageURL(blockData.block_image)}
          height={600}
          width={600}
          alt={blockData.alt_text ? blockData.alt_text : ''}
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
                className={`image_layer layer-${i} w-100 h-auto`}
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
