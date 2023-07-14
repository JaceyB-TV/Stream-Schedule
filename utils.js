const formatTime = date => {
    let hours = date.getHours();

    const minutes = String(date.getMinutes()).padStart(2, "0");

    meridiem = hours < 12 ? "AM" : "PM";

    hours = hours % 12;

    if (hours === 0) hours = 12;

    hours = String(hours).padStart(2, "0");

    return `${hours}:${minutes} ${meridiem}`;
}