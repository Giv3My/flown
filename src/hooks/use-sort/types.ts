export const isDateLike = (v: unknown): v is Date | string => {
  return v instanceof Date || (typeof v === 'string' && !isNaN(Date.parse(v)))
}
