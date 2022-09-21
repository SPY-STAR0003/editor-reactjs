
import { BlackCode, BlockQoute, Code } from '../../assets/icons';


const Coding = ({editor}) => {

    return (
        <>
            <Code
                onClick={() => editor.chain().focus().toggleCode().run()}
                classes={`my-2 ${editor.isActive('code') ? 'active' : ''}`}
            />
            <BlackCode
                onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                classes={`my-2 ${editor.isActive('codeBlock') ? 'active' : ''}`}
            />
            <BlockQoute
                onClick={() => editor.chain().focus().toggleBlockquote().run()}
                classes={`my-2 ${editor.isActive('blockquote') ? 'active' : ''}`}
            />
        </>
    )
}

export default Coding;