console.log('***** Music Collection *****')
let collection = [];
function addToCollection(title, artist, yearPublished, tracks) {
    const record = {
        title,
        artist,
        yearPublished,
        tracks,
    }

    collection.push(record);
    return record;
}


console.log(addToCollection('Back in black', 'ac/dc', 2001, [{ trackName: 'yee', duration: '2:36' }, { trackName: 'back in black', duration: '3:18' }, { trackName: 'highway to hell', duration: '2:15' }])); //testing return
console.log(addToCollection('Blue Album', 'weezer', 2005, [{ trackName: 'sweater song', duration: '2:40' }, { trackName: 'pink triangle', duration: '3:30' }, { trackName: 'say it aint so', duration: '2:45' }]));
console.log(addToCollection('self titled', 'blink 182', 2007, [{ trackName: 'yee', duration: '2:16' }, { trackName: 'all the small things', duration: '3:14' }, { trackName: 'dammit', duration: '2:55' }]));
console.log(addToCollection('sufferer and the witness', 'rise against', 2009, [{ trackName: 'savior', duration: '2:56' }, { trackName: 'swing life away', duration: '3:10' }, { trackName: 'prayer of the refugee', duration: '1:55' }]));
console.log(addToCollection('take of your pants and jacket', 'blink 182', 2003, [{ trackName: 'rollercoaster', duration: '2:11' }, { trackName: 'story of a lonely guy', duration: '2:33' }, { trackName: 'anthem pt2', duration: '3:00' }]));
console.log(addToCollection('death race for love', 'juice wrld', 2015, [{ trackName: 'bandit', duration: '4:36' }, { trackName: 'lucid dreams', duration: '3:44' }, { trackName: 'wishing well', duration: '3:45' }]));
console.log(collection); //expect 6 objects in array
console.log(addToCollection('cheshire cat', 'blink 182', 2007, [{ trackName: 'carousel', duration: '1:36' }, { trackName: 'josie', duration: '2:14' }, { trackName: 'adams song', duration: '2:32' }]));


function showCollection(array) {
    console.log(`${array.length} records in the collection`);

    for (let albums of array) {
        console.log(`${albums.title} by ${albums.artist} published in ${albums.yearPublished}: `);
        let atLast = albums.tracks;
        atLast.forEach(function (element, index, array) {
            console.log(`${index + 1} ${atLast[index].trackName}: ${atLast[index].duration}`);
        });

    }
}



showCollection(collection); //checking function

function findByArtist(artist) {
    let findArtist = [];
    for (let records of collection) {
        if (records.artist === artist) {
            findArtist.push(records);
        }
    }
    return findArtist;
}

console.log(findByArtist('blink 182'));  //expect 2 results
console.log(findByArtist('black sabbath')); //expect no results

function search(artist, yearPublished, trackName) {
    let searchResults = [];
    if (!artist || !yearPublished) {    //! checks for falsy
        return collection;
    }
    for (let record of collection) {
       /* function getSong(song) {
            let atLast = record.tracks;

            atLast.forEach(function (element, index, array) {
                let song = []
                if (atLast[index].trackName === trackName); {
                    song.push(atLast[index].trackName)
                }
            });
        }*/
        if (record.artist === artist && record.yearPublished === yearPublished /* && getSong(trackName) === trackName*/) {
            searchResults.push(record);



        }

    }
    return searchResults;
}

console.log(search('blink 182', 2007));
console.log(search('blink 182', 2010));  //expect empty array
console.log(search());                   //expect collection array