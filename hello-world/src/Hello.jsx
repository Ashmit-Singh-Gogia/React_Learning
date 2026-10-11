import React from "react";

export const Hello = () => {
    return (
        <div id="container">
            <h1>Hello World</h1>
        </div>
    );
};


// Creating components Without jsx 

export const HelloWithoutJSX = () => {
    return React.createElement("div", { id: "container" },
        React.createElement("h1", null, "Hello world from HelloWithoutJSX")
    );
}