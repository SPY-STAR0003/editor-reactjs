

const TextSize = ({editor}) => {
    return (
        <>
            <button
                onClick={() => editor.chain().focus().setParagraph().run()}
                className={`tiptap-menu-btn ${editor.isActive('paragraph') ? 'active' : ''}`}
            >
                P
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                className={`tiptap-menu-btn ${editor.isActive('heading', {level : 1}) ? 'active' : ''}`}
            >
                H1
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                className={`tiptap-menu-btn ${editor.isActive('heading', {level : 2}) ? 'active' : ''}`}
            >
                H2
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                className={`tiptap-menu-btn ${editor.isActive('heading', {level : 3}) ? 'active' : ''}`}
            >
                H3
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
                className={`tiptap-menu-btn ${editor.isActive('heading', {level : 4}) ? 'active' : ''}`}
            >
                H4
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
                className={`tiptap-menu-btn ${editor.isActive('heading', {level : 5}) ? 'active' : ''}`}
            >
                H5
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
                className={`tiptap-menu-btn ${editor.isActive('heading', {level : 6}) ? 'active' : ''}`}
            >
                H6
            </button>
        </>
    )
}

export default TextSize;