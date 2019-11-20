import React from 'react';

export default function Shelves(props) {
  const shelves = props.shelves.map((shelf, index) => {
    return (
      <div key={index}>
        {shelf}
      </div>
    );
  });

  return (
    <div>
      {shelves}
    </div>
  );
}