import { screen,queryByAttribute,render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Todo from "./index";

describe('testing todo component',()=>{
    let fullnameInput,descriptionInput,addTodoButton;

    beforeEach(()=>{
        const dom = render(<Todo/>)
        const queryById = queryByAttribute.bind(null,'id')
        fullnameInput = queryById(dom.container,'fullname')
        descriptionInput = queryById(dom.container,'description')
        addTodoButton = screen.getByText('Add Todo')

    })

    test('is addTodoButton & fullnameInput & descriptionInput  in the Document',()=>{
        
        expect(addTodoButton).toBeInTheDocument()
        expect(fullnameInput).toBeInTheDocument()
        expect(descriptionInput).toBeInTheDocument()
    })

    test('fill fullname input & description textarea & click add button',()=>{

        const fullname = 'Mehemmed'
        const description = 'Proqramci'

        // Write fullname
        userEvent.type(fullnameInput,fullname)

        // Write description
        userEvent.type(descriptionInput,description)

        // Click Add Button
        userEvent.click(addTodoButton)


        expect(screen.getByText(/fullname/i)).toBeInTheDocument()
        expect(screen.getByText(/description/i)).toBeInTheDocument()

    })

})