export function getMSToDuration(ms_duration: number): string {
  const seconds = Math.floor(ms_duration / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  const remainingMinutes = minutes % 60;
  const remainingSeconds = seconds % 60;

  if (hours > 0) {
    return `${hours}:${remainingMinutes}:${remainingSeconds}`;
  } else if (remainingMinutes > 0) {
    return `${remainingMinutes}:${remainingSeconds}`;
  } else {
    return `${remainingSeconds}`;
  }
}
