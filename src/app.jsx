import React from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { BlackCode, BlockQoute, Bold, BulletList, CenterAlign, Code, DeleteMark, Enter, Italic, JustifyAlign, LeftAlign, Line, OrderedList, Redu, RightAlign, Strike, Undo } from './icons';
import Typography from '@tiptap/extension-typography';
import TextAlign from '@tiptap/extension-text-align'
import Placeholder from '@tiptap/extension-placeholder'


const MenuBar = ({ editor }) => {

  if (!editor) {
    return null
  }

  return (
    <div className={"tiptap-keyboard-menu"}>
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
      <Code
        onClick={() => editor.chain().focus().toggleCode().run()}
        classes={`my-2 ${editor.isActive('code') ? 'active' : ''}`}
      />
      <DeleteMark
        onClick={() => editor.chain().focus().unsetAllMarks().clearNodes().run()}
        classes={`hover:bg-gray-300/60 hover:fill-gray-800 rounded fill-gray-700`}
      />
      <BulletList
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        classes={`my-2 ${editor.isActive('bulletList') ? 'active' : ''}`}
      />
      <OrderedList
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        classes={`my-2 ${editor.isActive('orderedList') ? 'active' : ''}`}
      />
      <BlackCode
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        classes={`my-2 ${editor.isActive('codeBlock') ? 'active' : ''}`}
      />
      <BlockQoute
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        classes={`my-2 ${editor.isActive('blockquote') ? 'active' : ''}`}
      />
      <Line
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
        classes={`hover:bg-gray-300/60 hover:fill-gray-800 rounded fill-gray-700`}
      />
      <Enter
        onClick={() => editor.chain().focus().setHardBreak().run()}
        classes={`hover:bg-gray-300/60 hover:fill-gray-800 rounded fill-gray-700`}
      />
      <Undo
        onClick={() => editor.chain().focus().undo().run()}
        classes={`hover:bg-gray-300/60 hover:fill-gray-800 !p-[6px] rounded fill-gray-700`}
      />
      <Redu
        onClick={() => editor.chain().focus().redo().run()}
        classes={`hover:bg-gray-300/60 hover:fill-gray-800 !p-[6px] rounded fill-gray-700`}
      />
      <LeftAlign
        onClick={() => editor.chain().focus().setTextAlign('left').run()}
        classes={`my-2 ${editor.isActive({ textAlign: 'left' }) ? 'active' : ''}`}
      />
      <CenterAlign
        onClick={() => editor.chain().focus().setTextAlign('center').run()}
        classes={`my-2 ${editor.isActive({ textAlign: 'center' }) ? 'active' : ''}`}
      />
      <RightAlign
        onClick={() => editor.chain().focus().setTextAlign('right').run()}
        classes={`my-2 ${editor.isActive({ textAlign: 'right' }) ? 'active' : ''}`}
      />
      <JustifyAlign
        onClick={() => editor.chain().focus().setTextAlign('justify').run()}
        classes={`my-2 ${editor.isActive({ textAlign: 'justify' }) ? 'active' : ''}`}
      />
            
      <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={`tiptap-menu-btn ${editor.isActive('paragraph') ? 'active' : ''}`}
      >
        P
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={`tiptap-menu-btn ${editor.isActive('heading', {level : 1}) ? 'active' : ''}`}
      >
        H1
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`tiptap-menu-btn ${editor.isActive('heading', {level : 2}) ? 'active' : ''}`}
      >
        H2
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={`tiptap-menu-btn ${editor.isActive('heading', {level : 3}) ? 'active' : ''}`}
      >
        H3
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={`tiptap-menu-btn ${editor.isActive('heading', {level : 4}) ? 'active' : ''}`}
      >
        H4
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        className={`tiptap-menu-btn ${editor.isActive('heading', {level : 5}) ? 'active' : ''}`}
      >
        H5
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        className={`tiptap-menu-btn ${editor.isActive('heading', {level : 6}) ? 'active' : ''}`}
      >
        H6
      </button>
      
    </div>
  )
}

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
        // Use a placeholder:
        placeholder: 'متن خود را وارد کنید ...',
        // Use different placeholders depending on the node type:
        // placeholder: ({ node }) => {
        //   if (node.type.name === 'heading') {
        //     return 'What’s the title?'
        //   }

        //   return 'Can you add some further context?'
        // },
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