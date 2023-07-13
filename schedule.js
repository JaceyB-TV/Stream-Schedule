const dateOptions = {

    hour: "2-digit",

    minute: "2-digit",

    hour12: true

};



function updateSchedule() {

    $(".main-container").empty()



    $("<div>").appendTo(".main-container").html("Schedule");



    const table = $("<div>").addClass("table").appendTo(".main-container"),

        now = new Date();



    schedule.forEach(item => {

        const row = $("<div>").addClass("row").appendTo(table),

            start = item.start.toLocaleDateString("en-GB", dateOptions).substr(12).toUpperCase();



        if (item.start < now && now < item.end) {

            row.addClass("glow-on-hover");

        }



        $("<div>").addClass("left cell").appendTo(row).html(start);

        $("<div>").addClass("right cell").appendTo(row).html(item.name);

    });

}



setInterval(updateSchedule, 5000);



updateSchedule();
