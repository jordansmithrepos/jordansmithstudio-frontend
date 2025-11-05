import PropTypes from 'prop-types';
import { PortableText } from '@portabletext/react';

const RenderCopy = ({
  copyData,
}) => {
  const PortableTextComponents = {
    marks: {
      link: ({ children, value }) => {
        const target = ( value?.href || '' ).startsWith( 'http' ) ? '_blank' : undefined;
        return (
          <a href={value?.href} target={target}>
            {children}
          </a>
        )
      }
    }
  }
  return (
    <PortableText value={copyData} components={PortableTextComponents} />
  );
};

RenderCopy.propTypes = {
  copyData: PropTypes.any,
};

export default RenderCopy;
