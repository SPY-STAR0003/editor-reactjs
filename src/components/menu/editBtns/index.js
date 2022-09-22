
import { Bold, Italic, Strike } from '../../assets/icons';

const EditBtns = ({editor}) => {

    return (
        <>
            <Bold
                onClick={() => editor.chain().focus().toggleBold().run()}
                classes={`my-2 ${editor.isActive('bold') ? 'active' : ''}`}
            />
            <Italic
                onClick={() => editor.chain().focus().toggleItalic().run()}
                classes={`my-2 ${editor.isActive('italic') ? 'active' : ''}`}
            />
            <Strike
                onClick={() => editor.chain().focus().toggleStrike().run()}
                classes={`my-2 ${editor.isActive('strike') ? 'active' : ''}`}
            />
        </>
    )
}

export default EditBtns;