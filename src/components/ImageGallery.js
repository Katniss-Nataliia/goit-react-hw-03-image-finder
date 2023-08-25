
export const ImageCard = ({gallery}) => {
    <ul>
        {gallery.map(({id, userImageURL}) => (
            <li key={id}>
                <img src={userImageURL}></img>

            </li>
        ))}

    </ul>



}
