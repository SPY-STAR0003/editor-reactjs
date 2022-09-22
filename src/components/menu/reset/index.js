
import { DeleteMark } from "../../assets/icons";


const Reset = ({editor}) => {

    return (
        <DeleteMark
            onClick={() => editor.chain().focus().unsetAllMarks().clearNodes().run()}
            classes={`hover:bg-gray-300/60 hover:fill-gray-800 rounded fill-gray-700`}
        />
    )
}

export default Reset;