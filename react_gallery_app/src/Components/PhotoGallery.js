import React from 'react';
import Photo from './Photo';
import NoResults from './NoResults';

const PhotoGallery = props => {
  const results = props.data;
  let photos;
  /*if there are results, the results are mapped over and the individual data is
  interpolated to create each url*/
  if(results.length > 0){
    photos = results.map( photo => <Photo url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} key={photo.id} /> );
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
