import React from 'react';
import Gallery from 'react-grid-gallery';
import './photos.json';
import 'json-loader';

class GalleryPage extends React.Component {
   
    render(){

        const json = require('./photos.json')

        return(
            
            <div>
                <Gallery images={json}/>
            </div>
        );
    }

};


export default GalleryPage;