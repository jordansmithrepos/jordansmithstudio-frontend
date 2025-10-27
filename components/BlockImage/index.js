import Image from "next/image";
import Link from "next/link";
import PropTypes from 'prop-types';
import { PortableText } from '@portabletext/react';
import { returnImageURL } from '../../lib/helpers';

const BlockImage = ({
  blockData,
}) => {
  return (
  <div className="block_content row d-flex align-items-center">
    <div className={`col-12${blockData.has_image ? ' col-md-6' : ''}`}>
      {blockData.block_title && <h2 className="section_title">{blockData.block_title}</h2>}
      {blockData.block_copy &&
        <PortableText value={blockData.block_copy[0]} />
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
      <Image
        src={returnImageURL(blockData.block_image)}
        height={600}
        width={600}
        alt=""
        className="w-100 h-auto"
      />
    </div>}
  </div>
  );
};

BlockImage.propTypes = {
  blockData: PropTypes.any,
};

export default BlockImage;
