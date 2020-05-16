import React from "react";

export const Stopwatch = (props) => {
    const [startTime, setStartTime] = React.useState();
    const timerRef = React.useRef();
    const [displayTime, setDisplayTime] = React.useState(0);
    const [savedTime, setSavedTime] = React.useState();

    React.useEffect(() => {
        if (startTime) {
            timerRef.current = setInterval(onTick, 100)
        } else {
            clearInterval(timerRef.current)
        }
    }, [startTime]);

    React.useEffect(() => {
        // this will only be called once on initial render because the dependency array is empty
        console.log('mounting...')

        // return the cleanup function that will only ever be called on unmount
        return () => clearInterval(timerRef.current);
    }, []);

    const onTick = () => {
        setDisplayTime(Date.now() - startTime)
    };

    const onClickStop = () => {
        if (savedTime) {
            setSavedTime(Date.now())
            clearInterval(timerRef.current)
        }
    };

    const onClickReset = () => {
        if (savedTime) {
            setStartTime(0)
            setDisplayTime(0)
        }
    };

    const onClickStart = () => {
        if (startTime && savedTime) {
             // if the stopwatch is running and we have previously stopped
            setStartTime(startTime + (Date.now() - savedTime))
        } else if (!startTime) {
            // if the stopwatch is stopped
            setStartTime(Date.now())
        }
        setSavedTime(undefined)
    };

    return (
        <div>
            <div>
                <button onClick={onClickStart}>Start</button>
                <button onClick={onClickStop}>Stop</button>
                <button onClick={onClickReset}>Reset</button>
            </div>
            <div>
                {displayTime}
            </div>
        </div>
    );
}