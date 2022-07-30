import styled from "styled-components";

const TimerInscription = styled.div`
    font-size: 16px;
    padding-left: 1em;
    padding-top: 5px;
    vertical-align: middle;
    margin-block: 0em;
`

function Timer(props) {

    const { time } = props

    return (
        <TimerInscription>
            <span>{(time.h >= 10) ? `${time.h}:` : `0${time.h}:`}</span>
            <span>{(time.m >= 10) ? `${time.m}:` : `0${time.m}:`}</span>
            <span>{(time.s >= 10) ? time.s : `0${time.s}`}</span>
        </TimerInscription>

    );
}

export default Timer