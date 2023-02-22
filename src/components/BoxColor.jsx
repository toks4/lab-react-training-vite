function BoxColor({r,g,b}) {
 
    const boxStyle = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
        border: '#1a1a1a solid 2px',
        width: '500px',
        height: '200px',
        margin: '10px',
      };

return <div style={boxStyle} ></div>;
}

export default BoxColor