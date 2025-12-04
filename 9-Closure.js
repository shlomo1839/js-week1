// קלוז'ר זה הזיכרון של הפונקציה שאפשר להשתמש בפונקציה באמצעות הזיכרון בכל מקום שנרצה (כדוגמת קובץ אחר)

// -------closure-------
// ------example-------
// function init() {
//   var name = "Mozilla"; // name is a local variable created by init
//   function displayName() {
//     // displayName() is the inner function, that forms a closure
//     console.log(name); // use variable declared in the parent function
//   }
//   displayName();
// }
// init();


// // -----not closure-----
// function printName(){
//     const name = "Ben"
//     console.log(name);
// }


// ---------exe---------
// ------solution1------
// let powerLavel = 1
// function spellFactory(name){
//     return function(){
//         console.log(`${name} lavel ${powerLavel}`);
//         powerLavel++
//     } 
// }
// const firball = spellFactory("fireball")
// firball()
// const addfirball = spellFactory("addFireball")
// addfirball()
// const asuprFirball = spellFactory("suprFireball")
// asuprFirball()


// ------solution2------
function craeteSession(userName){
    const generateToken = () => {
        return generateRandomString(16);
    }
    let token = generateToken();

    return function() {
        return {
            getUsername: () => username,
            getTokenPreview: () => token.slice(0, 4),
            validateToken: (t) => t === token,
            regenerateToken: () => {token = generateToken()}
        }
        

    }
}