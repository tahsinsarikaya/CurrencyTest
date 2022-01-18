export interface IResponseBase<TModel> {
    totalCount?: number,
    result?: TModel,
    success?: boolean,
    message?: string,
}