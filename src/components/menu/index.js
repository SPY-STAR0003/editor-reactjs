
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

const MenuBar = ({ 
    editor,
    align,
    placeholder,
    rtl,
    coding,
    editBtns,
    resetBtn,
    lists,
    line,
    undo,
    enter,
    headings,
}) => {
    if (!editor) {
        return null
    }

    return (
        <div className={"tiptap-keyboard-menu"}>
            { editBtns && <EditBtns editor={editor} /> }
            { coding && <Coding editor={editor} /> }
            { enter && <Enter editor={editor} /> }
            { line && <Line editor={editor} /> }
            { lists && <Lists editor={editor} /> }
            { resetBtn && <Reset editor={editor} /> }
            { align && <TextAlignment editor={editor} /> }
            { undo && <TextHistory editor={editor} /> }
            { headings && <TextSize editor={editor} /> }        
        </div>
    )
}

export default MenuBar;