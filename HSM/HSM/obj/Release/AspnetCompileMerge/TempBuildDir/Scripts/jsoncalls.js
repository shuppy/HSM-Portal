// retrieve memberslist - This is javascript for json calls. 
// Will be used in most part of the app.
// Friendship, Reports, Choirsplits
// Modifications needed for aborting the function
// Thanks to Godwin - Woman wrapper.
// April 2014
// 
var searchobj; //json object to take json value
var allmembers = function () {
    $("#loader").show();
    $("#memberlist").html('Loading all members. Please wait...');  //clear content of the html element that will contain the result.


    //Set properties of the json object
    searchobj = $.ajax({
        type: "POST",
        url: "/Reports/getall",
        data: {},
        cache: false,
        success: function (data) {
            $("#memberlist").html('');
            $("#memberlist").html(data.details);
            $("#akojopo").html(data.totalmember);
            $('#akole').html(data.akole);
            $("#loader").hide();
        },
        error: function () {
            $("#memberlist").html('An error occured loading data for selected split, please try again.');
            $("#loader").hide();
        }
    });
}
var membersbyname = function () {
    $("#loader").show();
    $("#memberlist").html('Loading members. Please wait...');  //clear content of the html element that will contain the result.


    //Set properties of the json object
    searchobj = $.ajax({
        type: "POST",
        url: "/Reports/getchoirbyname",
        data: {
            name: $('#name').val()
        },
        cache: false,
        success: function (data) {
            $("#memberlist").html('');
            $("#memberlist").html(data.details);
            $("#akojopo").html(data.totalmember);
            $('#akole').html(data.akole);
            $("#loader").hide();
        },
        error: function () {
            $("#memberlist").html('An error occured loading data for selected split, please try again.');
            $("#loader").hide();
        }
    });
}
var membersbysplit = function () {
    $("#loader").show();
    $("#memberlist").html('Loading members. Please wait...');  //clear content of the html element that will contain the result.
    

    //Set properties of the json object
    searchobj = $.ajax({
        type: "POST",
        url: "/Reports/getchoirbysplit",
        data: {
            Split_Id: $('#ChoirSplit_Id').val()
        },
        cache: false,
        success: function (data) {
            $("#memberlist").html('');
            $("#memberlist").html(data.details);
            $("#akojopo").html(data.totalmember);
            $('#akole').html(data.akole);
            $("#loader").hide();
        },
        error: function () {
            $("#memberlist").html('An error occured loading data for selected split, please try again.');
            $("#loader").hide();
        }
    });

}
var membersbypart = function () {
    $("#loader").show();
    $("#memberlist").html('Loading members. Please wait...');
  //  if (searchobj = !null) searchobj.abort();

    //Set properties of the json object
    searchobj = $.ajax({
        type: "POST",
        url: "/Reports/getchoirbypart",
        data: {
            Part_Id: $('#PartId').val()
        },
        cache: false,
        success: function (data) {
            $("#memberlist").html('');
            $("#memberlist").html(data.details);
            $("#akojopo").html(data.totalmember);
            $('#akole').html(data.akole);
            $("#loader").hide();
        },
        error: function () {
            $("#memberlist").html('An error occured loading data for selected part, please try again.');
            $("#loader").hide();
        }
    });
}

var membersbysplitnpart = function () {
    $("#loader").show();
    $("#memberlist").html('Filtering members by split and part. Please wait...');
    //  if (searchobj = !null) searchobj.abort();

    //Set properties of the json object
    searchobj = $.ajax({
        type: "POST",
        url: "/Reports/getchoirbysplitnpart",
        data: {
            part_id: $('#PartId').val(),
            split_id: $('#ChoirSplit_Id').val()
        },
        cache: false,
        success: function (data) {
            $("#memberlist").html('');
            $("#memberlist").html(data.details);
            $("#akojopo").html(data.totalmember);
            $('#akole').html(data.akole);
            $("#loader").hide();
        },
        error: function () {
            $("#memberlist").html('An error occured loading data for selected options, please try again.');
            $("#loader").hide();
        }
    });
}

var membersbygender = function () {
    $("#loader").show();
    $("#memberlist").html('Loading members. Please wait...');
  //  if (searchobj = !null) searchobj.abort();

    //Set properties of the json object
    searchobj = $.ajax({
        type: "POST",
        url: "/Reports/getchoirbygender",
        data: {
            gender: $('#gender').val()
        },
        cache: false,
        success: function (data) {
            $("#memberlist").html('');
            $("#memberlist").html(data.details);
            $("#akojopo").html(data.totalmember);
            $("#loader").hide();
        },
        error: function () {
            $("#memberlist").html('An error occured loading data for selected option, please try again.');
            $("#loader").hide();
        }
    });
}

