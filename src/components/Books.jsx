import BookCards from "./BookCards";
import { useState } from "react";
import Styles from "./Books.module.css";
import SideBooks from "./SideBooks";
function Books({ books }) {
  const [liked, setLiked] = useState([]);

  const likeHandlerList = (book, status) => {
    if (status) {
      setLiked([...liked, book]);
      console.log(liked);
    } else {
      const newLikedList = liked.filter((item) => item.id !== book.id);
      setLiked(newLikedList);
      // console.log(liked);
    }
  };

  return (
    <>
      <div className={Styles.Container}>
        <div className={Styles.bookCards}>
          {books.map((book) => (
            <BookCards
              key={book.id}
              data={book}
              likeHandlerList={likeHandlerList}
            />
          ))}
        </div >
        

        {!!liked.length && <div className={Styles.favorites}> <SideBooks liked={liked}/> </div> }
        
      </div>
    </>
  );
}

export default Books;
