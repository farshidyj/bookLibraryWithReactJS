
import styles from "./SideBooks.module.css";
function SideBooks({liked}) {
// console.log(liked);

  return (
    <>
      <div >
        <h4 className={styles.title}>Favorites</h4>
            
            {liked.map((book) => (
              <div key={book.id} className={styles.bookCard}>
            
                <img src={book.image} alt="" />
                 <p> {book.title} </p>
              </div>
            ))}
          </div>
    </>
  );
}

export default SideBooks;
