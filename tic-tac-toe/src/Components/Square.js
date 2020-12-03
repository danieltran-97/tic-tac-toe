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
const Square = ({onClick,value}) => (
<button onClick={onClick}>
    {value}
</button>
);
export default Square;
