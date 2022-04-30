console.log('***** Music Collection *****')
let collection = []
function addToCollection(title, artist, yearPublished) {
    const record = {
        title,
        artist,
        yearPublished,
    };

    collection.push(record);
    return record;
}

console.log(addToCollection('Back in black', 'ac/dc', 2001)); //testing return
addToCollection('Blue Album', 'weezer', 2005);
addToCollection('self titled', 'blink 182', 2007);
addToCollection('sufferer and the witness', 'rise against', 2009);
addToCollection('take of your pants and jacket', 'blink 182', 2003);
addToCollection('deathrace for love', 'juice wrld', 2015);
console.log(collection); //expect 6 objects in array

