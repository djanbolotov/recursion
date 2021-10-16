import React, { useState } from "react";

import { hasArray } from "../utils/functions";

export default function RenderChild({
  data,
  isMainParent = false,
  closeParent,
}) {
  const [show, setShow] = useState(false);
  const [child, setChild] = useState([]);

  const ShowAndGetChild = () => {
    const hasChild = hasArray(data).length;
    setChild(hasArray(data));
    if (!hasChild && !isMainParent) {
      closeParent(false);
    } else {
      setShow(!show);
    }
  };

  return (
    <div className="child">
      <div onClick={ShowAndGetChild} key={data.code}>
        {data.name}
      </div>
      {show &&
        child.map((children) => (
          <RenderChild
            closeParent={isMainParent ? setShow : closeParent}
            key={children.code}
            data={children}
          />
        ))}
    </div>
  );
}