export interface SearchObj {
    searchField: string;
    searchValue: number | string | boolean | Array<any> | null;
}
export declare function getFieldReferences(fieldName: string, value: {} | number | string | boolean | Array<any> | null): SearchObj[];
export declare function objectFlatten(tree: {}): SearchObj[];
