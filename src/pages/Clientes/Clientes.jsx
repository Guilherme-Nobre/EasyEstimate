import { useRef, useState } from 'react';
import styles from './Clientes.module.css'
import { useFetchDocuments } from '../../hooks/useFetchDocuments';
import { Link, useNavigate } from 'react-router-dom';
import { useReactToPrint } from "react-to-print"
import CurrencyInput from 'react-currency-input-field';

const Clientes = () => {

    const { documents: itens } = useFetchDocuments("prefeituras");

    const [filtro, setFiltro] = useState('');
    const [filtro2, setFiltro2] = useState('');

    let indice = 0

    const contentDocument = useRef();

    const navigate = useNavigate();

    const stylesPdf = `
  @page {
    size: A4 landscape; /* Define a orientação da página para horizontal */
    margin: 20px; /* Remove as margens padrão */
  }

  body {
    transform: scale(0.8); /* Ajusta a escala para 60% */
    transform-origin: top left; /* Define a origem da escala para o canto superior esquerdo */
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  th, td {
    border: 1px solid #000000; /* Define a cor da borda para preto */
    color: #000000; /* Define a cor do texto para preto */
    text-align: left;
    padding: 8px;
  }

  @media print {
    thead {
      display: table-header-group; /* Remove o cabeçalho ao imprimir */
    }

    tfoot {
      display: table-row-group; /* Remove o rodapé ao imprimir */
    }
  }
`;

    const handlePrint = useReactToPrint({
        content: () => contentDocument.current,
        pageStyle: stylesPdf,
    });

    const itensFiltrados = itens ? itens.filter((item) => {
        const filtroLowerCase = filtro.toLowerCase();
        const filtro2LowerCase = filtro2.toLowerCase();

        const passaFiltro1 = (
            (item.prefeitura && item.prefeitura.toLowerCase().includes(filtroLowerCase)) ||
            (item.escritorio && item.escritorio.toLowerCase().includes(filtroLowerCase))
        );

        const passaFiltro2 = (
            (item.Jan && item.Jan.toLowerCase().includes(filtro2LowerCase)) ||
            (item.Fev && item.Fev.toLowerCase().includes(filtro2LowerCase)) ||
            (item.Mar && item.Mar.toLowerCase().includes(filtro2LowerCase)) ||
            (item.Abr && item.Abr.toLowerCase().includes(filtro2LowerCase)) ||
            (item.Mai && item.Mai.toLowerCase().includes(filtro2LowerCase)) ||
            (item.Jun && item.Jun.toLowerCase().includes(filtro2LowerCase)) ||
            (item.Jul && item.Jul.toLowerCase().includes(filtro2LowerCase)) ||
            (item.Ago && item.Ago.toLowerCase().includes(filtro2LowerCase)) ||
            (item.Set && item.Set.toLowerCase().includes(filtro2LowerCase)) ||
            (item.Out && item.Out.toLowerCase().includes(filtro2LowerCase)) ||
            (item.Nov && item.Nov.toLowerCase().includes(filtro2LowerCase)) ||
            (item.Dez && item.Dez.toLowerCase().includes(filtro2LowerCase))
        );

        return passaFiltro1 && passaFiltro2;
    }) : [];

    return (
        <>
            {itens && itens.length === 0 ? (
                <div className={styles.noCadastro}>
                    <h1>Nenhum cliente encontrada.</h1>
                    <p>Faça seu primeiro cadastro.</p>
                    <div className={styles.botoes}>
                        <Link to="/clientes/add" className="btn">Primeiro Cadastro</Link>
                        <Link to="/" className='btn'>Voltar</Link>
                    </div>
                </div>
            ) : (
                <div className={styles.clientes}>
                    <h1>Prefeituras</h1>
                    <div className={styles.search}>
                        <input
                            type="text"
                            name='Filtro1'
                            id='Filtro1'
                            value={filtro}
                            onChange={(e) => setFiltro(e.target.value)}
                            placeholder="Busque por Prefeituras / Escritório"
                        />

                        <input
                            type="text"
                            name='Filtro2'
                            id='Filtro2'
                            value={filtro2}
                            onChange={(e) => setFiltro2(e.target.value)}
                            placeholder="Busque por Meses do ano"
                        />
                    </div>
                    <p>* Para modificar as informações de um cliente, simplesmente clique duas vezes no nome dele ou vá até o final da linha.</p>
                    <div ref={contentDocument} className='content'>
                        <form>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Item</th>
                                        <th>Prefeituras</th>
                                        <th>Escritório</th>
                                        <th>Forma de Pag</th>
                                        <th>Empresa</th>
                                        <th>Agência</th>
                                        <th>Conta</th>
                                        <th>Valor</th>
                                        <th>Jan</th>
                                        <th>Fev</th>
                                        <th>Mar</th>
                                        <th>Abr</th>
                                        <th>Mai</th>
                                        <th>Jun</th>
                                        <th>Jul</th>
                                        <th>Ago</th>
                                        <th>Set</th>
                                        <th>Out</th>
                                        <th>Nov</th>
                                        <th>Dez</th>
                                        <th>Alterar</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {itensFiltrados && itensFiltrados.map((item, index) => (
                                        <tr key={index}>
                                            <td><input name='item' disabled className='tableItens' placeholder={indice = indice + 1} /></td>
                                            <td><input name='prefeitura' onDoubleClick={() => navigate(`/clientes/alterar/${item.id}`)} placeholder={item.prefeitura} /></td>
                                            <td><input name='escritorio' disabled className='desk' placeholder={item.escritorio} /></td>
                                            <td><input name='formaPagamento' disabled className='formPayment' placeholder={item.formaPagamento} /></td>
                                            <td><input name='empresa' disabled className='company' placeholder={item.empresa} /></td>
                                            <td><input name='agencia' disabled className='agency' placeholder={item.agencia} /></td>
                                            <td><input name='conta' disabled className='account' placeholder={item.conta} /></td>
                                            <td><CurrencyInput name='valor' className='value' disabled placeholder={item.valor} /></td>
                                            <td><input name='Jan' disabled className='months' placeholder={item.Jan === "" ? "Em Branco" : item.Jan} /><input name='PagJan' disabled className='months' placeholder={item.PagJan} /></td>
                                            <td><input name='Fev' disabled className='months' placeholder={item.Fev === "" ? "Em Branco" : item.Fev} /><input name='PagFev' disabled className='months' placeholder={item.PagFev} /></td>
                                            <td><input name='Mar' disabled className='months' placeholder={item.Mar === "" ? "Em Branco" : item.Mar} /><input name='PagMar' disabled className='months' placeholder={item.PagMar} /></td>
                                            <td><input name='Abr' disabled className='months' placeholder={item.Abr === "" ? "Em Branco" : item.Abr} /><input name='PagAbr' disabled className='months' placeholder={item.PagAbr} /></td>
                                            <td><input name='Mai' disabled className='months' placeholder={item.Mai === "" ? "Em Branco" : item.Mai} /><input name='PagMai' disabled className='months' placeholder={item.PagMai} /></td>
                                            <td><input name='Jun' disabled className='months' placeholder={item.Jun === "" ? "Em Branco" : item.Jun} /><input name='PagJun' disabled className='months' placeholder={item.PagJun} /></td>
                                            <td><input name='Jul' disabled className='months' placeholder={item.Jul === "" ? "Em Branco" : item.Jul} /><input name='PagJul' disabled className='months' placeholder={item.PagJul} /></td>
                                            <td><input name='Ago' disabled className='months' placeholder={item.Ago === "" ? "Em Branco" : item.Ago} /><input name='PagAgo' disabled className='months' placeholder={item.PagAgo} /></td>
                                            <td><input name='Set' disabled className='months' placeholder={item.Set === "" ? "Em Branco" : item.Set} /><input name='PagSet' disabled className='months' placeholder={item.PagSet} /></td>
                                            <td><input name='Out' disabled className='months' placeholder={item.Out === "" ? "Em Branco" : item.Out} /><input name='PagOut' disabled className='months' placeholder={item.PagOut} /></td>
                                            <td><input name='Nov' disabled className='months' placeholder={item.Nov === "" ? "Em Branco" : item.Nov} /><input name='PagNov' disabled className='months' placeholder={item.PagNov} /></td>
                                            <td><input name='Dez' disabled className='months' placeholder={item.Dez === "" ? "Em Branco" : item.Dez} /><input name='PagDez' disabled className='months' placeholder={item.PagDez} /></td>
                                            <td><Link to={`/clientes/alterar/${item.id}`}>Alterar</Link></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </form>
                    </div>
                    <div className={styles.botoes}>
                        <Link to="/clientes/add" className="add">Adicionar Prefeitura</Link>
                        <Link to="/" className='back'>Voltar</Link>
                        <Link onClick={handlePrint} className='export'>Exportar Relatório</Link>
                    </div>
                </div>
            )}
        </>
    );
};

export default Clientes;
