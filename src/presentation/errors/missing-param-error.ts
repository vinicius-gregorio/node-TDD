export class MissingParamError extends Error { 
    constructor(paramName: string){
        super(`Missing Param : ${paramName}`)
        this.name = 'Missing Param Error'
    }
}