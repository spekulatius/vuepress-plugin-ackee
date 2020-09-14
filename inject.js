/* global TRACKER_URL, SITE_ID */
export default ({ router }) => {
  if (
    // only in production
    process.env.NODE_ENV === 'production' &&

    // only if we got an ID and tracker url
    SITE_ID && TRACKER_URL &&

    // and we are ready
    typeof window !== 'undefined'
  ) {
    (function() {
      var d=document,
      g=d.createElement('script'),
      s=d.getElementsByTagName('script')[0];

      g.async=true;
      g.setAttribute('data-ackee-server', TRACKER_URL);
      g.setAttribute('data-ackee-domain-id', SITE_ID);
      g.src=TRACKER_URL+'/_.js';

      s.parentNode.insertBefore(g,s);
    })();
  }
}
