import React from 'react';


class Gallery extends React.Component {

    render(){

        const myArr = ['bacon', 'letuce', 'tomatoes'];

        for (var i = 0; i < myArr.length; i++) {
            //create li for each element
            var li = document.createElement('li');
            var list = document.getElementById('list');

            //add innerhtml to li elements
            let html = "<li>";
            html+= myArr[i];
            html+= "</li>";

            //display li elements
            li.innerHTML = html;
            
            //this is throwing an error
            //kept sample list in the return as an example of what i want to do
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