import React from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import MenuBar from '../menu';
import { EditorExtensions } from './extensions';
import getContent from "./getContent"

const Editor = ({
  typography = false,
  align = true,
  placeholder = "متن خود را وارد کنید ...",
  rtl = true,
  coding = false,
  editBtns = true,
  resetBtn = false,
  lists = false,
  line = false,
  undo = true,
  enter = true,
  headings = false,
  output,
}) => {

  const extensions = EditorExtensions({
    typography,
    align,
    placeholder,
    rtl
  })

  const editor = useEditor({
    extensions,
    content: ``,
  })

  return (
    <div className={"tiptap-container"}>
      <MenuBar
        editor={editor}
        align={align}
        placeholder={placeholder}
        rtl={rtl}
        coding={coding}
        editBtns={editBtns}
        resetBtn={resetBtn}
        lists={lists}
        line={line}
        undo={undo}
        enter={enter}
        headings={headings}
      />
      <EditorContent editor={editor} />
      <button onClick={() => getContent({editor, output})} className='tiptap-submit tiptap-submit-style'> تایید </button>
    </div>
  )
}

export default Editor;