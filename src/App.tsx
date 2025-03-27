import Post from "./components/Post";

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Post imageUrl="https://preview.redd.it/1amul35hrbi71.jpg?width=1080&crop=smart&auto=webp&s=4f64675ea7b18d2e34f68c30af39254d11edd3a7"> <hr />
        Olha só que legal esse Fennec
      </Post>
    </div>
  );
}

export default App;