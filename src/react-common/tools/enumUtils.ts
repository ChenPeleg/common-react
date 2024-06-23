export const getEnumEntries = (enums: any): string[] => {
    const arr: string[] = [];
    for (const enumMember in enums) {
        const isNumericalProperty: boolean = parseInt(enumMember, 10) >= 0;
        if (isNumericalProperty) {
            arr.push(enums[enumMember]);
        }
    }
    return arr;
};
export const getEnumNumbers = (enumb: any): number[] => {
    const arr: number[] = [];
    for (const enumMember in enumb) {
        const isLiteralProperty: boolean = !(parseInt(enumMember, 10) >= 0);
        if (isLiteralProperty) {
            arr.push(enumb[enumMember]);
        }
    }
    return arr;
};

