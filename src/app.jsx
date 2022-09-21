import React from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Typography from '@tiptap/extension-typography';
import TextAlign from '@tiptap/extension-text-align'
import Placeholder from '@tiptap/extension-placeholder'
import MenuBar from './components/menu';

const App = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Typography,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
        defaultAlignment: 'right',
      }),
      Placeholder.configure({
        placeholder: 'متن خود را وارد کنید ...',
      }),
    ],
    content: ``,
  })

  return (
    <div className={"p-4"}>
      <MenuBar editor={editor} />
      <EditorContent
        className={"border outline-none border-gray-300 mt-8 mx-8 p-4 rounded"}
        editor={editor}
      />
    </div>
  )
}

export default App;