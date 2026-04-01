/**
 * Function that handles urls adding 'https://' if they don't have it using Regez
 * @param old - the old link you want to clean
 * @returns {string} The cleaned URL
 * @author Oriol Plazas León
 * @since 02/04/2026
 */
export const cleanUrl = (old: string): string => {
  let cleanUrl: string = old.trim()
  if (!/^https?:\/\//i.test(cleanUrl)) {
    cleanUrl = `https://${cleanUrl}`
  }
  return cleanUrl
}
