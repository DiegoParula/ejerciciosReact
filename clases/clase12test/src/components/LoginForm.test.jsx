import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import LoginForm from "./LoginForm";

describe('Testing LoginForm', () => {
    test('should render title', () => {
        render(<LoginForm/>)
        const title = screen.getByText(/debe loguearse antes de continuar:/i)
        expect(title).toBeDefined()
    })
    test('should render first input', () => {
        render(<LoginForm/>)
        const input = screen.getByRole('email')
        expect(input).toBeDefined()
    })
    test('second input should change', () => {
        render(<LoginForm/>)
        const input = screen.getByTestId('password')
        fireEvent.change(input, {target: {value: 'contraseña123'}})
        expect(input.value).toBe('contraseña123')
    })
    test('should call button event', () => {
        const handleClick = vi.fn()
        render(<LoginForm handleClick={handleClick}/>)
        const button = screen.getByText('Enviar')
        fireEvent.click(button)
        expect(handleClick).toBeCalledTimes(1)
    })
    test('no deberia ingresar valores numercios', () =>{
        const regex = /^[^\d]*$/;
        const onChangeNombre = vi.fn((input) =>{
            if(regex.test(input)){
                return true
            }else {
                return false
            }

        })
        render(<LoginForm />)
        const input = screen.getByRole('nombre')
        fireEvent.change(input, {target: 111})
        expect(onChangeNombre(input)).toBe(false)
    })
})