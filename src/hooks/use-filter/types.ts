type FilterPredicate<Value> = (value: Value) => boolean

type FilterValue<Item, Key extends keyof Item> = Item[Key] | FilterPredicate<Item[Key]>

export type Filters<Item> = {
  [Key in keyof Item]?: 'all' | FilterValue<Item, Key>
}

export const isFilterPredicate = <T>(value: unknown): value is FilterPredicate<T> => {
  return typeof value === 'function'
}
