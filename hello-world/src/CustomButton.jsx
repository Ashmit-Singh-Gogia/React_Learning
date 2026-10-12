export const CustomButton = () => {

    const handleClick = (e) => {
        console.log("Clicked Element ", e.target);
        console.log("Click Coordinates:  ", e.clientX, e.clientY);
        console.log("Which mouse button? : ", e.button);
        alert("Thanks for Liking.");
    };

    return <button onClick={handleClick}>Like</button>
}