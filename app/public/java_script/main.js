
$(document).ready(function () {
    console.log("ready!");

    //script for client site //
    $("#submit-child-request").on("click", (event) => {
        var myChild = $("#pull-child").val();
        $.get("/api/client-site/:" + myChild)
            .then(
                window.location = "/api/client-site/" + myChild
            )

    })
    //-----------------------//


    $("#get-one").on("click", function (event) {
        event.preventDefault();
        var child = $("#add-child");
        var parent = $("#add-parent");

        // Make a newBook object
        var newChild = {
            child_name: child.val(),
            parent_name: parent.val()
        };

        // Send an AJAX POST-request with jQuery
        $.post("/api/new/child", newChild)
            // On success, run the following code
            .then(function (data) {
                // Log the data we found
                console.log(data);
            });

        // Empty each input box by replacing the value with an empty string
        child.val("");
        parent.val("");

    });

    $("#get-activity").on("click", function (event) {
        event.preventDefault();
        var child2 = $("#add-child-name2");
        var activity = $("#add-activity");

        // Make a newBook object
        var newActivity = {
            child_name: child2.val(),
            activity_type: activity.val()
        };

        // Send an AJAX POST-request with jQuery
        $.post("/api/new/activity", newActivity)
            // On success, run the following code
            .then(function (data) {
                // Log the data we found
                console.log(data);
            });

        // Empty each input box by replacing the value with an empty string
        child2.val("");
        activity.val("");

    });
});


