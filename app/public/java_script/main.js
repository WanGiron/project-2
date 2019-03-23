
$(document).ready(function () {
    console.log("ready!");

    var adminlog = $("#adminlog");
    var parent = $("#parent");
    var modalbody = $("#modalbody");

    adminlog.on('click', ()=>{
        modalbody.empty();
        var form = '<form id="signin" name="signin" method="post" action="/adminSignin">';
        form += '<div class="row justify-content-center"><div class="col-4"><label for="email">User</label></div>';
        form += '<input class="text" name="email" type="text" /></div>';
        form += '<div class="row justify-content-center"><div class="col-4"><label for="password">Password</label></div>';
        form += '<input name="password" type="password" /></div>';
        form += '<div class="row justify-content-center"><hr><button class="hide-button"><input class="btn btn-dark btn-sm" type="submit" value="Sign In" /></button></div>';
        form += '</form>';
        form += '<div><button class="btn btn-dark btn-sm" id="i-am-parent">I am a parent</button></div>'
        modalbody.html(form);
    });

    parent.on('click', ()=>{
        modalbody.empty();
        var form = '<form id="signin" name="signin" method="post" action="/ParentSignin">';
        form += '<div class="row justify-content-center"><div class="col-4"><label for="email">User Name</label></div>';
        form += '<input class="text" name="email" type="text" /></div>';
        form += '<div class="row justify-content-center"><div class="col-4"><label for="password">Password</label></div>';
        form += '<input name="password" type="password" /></div>';
        form += '<div class="row justify-content-center"><hr><buttonclass="hide-button" ><input class="btn btn-dark btn-sm" type="submit" value="Sign In" /></button></div>';
        form += '</form>';
        form += '<div><button class="btn btn-dark btn-sm" id="i-am-admin">Administrator</button></div>'
        modalbody.html(form);
    });

    $(document).on('click', "#i-am-parent", ()=>{
        modalbody.empty();
        var form = '<form id="signin" name="signin" method="post" action="/ParentSignin">';
        form += '<div class="row justify-content-center"><div class="col-4"><label for="email">User Name</label></div>';
        form += '<input class="text" name="email" type="text" /></div>';
        form += '<div class="row justify-content-center"><div class="col-4"><label for="password">Password</label></div>';
        form += '<input name="password" type="password" /></div>';
        form += '<div class="row justify-content-center"><hr><button class="hide-button"><input class="btn btn-dark btn-sm" type="submit" value="Sign In" /></button></div>';
        form += '</form>';
        form += '<div><button class="btn btn-dark btn-sm" id="i-am-admin">Administrator</button></div>'
        modalbody.html(form);
    });
    $(document).on('click', "#i-am-admin", ()=>{
        modalbody.empty();
        var form = '<form id="signin" name="signin" method="post" action="/adminSignin">';
        form += '<div class="row justify-content-center"><div class="col-4"><label for="email">User</label></div>';
        form += '<input class="text" name="email" type="text" /></div>';
        form += '<div class="row justify-content-center"><div class="col-4"><label for="password">Password</label></div>';
        form += '<input name="password" type="password" /></div>';
        form += '<div class="row justify-content-center"><hr><button class="hide-button"><input class="btn btn-dark btn-sm" type="submit" value="Sign In" /></button></div>';
        form += '</form>';
        form += '<div><button class="btn btn-dark btn-sm" id="i-am-parent">I am a parent</button></div>'
        modalbody.html(form);
    });

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
        var child = $("#child-name-input");
        var childLastName = $("#last-name-input");
        var dateOfBirth = $("#dob");
        var parent = $("#add-parent");
        // Make a new child object//
        var newChild = {
            child_name: child.val().trim(),
            child_last_name: childLastName.val().trim(),
            date_of_birth: dateOfBirth.val().trim(),
            parent_name: parent.val().trim(),

        };

        // Send an AJAX POST-request with jQuery
        $.post("/api/new/child", newChild)
            // On success, run the following code
            .then(function (data) {
                // Log the data we found
                console.log(data);
            });

        // Empty each input box//
        child.val("");
        parent.val("");
        childLastName.val("");
        dateOfBirth.val("");

    });

    /// Account Creation

    // $("#account").on('click', (even)=>{
    //     alert('test okay');
    //     var email = $("#email");
    //     var firstname = $("#firstname");
    //     var lastname = $("#lastname");
    //     var password = $("#password");

    //     var new_account = {
    //         email: email,
    //         firstname: firstname,
    //         lastname: lastname,
    //         password: password
    //     };
    //     console.log(new_account);
    //     $.post("/api/new/account", new_account)
    //     // On success, run the following code

    //     .then(function (data) {
    //         // Log the data we found
    //         console.log(data);
    //     });
    // });

    //creating activities from index adiministrator site // 
    $("#submit-activity").on("click", function (event) {
        event.preventDefault();
        var child2 = $("#child-name-activity");
        var activityOption = $("#admin-activity-select");
        var activity = $("#admin-activity");
        console.log(activity);

        // Make a new acitivit object//
        var newActivity = {
            child_name: child2.val().trim(),
            activity_option: activityOption.val().trim(),
            activity_type: activity.val().trim()
        };

        // Send an AJAX POST-request 
        $.post("/api/new/activity", newActivity)
            .then(function (data) {
                //console.log(data);
            });

        // Empty each input box//
        child2.val("");
        activityOption.val("");
        activity.val("");

    });

    $("#get-activity").on("click", function (event) {
        event.preventDefault();

        var child2 = $("h3").text();
        var activityOption = $("#admin-activity-option");
        var activity = $("#add-activity");

        // Make a new activity object//
        var newActivity = {
            child_name: child2,
            activity_option: activityOption.val().trim(),
            activity_type: activity.val().trim()
        };

        // Send an AJAX POST-request//
        $.post("/api/new/activity", newActivity)
            .then(function (data) {
                //console.log(data);
            });

        // Empty each input box //
        activityOption.val("");
        activity.val("");

    });

    //creating activities from index adiministrator site // 
    $("#submit-activity").on("click", function (event) {
        event.preventDefault();
        var activity = $("#add-activity").val();
        var child2 = $("#child-name-activity").val();

        // Make a new object//
        var newActivity = {
            child_name: child2,
            activity_type: activity
        };

        // Send an AJAX POST-request//
        $.post("/api/new/activity", newActivity)
            .then(function (data) {
                //console.log(data);
            });

        // Empty each input box //
        child2.val(" ");
        activity.val(" ");

    });

    // TO send message from parent //
    $("#send-message").on("click", function (event) {
        event.preventDefault();
        var child3 = $("h6").text();
        var message = $("#new-message").val();

        // Make a object //
        var newMessage = {
            child_name: child3,
            message_from_parent: message
        };

        // Send an AJAX POST //
        $.post("/api/new/message", newMessage)
            .then(function (data) {
                //console.log(data);
            });

        // Empty each input box//
        message.val("");

    });
});




