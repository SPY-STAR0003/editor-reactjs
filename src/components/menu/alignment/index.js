import { CenterAlign, JustifyAlign, LeftAlign, RightAlign } from './../../assets/icons';

const TextAlignment = ({editor}) => {
    return (
        <>
            <LeftAlign
                onClick={() => editor.chain().focus().setTextAlign('left').run()}
                classes={`${editor.isActive({ textAlign: 'left' }) ? 'active' : ''}`}
            />
            <CenterAlign
                onClick={() => editor.chain().focus().setTextAlign('center').run()}
                classes={`${editor.isActive({ textAlign: 'center' }) ? 'active' : ''}`}
            />
            <RightAlign
                onClick={() => editor.chain().focus().setTextAlign('right').run()}
                classes={`${editor.isActive({ textAlign: 'right' }) ? 'active' : ''}`}
            />
            <JustifyAlign
                onClick={() => editor.chain().focus().setTextAlign('justify').run()}
                classes={`${editor.isActive({ textAlign: 'justify' }) ? 'active' : ''}`}
            />
        </>
    )
}

export default TextAlignment;