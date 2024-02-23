import React, { useState } from "react";

const Content = ({ city }) => {
  const [status, setStatus] = useState(false);

  let contentStyles = {
    width: "400px",
    height: status ? "200px" : "50px",
    border: "1px solid black",
    transitionDelay: status ? "0s" : "1s",
  };

  let textStyles = {
    opacity: status ? 1 : 0,
    transitionDelay: "0.5s",
  };

  let paragraphStyles = {
    opacity: status ? 1 : 0,
    transitionDelay: "0.5s",
  };

  return (
    <div
      className="content"
      style={contentStyles}
      onClick={() => setStatus(!status)}
    >
      <h1 style={textStyles}>{city}</h1>
      <p style={paragraphStyles}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ratione
        harum voluptatibus aliquam quaerat quibusdam explicabo dolorem
        similique! Aut, dicta eos. Pariatur ad ipsa cum omnis blanditiis tempora
        suscipit ducimus! Autem nisi natus quidem facilis doloremque quas
        pariatur officiis ea! Dolorem mollitia cum dolorum, illum, similique non
        assumenda ea voluptas, blanditiis in consequatur totam voluptatem
        doloribus optio accusamus ut sit!
      </p>
    </div>
  );
};

export default Content;
