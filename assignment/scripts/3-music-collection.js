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
console.log(addToCollection('Blue Album', 'weezer', 2005));
console.log(addToCollection('self titled', 'blink 182', 2007));
console.log(addToCollection('sufferer and the witness', 'rise against', 2009));
console.log(addToCollection('take of your pants and jacket', 'blink 182', 2003));
console.log(addToCollection('deathrace for love', 'juice wrld', 2015));
console.log(collection); //expect 6 objects in array

function showCollection(array){
    console.log(`${array.length} records in the collection`);
    for (let albums of collection){
        console.log(`${albums.title} by ${albums.artist} published in ${albums.yearPublished}`);
    }
}

showCollection(collection);
