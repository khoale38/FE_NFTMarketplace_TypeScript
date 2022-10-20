"use strict";
exports.__esModule = true;
var react_1 = require("react");
var collectionFilter = function () {
    return (react_1["default"].createElement("div", { className: "mx-0" },
        react_1["default"].createElement("div", null,
            "Status",
            react_1["default"].createElement("div", { className: "form-check" },
                react_1["default"].createElement("input", { className: "form-check-input", type: "checkbox", value: "", id: "flexCheckDefault" }),
                react_1["default"].createElement("label", { className: "form-check-label", htmlFor: "flexCheckDefault" }, "Buy Now")),
            react_1["default"].createElement("div", { className: "form-check" },
                react_1["default"].createElement("input", { className: "form-check-input", type: "checkbox", value: "", id: "flexCheckChecked" }),
                react_1["default"].createElement("label", { className: "form-check-label", htmlFor: "flexCheckChecked" }, "Auction")))));
};
exports["default"] = collectionFilter;
