function toggleSidebar() {
  var sidebar = document.getElementById("sidebar");
  const mainContent = document.querySelector('.MAINCONTENT');  
  const grid = document.querySelector('.main-grid');  
  
  sidebar.classList.toggle("open");
  mainContent.classList.toggle('shifted');    
  grid.classList.toggle('shifted');    
}

// ---------------------------------------------------------------- REAL TIME CALENDAR ---------------------------------------------------------------------------- 

const currentdate = document.querySelector(".current-date"),
  monthdays = document.querySelector(".days"),
  prevnext = document.querySelectorAll(".icons button");

let date = new Date();
let currmonth = date.getMonth();
let curryear = date.getFullYear();

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const rendercalendar = () => {
  let firstday = new Date(curryear, currmonth, 1).getDay(),
    lastdate = new Date(curryear, currmonth + 1, 0).getDate(),
    lastday = new Date(curryear, currmonth, lastdate).getDay(),
    lastdateofpmonth = new Date(curryear, currmonth, 0).getDate();
  let liTag = "";

  // Calculate the total number of days to display
  let totalDays = firstday + lastdate + (6 - lastday);

  // Ensure there are only 6 rows (6 * 7 = 42 days in total)
  if (totalDays > 42) {
    totalDays = 42;
  }

  // Show previous month's days (inactive)
  for (let i = firstday; i > 0; i--) {
    liTag += `<li class="inactive">${lastdateofpmonth - i + 1}</li>`;
  }

  // Show current month's days
  for (let i = 1; i <= lastdate; i++) {
    let isToday =
      i === date.getDate() &&currmonth === new Date().getMonth() &&curryear === new Date().getFullYear()? "active": "";
    liTag += `<li class="${isToday}">${i}</li>`;
  }

  // Fill the remaining days of the last row with the next month's days (inactive)
  let remainingDays = 42 - (firstday + lastdate);
  for (let i = 1; i <= remainingDays; i++) {
    liTag += `<li class="inactive">${i}</li>`;
  }
  currentdate.innerText = `${months[currmonth]} ${curryear}`;
  monthdays.innerHTML = liTag;
};
rendercalendar();

prevnext.forEach((icons) => {
  icons.addEventListener("click", () => {
    currmonth = icons.id === "prev" ? currmonth - 1 : currmonth + 1;
    if (currmonth < 0 || currmonth > 11) {
      date = new Date(curryear, currmonth);
      curryear = date.getFullYear();
      currmonth = date.getMonth();
    } else {
      date = new Date();
    }

    rendercalendar();
  });
});


//--------------------------------------------------------------------------- MINI CALENDAR ----------------------------------------------------------------------------------------------------------------------------------

const currenttdate = document.querySelector(".curr-date"),
  month_days = document.querySelector(".day"),
  prev_next = document.querySelectorAll(".icon button");

let dates = new Date();
let currrmonth = date.getMonth();
let currryear = date.getFullYear();

const _months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const renderminicalendar = () => {
  let firstdayy = new Date(currryear, currrmonth, 1).getDay(),
    lastdatee = new Date(currryear, currrmonth + 1, 0).getDate(),
    lastdayy = new Date(currryear, currrmonth, lastdatee).getDay(),
    lastdateofpmonthh = new Date(currryear, currrmonth, 0).getDate();
  let liTags = "";
  let divTags="";

  // Calculate the total number of days to display
  let totalDays = firstdayy + lastdatee + (6 - lastdayy);

  // Ensure there are only 6 rows (6 * 7 = 42 days in total)
  if (totalDays > 42) {
    totalDays = 42;
  }

  // Show previous month's days (inactive)
  for (let i = firstdayy; i > 0; i--) {
    liTags += `<li class="inactive">${lastdateofpmonthh - i + 1}</li>`;
    divTags += `<div class="inactive">${lastdateofpmonthh - i + 1}</div>`;
    

  }

  // Show current month's days
  for (let i = 1; i <= lastdatee; i++) {
    let isToday =
      i === dates.getDate() &&currrmonth === new Date().getMonth() &&currryear === new Date().getFullYear()? "active": "";
    liTags += `<li class="${isToday}">${i}</li>`;
  }

  for (let i = 1; i <= lastdatee; i++) {
    let isToday =
      i === dates.getDate() &&currrmonth === new Date().getMonth() &&currryear === new Date().getFullYear()? "button": "";
    divTags += `<div class="${isToday}">${i}</li>`;
  }
  // Fill the remaining days of the last row with the next month's days (inactive)
  let remainingDays = 42 - (firstdayy + lastdatee);
  for (let i = 1; i <= remainingDays; i++) {
    liTags += `<li class="inactive">${i}</li>`;
    divTags += `<div class="inactive">${i}</div>`;
  }
  currenttdate.innerText = `${months[currrmonth]} ${currryear}`;
  month_days.innerHTML = liTags;
};
renderminicalendar();



