import React from 'react';
import { FacebookShareButton, FacebookIcon } from 'react-share';

const App = () => {
  return (
    <div>
      <FacebookShareButton
        url={'https://www.example.com'}
        quote={'Dummy text!'}
        hashtag="#muo"
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
    </div>
  );
};

export default App;