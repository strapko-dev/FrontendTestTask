import { BookmarkBorderOutlined, BookmarkOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useState } from "react";

const ButtonFavourite: React.FC = () => {
    const [isFavourite, setIsFavourite] = useState(false)
    return (
        <IconButton onClick={() => setIsFavourite(!isFavourite)}>
            { isFavourite ? (
                <BookmarkOutlined sx={{width: '20px', color: 'var(--colors-orange)'}} />
            ) : (
                <BookmarkBorderOutlined sx={{width: '20px', color: 'var(--colors-orange)'}} /> 
            )}
        </IconButton>
    );
}

export default ButtonFavourite;