var membersbystatus = function () {
    $("#loader").show();
    $("#memberlist").html('Loading members. Please wait...');
    //  if (searchobj = !null) searchobj.abort();

    //Set properties of the json object
    searchobj = $.ajax({
        type: "POST",
        url: "/Reports/getchoirbystatus",
        data: {
            status: $('#status').val()
        },
        cache: false,
        success: function (data) {
            $("#memberlist").html('');
            $("#memberlist").html(data.details);
            $("#akojopo").html(data.totalmember);
            $('#akole').html(data.akole);
            $("#loader").hide();
        },
        error: function () {
            $("#memberlist").html('An error occured loading data for selected option, please try again.');
            $("#loader").hide();
        }
    });
}

var membersbysplitnstatus = function () {
    $("#loader").show();
    $("#memberlist").html('Filtering members by split and status. Please wait...');
    //  if (searchobj = !null) searchobj.abort();

    //Set properties of the json object
    searchobj = $.ajax({
        type: "POST",
        url: "/Reports/getchoirbysplitnstatus",
        data: {
            status: $('#status').val(),
            split_id: $('#ChoirSplit_Id').val()
        },
        cache: false,
        success: function (data) {
            $("#memberlist").html('');
            $("#memberlist").html(data.details);
            $("#akojopo").html(data.totalmember);
            $('#akole').html(data.akole);
            $("#loader").hide();
        },
        error: function () {
            $("#memberlist").html('An error occured loading data for selected options, please try again.');
            $("#loader").hide();
        }
    });
}

var membersbysplitngender = function () {
    $("#loader").show();
    $("#memberlist").html('Filtering members by split and gender. Please wait...');
    //  if (searchobj = !null) searchobj.abort();

    //Set properties of the json object
    searchobj = $.ajax({
        type: "POST",
        url: "/Reports/getchoirbysplitngender",
        data: {
            split_id: $('#ChoirSplit_Id').val(),
            gender: $('#gender').val()
        },
        cache: false,
        success: function (data) {
            $("#memberlist").html('');
            $("#memberlist").html(data.details);
            $("#akojopo").html(data.totalmember);
            $('#akole').html(data.akole);
            $("#loader").hide();
        },
        error: function () {
            $("#memberlist").html('An error occured loading data for selected options, please try again.');
            $("#loader").hide();
        }
    });
}

var membersbypartnstatus = function () {
    $("#loader").show();
    $("#memberlist").html('Filtering members by part and marital status. Please wait...');
    //  if (searchobj = !null) searchobj.abort();

    //Set properties of the json object
    searchobj = $.ajax({
        type: "POST",
        url: "/Reports/getchoirbypartnstatus",
        data: {
            status: $('#status').val(),
            part_id: $('#PartId').val()
        },
        cache: false,
        success: function (data) {
            $("#memberlist").html('');
            $("#memberlist").html(data.details);
            $("#akojopo").html(data.totalmember);
            $('#akole').html(data.akole);
            $("#loader").hide();
        },
        error: function () {
            $("#memberlist").html('An error occured loading data for selected options, please try again.');
            $("#loader").hide();
        }
    });
}

var membersbystatusngender = function () {
    $("#loader").show();
    $("#memberlist").html('Filtering members by marital status and gender. Please wait...');
    //  if (searchobj = !null) searchobj.abort();

    //Set properties of the json object
    searchobj = $.ajax({
        type: "POST",
        url: "/Reports/getchoirbystatusngender",
        data: {
            status: $('#status').val(),
            gender: $('#gender').val()
        },
        cache: false,
        success: function (data) {
            $("#memberlist").html('');
            $("#memberlist").html(data.details);
            $("#akojopo").html(data.totalmember);
            $('#akole').html(data.akole);
            $("#loader").hide();
        },
        error: function () {
            $("#memberlist").html('An error occured loading data for selected options, please try again.');
            $("#loader").hide();
        }
    });
}

var membersbypartnsplitnstatus = function () {
    $("#loader").show();
    $("#memberlist").html('Filtering members by part, split, and marital status. Please wait...');
    //  if (searchobj = !null) searchobj.abort();

    //Set properties of the json object
    searchobj = $.ajax({
        type: "POST",
        url: "/Reports/getchoirbypartnsplitnstatus",
        data: {
            part_id: $('#PartId').val(),
            split_id: $('#ChoirSplit_Id').val(),
            status: $('#status').val()
        },
        cache: false,
        success: function (data) {
            $("#memberlist").html('');
            $("#memberlist").html(data.details);
            $("#akojopo").html(data.totalmember);
            $('#akole').html(data.akole);
            $("#loader").hide();
        },
        error: function () {
            $("#memberlist").html('An error occured loading data for selected options, please try again.');
            $("#loader").hide();
        }
    });
}

