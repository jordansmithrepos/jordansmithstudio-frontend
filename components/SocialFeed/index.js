import Link from "next/link";
import Script from "next/script";
import PropTypes from 'prop-types';
import { RenderCopy } from '@/components';


const SocialFeed = ({
  feedTitle,
  feedCopy,
  feedID,
  socialHandle,
}) => {
  return (
    <div className="social_feed py-5">
      <div className="feed_header">
        <h2>{feedTitle ?? 'See more on Instagram'}</h2>
        <h5>
          <Link href={`https://www.instagram.com/${socialHandle ?? 'jordansmithstudio'}`} target="_blank" rel="noopener noreferrer">
            @{socialHandle ?? 'jordansmithstudio'}
          </Link>
        </h5>
      </div>
      {feedCopy && <div className="feed_copy">{<RenderCopy copyData={feedCopy} />}</div>}
      <div className="feed_wrapper">
        <div
          className="taggbox"
          style={{height: '100%', width: '100%', overflow: 'auto' }}
          data-widget-id={feedID ?? '305725'}
          data-website="1"
          data-tags="false"
        ></div>
        <Script  src="https://widget.taggbox.com/embed-lite.min.js" />
      </div>
    </div>
  );
};

SocialFeed.propTypes = {
  feedTitle: PropTypes.any,
  feedCopy: PropTypes.any,
  feedID: PropTypes.any,
  socialHandle: PropTypes.any,
};

export default SocialFeed;
