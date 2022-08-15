/**
 * Specially design to return minutes and seconds as a timeout
 * @param {number} seconds Number of seconds - number
 * @returns {string}
 */
export const secondsToMs = seconds => {
  const d = Number(seconds);
  var h = Math.floor(d / 3600);
  var m = Math.floor((d % 3600) / 60);
  var s = Math.floor((d % 3600) % 60);

  const total = h+m+s
  const ms = `${(m < 10 && total>0) ? 0 : ''}${total===0 ? '':`${m}:` }${(s < 10 && s>0) ? 0 : ''}${total===0?'':s}`;
  return ms;
};
