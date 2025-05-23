
interface CircleProps {
    index: number;
    top: number;
    left: number;
    visible: boolean;
    onClick?: (() => void) | null;
    showCountdown?: boolean;
    playing?: boolean;
    highlightRight?: boolean;
    isLose?: boolean;
    fading?: boolean;
    startFade?:boolean
    fadeResetKey?: number;
    zIndex:number;
    isWrong:boolean
}
interface TimeDisplayProps {
    playing: boolean;
    reset: boolean;
}
interface CountdownProps {
    start: number;
    onEnd?: () => void;
    playing?: boolean;
    isLose?: boolean;
    isWrong?:boolean
}
