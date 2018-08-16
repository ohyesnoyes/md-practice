import React from 'react';


class Gallery extends React.Component {

    render(){
 
        // test array
        // plan on an external json file with images and info
        const myArr = ['bacon', 'letuce', 'tomatoes'];

        // loop thru the array and create li element for each image
        for (var i = 0; i < myArr.length; i++) {
            //create li for each element
            var li = document.createElement('li');
            var list = document.getElementById('list');

            //add innerhtml to li elements to display
            let html = "<li>";
            html+= myArr[i];
            html+= "</li>";
            li.innerHTML = html;
            
            //this is throwing an error
            //kept sample list in the return as an example of what i want to do
            // display the list items in the "list" ul
            list.appendChild(li);
            console.log(html);
        }

        return(
            <div>
                <ul id="list">
                    <li>{myArr[0]}</li>
                    <li>{myArr[1]}</li>
                    <li>{myArr[2]}</li>
                </ul>
            </div>
        );
    }

};

export default Gallery;