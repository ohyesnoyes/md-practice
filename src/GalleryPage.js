import React from 'react';
import Gallery from 'react-grid-gallery';
import {Container} from 'mdbreact';
import 'write';
import './photos.json';
import 'json-loader';

class GalleryPage extends React.Component {
   
    addImage (){
        const json = require('./photos.json');

        document.querySelector('#addImageBtn').addEventListener('click', (evt) => {
            const imgSrc = document.querySelector('#imgSrcInput').value;
            const imgCaption = document.querySelector('#imgCaptionInput').value;
            const image = {
                "src": imgSrc,
                "thumbnail": imgSrc,
                "thumbnailWidth": 320,
                "thumbnailHeight": 212,
                "caption": imgCaption
            };

            //add image object to json file
            json.unshift(image);
            console.log(json);

            //need to write file on change

            
            // var fs = require('fs');
            // var fileName = './phototest.json';
            // var file = require(fileName);

            // file.key = image;

            // fs.writeFile(fileName, JSON.stringify(file), function (err) {
            //     if (err) return console.log(err);
            //     console.log(JSON.stringify(file));
            //     console.log('writing to ' + fileName);
            // });
        });
        
        return(
            <div>
                
            </div>
        );
    }

    render(){

        const json = require('./photos.json');

        return(
            
            <div>
                <Container>
                    <legend>Add an Image from Web Source</legend>
                    <div className="md-form input-group mt-0 mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-default1">Source</span>
                        </div>
                        <input id="imgSrcInput" type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default1" />
                    </div>
                    <div className="md-form input-group mt-0 mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-default1">Caption</span>
                        </div>
                        <input id="imgCaptionInput" type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default1" />
                    </div>
                </Container>
                
                <button className="btn btn-success" id="addImageBtn" onClick={this.addImage}>Add Image</button>
                <hr/>
                <Gallery images={json} showImageCount={true} backdropClosesModal={true} />
            </div>
        );
    }

};


export default GalleryPage;