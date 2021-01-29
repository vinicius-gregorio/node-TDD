import { HttpRequest, HttpResponse } from '../protocols/http' 
import { MissingParamError } from '../errors/missing-param-error'
import { badRequest } from '../helpers/http-helpers'
import { Controller } from '../protocols/controller'
export class SignupController implements Controller{ 
    handle(httpRequest: HttpRequest): HttpResponse { 

        const requiredFields = ['name', 'email', 'password','passwordConfirmation']
        for(const field of requiredFields) { 
            if(!httpRequest.body[field])
            { 
                return badRequest(new MissingParamError(field))
            }
    
        }
    }
}