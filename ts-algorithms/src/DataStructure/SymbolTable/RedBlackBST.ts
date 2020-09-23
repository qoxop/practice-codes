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
    get(key: Key): Value {
        throw new Error("Method not implemented.");
    }
    delete(key: Key): void {
        throw new Error("Method not implemented.");
    }
    contains(key: Key): boolean {
        throw new Error("Method not implemented.");
    }
    isEmpty(): boolean {
        throw new Error("Method not implemented.");
    }
    min(): Key {
        throw new Error("Method not implemented.");
    }
    max(): Key {
        throw new Error("Method not implemented.");
    }
    floor(key: Key): Key {
        throw new Error("Method not implemented.");
    }
    ceiling(key: Key): Key {
        throw new Error("Method not implemented.");
    }
    rank(key: Key): number {
        throw new Error("Method not implemented.");
    }
    select(k: number): Key {
        throw new Error("Method not implemented.");
    }
    deleteMin(): void {
        throw new Error("Method not implemented.");
    }
    deleteMax(): void {
        throw new Error("Method not implemented.");
    }
    keys(lo?: Key, hi?: Key): Iterable<Key> {
        throw new Error("Method not implemented.");
    }
    private root: Node<Key, Value> = null;
    private _isRed(node: Node<Key, Value>): boolean {
        return node?.color === Node.RED;
    }
    private _isBlack(node: Node<Key, Value>): boolean {
        return node?.color === Node.BLACK;
    }
    /**
     * 左旋转节点的右链接，(抬高右链接节点)
     * @param node 
     */
    private _rotateLeft(node: Node<Key, Value>): Node<Key, Value> {
        const rc = node.right;
        // 右链接的左链接作为原节点的右链接
        node.right = rc.left;
        // 右链接的左链接点指向原节点（抬高）
        rc.left = node;
        // 右链接继承原节点的颜色
        rc.color = node.color;
        node.color = Node.RED;
        rc.size = node.size;
        node.size = 1 + node.left.size + node.right.size
        return rc; // 返回右链接节点
    }
    /**
     * 右旋转节点的左链接 (抬高左链接节点)
     * @param node 
     */
    private _rotateRight(node: Node<Key, Value>): Node<Key, Value> {
        const lc = node.left;
        node.left = lc.right;
        lc.right = node;
        lc.color = node.color
        node.color = Node.BLACK;
        lc.size = node.size;
        node.size = 1 + node.left.size + node.right.size
        return lc;
    }
    private _flibColor(node: Node<Key, Value>): void {
        node.color = Node.RED;
        node.left.color = Node.BLACK;
        node.right.color = Node.BLACK;
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
        // 调整平衡性
        if (this._isRed(node.left) && !this._isRed(node.right)) {
            node = this._rotateLeft(node)
        } else if (this._isRed(node.right) && this._isRed(node.right?.right)) {
            node = this._rotateRight(node)
        } else if (this._isRed(node.left) && this._isRed(node.right)) {
            this._flibColor(node);
        }
        return node
    }
    put(key: Key, value: Value) {
        this.root = this._put(this.root, key, value);
        this.root.color = Node.BLACK;
    }
}