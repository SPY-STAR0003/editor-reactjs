
// children
import EditBtns from "./editBtns";
import Coding from "./coding";
import Enter from "./enter";
import TextHistory from "./history";
import Lists from "./lists";
import Line from "./line";
import Reset from "./reset";
import TextSize from "./size";
import TextAlignment from "./alignment";

const MenuBar = ({ editor }) => {
    if (!editor) {
        return null
    }

    return (
        <div className={"tiptap-keyboard-menu"}>
            <EditBtns editor={editor} />
            <Coding editor={editor} />
            <Enter editor={editor} />
            <TextHistory editor={editor} />
            <Line editor={editor} />
            <Lists editor={editor} />
            <Reset editor={editor} />
            <TextAlignment editor={editor} />
            <TextSize editor={editor} />
        </div>
    )
}

export default MenuBar;