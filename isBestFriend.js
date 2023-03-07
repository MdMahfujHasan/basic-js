function isBestFriend(friend1, friend2) {
    if (typeof friend1 !== 'object' || typeof friend2 !== 'object') {
        return 'Enter an object.'
    }
    else if (friend1.name === friend2.friendsName && friend2.name === friend1.friendsName) {
        return true;
    }
    else {
        return false;
    }
}
const friend1 = {
    name: 'Rashed',
    friendsName: 'Asad'
}
const friend2 = {
    name: 'Asad',
    friendsName: 'Rashed'
}
const friend3 = {
    name: 'Arif',
    friendsName: 'Onik'
}
const friend4 = 'Kabir';

console.log(isBestFriend(friend1, friend2));
console.log(isBestFriend(friend1, friend3));
console.log(isBestFriend(friend1, friend4));