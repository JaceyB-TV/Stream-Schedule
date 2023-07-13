const dateOptions = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true
};

function updateSchedule() {
    $(".table-container").empty()

    const table = $("<div>").addClass("table").appendTo(".table-container"),
        now = Date.now();

    schedule.forEach(item => {
        const row = $("<div>").addClass("row").appendTo(table),
            start = new Date(item.start).toLocaleDateString("en-GB", dateOptions).substr(12).toUpperCase();

        const left = $("<div>").addClass("left cell").appendTo(row).html(start);

        if (item.start < now && now < item.end) {
            row.addClass("glow-on-hover");
        }

        //$("<div>").appendTo(left).html(start);

        $("<div>").addClass("right cell").appendTo(row).html(item.name);
    });
}

 setInterval(updateSchedule, 5000);

updateSchedule();
