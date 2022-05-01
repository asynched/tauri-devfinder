/**
 * Function for parsing a date to a string formatted as 'DAY MONTH YEAR' in
 * the 'en-GB' locale.
 *
 * ## Example
 *
 * ```tsx
 * parseDate('2019-01-01') // '01 January 2019'
 * ```
 *
 * @param date Date to be parsed.
 * @returns A parsed version of the date.
 */
export function parseDate(date: string): string {
  return new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(new Date(date))
}
