import React from 'react';
import Photo from './Photo';
import NoResults from './NoResults';

const PhotoGallery = props => {
  const results = props.data;
  let photos;
  if(results.length > 0){
    photos = results.map( photo => <Photo url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} key={photo.id} /> );
      /*url={path to photo resource in flickr api photo object} key={id value}*/
  } else {
    photos = <NoResults />
  }

  return (
    <div className="photo-container">
      <h2>Results</h2>
      <ul>
        {photos}
      </ul>
    </div>
  );
}

export default PhotoGallery;
