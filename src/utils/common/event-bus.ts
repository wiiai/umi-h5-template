/*
 * @Author: gaollard
 * @Date: 2022-02-19 10:57:10
 * @LastEditTime: 2022-02-19 12:02:28
 * @LastEditors: Please set LastEditors
 * @Description: 全局唯一的事件总线
 * @FilePath: wula-demo/src/utils/date.ts
 */

import EventEmitter from "./EventEmitter";

const bus = new EventEmitter();

export default bus; 
