
$(document).ready(function () {
    console.log("ready!");

    //script for client site //
    $("#submit-child-request").on("click", (event) => {
        event.preventDefault();
        var myChild = $("#pull-child").val();
        $.get("/api/client-site/:" + myChild)
            .then(
                window.location = "/api/client-site/" + myChild
            )
    })


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
        var activity = $("#add-activity").val();
        var child2 = $("h3").text();

        // Make a newBook object
        var newActivity = {
            child_name: child2,
            activity_type: activity
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
    //creating activities from index adiministrator site // 
    $("#submit-activity").on("click", function (event) {
        event.preventDefault();
        var activity = $("#add-activity").val();
        var child2 = $("#child-name-activity").val();

        // Make a newBook object
        var newActivity = {
            child_name: child2,
            activity_type: activity
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
    // TO send message from parent //
    $("#send-message").on("click", function (event) {
        event.preventDefault();
        var child3 = $("h1").text();
        var message = $("#new-message").val();

        // Make a newBook object
        var newMessage = {
            child_name: child3,
            message_from_parent: message
        };

        // Send an AJAX POST-request with jQuery
        $.post("/api/new/message", newMessage)
            // On success, run the following code
            .then(function (data) {
                // Log the data we found
                console.log(data);
            });

        // Empty each input box by replacing the value with an empty string
        child3.val("");
        message.val("");

    });
});


