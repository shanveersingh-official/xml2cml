// xml2cml.js
// A module to convert between XML and CML (Customizable Markup Language)

/**
 * Converts XML string input to CML format.
 * - Removes XML declaration tag if present.
 * - Requires a version string to insert in the CML version tag.
 * - Converts closing tags like </tag> into '↙tag>'.
 * 
 * @param {string} xmlStr - The input XML string.
 * @param {string} version - The version to put in the CML header tag (required).
 * @param {boolean} [trim=true] - Whether to trim leading/trailing whitespace.
 * @returns {string} - The converted CML string.
 */
export function xmlToCml(xmlStr, version, trim = true) {
  if (typeof xmlStr !== 'string') throw new TypeError('Input must be a string');
  if (typeof version !== 'string' || !version.trim()) {
    throw new TypeError('Version parameter is required and must be a non-empty string');
  }
  let input = trim ? xmlStr.trim() : xmlStr;
  input = input.replace(/<\?xml[^>]*\?>\s*/i, '');
  const converted = input.replace(/<\/(\w+)>/g, (_, tag) => `↙${tag}>`);
  return `<cml>${version}↙cml>\n${converted}`;
}

/**
 * Converts CML string input to XML format.
 * - Removes CML version tag if present.
 * - Converts '↙tag>' into closing XML tags '</tag>'.
 * - Adds XML declaration at the start.
 * 
 * @param {string} cmlStr - The input CML string.
 * @param {boolean} [trim=true] - Whether to trim leading/trailing whitespace.
 * @returns {string} - The converted XML string.
 */
export function cmlToXml(cmlStr, trim = true) {
  if (typeof cmlStr !== 'string') throw new TypeError('Input must be a string');
  let input = trim ? cmlStr.trim() : cmlStr;
  input = input.replace(/^<cml>\d+\.\d+\.\d+↙cml>\s*/i, '');
  const converted = input.replace(/↙(\w+)>/g, (_, tag) => `</${tag}>`);
  return `<?xml version="1.0" encoding="UTF-8"?>\n${converted}`;
}

/**
 * Merges multiple XML or CML strings into one.
 * Concatenates trimmed inputs with a newline between.
 * Useful for merging multiple file contents.
 * 
 * @param {string[]} inputs - Array of XML or CML strings.
 * @returns {string} - Merged string.
 */
export function mergeContents(inputs) {
  if (!Array.isArray(inputs)) throw new TypeError('Input must be an array of strings');
  return inputs
    .map(str => (typeof str === 'string' ? str.trim() : ''))
    .filter(Boolean)
    .join('\n');
}