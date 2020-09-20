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
class RedBlackBST<Key extends Comparable<Key>, Value> implements ST<Key, Value> {
    private root: Node<Key, Value> = null;
    private _put(node:  Node<Key, Value>, key: Key, value: Value): Node<Key, Value> {
        if (node === null) {
            return new Node(key, value, Node.RED);
        }
        const cmp = key.compareTo(node.key);
        
        
        return node
    }
    put(key: Key, value: Value) {
        this.root = this._put(this.root, key, value);
        this.root.color = Node.BLACK;
    }
}