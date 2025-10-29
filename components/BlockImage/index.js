import Image from "next/image";
import PropTypes from 'prop-types';
import { returnImageURL } from '../../lib/helpers';

const BlockImage = ({
  blockData,
}) => {
  return (
  <div className="block_image row d-flex align-items-center py-5">
    <div className={`col-12`}>
      <Image
        src={returnImageURL(blockData.block_image)}
        height={600}
        width={600}
        alt={blockData.alt_text ? blockData.alt_text : ''}
        className="w-100 h-auto"
      />
    </div>
  </div>
  );
};

BlockImage.propTypes = {
  blockData: PropTypes.any,
};

export default BlockImage;
