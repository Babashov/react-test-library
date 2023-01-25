import {render,screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Counter from './index'

describe('Counter tests',()=>{

    let textValue,clickBtn,decreaseBtn

    beforeEach(()=>{
        console.log('her testden once ise dusecem')
        render(<Counter/>)

        textValue = screen.getByText('0')
        clickBtn = screen.getByText('Increase')
        decreaseBtn = screen.getByText('Decrease')
    })

    beforeAll(()=>{
        console.log('Lap evvelde cemi birce defe isleyecem')
    })

    afterEach(()=>{
        console.log('Her testden sonra ise dusecem')
    })

    afterAll(()=>{
        console.log('en sonda ise dusecem')
    })


    test('click increase button',()=>{
    
        userEvent.click(clickBtn)
    
        expect(textValue).toHaveTextContent('1')
    
    })
    
    test('click decrease button',()=>{
    
        userEvent.click(decreaseBtn)
    
        expect(textValue).toHaveTextContent('-1')
    })


})