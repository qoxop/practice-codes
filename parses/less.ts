/*
 * @Author: your name
 * @Date: 2020-09-04 14:27:16
 * @LastEditTime: 2020-09-04 21:12:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \dev-parse\parses\less.ts
 */
import * as less from 'less';
import * as fs from 'fs';
import * as path from 'path';

async function parse(absPath: string) {
    const sourceCode = fs.readFileSync(absPath, {encoding: 'utf-8',}).toString();
    try {
        const {css, imports} = await less.render(sourceCode, {filename: absPath, rewriteUrls: 'all'});
        console.log(css);
        console.log(imports);
    } catch (error) {
        console.log(error)
    }
}
parse(path.resolve(__dirname, '../examples/index.less'))
