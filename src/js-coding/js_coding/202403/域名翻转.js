/**
 * // 使用数组表示域名，每个元素是一个字符
const domain = ["w", "w", "w", ".", "g", "o", "o", "g", "l", "e",  ".", "c", "o", "m"] // www.google.com

// 按点做反转
reverseDomain(domain) = [ "c", "o", "m", ".", "g", "o", "o", "g", "l", "e", ".", "w", "w", "w"] // com.google.www

www.google.com.cn -> cn.com.google.www

www.google.com -> moc.elgoog.www -> com.google.www
 */