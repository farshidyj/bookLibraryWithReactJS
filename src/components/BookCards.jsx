import { FaHeart } from "react-icons/fa";

import Styles from "./BookCards.module.css";
import { useState } from "react";

function BookCards({data, likeHandlerList}) {
    const { title, author, language, pages, image } = data;
    
    const [like, setLike] = useState(false);

const likeHandler =() => {
    likeHandlerList(data,!like);
    setLike(!like);
}

  return (
    <div className={Styles.card}>
        <img src={image} alt={title} />

        <div className={Styles.info} >

            <h3>{title}</h3>
             <p>{author}</p>

             <div>
                <span>{language}</span>
                <span>|</span>
                <span>{pages} pages</span>
             </div>

        </div>

        <button className={Styles.likeButton} onClick={likeHandler}>
            <FaHeart color={like ? "red": "white"} />
        </button>
    </div>
  )
}

export default BookCards