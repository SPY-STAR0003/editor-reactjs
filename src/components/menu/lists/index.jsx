
import { BulletList, OrderedList } from '../../assets/icons';


const Lists = ({editor}) => {

    return (
        <>
            <BulletList
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                classes={`my-2 ${editor.isActive('bulletList') ? 'active' : ''}`}
            />
            <OrderedList
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                classes={`my-2 ${editor.isActive('orderedList') ? 'active' : ''}`}
            />
        </>
    )
}

export default Lists;