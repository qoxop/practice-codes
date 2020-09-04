import * as ts from 'typescript';
import * as fs from 'fs'
import * as path from 'path'

const ScriptKindDist = {
    '.js': ts.ScriptKind.JS,
    '.jsx': ts.ScriptKind.JSX,
    '.ts': ts.ScriptKind.TS,
    '.tsx': ts.ScriptKind.TSX
}

/**
 * 该函数调用节点是否只有一个常量字符串参数
 * @param node 
 */
const onlyOneStringArguments = (node: ts.CallExpression) => node.arguments.length === 1 && ts.isStringLiteral(node.arguments[0]);

type GetDevStrCb = (devStr: string) => void
type DevJudgeStrategies = {[k: string]: (node: ts.Node, cb: GetDevStrCb) => boolean}
/**
 * 依赖文件判断策略集合
 */
const devJudgeStrategies: DevJudgeStrategies = {
    /**
     * 是否是 import 语句
     * @param node 
     * @param cb 
     */
    isImportDeclaration(node: ts.Node, cb: GetDevStrCb): boolean {
        if (ts.isImportDeclaration(node)) {
            cb((node.moduleSpecifier as ts.StringLiteral).text)
            return true;
        }
        return false;
    },
    /**
     * 是否是导出导入语句，export xxx from 'xxx'
     * @param node 
     * @param cb 
     */
    isExportDeclaration(node: ts.Node, cb: GetDevStrCb): boolean {
        if (ts.isExportDeclaration(node) &&
            node.moduleSpecifier &&
            ts.isStringLiteral(node.moduleSpecifier)
        ) {
            cb((node.moduleSpecifier as ts.StringLiteral).text)
            return true;
        }
        return false
    },
    /**
     * 动态导入语法
     * @param node 
     * @param cb 
     */
    isImportFunction(node: ts.Node, cb: GetDevStrCb): boolean {
        if (
            ts.isCallExpression(node) &&
            node.expression.kind === ts.SyntaxKind.ImportKeyword &&
            onlyOneStringArguments(node)
        ) {
            cb((node.arguments[0] as ts.StringLiteral).text)
            return true;
        }
        return false;
    },
    /**
     * 是否 commonjs 语法, require
     * @param node 
     * @param cb 
     */
    isRequireFunction(node: ts.Node, cb: GetDevStrCb): boolean {
        if (
            ts.isCallExpression(node) &&
            ts.isIdentifier(node.expression) &&
            node.expression.escapedText === 'require' &&
            onlyOneStringArguments(node)
        ) {
            cb((node.arguments[0] as ts.StringLiteral).text)
            return true
        }
        return false;
    }
}
function parseDevStrList(absPath) {
    const devStrList = [];
    const addDevStr = (devStr: string) => devStrList.push(devStr)
    const visitor = (source: ts.Node) => {
        source.forEachChild((node: ts.Node) => {
            if (!Object.values(devJudgeStrategies).some(isdev => isdev(node, addDevStr))) {
                visitor(node)
            }
        })
    }
    const sourceCode = fs.readFileSync(absPath, {encoding: 'utf-8'}).toString()
    visitor(ts.createSourceFile(
            path.basename(absPath),
            sourceCode,
            ts.ScriptTarget.ES5,
            false,
            ScriptKindDist[path.extname(absPath)] || ts.ScriptKind.TSX
        )
    );
    return devStrList;
}