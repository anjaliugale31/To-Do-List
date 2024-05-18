import { fireEvent, render, screen } from "@testing-library/react"
import TaskInput from "../TaskInput"

const addTask = jest.fn();

describe('TaskInput Component', () => {

    it('renders TaskInput component correctly', () => {
        (render(<TaskInput addTask={addTask} />))
        expect(screen.getByLabelText(/What is the task Today?/i)).toBeInTheDocument();
        expect(screen.getByText(/Add Task/i)).toBeInTheDocument();
    });

    it('enables the button when input is not empty', async () => {
        (render(<TaskInput addTask={addTask} />))
        const input = screen.getByLabelText(/What is the task Today?/i);
        const button = screen.getByText(/Add Task/i);

        fireEvent.change(input, { target: { value: 'Add Task' } });
        expect(button).not.toBeDisabled();
    });
    it('disables the button when input is empty', () => {
        (render(<TaskInput addTask={addTask} />))
        const button = screen.getByText(/Add Task/i);
        expect(button).toBeDisabled();
    });

    it('calls addTask with the correct input and clears the input on submit', () => {
        render(<TaskInput addTask={addTask} />);
        const input = screen.getByLabelText(/What is the task Today?/i);
        const button = screen.getByText(/Add Task/i);
        fireEvent.change(input, { target: { value: 'New Task' } });
        fireEvent.click(button);

        expect(addTask).toHaveBeenCalledWith('New Task');
        expect(input).toHaveValue('');
    })
    it('does not call addTask if input is empty on submit', () => {
        render(<TaskInput addTask={addTask} />);
        const button = screen.getByText(/Add Task/i);
        fireEvent.click(button);
        expect(addTask).not.toHaveBeenCalled();
    });
})