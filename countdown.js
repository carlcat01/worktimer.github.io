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