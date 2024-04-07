function stringChop(str, size) {
  // your code here
	if (str === null) {
        return [];
    }
    // Initialize an empty array to store the chunks
    const chunks = [];
    // Iterate over the input string and slice it into chunks of length chunkLength
    for (let i = 0; i < str.length; i += size) {
        chunks.push(str.slice(i, i + size));
    }
    // Return the array of chunks
    return chunks;
}

Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
