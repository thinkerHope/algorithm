const stack1 = [];
const stack2 = [];
function push(...args)
{
    stack1.push(...args);
}
function pop()
{
    let res = null;
    while (stack1.length !== 0) {
        stack2.push(stack1.pop());
    }
    res = stack2.pop();
    while (stack2.length !== 0) {
        stack1.push(stack2.pop());
    }
    
    return res;
}

push(1,2,3,4,5,6,7,8,9)
console.log(pop())
console.log(pop())
console.log(stack1)
console.log(stack2)
