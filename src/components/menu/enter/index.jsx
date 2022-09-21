import { Enter } from "../../assets/icons";


const EnterText = ({editor}) => {

    return (
        <Enter
            onClick={() => editor.chain().focus().setHardBreak().run()}
            classes={`hover:bg-gray-300/60 hover:fill-gray-800 rounded fill-gray-700`}
        />
    )
}

export default EnterText;