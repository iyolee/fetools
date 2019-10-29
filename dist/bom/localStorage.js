export var $localStorage = {
    getItem: function (key) {
        var v = JSON.parse(localStorage.getItem(key) || '{}');
        if (v.time > 0 && (Number(new Date()) > v.time)) {
            return "\u53C2\u6570" + key + "\u5DF2\u8FC7\u671F";
        }
        else if (v.value === undefined) {
            return null;
        }
        else {
            return v.value;
        }
    },
    setItem: function (key, val, time) {
        var v = {
            value: val,
            time: (time && time > 0) ? (Number(new Date()) + time) : 0,
        };
        localStorage.setItem(key, JSON.stringify(v));
    },
    removeItem: function (key) {
        localStorage.removeItem(key);
    },
    clear: function () {
        localStorage.clear();
    },
};
//# sourceMappingURL=localStorage.js.map