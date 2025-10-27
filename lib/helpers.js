import { urlFor } from './sanityHelpers';

export const returnImageURL = (imageURL) => {
  const getUrlFor = urlFor(imageURL);
  return getUrlFor.url();
};