import MarkdownEditor from "@uiw/react-markdown-editor";
import "@wcj/dark-mode";
import { useState } from "react";
import styles from './Editor.module.css';

export default function Editor() {
    const [markdownVal, setMarkdownVal] = useState("");
    
    return (
        <div className={styles.editor_cont} data-color-mode="light">
            <MarkdownEditor
                value={markdownVal}
                onChange={(value) => {
                    setMarkdownVal(value);
                }}
                className={styles.editor}
                toolbarsMode={[]}
                enablePreview={false}
            />
        </div>
    );
}
