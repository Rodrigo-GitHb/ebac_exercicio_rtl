import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.'; 


const mock = [
    {
        id: 1,
        comment: 'Olá'
    },
    {
        id: 2,
        comment: 'Tudo bem?'
    }
]

let index = 0
let mensagem =  mock[index].comment

function mudamensagem(){
    index = (index + 1) 
    mensagem = mock[index].comment

}

describe('Teste para o componente PostComment', () => {
    
    it('Deve renderizar o componente corretamente', () => {
        render(<Post />);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('Renderiza o primeiro comentario', async () => {
        render(<Post />)
        const botao = screen.getByTestId('btn-comentario')
        const Textarea = screen.getByTestId('textArea')
        fireEvent.change(Textarea, {target: {value: mensagem}})
        fireEvent.click(botao)
        expect(screen.getByText('Olá')).toBeInTheDocument()
        
        mudamensagem()
    })


    test('Renderiza segundo comentario', async () => {
        render(<Post />)
        const botao = screen.getByTestId('btn-comentario')
        const Textarea = screen.getByTestId('textArea')
        fireEvent.change(Textarea, {target: {value: mensagem}})
        fireEvent.click(botao)
        expect(screen.getByText('Tudo bem?')).toBeInTheDocument()
        
    })
});