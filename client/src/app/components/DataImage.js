import React, { memo, useReducer } from 'react';
import PropTypes from 'prop-types';

const applyImageSource = (data, newData) => {
  if (newData.error || (!newData.source && data.fallback)) {
    return applyImageSource(data, { source: data.fallback });
  }

  // if the source is already a data URI, just use it
  if (newData.source.startsWith('data:')) {
    return { ...data, uri: newData.source };
  }

  // if we have a locally-saved version of the data URI, return that
  const savedUri = localStorage.getItem(newData.source) || '';
  if (savedUri) {
    return { ...data, uri: savedUri };
  }
  return data;
};

const onLoadImage = ({ target }) => {
  return;
  if (target.src.startsWith('data:')) return;
  if (target.src.startsWith('https://secure.gravatar.com')) return;

  createImageBitmap(target).then(bitmap => {
    var canvas = document.createElement('canvas');
    canvas.width = target.naturalWidth;
    canvas.height = target.naturalHeight;

    canvas.getContext('2d').drawImage(bitmap, 0, 0);

    const dataUri = canvas.toDataURL('image/png');

    localStorage.setItem(target.src, dataUri);
  });
};

const DataImage = props => {
  let uri = props.src;
  if (uri) {
    // if the source is already a data uri, we don't need to do anything
    if (uri.startsWith('data:')) return <img {...props} />;

    // first check to see if we've got a local copy of the image, so
    // we don't actually need to make the network request
    const localCopy = localStorage.getItem(props.src);
    if (localCopy) uri = localCopy;
  } else if (props.fallback) {
    if (props.fallback.startsWith('data:')) uri = props.fallback;
    if (!uri) uri = localStorage.getItem(props.src) || '';

    if (!uri) uri = props.fallback;
  }
  return (
    <img
      crossOrigin='use-credentials'
      {...props}
      src={uri}
      /* onLoad={onLoadImage} */
    />
  );
};

DataImage.propTypes = {
  src: PropTypes.string,
  fallback: PropTypes.string
};

export default memo(DataImage);
