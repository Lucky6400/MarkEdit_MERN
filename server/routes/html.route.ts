import express, { Request, Response } from 'express';
import MarkdownIt from 'markdown-it';

function formatMarkdownToHTML(text: string) {
  const md = new MarkdownIt();
  return md.render(text);
}

const router = express.Router();

router.post('/gethtml', (req: Request, res: Response) => {
    const mdtext = req.body.mdtext;

    res.json({
        html: formatMarkdownToHTML(mdtext)
    })
})

export default router;