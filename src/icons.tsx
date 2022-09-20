
interface IconProps {
    classes : string
    onClick: () => void
}

export const AlignLeft : React.FC<IconProps> = ({classes, ...props}) => {
    return (
        <svg {...props} className={`${classes ?? "fill-gray-400"} w-8 h-8 cursor-pointer`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M3,7H21a1,1,0,0,0,0-2H3A1,1,0,0,0,3,7Zm0,4H17a1,1,0,0,0,0-2H3a1,1,0,0,0,0,2Zm18,2H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Zm-4,4H3a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Z"/>
        </svg>
    )
}

export const Bold : React.FC<IconProps> = ({classes, ...props}) => {
    return (
        <svg {...props} className={`${classes ?? "fill-gray-400"} w-8 h-8 cursor-pointer`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M16.5,9.5A3.5,3.5,0,0,0,13,6H8.5a1,1,0,0,0-1,1V17a1,1,0,0,0,1,1H13a3.49,3.49,0,0,0,2.44-6A3.5,3.5,0,0,0,16.5,9.5ZM13,16H9.5V13H13a1.5,1.5,0,0,1,0,3Zm0-5H9.5V8H13a1.5,1.5,0,0,1,0,3Z"/>
        </svg>
    )
}

export const Italic : React.FC<IconProps> = ({classes, ...props}) => {
    return (
        <svg {...props} className={`${classes ?? "fill-gray-400"} w-8 h-8 cursor-pointer`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M17,6H11a1,1,0,0,0,0,2h1.52l-3.2,8H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2H11.48l3.2-8H17a1,1,0,0,0,0-2Z"/>
        </svg>
    )
}