import Editor from "./components/Editor";
import styles from './App.module.css';
import Preview from "./components/Preview";

export default function App() {

  return (
    <>
      <nav>
        Markedit
      </nav>
      <header className={styles.header}>
        <div>Markdown</div>
        <div>Preview</div>
      </header>
      <main className={styles.container}>
        <Editor />
        <Preview />
      </main>
    </>
  );
}