export type Dictionary<TValue, TKey = string> = {[key: TKey]: TValue}
export type List<TItem> = TItem[];
export type Nullable<TType> = TType | null;
export type Undefinable<TType> = TType | undefined;
