import styled from "styled-components";

const Button = styled.button`
    background-color: rgb(195, 199, 203);
    padding: 7px 20px 5px;
    border: none;
    color: rgb(0, 0, 0);
    font-size: 12px;
    box-shadow: rgb(255 255 255) 1px 1px 0px 1px inset, rgb(134 138 142) 0px 0px 0px 1px inset, rgb(0 0 0) 1px 1px 0px 0px;
`

function ClearButton(props) {
    const { setTaskItems, setTotalTime } = props

    function handleClearItems() {
        setTaskItems([])
        setTotalTime({
            h: 0,
            m: 0,
            s: 0
        })
    }

    return <Button onClick={handleClearItems}>Clear</Button>
}

export default ClearButton