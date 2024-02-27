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

    const [mes1, setMes1] = useState(true);
    const [mes2, setMes2] = useState(true);
    const [mes3, setMes3] = useState(true);
    const [mes4, setMes4] = useState(true);
    const [mes5, setMes5] = useState(true);
    const [mes6, setMes6] = useState(true);
    const [mes7, setMes7] = useState(true);
    const [mes8, setMes8] = useState(true);
    const [mes9, setMes9] = useState(true);
    const [mes10, setMes10] = useState(true);
    const [mes11, setMes11] = useState(true);
    const [mes12, setMes12] = useState(true);

    const handleCheckboxChangeMes1 = () => { setMes1(!mes1); };
    const handleCheckboxChangeMes2 = () => { setMes2(!mes2); };
    const handleCheckboxChangeMes3 = () => { setMes3(!mes3); };
    const handleCheckboxChangeMes4 = () => { setMes4(!mes4); };
    const handleCheckboxChangeMes5 = () => { setMes5(!mes5); };
    const handleCheckboxChangeMes6 = () => { setMes6(!mes6); };
    const handleCheckboxChangeMes7 = () => { setMes7(!mes7); };
    const handleCheckboxChangeMes8 = () => { setMes8(!mes8); };
    const handleCheckboxChangeMes9 = () => { setMes9(!mes9); };
    const handleCheckboxChangeMes10 = () => { setMes10(!mes10); };
    const handleCheckboxChangeMes11 = () => { setMes11(!mes11); };
    const handleCheckboxChangeMes12 = () => { setMes12(!mes12); };

    let indice = 0

    const contentDocument = useRef();

    const navigate = useNavigate();

    const stylesPdf = `
  @page {
    size: A4 portrait; /* Define a orientação da página para horizontal */ 
    margin: 10px;
    @top-center {
      content: none; /* Remover cabeçalho */
    }
    @bottom-center {
      content: none; /* Remover rodapé */
    }
  }

  @body {
    width: auto;
    height: auto;
    fontSize: 5px;
    margin: 0;
  }

  th, td {
    width: auto;
    height: 12px;
  }

  .alterarSemImpressao {
    display: none !important;
  }

  .hide-on-print-jan,
  .hide-on-print-fev,
  .hide-on-print-mar,
  .hide-on-print-abr,
  .hide-on-print-mai,
  .hide-on-print-jun,
  .hide-on-print-jul,
  .hide-on-print-ago,
  .hide-on-print-set,
  .hide-on-print-out,
  .hide-on-print-nov,
  .hide-on-print-dez {
    display: none !important;
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
                                        <th className={mes1 ? "hide-on-print-jan" : ""}>
                                            Jan
                                            <input
                                                type="checkbox"
                                                className='checkbox'
                                                checked={!mes1}
                                                onChange={handleCheckboxChangeMes1}
                                            />
                                        </th>
                                        <th className={mes2 ? "hide-on-print-fev" : ""}>
                                            Fev
                                            <input
                                                type="checkbox"
                                                className='checkbox'
                                                checked={!mes2}
                                                onChange={handleCheckboxChangeMes2}
                                            />
                                        </th>
                                        <th className={mes3 ? "hide-on-print-mar" : ""}>
                                            Mar
                                            <input
                                                type="checkbox"
                                                className='checkbox'
                                                checked={!mes3}
                                                onChange={handleCheckboxChangeMes3}
                                            />
                                        </th>
                                        <th className={mes4 ? "hide-on-print-abr" : ""}>
                                            Abr
                                            <input
                                                type="checkbox"
                                                className='checkbox'
                                                checked={!mes4}
                                                onChange={handleCheckboxChangeMes4}
                                            />
                                        </th>
                                        <th className={mes5 ? "hide-on-print-mai" : ""}>
                                            Mai
                                            <input
                                                type="checkbox"
                                                className='checkbox'
                                                checked={!mes5}
                                                onChange={handleCheckboxChangeMes5}
                                            />
                                        </th>
                                        <th className={mes6 ? "hide-on-print-jun" : ""}>
                                            Jun
                                            <input
                                                type="checkbox"
                                                className='checkbox'
                                                checked={!mes6}
                                                onChange={handleCheckboxChangeMes6}
                                            />
                                        </th>
                                        <th className={mes7 ? "hide-on-print-jul" : ""}>
                                            Jul
                                            <input
                                                type="checkbox"
                                                className='checkbox'
                                                checked={!mes7}
                                                onChange={handleCheckboxChangeMes7}
                                            />
                                        </th>
                                        <th className={mes8 ? "hide-on-print-ago" : ""}>
                                            Ago
                                            <input
                                                type="checkbox"
                                                className='checkbox'
                                                checked={!mes8}
                                                onChange={handleCheckboxChangeMes8}
                                            />
                                        </th>
                                        <th className={mes9 ? "hide-on-print-set" : ""}>
                                            Set
                                            <input
                                                type="checkbox"
                                                className='checkbox'
                                                checked={!mes9}
                                                onChange={handleCheckboxChangeMes9}
                                            />
                                        </th>
                                        <th className={mes10 ? "hide-on-print-out" : ""}>
                                            Out
                                            <input
                                                type="checkbox"
                                                className='checkbox'
                                                checked={!mes10}
                                                onChange={handleCheckboxChangeMes10}
                                            />
                                        </th>
                                        <th className={mes11 ? "hide-on-print-nov" : ""}>
                                            Nov
                                            <input
                                                type="checkbox"
                                                className='checkbox'
                                                checked={!mes11}
                                                onChange={handleCheckboxChangeMes11}
                                            />
                                        </th>
                                        <th className={mes12 ? "hide-on-print-dez" : ""}>
                                            Dez
                                            <input
                                                type="checkbox"
                                                className='checkbox'
                                                checked={!mes12}
                                                onChange={handleCheckboxChangeMes12}
                                            />
                                        </th>
                                        <th className='alterarSemImpressao'>Alterar</th>
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
                                            <td className={mes1 ? "hide-on-print-jan" : "noCheck"}><input name='Jan' disabled className={mes1 ? "hide-on-print-jan" : "noCheck"} placeholder={item.Jan === "" ? "Em Branco" : item.Jan} /><input name='PagJan' disabled className={mes1 ? "hide-on-print-jan" : "noCheck"} placeholder={item.PagJan} /></td>
                                            <td className={mes2 ? "hide-on-print-fev" : "noCheck"}><input name='Fev' disabled className={mes2 ? "hide-on-print-fev" : "noCheck"} placeholder={item.Fev === "" ? "Em Branco" : item.Fev} /><input name='PagFev' disabled className={mes2 ? "hide-on-print-fev" : "noCheck"} placeholder={item.PagFev} /></td>
                                            <td className={mes3 ? "hide-on-print-mar" : "noCheck"}><input name='Mar' disabled className={mes3 ? "hide-on-print-mar" : "noCheck"} placeholder={item.Mar === "" ? "Em Branco" : item.Mar} /><input name='PagMar' disabled className={mes3 ? "hide-on-print-mar" : "noCheck"} placeholder={item.PagMar} /></td>
                                            <td className={mes4 ? "hide-on-print-abr" : "noCheck"}><input name='Abr' disabled className={mes4 ? "hide-on-print-abr" : "noCheck"} placeholder={item.Abr === "" ? "Em Branco" : item.Abr} /><input name='PagAbr' disabled className={mes4 ? "hide-on-print-abr" : "noCheck"} placeholder={item.PagAbr} /></td>
                                            <td className={mes5 ? "hide-on-print-mai" : "noCheck"}><input name='Mai' disabled className={mes5 ? "hide-on-print-mai" : "noCheck"} placeholder={item.Mai === "" ? "Em Branco" : item.Mai} /><input name='PagMai' disabled className={mes5 ? "hide-on-print-mai" : "noCheck"} placeholder={item.PagMai} /></td>
                                            <td className={mes6 ? "hide-on-print-jun" : "noCheck"}><input name='Jun' disabled className={mes6 ? "hide-on-print-jun" : "noCheck"} placeholder={item.Jun === "" ? "Em Branco" : item.Jun} /><input name='PagJun' disabled className={mes6 ? "hide-on-print-jun" : "noCheck"} placeholder={item.PagJun} /></td>
                                            <td className={mes7 ? "hide-on-print-jul" : "noCheck"}><input name='Jul' disabled className={mes7 ? "hide-on-print-jul" : "noCheck"} placeholder={item.Jul === "" ? "Em Branco" : item.Jul} /><input name='PagJul' disabled className={mes7 ? "hide-on-print-jul" : "noCheck"} placeholder={item.PagJul} /></td>
                                            <td className={mes8 ? "hide-on-print-ago" : "noCheck"}><input name='Ago' disabled className={mes8 ? "hide-on-print-ago" : "noCheck"} placeholder={item.Ago === "" ? "Em Branco" : item.Ago} /><input name='PagAgo' disabled className={mes8 ? "hide-on-print-ago" : "noCheck"} placeholder={item.PagAgo} /></td>
                                            <td className={mes9 ? "hide-on-print-set" : "noCheck"}><input name='Set' disabled className={mes9 ? "hide-on-print-set" : "noCheck"} placeholder={item.Set === "" ? "Em Branco" : item.Set} /><input name='PagSet' disabled className={mes9 ? "hide-on-print-set" : "noCheck"} placeholder={item.PagSet} /></td>
                                            <td className={mes10 ? "hide-on-print-out" : "noCheck"}><input name='Out' disabled className={mes10 ? "hide-on-print-out" : "noCheck"} placeholder={item.Out === "" ? "Em Branco" : item.Out} /><input name='PagOut' disabled className={mes10 ? "hide-on-print-out" : "noCheck"} placeholder={item.PagOut} /></td>
                                            <td className={mes11 ? "hide-on-print-nov" : "noCheck"}><input name='Nov' disabled className={mes11 ? "hide-on-print-nov" : "noCheck"} placeholder={item.Nov === "" ? "Em Branco" : item.Nov} /><input name='PagNov' disabled className={mes11 ? "hide-on-print-nov" : "noCheck"} placeholder={item.PagNov} /></td>
                                            <td className={mes12 ? "hide-on-print-dez" : "noCheck"}><input name='Dez' disabled className={mes12 ? "hide-on-print-dez" : "noCheck"} placeholder={item.Dez === "" ? "Em Branco" : item.Dez} /><input name='PagDez' disabled className={mes12 ? "hide-on-print-dez" : "noCheck"} placeholder={item.PagDez} /></td>
                                            <td className='alterarSemImpressao'><Link to={`/clientes/alterar/${item.id}`}>Alterar</Link></td>
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
