interface Comparable<Key> {
    compareTo(k: Key): -1 | 0 | 1
}

interface ST<Key extends Comparable<Key>, Value> {
    put(key: Key, value: Value): void;
    get(key: Key): Value;
    delete(key: Key): void;
    contains(key: Key): boolean;
    isEmpty(): boolean;
    size(node?: any): number;
    min(): Key;
    max(): Key;
    floor(key: Key): Key; // 小于等于key的最大键
    ceiling(key: Key): Key; //大于等于key的最大键
    rank(key: Key): number; // 小于等于key的键的数量
    select(k: number): Key; // 排名为 k 的键
    deleteMin(): void;
    deleteMax(): void;
    size(lo: Key, hi: Key): number;
    keys(lo: Key, hi: Key): Iterable<Key>;
    keys(): Iterable<Key>;
}