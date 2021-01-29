import { Http2ServerResponse } from 'http2'
import { SignupController } from './signup'


describe('Signup Controller ', () => {
    test('Should return 400 if no name is provided ', () => {
        const sut = new SignupController()
        const httpRequest = { body : {
           
            email: 'any_email@email.com',
            password: 'any_password',
            passwordConfirmation: 'any_password'
        }}
       const httpResponse =  sut.handle(httpRequest)
       expect(httpResponse.statusCode).toBe(400)
       expect(httpResponse.body).toEqual(new Error('Missing param: name'))
    });
    test('Should return 400 if no name is provided ', () => {
        const sut = new SignupController()
        const httpRequest = { body : {
           
            name: 'any name',
            password: 'any_password',
            passwordConfirmation: 'any_password'
        }}
       const httpResponse =  sut.handle(httpRequest)
       expect(httpResponse.statusCode).toBe(400)
       expect(httpResponse.body).toEqual(new Error('Missing param: email'))
    });
});