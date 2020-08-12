export function precisionRound(number, precision) {
    var factor = Math.pow(10, precision);
    return Math.round(number * factor) / factor;
}
  
export function normalizeSpacing (text) {
    return text.replace(/\s+/u, ' ').trim()
}
