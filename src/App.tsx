import React from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { BlackCode, BlockQoute, Bold, BulletList, CenterAlign, Code, DeleteMark, Enter, Italic, JustifyAlign, LeftAlign, Line, OrderedList, Redu, RightAlign, Strike, Undo } from './icons';
import Typography from '@tiptap/extension-typography';
import TextAlign from '@tiptap/extension-text-align'
import Placeholder from '@tiptap/extension-placeholder'

interface MenuBarProps {
  editor : any
}

const MenuBar : React.FC<MenuBarProps> = ({ editor }) => {

  if (!editor) {
    return null
  }

  return (
    <div className={"flex flex-wrap items-center bg-gray-100 p-2 space-x-2 rounded"}>
      <Bold
        onClick={() => editor.chain().focus().toggleBold().run()}
        classes={`my-2 ${editor.isActive('bold') ? 'bg-gray-300/60 fill-gray-800 rounded' : 'fill-gray-700'} hover:bg-gray-300/60`}
      />
      <Italic
        onClick={() => editor.chain().focus().toggleItalic().run()}
        classes={`my-2 ${editor.isActive('italic') ? 'bg-gray-300/60 fill-gray-800 rounded' : 'fill-gray-700'} hover:bg-gray-300/60`}
      />
      <Strike
        onClick={() => editor.chain().focus().toggleStrike().run()}
        classes={`my-2 ${editor.isActive('strike') ? 'bg-gray-300/60 fill-gray-800 rounded' : 'fill-gray-700'} hover:bg-gray-300/60`}
      />
      <Code
        onClick={() => editor.chain().focus().toggleCode().run()}
        classes={`my-2 ${editor.isActive('code') ? 'bg-gray-300/60 fill-gray-800 rounded' : 'fill-gray-700'} hover:bg-gray-300/60`}
      />
      <DeleteMark
        onClick={() => editor.chain().focus().unsetAllMarks().clearNodes().run()}
        classes={`hover:bg-gray-300/60 hover:fill-gray-800 rounded fill-gray-700`}
      />
      <BulletList
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        classes={`my-2 ${editor.isActive('bulletList') ? 'bg-gray-300/60 fill-gray-800 rounded' : 'fill-gray-700'} hover:bg-gray-300/60`}
      />
      <OrderedList
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        classes={`my-2 ${editor.isActive('orderedList') ? 'hover:fill-gray-800 bg-gray-300/60 fill-gray-800 rounded' : 'fill-gray-700'} hover:bg-gray-300/60`}
      />
      <BlackCode
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        classes={`my-2 ${editor.isActive('codeBlock') ? 'hover:fill-gray-800 bg-gray-300/60 fill-gray-800 rounded' : 'fill-gray-700'} hover:bg-gray-300/60`}
      />
      <BlockQoute
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        classes={`my-2 ${editor.isActive('blockquote') ? 'hover:fill-gray-800 bg-gray-300/60 fill-gray-800 rounded' : 'fill-gray-700'} hover:bg-gray-300/60`}
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
        classes={`my-2 ${editor.isActive({ textAlign: 'left' }) ? 'hover:fill-gray-800 bg-gray-300/60 fill-gray-800 rounded' : 'fill-gray-700'} hover:bg-gray-300/60`}
      />
      <CenterAlign
        onClick={() => editor.chain().focus().setTextAlign('center').run()}
        classes={`my-2 ${editor.isActive({ textAlign: 'center' }) ? 'hover:fill-gray-800 bg-gray-300/60 fill-gray-800 rounded' : 'fill-gray-700'} hover:bg-gray-300/60`}
      />
      <RightAlign
        onClick={() => editor.chain().focus().setTextAlign('right').run()}
        classes={`my-2 ${editor.isActive({ textAlign: 'right' }) ? 'hover:fill-gray-800 bg-gray-300/60 fill-gray-800 rounded' : 'fill-gray-700'} hover:bg-gray-300/60`}
      />
      <JustifyAlign
        onClick={() => editor.chain().focus().setTextAlign('justify').run()}
        classes={`my-2 ${editor.isActive({ textAlign: 'justify' }) ? 'hover:fill-gray-800 bg-gray-300/60 fill-gray-800 rounded' : 'fill-gray-700'} hover:bg-gray-300/60`}
      />
            
            <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={`hover:bg-gray-300/60 text-sm font-bold text-gray-600 rounded w-8 h-8 my-2 ${editor.isActive('paragraph') ? 'bg-gray-300/60 text-black' : ''}`}
      >
        P
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={`hover:bg-gray-300/60 text-sm font-bold text-gray-600 rounded w-8 h-8 my-2 ${editor.isActive('heading', {level : 1}) ? 'bg-gray-300/60 text-black' : ''}`}
      >
        H1
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`hover:bg-gray-300/60 text-sm font-bold text-gray-600 rounded w-8 h-8 my-2 ${editor.isActive('heading', {level : 2}) ? 'bg-gray-300/60 text-black' : ''}`}
      >
        H2
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={`hover:bg-gray-300/60 text-sm font-bold text-gray-600 rounded w-8 h-8 my-2 ${editor.isActive('heading', {level : 3}) ? 'bg-gray-300/60 text-black' : ''}`}
      >
        H3
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={`hover:bg-gray-300/60 text-sm font-bold text-gray-600 rounded w-8 h-8 my-2 ${editor.isActive('heading', {level : 4}) ? 'bg-gray-300/60 text-black' : ''}`}
      >
        H4
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        className={`hover:bg-gray-300/60 text-sm font-bold text-gray-600 rounded w-8 h-8 my-2 ${editor.isActive('heading', {level : 5}) ? 'bg-gray-300/60 text-black' : ''}`}
      >
        H5
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        className={`hover:bg-gray-300/60 text-sm font-bold text-gray-600 rounded w-8 h-8 my-2 ${editor.isActive('heading', {level : 6}) ? 'bg-gray-300/60 text-black' : ''}`}
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