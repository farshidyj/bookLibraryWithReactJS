
import Books from "./components/Books.jsx";
import {books} from "./constants/mockData.js";
import Layout from "./layouts/Layout.jsx";
 

function App() {
  
  return (
    
    <>
      <Layout>
        <Books books={books} />
      </Layout>

    </>
  );
}

export default App;
