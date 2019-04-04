if (typeof window !== 'undefined' && window.btoa) {
    module.exports = window.btoa;
} else {
    module.exports = function btoa(str) {
        if (typeof window !== 'undefined' && window.btoa) {
            return window.btoa(str);
        }
        var buffer;

        if (str instanceof Buffer) {
            buffer = str;
        } else {
            buffer = Buffer.from(str.toString(), 'binary');
        }

        return buffer.toString('base64');
    }
}