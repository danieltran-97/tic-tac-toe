import React from 'react';

/*props will look like this
const props = {
    onClick: () => "function",
    value: "X"
}
destructured like this
const {value} = props;
so no need to use
    props.value
destructure by wrapping the prop properties in curly brace inside the argument
here it is "onClick" and "value"
*/
//style is a default react prop is a js object not CSS
const style = {
    background: 'lightblue',
    border: '2px solid darkblue',
    fontSize: '30px',
    fontWeight: '800',
    cursor: 'pointer',
    outline: 'none'
};
const Square = ({onClick,value}) => (
<button style={style} onClick={onClick}>
    {value}
</button>
);
export default Square;
