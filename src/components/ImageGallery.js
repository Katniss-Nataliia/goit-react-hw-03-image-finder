import React, {Component} from 'react';

export class ImageCard extends Component {
    render(){
        const {gallery} = this.props;

        return(
            <ul>
                {gallery.map(({id, webformatURL, tags})=>(
                    <li key={id}>
                        <img src={webformatURL} alt={tags} />
                    </li>
                ))}
            </ul>
        )
    }
}


