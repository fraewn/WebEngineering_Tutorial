let contents = document.querySelectorAll("[contenteditable=true]");
[].forEach.call(contents, function (c) {
    c.addEventListener("focus", function () {
        c.setAttribute("oldText", c.innerHTML);
    });
    // user shifts focus out of the content editable region
    c.addEventListener("blur", function () {
        // check if editable content has changed
        if (c.getAttribute("oldText") !== c.innerHTML) {
            // if content has changed:

            // get variables
            let equation = document.getElementById("equation");
            let equationText = document.getElementById("equation").innerHTML;
            let a = parseInt(document.getElementById("a").innerHTML);
            let b = parseInt(document.getElementById("b").innerHTML);

            console.log(equationText);
            if(equationText === "=SUM(A2,B2)") {
                // remove user input
                equation.firstChild.remove();
                // calculate new sum
                let sum = document.createTextNode(a + b);
                // add sum to content
                equation.appendChild(sum);
            }

            if(equationText === "=PRODUCT(A2,B2)"){
                // remove user input
                equation.firstChild.remove();
                // calculate new sum
                let sum = document.createTextNode(a * b);
                // add sum to content
                equation.appendChild(sum);
            };

        }
    });
});

