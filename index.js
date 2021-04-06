// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

const destructivelyAppendDriver = function(name){
    drivers.push(name);
}

const destructivelyPrependDriver = (name) => drivers.unshift(name);

const destructivelyRemoveLastDriver = () => drivers.pop();

const destructivelyRemoveFirstDriver = () => drivers.shift();

const appendDriver = (name) => {
    const nArray = [...drivers];
    nArray.push(name);
    return nArray;
}





const prependDriver = (name) =>{
    const nArray = [name,...drivers];
    return nArray;
}

const removeLastDriver=  () =>{
    const nArray = [...drivers];
    let numbnArray = nArray.length - 1;
    nArray.splice(numbnArray);
    return nArray;
}

const removeFirstDriver=  () =>{
    const nArray = drivers.slice(1);
    return nArray;
}

