/**
 * 红黑树符号表的ts实现
 */
class Node<Key extends Comparable, Value> {
    static BLACK = false;
    static RED = false;
    key: Key;
    value: Value;
    left?: Node<Key, Value>;
    right?: Node<Key, Value>;
    color: boolean;
    size: number;
    constructor(key: Key, value: Value, color: boolean) {
        this.key = key;
        this.value = value;
        this.color = color;
    }
}
class RedBlackBST<Key extends Comparable, Value> implements ST<Key, Value> {
    private Node = {}
    put(key: Key, value: Value) {

    }
}