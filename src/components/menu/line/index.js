
import { Line } from "../../assets/icons";


const HorizontalLine = ({editor}) => {

    return (
        <Line
            onClick={() => editor.chain().focus().setHorizontalRule().run()}
            classes={`hover:bg-gray-300/60 hover:fill-gray-800 rounded fill-gray-700`}
        />
    )
}

export default HorizontalLine;