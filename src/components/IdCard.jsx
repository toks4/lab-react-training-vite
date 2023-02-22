import React from 'react';

function IdCard({props}) {
    return (
<div className="props">

<div className="student-img">
      <img src={`props.image`} alt="" />
</div>
<div className="text">
      <p ><b>First Name: </b>{`props.firstName`}</p> 
      <p ><b>Last Name: </b> {`props.lastName`}</p>
      <p ><b>Gender: </b>{`props.gender`}</p>
      <p ><b>Height: </b>{`props.height`}</p>
      <p ><b>Birth: </b>{`props.birth`}</p>
      </div>
    

</div>

 )
 }

 export default IdCard;

