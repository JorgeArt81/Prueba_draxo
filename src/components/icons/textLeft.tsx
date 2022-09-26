interface Props {
    classFill: string;
}
export const IconTextLeft = ({ classFill }: Props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45" width="45" height="45" className='icon'>
        <defs>
        </defs>
        <g id="Layer_2" data-name="Layer 2">
            <g id="icons">
                <g id="align-left">
                    <circle fill='#262626' className={classFill || "cls-1"} cx="22.5" cy="22.5" r="22.5" />
                    <path fill='#fff' className="cls-2" d="M12.72,27.39a.77.77,0,0,1,.69-.82H28.52a.77.77,0,0,1,.69.82.76.76,0,0,1-.69.81H13.41A.76.76,0,0,1,12.72,27.39Zm0-4.89a.82.82,0,0,1,.82-.81h11.4a.81.81,0,1,1,0,1.62H13.54A.82.82,0,0,1,12.72,22.5Zm0-4.89a.82.82,0,0,1,.82-.81H31.46a.82.82,0,0,1,.82.81.82.82,0,0,1-.82.82H13.54A.82.82,0,0,1,12.72,17.61Z" />
                </g>
            </g>
        </g>
    </svg>
)
