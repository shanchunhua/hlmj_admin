export class RestResult<T> {
    success: boolean;
    message: string;
    data: T;
}