// to import jsx components into tsx
declare module '*.jsx' {
    var _: () => any;
    export default _;
}