var membersbysplitngendernstatus = function () {
    $("#loader").show();
    $("#memberlist").html('Filtering members by part, split, and marital status. Please wait...');
    //  if (searchobj = !null) searchobj.abort();

    //Set properties of the json object
    searchobj = $.ajax({
        type: "POST",
        url: "/Reports/getchoirbysplitngendernstatus",
        data: {
            split_id: $('#ChoirSplit_Id').val(),
            gender: $('#gender').val(),
            status: $('#status').val()
        },
        cache: false,
        success: function (data) {
            $("#memberlist").html('');
            $("#memberlist").html(data.details);
            $("#akojopo").html(data.totalmember);
            $('#akole').html(data.akole);
            $("#loader").hide();
        },
        error: function () {
            $("#memberlist").html('An error occured loading data for selected options, please try again.');
            $("#loader").hide();
        }
    });
}
//Birthdays
var birthdaythismonth = function () {
    $("#loader").show();
    $("#memberlist").html('Loading birthday list for this month. Please wait...');

    searchobj = $.ajax({
        type: "POST",
        url: "/Reports/birthdaybymonth",
        data: {
            month: (new Date).getMonth()
        },
        cache: false,
        success: function (data) {
            $("#memberlist").html('');
            $("#memberlist").html(data.details);
            $("#loader").hide();
            $("#akole").html(data.akole);
            $("#akojopo").html(data.totalmember);
        },
        error: function () {
            $("#memberlist").html('An error occured loading birthday list, please try again.');
            $("#loader").hide();
        }
    });
}
var birthdaybymonth = function () {
    $("#loader").show();
    $("#memberlist").html('Loading birthday list. Please wait...');

    searchobj = $.ajax({
        type: "POST",
        url: "/Reports/birthdaybymonth",
        data: {
            month: $('#Months').val()
        },
        cache: false,
        success: function (data) {
            $("#memberlist").html('');
            $("#memberlist").html(data.details);
            $("#loader").hide();
            $("#akole").html(data.akole);
            $("#akojopo").html(data.totalmember);
        },
        error: function () {
            $("#memberlist").html('An error occured loading birthday list, please try again.');
            $("#loader").hide();
        }
    });
}

var birthdaythisweek = function () {
    $("#loader").show();
    $("#memberlist").html('Loading birthday list for the week. Please wait...');

    searchobj = $.ajax({
        type: "POST",
        url: "/Reports/birthdaythisweek",
        data: {},
        cache: false,
        success: function (data) {
            $("#memberlist").html('');
            $("#memberlist").html(data.details);
            $("#loader").hide();
            $("#akole").html(data.akole);
            $("#akojopo").html(data.totalmember);
        },
        error: function () {
            $("#memberlist").html('An error occured loading birthday list, please try again.');
            $("#loader").hide();
        }
    });
}

var birthdaytoday = function () {
    $("#loader").show();
    $("#memberlist").html('Loading birthday list. Please wait...');

    var date = formatJSONDate(new Date());
    searchobj = $.ajax({
        type: "POST",
        url: "/Reports/birthdaybydate",
        data: {
            date: date
        },
        cache: false,
        success: function (data) {
            $("#memberlist").html('');
            $("#memberlist").html(data.details);
            $("#loader").hide();
            $("#akole").html(data.akole);
            $("#akojopo").html(data.totalmember);
        },
        error: function () {
            $("#memberlist").html('An error occured loading birthday list, please try again.');
            $("#loader").hide();
        }
    });
}

var birthdaybydate = function () {
    $("#loader").show();
    $("#memberlist").html('Loading birthday list. Please wait...');

    searchobj = $.ajax({
        type: "POST",
        url: "/Reports/birthdaybydate",
        data: {
            date: $('#date').val()
        },
        cache: false,
        success: function (data) {
            $("#memberlist").html('');
            $("#memberlist").html(data.details);
            $("#loader").hide();
            $("#akole").html(data.akole);
            $("#akojopo").html(data.totalmember);
        },
        error: function () {
            $("#memberlist").html('An error occured loading birthday list, please try again.');
            $("#loader").hide();
        }
    });
}

//var birthdaybetween = function () {
//    $("#loader").show();
//    $("#memberlist").html('Loading birthday list. Please wait...');

//    searchobj = $.ajax({
//        type: "POST",
//        url: "/Reports/birthdaybydates",
//        data: {
//            startdate: $('#startdate').val(),
//            enddate: $('#enddate').val()
//        },
//        cache: false,
//        success: function (data) {
//            $("#memberlist").html('');
//            $("#memberlist").html(data.details);
//            $("#loader").hide();
//            $("#akole").html(data.akole);
//            $("#akojopo").html(data.totalmember);
//        },
//        error: function () {
//            $("#memberlist").html('An error occured loading birthday list, please try again.');
//            $("#loader").hide();
//        }
//    });
//}

