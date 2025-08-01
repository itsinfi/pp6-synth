export default function isEnumValue<T extends Record<string, string>>(
    enumObj: T,
    key: string,
): key is T[keyof T] {
    return Object.keys(enumObj).includes(key);
}
