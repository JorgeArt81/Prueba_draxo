
interface Props {
    classFill: string;
}
export const IconLocation = ({ classFill }: Props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45" width="45" height="45" className='icon'>
        <defs>
        </defs>
        <g id="Layer_2" data-name="Layer 2">
            <g id="icons">
                <g id="location">
                    <circle fill='#262626' className={classFill || "cls-1"} cx="22.5" cy="22.5" r="22.5" />
                    <path fill='#fff' className="cls-2" d="M28.75,23.91a28.92,28.92,0,0,1-2.94,4.6,45.18,45.18,0,0,1-3.31,3.86,46.64,46.64,0,0,1-3.31-3.85,29.46,29.46,0,0,1-2.94-4.61A10.46,10.46,0,0,1,15,19.5a7.5,7.5,0,0,1,15,0A10.46,10.46,0,0,1,28.75,23.91ZM22.5,34.5s9-8.53,9-15a9,9,0,0,0-18,0C13.5,26,22.5,34.5,22.5,34.5Z" />
                    <path fill='#fff' className="cls-2" d="M22.5,22.5a3,3,0,1,1,3-3A3,3,0,0,1,22.5,22.5Zm0,1.5A4.5,4.5,0,1,0,18,19.5,4.49,4.49,0,0,0,22.5,24Z" />
                </g>
            </g>
        </g>
    </svg>
)
