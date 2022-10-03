const complexNode = document.querySelector('#complexNode');
const child_nodes = complexNode.childNodes[7].childNodes[1].childNodes;

function findLiValue() {
    for (let data of child_nodes) {
        for (let d of data.childNodes) {
            if (d.nodeValue.toLowerCase === "hello") {
                return 'i found it!';
            }
        }
    }
    return 'Do not Found it!';
}


const value = findLiValue();

console.log(value);
