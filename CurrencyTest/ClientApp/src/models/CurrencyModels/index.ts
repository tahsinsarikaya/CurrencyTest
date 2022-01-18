export interface ICubeDetailModel
{
    currency?: string,
    rate?: string
}

export interface ICubeModel
{
    cubes?: ICubeDetailModel[],
    time?: string,
    xmlns?: string
}