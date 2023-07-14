const dateOptions = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true
};

const debugMode = false;

function updateSchedule() {
    $(".table-container").empty()

    const table = $("<div>").addClass("table").appendTo(".table-container"),
        now = Date.now();

    // $("<div>").addClass("left cell").appendTo($("<div>").addClass("row").appendTo(table)).html("Time (BST)")

    if (debugMode) {
        let start = 9;

        schedule.forEach(item => {
            item.start = new Date().setHours(start, 0, 0, 0);
            item.end = new Date().setHours(++start, 0, 0, 0);
        });
    }

    schedule.forEach(item => {
        const row = $("<div>").addClass("row").appendTo(table),
            start = formatTime(new Date(item.start));

        const left = $("<div>").addClass("left cell").appendTo(row).html(start);

        if (item.start < now && now < item.end) {
            row.addClass("glow-on-hover");
        }

        //$("<div>").appendTo(left).html(start);

        $("<div>").addClass("right cell").appendTo(row).html(item.name);
    });
}

if (!debugMode) {
    setInterval(updateSchedule, 5000);
}

updateSchedule();
