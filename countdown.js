function getWeekProgress() {
  const now = new Date();

  // Clone date so we don’t mutate `now`
  const startOfWeek = new Date(now);
  const day = now.getDay(); // 0 = Sunday, 1 = Monday

  // Convert Sunday (0) to 7
  const diffToMonday = (day === 0 ? 6 : day - 1);

  startOfWeek.setDate(now.getDate() - diffToMonday);
  startOfWeek.setHours(0, 0, 0, 0);

  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 7);

  const elapsed = now - startOfWeek;
  const total = endOfWeek - startOfWeek;

  const percent = (elapsed / total) * 100;

  return Math.min(Math.max(percent, 0), 100);
}


function timeLeftInWeek() {
  const now = new Date();
  const end = new Date(now);

  end.setDate(now.getDate() + (7 - (now.getDay() || 7)));
  end.setHours(23, 59, 59, 999);

  const ms = end - now;

  const hours = Math.floor(ms / 36e5);
  const minutes = Math.floor((ms % 36e5) / 6e4);
  const seconds = Math.floor((ms % 6e4) / 1000);

  return `${hours}h ${minutes}m ${seconds}s left this week`;
}

console.log(`Week progress: ${getWeekProgress().toFixed(2)}%`);

console.log(timeLeftInWeek());

const weekprogrss = new Date();
const dtNow = new Date();
const nowDay = dtNow.getDay();
const nowHour = dtNow.getHour()
const nowMin = dtNow.getMinute(); 

if((nowDay == 3 && nowHour >= 20 )||( nowDay == 4 && (nowHour < 6 || (nowHour == 6 && nowMin <=30)))){
    //wed-thur shift
    console.log("wed-thur shift")
}
if((nowDay == 4 && nowHour >= 20 )||( nowDay == 5 && (nowHour < 6 || (nowHour == 6 && nowMin <=30)))){
    //thur-fri shift
    console.log("thur-fri shift")
}
if((nowDay == 5 && nowHour >= 20 )||( nowDay == 6 && (nowHour < 6 || (nowHour == 6 && nowMin <=30)))){
    //fri-sat shift
    console.log("fri-sat shift")
}
if((nowDay == 6 && nowHour >= 20 )||( nowDay == 0 && (nowHour < 6 || (nowHour == 6 && nowMin <=30)))){
    //sat-sun shift
    console.log("sat-sun shift")
}