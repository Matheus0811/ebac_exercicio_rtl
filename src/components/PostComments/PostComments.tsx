import { fireEvent, render, screen } from "@testing-library/react"
import Post from '../Post';
import PostComment from '../PostComment';


describe('Tests for PostComments component', () => {
    test('Must add two comments', () => {
        render(<Post />)
        const input = screen.getByTestId('textarea-input')
        const button = screen.getByTestId('btn-submit')
        fireEvent.change(input, {
            target: {
                value: 'legal!'
            }
        })
        fireEvent.click(button)
        fireEvent.change(input, {
            target: {
                value: 'esse é top.'
            }
        })
        fireEvent.click(button)
        expect(screen.getByText('legal!')).toBeInTheDocument()
        expect(screen.getByText('esse é top.')).toBeInTheDocument()
    })
})