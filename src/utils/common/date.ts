/*
 * @Date: 2022-02-19 10:57:10
 * @LastEditTime: 2022-02-19 11:54:29
 * @LastEditors: Please set LastEditors
 * @Description: 日期处理相关函数
 * @FilePath: src/utils/date.ts
 */

import dayjs from 'dayjs';

const defaultDateStyle = 'YYYY-MM-DD hh:mm:ss';

/**
 * @description 格式化时间戳, unix 时间戳精确到毫秒
 * @param value 时间戳的值
 * @param opt.style 展示模式
 * @param opt.unix 是否为 unix 时间戳
 * @returns {string}
 * @example
 */
export function fmtTimeStamp(
  value: number,
  opt?: {
    style?: string;
    unix?: boolean;
  }
) {
  const unix: boolean = (opt && opt.unix) || false;
  const style = (opt && opt.style) || defaultDateStyle;
  const o = unix ? dayjs.unix(value) : dayjs(value);

  return o.format(style);
}

/**
 * @description 格式化 ISO 8601 时间
 * @param value ISO 8601 时间字符串
 * @param opt.style 展示模式
 * @returns
 */
export function fmtISODateStr(
  value: string,
  opt?: {
    style?: string;
  }
) {
  const style = (opt && opt.style) || defaultDateStyle
  return dayjs(value).format(style);
}
