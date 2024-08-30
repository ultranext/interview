function JSONStringify(data) {
    const type = typeof data;
    if (type !== 'object') {
        // string
        if (type === 'string') {
            return `"${data}"`;
        }
        // number
        if (Number.isNaN(data) || data === Infinity || data === -Infinity) {
            return 'null';
        }
        
        if (type ==='function' || type === 'symbol' || type === 'undefined') {
            return 'undefined';
        }
        if (type === 'number') {
            return data.toLocaleString();
        }
        return data;
        
    }
    if ( data === null) {
        return 'null';
    }
    if (Array.isArray(data)) {
        let result = [];
        data.forEach((item, index) => {
            if (typeof item === 'function' || typeof item === 'symbol' || typeof item === 'undefined') {
                result[index] = 'undefined';
            } else {
                result[index] = JSONStringify(item);
            }
        });
        return `[${result.join(',')}]`.replace(/\'/g, '"');
    }
    // object
    let result = [];
    Object.keys(data).forEach(key => {
        if (typeof data[key] !== 'function' || typeof data[key] !== 'symbol' || typeof data[key] !== 'undefined') {
            result.push(`"${key}":${JSONStringify(data[key])}`);
        }
    });
    return `{${result}}`.replace(/\'/g, '"');
    
}