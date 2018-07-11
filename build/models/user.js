"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const dynamodb_data_mapper_annotations_1 = require("@aws/dynamodb-data-mapper-annotations");
//const uuidV4 = require('uuid/v4');
class User {
}
__decorate([
    dynamodb_data_mapper_annotations_1.autoGeneratedHashKey(),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    dynamodb_data_mapper_annotations_1.attribute(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    dynamodb_data_mapper_annotations_1.attribute(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
exports.User = User;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvdXNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDRGQUcrQztBQUMvQyxvQ0FBb0M7QUFFcEM7Q0FNQztBQUx5QjtJQUF2Qix1REFBb0IsRUFBRTs7Z0NBQVk7QUFFdEI7SUFBWiw0Q0FBUyxFQUFFOzttQ0FBZ0I7QUFFZjtJQUFaLDRDQUFTLEVBQUU7O3NDQUFtQjtBQUxqQyxvQkFNQyJ9