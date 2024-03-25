/**
 * 标题
版本号排序

题目描述
versions是一个项目的版本号列表，因多人维护，不规则​
``` javascript​
var versions=['1.45.0','1.5','6','3.3.3.3.3.3.3']​
```​
要求从小到大排序，注意'1.45'比'1.5'大​
``` javascript​
var sorted=['1.5','1.45.0','3.3.3.3.3.3','6']
*/

const versions=['1.45.0','1.5','6','3.3.3.3.3.3.3']
function sortVersion(versions) {
    if (!versions?.length) {
        return [];
    }
    return versions.sort((a, b) => {
        const splitedA = a.split('.');
        const splitedB = b.split('.');
        console.log(splitedA, splitedB);
        let i = 0;
        while(splitedA[i]) {
            if (!splitedB[i] || Number(splitedA[i]) > Number(splitedB[i])) {
                return 1;
            }
            if (Number(splitedB[i]) > Number(splitedA[i])) {
                return -1;
            }
            i++;
        }
    });
}
console.log(sortVersion(versions));




