export interface Technology{
    name: string;
    description?: string;
    iconUrl?: string;
    type?: TechnologyType;
}

export enum TechnologyType{
    backend,
    frontend,
    other
}