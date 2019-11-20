import React from 'react';

export default function Shoes(props) {
  const shoes = props.shoes.map((shoe, index) => {
    return (
      <div key={index}>
        {shoe}
      </div>
    );
  })

  return (
    <div>
      {shoes}
    </div>
  );
}