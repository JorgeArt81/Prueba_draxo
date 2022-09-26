
interface Props {
    classFill: string;
}
export const IconLayer = ({ classFill }: Props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45" width="45" height="45" className='icon'>
        <defs>
        </defs>
        <g id="Layer_2" data-name="Layer 2">
            <g id="icons">
                <g id="layer">
                    <circle fill='#262626' className={classFill || "cls-1"} cx="22.5" cy="22.5" r="22.5" />
                    <path fill='#fff' className="cls-2" d="M29.81,25.44l2.05,1a.35.35,0,0,1,0,.64l-9,4.52a.72.72,0,0,1-.64,0l-9-4.52a.36.36,0,0,1-.16-.48.31.31,0,0,1,.16-.16l2-1,6.35,3.18a2.16,2.16,0,0,0,1.92,0l6.35-3.18ZM22.18,13.37a.72.72,0,0,1,.64,0l9,4.52a.36.36,0,0,1,.16.49.33.33,0,0,1-.16.15l-9,4.52a.72.72,0,0,1-.64,0l-9-4.52a.36.36,0,0,1,0-.64Z" />
                    <path fill='#fff' className="cls-2" d="M29.81,21.15l2.05,1a.35.35,0,0,1,0,.64l-9,4.52a.72.72,0,0,1-.64,0l-9-4.52a.36.36,0,0,1-.16-.48.31.31,0,0,1,.16-.16l2-1,6.35,3.18a2.16,2.16,0,0,0,1.92,0l6.35-3.18Z" />
                </g>
            </g>
        </g>
    </svg>
)
