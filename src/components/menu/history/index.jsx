
import { Redu, Undo } from '../../assets/icons';

const TextHistory = ({editor}) => {

    return (
        <>
            <Undo
                onClick={() => editor.chain().focus().undo().run()}
                classes={`hover:bg-gray-300/60 hover:fill-gray-800 !p-[6px] rounded fill-gray-700`}
            />
            <Redu
                onClick={() => editor.chain().focus().redo().run()}
                classes={`hover:bg-gray-300/60 hover:fill-gray-800 !p-[6px] rounded fill-gray-700`}
            /> 
        </>
    )
}

export default TextHistory;