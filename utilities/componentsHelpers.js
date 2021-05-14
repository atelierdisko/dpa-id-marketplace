function capitalize(string) {
    if (!string || !string.length > 0) {
        throw new Error(`Cannot capitalize value ${string}`);
    }

    return string.charAt(0).toUpperCase() + string.slice(1);
}


function joinClassNames(...classes) {
    function flatMap(arr) {
        return arr.flatMap((item) => (Array.isArray(item) ? flatMap(item) : item));
    }
    return flatMap(classes)
        .filter(
            (item, index, self) => Boolean(item) && self.indexOf(item) === index
        )
        .join(" ");
}

export { capitalize, joinClassNames };