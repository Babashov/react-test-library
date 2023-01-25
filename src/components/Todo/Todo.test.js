import { screen,queryByAttribute,render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Todo from "./index";

describe('testing todo component',()=>{
    let fullnameInput,descriptionInput,addTodoButton;

    beforeEach(()=>{
        const dom = render(<Todo/>)
        const queryById = queryByAttribute(null,'id')
        fullnameInput = queryById(dom.container,'fullname')
        descriptionInput = queryById(dom.container,'description')
        addTodoButton = screen.getByText('Add Todo')

    })

    test(()=>{
        userEvent.click(addTodoButton)
        // expect
    })

})