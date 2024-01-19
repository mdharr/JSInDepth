// Object
//    ^
//    |
// Object.prototype ----------------------> Function.prototype ------------------> Function
//    ^                                     ^                                      ^
//    |                                     |                                      |
//    |                                     |                                      |
//    |                                     Array.prototype --------------------> Array
//    |                                     ^                                      ^
//    |                                     |                                      |
//    |                                     String.prototype ------------------> String
//    |                                     ^                                      ^
//    |                                     |                                      |
//    |                                     Number.prototype ------------------> Number
//    |                                     ^                                      ^
//    |                                     |                                      |
//    |                                     Boolean.prototype ----------------> Boolean
//    |                                     ^                                      ^
//    |                                     |                                      |
//    |                                     Map.prototype --------------------> Map
//    |                                     ^                                      ^
//    |                                     |                                      |
//    |                                     Set.prototype --------------------> Set
//    |
//    | (Note: All constructor functions like Array, String, etc., are also linked to Function.prototype)
//    |
//    (Note: All objects, including function objects, ultimately inherit from Object.prototype)
