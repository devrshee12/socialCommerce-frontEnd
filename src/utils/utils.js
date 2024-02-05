export function timeAgo(date) {
    const currentDate = new Date();
    // Convert the input string to a Date object
    const inputDate = new Date(date);
    const timeDifference = currentDate - inputDate;
    const seconds = Math.floor(timeDifference / 1000);

    if (seconds < 60) {
        return seconds + " seconds ago";
    } else if (seconds < 3600) {
        const minutes = Math.floor(seconds / 60);
        return minutes + (minutes === 1 ? " minute ago" : " minutes ago");
    } else if (seconds < 86400) {
        const hours = Math.floor(seconds / 3600);
        return hours + (hours === 1 ? " hour ago" : " hours ago");
    } else if (seconds < 2592000) {
        const days = Math.floor(seconds / 86400);
        return days + (days === 1 ? " day ago" : " days ago");
    } else if (seconds < 31536000) {
        const months = Math.floor(seconds / 2592000);
        return months + (months === 1 ? " month ago" : " months ago");
    } else {
        const years = Math.floor(seconds / 31536000);
        return years + (years === 1 ? " year ago" : " years ago");
    }
}