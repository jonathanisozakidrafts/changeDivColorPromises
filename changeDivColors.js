const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");
const div3 = document.getElementById("div3");

const animateButton = document.getElementById("animate-button");
const resetButton = document.getElementById("reset-button");

// This function returns a promise that will show the color change.
function changeDivColors(divDocs, color, time) {
    return new Promise(function(resolve, reject) {

        setTimeout(function() {
            resolve("Promise is Resolved!")
            divDocs.style.backgroundColor = color;
        }, time)


    });
}

// This event listener resets the div elements to white.
resetButton.addEventListener("click", function(event) {
    div1.style.backgroundColor = "rgb(255, 255, 255)";
    div2.style.backgroundColor = "rgb(255, 255, 255)";
    div3.style.backgroundColor = "rgb(255, 255, 255)";
})

// This is a normal chain of promises.  This waits for one result to occur before the other ones happen.
animateButton.addEventListener("click", function(event) {

    return changeDivColors(div1, "rgb(179, 233, 255)", 1000)
        .then(function(result) {

            console.log(result);
            return changeDivColors(div2, "rgb(255, 97, 97)", 2000);

        }).then(function(result) {

            console.log(result);
            return changeDivColors(div3, "rgb(46, 81, 208)", 3000);

        }).then(function(result) {
            console.log(result);
        })

});


// This uses the Promise.all() method.  This means each promise is being resolved at the same time.
/*animateButton.addEventListener("click", function(event) {

    const promise1 = changeDivColors(div1, "rgb(179, 233, 255)", 1000);
    const promise2 = changeDivColors(div2, "rgb(255, 97, 97)", 2000);
    const promise3 = changeDivColors(div3, "rgb(46, 81, 208)", 3000);

    return Promise.all([promise1, promise2, promise3]).then(function(result) {
        console.log(result[0]);
        console.log(result[1]);
        console.log(result[2]);
    })

}) */


// This one uses the async-await for the functions.  This has the same result as the chaining.  These promises are NOT fulfilled in parallel. 
// These processes wait for one promise to be resolved.
/* async function changeDivColorsAll() {

    const result1 = await changeDivColors(div1, "rgb(179, 233, 255)", 1000);
    const result2 = await changeDivColors(div2, "rgb(255, 97, 97)", 2000);
    const result3 = await changeDivColors(div3, "rgb(46, 181, 208)", 3000);

}

animateButton.addEventListener("click", async function(event) {

    const result = await changeDivColorsAll();

})

*/