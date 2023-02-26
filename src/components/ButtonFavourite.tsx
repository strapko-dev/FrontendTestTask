import { BookmarkBorderOutlined, BookmarkOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useState } from "react";

const ButtonFavourite: React.FC = () => {
    const [favourite, setFavourite] = useState(false)
    return (
        <div>
            <IconButton onClick={() => setFavourite(!favourite)}>
                {favourite === false && <BookmarkBorderOutlined sx={{width: '20px', color: 'var(--colors-orange)'}} />}
                {favourite === true && <BookmarkOutlined sx={{width: '20px', color: 'var(--colors-orange)'}} />}
            </IconButton>
        </div>
    );
}

export default ButtonFavourite;