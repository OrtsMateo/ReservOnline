const date = new Date(Date.UTC(2012, 11, 12, 3, 0, 0));
date = date.toLocaleDateString();
document.getElementById("dDate").min = date;