import StarterKit from '@tiptap/starter-kit';
import Typography from '@tiptap/extension-typography';
import TextAlign from '@tiptap/extension-text-align';
import Placeholder from '@tiptap/extension-placeholder';

export const EditorExtensions = ({
    typography,
    align,
    placeholder,
    rtl
  }) => {

    if(!rtl) document.querySelector(".ProseMirror p.is-editor-empty:first-child::before").style.direction = "ltr !important"

    const extensions = [StarterKit]

    if(typography) extensions.push(Typography)

    if(align) {
        if (rtl) {
            extensions.push(TextAlign.configure({
                types: ['heading', 'paragraph'],
                defaultAlignment: 'right',
            }))
        } else {
            extensions.push(TextAlign.configure({
                types: ['heading', 'paragraph'],
                defaultAlignment: 'left',
            }))
        }
    }

    if(placeholder !== undefined) {
        extensions.push(Placeholder.configure({
            placeholder,
        }))
    }

    return extensions
}