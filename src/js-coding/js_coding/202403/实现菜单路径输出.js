/**
 * 
标题
实现菜单的路径输出(面包屑)

题目描述
*/
// const data = [​
//   {​
//     name: "A",​
//     url: "https://www.example.com/",​
//     children: [​
//       {​
//         name: "B",​
//         url: "https://www.example.com/products",​
//         children: [​
//           {​
//             name: "C",​
//             url: "https://www.example.com/products/123",​
//             children: []​
//           },​
//           {​
//             name: "D",​
//             url: "https://www.example.com/products/456",​
//             children: []​
//           }​
//         ]​
//       },​
//       {​
//         name: "E",​
//         url: "https://www.example.com/about",​
//         children: [​
//           {​
//             name: "F",​
//             url: "https://www.example.com/about/team",​
//             children: []​
//           }​
//         ]​
//       }​
//     ]​
//   }​
// ];​
const data = [{
    name: 'a',
    url: 'https://www.example.com/',
    children: [
        {
            name: 'b',
            url: "https://www.example.com/products",
            children: [
                {
                    name: 'd',
                    url: "https://www.example.com/products/123",
                },
                {
                    name: 'f',
                    url: "https://www.example.com/products/456",
                }
            ]
        },
        {
            name: 'c',
            url: "https://www.example.com/about",
        },
    ],
}]
console.log('data', data)

const currentUrl = 'https://www.example.com/products/456'
console.log(findMenu(data, currentUrl)) // [{}, {}, {}]


function findMenu(data, url) {
    if (!data.length || !url) {
        return [];
    }
    const result = [];
    const innerFindMenu = (data) => {
        data.forEach(item => {
            if (url.includes(item?.url)) {
                result.push(item)
                if (data.url === url) {
                    return true;
                }
                if (!data.children?.length) {
                    return false;
                }
                return innerFindMenu(data.children);
            }
        })
    }
    innerFindMenu(data);
    return result;
}