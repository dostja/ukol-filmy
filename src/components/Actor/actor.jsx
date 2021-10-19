import React from "react";

const Actor = (props) => {
  return (
    <>
      <div className='props__name'>{props.name} </div>
      <div className='props__as'>{props.as} </div>
    </>
  );
};

export default Actor;
