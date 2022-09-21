

const getContent = ({editor, output}) => {
    output.json
    ? output.useState(editor.getHTML())
    : output.useState(editor.getJSON().content)
}

export default getContent;