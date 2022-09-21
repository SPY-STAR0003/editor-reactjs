interface IconProps {
    classes ?: string
    onClick ?: () => void
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

export const Strike : React.FC<IconProps> = ({classes, ...props}) => {
    return (
        <svg {...props} className={`${classes ?? "fill-gray-400"} p-[6px] w-8 h-8 cursor-pointer `} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M161.3 144c3.2-17.2 14-30.1 33.7-38.6c21.1-9 51.8-12.3 88.6-6.5c11.9 1.9 48.8 9.1 60.1 12c17.1 4.5 34.6-5.6 39.2-22.7s-5.6-34.6-22.7-39.2c-14.3-3.8-53.6-11.4-66.6-13.4c-44.7-7-88.3-4.2-123.7 10.9c-36.5 15.6-64.4 44.8-71.8 87.3c-.1 .6-.2 1.1-.2 1.7c-2.8 23.9 .5 45.6 10.1 64.6c4.5 9 10.2 16.9 16.7 23.9H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H270.1c-.1 0-.3-.1-.4-.1l-1.1-.3c-36-10.8-65.2-19.6-85.2-33.1c-9.3-6.3-15-12.6-18.2-19.1c-3.1-6.1-5.2-14.6-3.8-27.4zM348.9 337.2c2.7 6.5 4.4 15.8 1.9 30.1c-3 17.6-13.8 30.8-33.9 39.4c-21.1 9-51.7 12.3-88.5 6.5c-18-2.9-49.1-13.5-74.4-22.1c-5.6-1.9-11-3.7-15.9-5.4c-16.8-5.6-34.9 3.5-40.5 20.3s3.5 34.9 20.3 40.5c3.6 1.2 7.9 2.7 12.7 4.3l0 0 0 0c24.9 8.5 63.6 21.7 87.6 25.6l0 0 .2 0c44.7 7 88.3 4.2 123.7-10.9c36.5-15.6 64.4-44.8 71.8-87.3c3.6-21 2.7-40.4-3.1-58.1H335.1c7 5.6 11.4 11.2 13.9 17.2z"/>
        </svg>
    )
}

export const Code : React.FC<IconProps> = ({classes, ...props}) => {
    return (
        <svg {...props} className={`${classes ?? "fill-gray-400"} w-8 h-8 cursor-pointer`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M9.71,6.29a1,1,0,0,0-1.42,0l-5,5a1,1,0,0,0,0,1.42l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L5.41,12l4.3-4.29A1,1,0,0,0,9.71,6.29Zm11,5-5-5a1,1,0,0,0-1.42,1.42L18.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5A1,1,0,0,0,20.71,11.29Z"/>
        </svg>
    )
}

export const DeleteMark : React.FC<IconProps> = ({classes, ...props}) => {
    return (
        <svg {...props} className={`${classes ?? "fill-gray-400"} p-1 w-8 h-8 cursor-pointer`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M15.71,8.29a1,1,0,0,0-1.42,0L12,10.59,9.71,8.29A1,1,0,0,0,8.29,9.71L10.59,12l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l2.29,2.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L13.41,12l2.3-2.29A1,1,0,0,0,15.71,8.29ZM19,2H5A3,3,0,0,0,2,5V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V5A3,3,0,0,0,19,2Zm1,17a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4H19a1,1,0,0,1,1,1Z"/>
        </svg>
    )
}

export const ChevronTop : React.FC<IconProps> = ({classes, ...props}) => {
    return (
        <svg {...props} className={`${classes ?? "fill-gray-400"} p-1 w-8 h-8 cursor-pointer`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M17,13.41,12.71,9.17a1,1,0,0,0-1.42,0L7.05,13.41a1,1,0,0,0,0,1.42,1,1,0,0,0,1.41,0L12,11.29l3.54,3.54a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29A1,1,0,0,0,17,13.41Z"/>
        </svg>
    )
}

export const ChevronDown : React.FC<IconProps> = ({classes, ...props}) => {
    return (
        <svg {...props} className={`${classes ?? "fill-gray-400"} p-1 w-8 h-8 cursor-pointer`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z"/>
        </svg>
    )
}

export const Tick : React.FC<IconProps> = ({classes, ...props}) => {
    return (
        <svg {...props} className={`${classes ?? "fill-gray-400"} p-1 w-8 h-8 cursor-pointer`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M18.71,7.21a1,1,0,0,0-1.42,0L9.84,14.67,6.71,11.53A1,1,0,1,0,5.29,13l3.84,3.84a1,1,0,0,0,1.42,0l8.16-8.16A1,1,0,0,0,18.71,7.21Z"/>
        </svg>
    )
}

export const BulletList : React.FC<IconProps> = ({classes, ...props}) => {
    return (
        <svg {...props} className={`${classes ?? "fill-gray-400"} p-1 w-8 h-8 cursor-pointer`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M3.71,16.29a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,1,1,0,0,0-.33.21,1,1,0,0,0-.21.33,1,1,0,0,0,.21,1.09,1.15,1.15,0,0,0,.33.21.94.94,0,0,0,.76,0,1.15,1.15,0,0,0,.33-.21,1,1,0,0,0,.21-1.09A1,1,0,0,0,3.71,16.29ZM7,8H21a1,1,0,0,0,0-2H7A1,1,0,0,0,7,8ZM3.71,11.29a1,1,0,0,0-1.09-.21,1.15,1.15,0,0,0-.33.21,1,1,0,0,0-.21.33.94.94,0,0,0,0,.76,1.15,1.15,0,0,0,.21.33,1.15,1.15,0,0,0,.33.21.94.94,0,0,0,.76,0,1.15,1.15,0,0,0,.33-.21,1.15,1.15,0,0,0,.21-.33.94.94,0,0,0,0-.76A1,1,0,0,0,3.71,11.29ZM21,11H7a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2ZM3.71,6.29a1,1,0,0,0-.33-.21,1,1,0,0,0-1.09.21,1.15,1.15,0,0,0-.21.33.94.94,0,0,0,0,.76,1.15,1.15,0,0,0,.21.33,1.15,1.15,0,0,0,.33.21,1,1,0,0,0,1.09-.21,1.15,1.15,0,0,0,.21-.33.94.94,0,0,0,0-.76A1.15,1.15,0,0,0,3.71,6.29ZM21,16H7a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z"/>
        </svg>
    )
}

export const OrderedList : React.FC<IconProps> = ({classes, ...props}) => {
    return (
        <svg {...props} className={`${classes ?? "fill-gray-400"} p-1 w-8 h-8 cursor-pointer`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M7,20H4v-0.1C4,19.4,4.4,19,4.9,19c1.4,0,2.6-0.9,3-2.2c0.4-1.6-0.5-3.3-2.1-3.7c-1.3-0.4-2.7,0.2-3.4,1.4c-0.3,0.5-0.1,1.1,0.4,1.4c0.5,0.3,1.1,0.1,1.4-0.4c0,0,0,0,0,0c0.3-0.5,0.9-0.6,1.4-0.3c0.1,0.1,0.2,0.1,0.2,0.2C6,15.7,6,16,6,16.3c-0.2,0.4-0.6,0.7-1,0.7C3.3,17,2,18.3,2,19.9V21c0,0.6,0.4,1,1,1h4c0.6,0,1-0.4,1-1S7.6,20,7,20z M11,7h10c0.6,0,1-0.4,1-1s-0.4-1-1-1H11c-0.6,0-1,0.4-1,1S10.4,7,11,7z M7,9H6V3c0-0.6-0.4-1-1-1S4,2.4,4,3v1H3C2.4,4,2,4.4,2,5s0.4,1,1,1h1v3H3c-0.6,0-1,0.4-1,1s0.4,1,1,1h4c0.6,0,1-0.4,1-1S7.6,9,7,9z M21,16H11c-0.6,0-1,0.4-1,1s0.4,1,1,1h10c0.6,0,1-0.4,1-1S21.6,16,21,16z"/>
        </svg>
    )
}

export const BlackCode : React.FC<IconProps> = ({classes, ...props}) => {
    return (
        <svg {...props} className={`${classes ?? "fill-gray-400"} p-1 w-8 h-8 cursor-pointer`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M6,6A2,2,0,0,1,8,4,1,1,0,0,0,8,2,4,4,0,0,0,4,6V9a2,2,0,0,1-2,2,1,1,0,0,0,0,2,2,2,0,0,1,2,2v3a4,4,0,0,0,4,4,1,1,0,0,0,0-2,2,2,0,0,1-2-2V15a4,4,0,0,0-1.38-3A4,4,0,0,0,6,9Zm16,5a2,2,0,0,1-2-2V6a4,4,0,0,0-4-4,1,1,0,0,0,0,2,2,2,0,0,1,2,2V9a4,4,0,0,0,1.38,3A4,4,0,0,0,18,15v3a2,2,0,0,1-2,2,1,1,0,0,0,0,2,4,4,0,0,0,4-4V15a2,2,0,0,1,2-2,1,1,0,0,0,0-2Z"/>
        </svg>
    )
}

export const BlockQoute : React.FC<IconProps> = ({classes, ...props}) => {
    return (
        <svg {...props} className={`${classes ?? "fill-gray-400"} p-1 w-8 h-8 cursor-pointer`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M6.29,14.29l-.29.3V7A1,1,0,0,0,4,7v7.59l-.29-.3a1,1,0,0,0-1.42,1.42l2,2a1,1,0,0,0,.33.21.94.94,0,0,0,.76,0,1,1,0,0,0,.33-.21l2-2a1,1,0,0,0-1.42-1.42ZM11,8H21a1,1,0,0,0,0-2H11a1,1,0,0,0,0,2Zm10,3H11a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Zm0,5H11a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z"/>
        </svg>
    )
}

export const Line : React.FC<IconProps> = ({classes, ...props}) => {
    return (
        <svg {...props} className={`${classes ?? "fill-gray-400"} p-1 w-8 h-8 cursor-pointer`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M21.71,3.29a1,1,0,0,0-1.42,0l-18,18a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l18-18A1,1,0,0,0,21.71,3.29Z"/>
        </svg>
    )
}

export const Enter : React.FC<IconProps> = ({classes, ...props}) => {
    return (
        <svg {...props} className={`${classes ?? "fill-gray-400"} p-1 w-8 h-8 cursor-pointer`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M19,6a1,1,0,0,0-1,1v4a1,1,0,0,1-1,1H7.41l1.3-1.29A1,1,0,0,0,7.29,9.29l-3,3a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l3,3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L7.41,14H17a3,3,0,0,0,3-3V7A1,1,0,0,0,19,6Z"/>
        </svg>
    )
}

export const Undo : React.FC<IconProps> = ({classes, ...props}) => {
    return (
        <svg {...props} className={`${classes ?? "fill-gray-400"} p-1 w-8 h-8 cursor-pointer`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M125.7 160H176c17.7 0 32 14.3 32 32s-14.3 32-32 32H48c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32s32 14.3 32 32v51.2L97.6 97.6c87.5-87.5 229.3-87.5 316.8 0s87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3s-163.8-62.5-226.3 0L125.7 160z"/>
        </svg>
    )
}

export const Redu : React.FC<IconProps> = ({classes, ...props}) => {
    return (
        <svg {...props} className={`${classes ?? "fill-gray-400"} p-1 w-8 h-8 cursor-pointer`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M463.5 224H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5z"/>
        </svg>
    )
}

export const LeftAlign : React.FC<IconProps> = ({classes, ...props}) => {
    return (
        <svg {...props} className={`${classes ?? "fill-gray-400"} p-1 w-8 h-8 cursor-pointer`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M3,7H21a1,1,0,0,0,0-2H3A1,1,0,0,0,3,7Zm0,4H17a1,1,0,0,0,0-2H3a1,1,0,0,0,0,2Zm18,2H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Zm-4,4H3a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Z"/>
        </svg>
    )
}

export const RightAlign : React.FC<IconProps> = ({classes, ...props}) => {
    return (
        <svg {...props} className={`${classes ?? "fill-gray-400"} p-1 w-8 h-8 cursor-pointer`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M3,7H21a1,1,0,0,0,0-2H3A1,1,0,0,0,3,7ZM21,17H7a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Zm0-8H7a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Zm0,4H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z"/>
        </svg>
    )
}

export const CenterAlign : React.FC<IconProps> = ({classes, ...props}) => {
    return (
        <svg {...props} className={`${classes ?? "fill-gray-400"} p-1 w-8 h-8 cursor-pointer`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M3,7H21a1,1,0,0,0,0-2H3A1,1,0,0,0,3,7ZM7,9a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Zm14,4H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Zm-4,4H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Z"/>
        </svg>
    )
}

export const JustifyAlign : React.FC<IconProps> = ({classes, ...props}) => {
    return (
        <svg {...props} className={`${classes ?? "fill-gray-400"} p-1 w-8 h-8 cursor-pointer`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M3,7H21a1,1,0,0,0,0-2H3A1,1,0,0,0,3,7ZM21,17H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Zm0-4H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Zm0-4H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z"/>
        </svg>
    )
}