const user = { mail: 'hello' };

try {

    /**
     * It will give error because
     * we never called this function
     * output will be oops...
     */

    // someFunction();


    /* Produce a TypeError */
    //null.someFunction();


    if (!user.name) {
        // throw 'User has no name';
        throw new StntaxError('User has no name');
    }


} catch (e) {

    // console.log("oops...");
    // console.log(e.message);
    // console.log(e.name);
    // console.log(e instanceof ReferenceError);

    /* For TypeError */
    //console.log(`${e.name}:Its NULL `);

    console.log(e);


} finally {
    console.log('Finally Runs regardless of Result...');

}

console.log('Program continues');