//Wedding Anniversary

var weddingbymonth = function () {
    $("#loader").show();
    $("#memberlist").html('Loading wedding anniversary list. Please wait...');

    searchobj = $.ajax({
        type: "POST",
        url: "/Reports/weddingbymonth",
        data: {
            month: $('#wmonths').val()
        },
        cache: false,
        success: function (data) {
            $("#memberlist").html('');
            $("#memberlist").html(data.details);
            $("#loader").hide();
            $("#akole").html(data.akole);
            $("#akojopo").html(data.totalmember);
        },
        error: function () {
            $("#memberlist").html('An error occured loading wedding anniversary list, please try again.');
            $("#loader").hide();
        }
    });
}
var weddingthismonth = function () {
    $("#loader").show();
    $("#memberlist").html('Loading wedding anniversary list. Please wait...');

    searchobj = $.ajax({
        type: "POST",
        url: "/Reports/weddingbymonth",
        data: {
            month: (new Date()).getMonth()
        },
        cache: false,
        success: function (data) {
            $("#memberlist").html('');
            $("#memberlist").html(data.details);
            $("#loader").hide();
            $("#akole").html(data.akole);
            $("#akojopo").html(data.totalmember);
        },
        error: function () {
            $("#memberlist").html('An error occured loading wedding anniversary list, please try again.');
            $("#loader").hide();
        }
    });
}
var weddingthisweek = function () {
    $("#loader").show();
    $("#memberlist").html('Loading wedding anniversary list. Please wait...');

    searchobj = $.ajax({
        type: "POST",
        url: "/Reports/weddingthisweek",
        data: {},
        cache: false,
        success: function (data) {
            $("#memberlist").html('');
            $("#memberlist").html(data.details);
            $("#loader").hide();
            $("#akole").html(data.akole);
            $("#akojopo").html(data.totalmember);
        },
        error: function () {
            $("#memberlist").html('An error occured loading wedding anniversary list, please try again.');
            $("#loader").hide();
        }
    });
}

var weddingtoday = function () {
    $("#loader").show();
    $("#memberlist").html('Loading wedding anniversary list. Please wait...');

    var date = formatJSONDate(new Date());
    searchobj = $.ajax({
        type: "POST",
        url: "/Reports/weddingbydate",
        data: {
            date: date
        },
        cache: false,
        success: function (data) {
            $("#memberlist").html('');
            $("#memberlist").html(data.details);
            $("#loader").hide();
            $("#akole").html(data.akole);
            $("#akojopo").html(data.totalmember);
        },
        error: function () {
            $("#memberlist").html('An error occured loading wedding anniversary list, please try again.');
            $("#loader").hide();
        }
    });
}

var weddingbydate = function () {
    $("#loader").show();
    $("#memberlist").html('Loading wedding anniversary list. Please wait...');

    searchobj = $.ajax({
        type: "POST",
        url: "/Reports/weddingbydate",
        data: {
            date: $('#wdate').val()
        },
        cache: false,
        success: function (data) {
            $("#memberlist").html('');
            $("#memberlist").html(data.details);
            $("#loader").hide();
            $("#akole").html(data.akole);
            $("#akojopo").html(data.totalmember);
        },
        error: function () {
            $("#memberlist").html('An error occured loading wedding anniversary list, please try again.');
            $("#loader").hide();
        }
    });
}

var monday = function (date) {
    // If no date object supplied, use current date
    // Copy date so don't modify supplied date
    var now = date ? new Date(date) : new Date();

    // set time to some convenient value
    now.setHours(0, 0, 0, 0);

    // Get the previous Monday
    var monday = new Date(now);
    monday.setDate(monday.getDate() - monday.getDay() + 1);
    return monday;
}

var sunday = function (date) {
    // If no date object supplied, use current date
    // Copy date so don't modify supplied date
    var now = date ? new Date(date) : new Date();

    // set time to some convenient value
    now.setHours(0, 0, 0, 0);

    // Get next Sunday
    var sunday = new Date(now);
    sunday.setDate(sunday.getDate() - sunday.getDay() + 7);

    return sunday;
}
var partid; //Part Id
var splitid;

var formurl = function () {
    partid = $("#PartId").val();
    splitid = $("#ChoirSplit_Id");
    var a = document.get('btnsplitpart');
    
    a.href = "Reshuffle?split=" + splitid + "&part=" + partid;
}

function formatJSONDate(jsondate) {
    var month = jsondate.getMonth() + 1
    var day = jsondate.getDate()
    var year = jsondate.getFullYear()
    var date = day + "/" + month + "/" + year
    return date;
}
