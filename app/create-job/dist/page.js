'use client';
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var client_1 = require("../jobs/client");
var button_1 = require("@/components/ui/button");
var actions_1 = require("@/actions/actions");
var initialState = {
    title: '',
    companyName: '',
    location: '',
    salary: '',
    type: '',
    experienceLevel: '',
    shortDescription: '',
    description: '',
    applyUrl: ''
};
function page() {
    var _a = react_1.useState(initialState), state = _a[0], setState = _a[1];
    function onChange(event) {
        var _a;
        setState(__assign(__assign({}, state), (_a = {}, _a[event.target.name] = event.target.value, _a)));
        console.log(event.target.value);
    }
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("form", { action: actions_1["default"], className: 'container grid grid-cols-4 gap-12' },
            react_1["default"].createElement(client_1.InputWithLabel, { type: 'text', id: 'title', placeholder: 'title', label: 'title', value: state.title, onChange: onChange, name: 'title' }),
            react_1["default"].createElement(client_1.InputWithLabel, { type: 'text', value: state.companyName, id: 'companyName', placeholder: 'companyName', label: 'companyName', name: 'companyName', onChange: onChange }),
            react_1["default"].createElement(client_1.InputWithLabel, { type: 'text', id: 'location', placeholder: 'location', label: 'location', defaultValue: 'location', value: state.location, onChange: onChange, name: 'location' }),
            react_1["default"].createElement(client_1.InputWithLabel, { type: 'text', value: state.salary, id: 'salary', placeholder: 'salary', label: 'salary', onChange: onChange, name: 'salary' }),
            react_1["default"].createElement(client_1.InputWithLabel, { type: 'text', id: 'type', placeholder: 'type', label: 'type', onChange: onChange, value: state.type, name: 'type' }),
            react_1["default"].createElement(button_1.Button, { type: 'submit', variant: 'outline' }, "Create"))));
}
exports["default"] = page;
