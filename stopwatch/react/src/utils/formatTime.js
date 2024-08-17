/**
 * Formats the given time into a string representation in the format HH:MM:SS.mmm.
 *
 * @param {number} time - The time to be formatted, in milliseconds.
 * @return {string} The formatted time string.
 */
export function formatTime(time) {
  const milliseconds = Math.floor((time % 1000) / 10);
  const seconds = Math.floor((time / 1000) % 60);
  const minutes = Math.floor((time / (1000 * 60)) % 60);
  const hours = Math.floor(time / (1000 * 60 * 60));
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(
    2,
    '0'
  )}:${String(seconds).padStart(2, '0')}.${String(milliseconds).padStart(
    2,
    '0'
  )}`;
}
