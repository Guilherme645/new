export enum CollectionType {
    DATABASE = 'DATABASE',
    FILESYSTEM = 'FILESYSTEM',
    MONGODB = 'MONGODB',
    REST_API = 'REST_API',
    PENLINK = 'PENLINK',
}

export class CollectionTypeHelper {
    static list(): string[] {
        return Object.values(CollectionType);
    }

    static getValue(code: string | null): CollectionType | null {
        if (code === null) {
            return null;
        }

        if (Object.values(CollectionType).includes(code as CollectionType)) {
            return code as CollectionType;
        }
        return null;
    }
}