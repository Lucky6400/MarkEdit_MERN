import MarkdownEditor from "@uiw/react-markdown-editor";
import "@wcj/dark-mode";
import { useState, useEffect, useCallback } from "react";
import styles from './Editor.module.css';
import { debounce } from 'lodash'
import { useDispatch } from "react-redux";
import { HTMLService } from "../services/HTMLService";
import { setHtml } from "../redux/htmlSlice";


export default function Editor() {
    const [markdownVal, setMarkdownVal] = useState("");
    const dispatch = useDispatch();

    const fetchHTML = useCallback(debounce(async (markdownText: string) => {
        try {
            const htmlService = new HTMLService();

            const response = await htmlService.getHtml(markdownText || "");
            console.log(response)
            dispatch(setHtml(response));
        } catch (error) {
            console.error('Error fetching HTML:', error);
        }
    }, 500), []);


    useEffect(() => {
        fetchHTML(markdownVal);
    }, [markdownVal, fetchHTML]);

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