prev_next.forEach((icon) => {
  icon.addEventListener("click", () => {
    currrmonth = icon.id === "prev" ? currrmonth - 1 : currrmonth + 1;
    if (currrmonth < 0 || currrmonth > 11) {
      dates = new Date(currryear, currrmonth);
      currryear = dates.getFullYear();
      currrmonth = dates.getMonth();
    } else {
      dates = new Date();
    }

    renderminicalendar();
  });
});


{

  const dropbtn = document.querySelector('#drop')
  const dropcontent = document.querySelector('#mincln')
  
  
  dropbtn.addEventListener('click', () => {
    dropcontent.classList.toggle('hide');
      
  })
  
  document.addEventListener('click', (e) => {
    
    
    if (!dropbtn.contains(e.target) && !dropcontent.contains(e.target)) {
      dropcontent.classList.add('hide'); 
    }
  })
  
}

//  ------------------------------------------------------------------------------ MAIN HEAD TOP ------------------------------------------------------------------------------------const currentdate = document.querySelector(".current-date"),
const todayElement = document.querySelector(".today");
const todayButton = todayElement.querySelector("button"); // The "Today" button
const todayText = document.querySelector(".today-text");

const weekdays = document.querySelectorAll(".top .day");
const leftbtn = document.querySelector(".leftbtn");
const rightbtn = document.querySelector(".rightbtn");
const monthDropdown = document.querySelector(".calendar-month");

let dat = new Date();
let currweekstart = getStartOfWeek(new Date()); // Current week start set to today
let currmnth = dat.getMonth();
let curryr = dat.getFullYear();

const month = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const halfmonths=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

// Function to format the current day, month, and date
function formatTodayDate() {
  const today = new Date();
  const options = { weekday: 'long', month: 'long', day: 'numeric' };
  return today.toLocaleDateString(undefined, options);
}

// Event listener for hover to show the current day, month, and date
todayElement.addEventListener("mouseenter", () => {
  todayText.innerText = formatTodayDate();
});

todayElement.addEventListener("mouseleave", () => {
  todayText.innerText = "Day, MonthMonth, Date"; // Reset on mouse leave
});

// Get the start date of the current week (Monday)
function getStartOfWeek(d) {
  const day = d.getDay();
  const diff = d.getDate() - day + (day === 0 ? -6 : 1); // Adjust when day is Sunday
  return new Date(d.setDate(diff));
}

// Function to render the calendar
const rendertopcalendar = () => {
  let today = new Date();
  let startMonth = currweekstart.getMonth(); // Month of the first day of the week
  let endMonth = startMonth; // To handle when the week spans two months
  let startYear = currweekstart.getFullYear();
  let endYear = startYear;

  // Loop through 7 days starting from the current week's start
  weekdays.forEach((weekday, i) => {
    let weekDay = new Date(currweekstart);
    weekDay.setDate(currweekstart.getDate() -1 + i);

    // Check if the day is today
    let isToday = (weekDay.getDate() === today.getDate() &&
                   weekDay.getMonth() === today.getMonth() &&
                   weekDay.getFullYear() === today.getFullYear());

    // Update the li content with the current date and apply active class if today
    const li = weekday.querySelector(".day ul li");
    
    li.innerText = weekDay.getDate();
    if (isToday) {
      li.parentElement.parentElement.classList.add("active");
      

    } else {
      li.parentElement.parentElement.classList.remove("active");
    }

    // Track if the week spans across two months
    if (i === 0) {
      startMonth = weekDay.getMonth(); // Start month of the week
      startYear = weekDay.getFullYear();
    }
    if (i === 6) {
      endMonth = weekDay.getMonth(); // End month of the week
      endYear = weekDay.getFullYear();
    }
  });

  // Update the dropdown calendar-month text
  if (startMonth === endMonth) {
    // Same month for the entire week
    monthDropdown.innerText = `${months[startMonth]} ${startYear}`;
  } else {
    // Week spans two months
    let monthText = `${halfmonths[startMonth]} - ${halfmonths[endMonth]} ${endYear}`;
    monthDropdown.innerText = monthText;
  }
};

// Event listener for the "Today" button to go to the current week
todayButton.addEventListener("click", () => {
  currweekstart = getStartOfWeek(new Date()); // Reset to the start of the current week
  rendertopcalendar(); // Re-render the calendar to the current week
});

rendertopcalendar();

// Event listeners for navigating between weeks
leftbtn.addEventListener("click", () => {
  currweekstart.setDate(currweekstart.getDate() - 7); // Move back one week
  rendertopcalendar();
});

rightbtn.addEventListener("click", () => {
  currweekstart.setDate(currweekstart.getDate() + 7); // Move forward one week
  rendertopcalendar();
});


  
  const flipcontent = document.querySelector('.down-arr');
  const flipbtn = document.querySelector('#flipper');

flipbtn.addEventListener('click', () => {
    
    flipcontent.classList.toggle('flip'); 
    flipcontent.classList.toggle('btnhide'); 

  })
  