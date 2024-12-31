export default ( text = "Hello World from me") => {

    const element = document.createElement('div');
    element.innerHTML = text;

    return element;
};