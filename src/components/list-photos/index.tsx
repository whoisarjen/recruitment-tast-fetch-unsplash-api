import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const ListPhotos = ({ items = [] }: { items: Array<any> }) => {
    return (
        <ImageList cols={3}>
            {items.map((item: any) => (
                <ImageListItem key={item.id}>
                    <img
                        data-testid={item.id}
                        src={`https://source.unsplash.com/${item.id}`}
                        srcSet={`https://source.unsplash.com/${item.id}`}
                        alt={item.description}
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}

export default ListPhotos;