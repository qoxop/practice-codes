/**
 * 红黑树符号表的ts实现
 */
class Node<Key extends Comparable<Key>, Value> {
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
    private _rotateLeft(node: Node<Key, Value>): Node<Key, Value> {
        const rc = node.right;
        node.right = rc.left;
        rc.left = node;
        rc.color = node.color;
        node.color = Node.RED;
        rc.size = node.size;
        node.size = 1 + this.size(node.left) + this.size(node.right)
        return rc;
    }
    private _put(node:  Node<Key, Value>, key: Key, value: Value): Node<Key, Value> {
        if (node === null) {
            return new Node(key, value, Node.RED);
        }
        const cmp = key.compareTo(node.key);
        switch(cmp) {
            case 1: 
                node.right = this._put(node.right, key, value);
                break;
            case -1:
                node.left = this._put(node.left, key, value);
                break;
            case 0:
                node.value = value;
                break;
            default:
                throw "key 类型未继承 Comparable Api"
        }

        
        return node
    }
    size(node: Node<Key, Value>): number {
        return 1;
    }
    put(key: Key, value: Value) {
        this.root = this._put(this.root, key, value);
        this.root.color = Node.BLACK;
    }
}