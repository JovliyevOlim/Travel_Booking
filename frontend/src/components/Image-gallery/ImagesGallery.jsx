import React from 'react';
import galleryImages from './galleryImages';
import Masonry, {ResponsiveMasonry}  from 'react-responsive-masonry'

function ImagesGallery(props) {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{350:1,768:3,992:4}}>
        <Masonry gutter='1rem'>
          {
            galleryImages.map((item,index)=>(
              <img 
                className='masonry__img'
              src={item} key={index} alt="index" 
                style={{width:'100%',display:'block',borderRadius:'10px'}}
              />
            ))
          }
        </Masonry>
    </ResponsiveMasonry>
  );
}

export default ImagesGallery; 