function minNumberInRotateArray(rotateArray)
{
    if (rotateArray.length == 0) return 0;
    for (let i = rotateArray.length - 1; i > 0; i--) {
        if (rotateArray[i] < rotateArray[i-1]) return rotateArray[i]; 
    }
    return rotateArray[0];
}