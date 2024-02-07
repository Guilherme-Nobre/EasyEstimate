import { useState } from 'react';
import { useInsertDocument } from '../../hooks/useInsertDocument';
import { useAuthValue } from '../../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom';
import styles from "./CreateLine.module.css"
import CurrencyInput from 'react-currency-input-field';
import InputMask from 'react-input-mask';

const CreateLine = () => {
    /* States responsável por cada parte da TABELA */
    const [prefeitura, setPrefeitura] = useState("")
    const [escritorio, setEscritorio] = useState("")
    const [formaPagamento, setFormaPagamento] = useState("")
    const [empresa, setEmpresa] = useState("")
    const [agencia, setAgencia] = useState("")
    const [conta, setConta] = useState("")
    const [valor, setValor] = useState("")
    const [Jan, setJan] = useState("")
    const [Fev, setFev] = useState("")
    const [Mar, setMar] = useState("")
    const [Abr, setAbr] = useState("")
    const [Mai, setMai] = useState("")
    const [Jun, setJun] = useState("")
    const [Jul, setJul] = useState("")
    const [Ago, setAgo] = useState("")
    const [Set, setSet] = useState("")
    const [Out, setOut] = useState("")
    const [Nov, setNov] = useState("")
    const [Dez, setDez] = useState("")
    const [PagJan, setPagJan] = useState("")
    const [PagFev, setPagFev] = useState("")
    const [PagMar, setPagMar] = useState("")
    const [PagAbr, setPagAbr] = useState("")
    const [PagMai, setPagMai] = useState("")
    const [PagJun, setPagJun] = useState("")
    const [PagJul, setPagJul] = useState("")
    const [PagAgo, setPagAgo] = useState("")
    const [PagSet, setPagSet] = useState("")
    const [PagOut, setPagOut] = useState("")
    const [PagNov, setPagNov] = useState("")
    const [PagDez, setPagDez] = useState("")

    const [formError, setFormError] = useState("")

    const { user } = useAuthValue();
    const { insertDocument, response } = useInsertDocument("prefeituras");

    const navigate = useNavigate();

    const handlePagJanChange = (e) => {
        setPagJan(e.target.value);
    };

    const handlePagFevChange = (e) => {
        setPagFev(e.target.value);
    };

    const handlePagMarChange = (e) => {
        setPagMar(e.target.value);
    };

    const handlePagAbrChange = (e) => {
        setPagAbr(e.target.value);
    };

    const handlePagMaiChange = (e) => {
        setPagMai(e.target.value);
    };

    const handlePagJunChange = (e) => {
        setPagJun(e.target.value);
    };

    const handlePagJulChange = (e) => {
        setPagJul(e.target.value);
    };

    const handlePagAgoChange = (e) => {
        setPagAgo(e.target.value);
    };

    const handlePagSetChange = (e) => {
        setPagSet(e.target.value);
    };

    const handlePagOutChange = (e) => {
        setPagOut(e.target.value);
    };

    const handlePagNovChange = (e) => {
        setPagNov(e.target.value);
    };

    const handlePagDezChange = (e) => {
        setPagDez(e.target.value);
    };

    const handleValorChange = (value, name) => {
        setValor(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormError("");

        if (!prefeitura || !escritorio || !formaPagamento || !empresa || !agencia || !conta || !valor || !Jan || !PagJan) {
            alert("Preencha todos os campos !!!");
            return;
        }

        insertDocument({
            prefeitura,
            escritorio,
            formaPagamento,
            empresa,
            agencia,
            conta,
            valor,
            Jan,
            Fev,
            Mar,
            Abr,
            Mai,
            Jun,
            Jul,
            Ago,
            Set,
            Out,
            Nov,
            Dez,
            PagJan,
            PagFev,
            PagMar,
            PagAbr,
            PagMai,
            PagJun,
            PagJul,
            PagAgo,
            PagSet,
            PagOut,
            PagNov,
            PagDez,
            uid: user.uid,
            createdBy: user.displayName
        })

        navigate("/clientes")
    };

    return (
        <div className={styles.CreateLine}>
            <h1>Criar nova Prefeitura</h1>
            <form onSubmit={handleSubmit}>
                <table>
                    <thead>
                        <tr>
                            <th>Prefeitura</th>
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
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <input
                                    type="text"
                                    name="prefeitura"
                                    required
                                    onChange={(e) => setPrefeitura(e.target.value)}
                                    value={prefeitura}
                                />
                            </td>
                            <td>
                                <select
                                    name='escritorio'
                                    className='slct'
                                    required
                                    onChange={(e) => setEscritorio(e.target.value)}
                                    value={escritorio}
                                >
                                    <option value=""></option>
                                    <option value="Patos">Patos</option>
                                    <option value="João Pessoa">João Pessoa</option>
                                </select>
                            </td>
                            <td>
                                <select
                                    name='formaPagamento'
                                    className='slct'
                                    required
                                    onChange={(e) => setFormaPagamento(e.target.value)}
                                    value={formaPagamento}
                                >
                                    <option value=""></option>
                                    <option value="Transferência">Transferência</option>
                                    <option value="Ded. Automático">Ded. Automático</option>
                                </select>
                            </td>
                            <td>
                                <select
                                    name='empresa'
                                    className='slct'
                                    required
                                    onChange={(e) => setEmpresa(e.target.value)}
                                    value={empresa}
                                >
                                    <option value=""></option>
                                    <option value="ISN">ISN</option>
                                    <option value="ISNEP">ISNEP</option>
                                </select>
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="agency"
                                    required
                                    onChange={(e) => setAgencia(e.target.value)}
                                    value={agencia}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    className="account"
                                    required
                                    onChange={(e) => setConta(e.target.value)}
                                    value={conta}
                                />
                            </td>
                            <td>
                                <CurrencyInput
                                    className="value"
                                    allowNegativeValue={false}
                                    onValueChange={handleValorChange}
                                    value={valor}
                                    decimalScale={2}  // Define a quantidade de casas decimais
                                    fixedDecimalScale={true}  // Mantém a quantidade de casas decimais fixa
                                />
                            </td>
                            <td>
                                <select
                                    className='slct'
                                    name='Jan'
                                    required
                                    onChange={(e) => setJan(e.target.value)}
                                    value={Jan}
                                >
                                    <option value="">Em branco</option>
                                    <option value="Pago">Pago</option>
                                    <option value="inadimplente">Inadimplente</option>
                                </select>
                                <InputMask
                                    className='monthsCreate'
                                    mask="99/99/9999"
                                    value={PagJan}
                                    onChange={handlePagJanChange}
                                />
                            </td>
                            <td>
                                <select
                                    className='slct'
                                    name='Fev'
                                    required
                                    onChange={(e) => setFev(e.target.value)}
                                    value={Fev}
                                >
                                    <option value="">Em branco</option>
                                    <option value="Pago">Pago</option>
                                    <option value="inadimplente">Inadimplente</option>
                                </select>
                                <InputMask
                                    className='monthsCreate'
                                    mask="99/99/9999"
                                    value={PagFev}
                                    onChange={handlePagFevChange}
                                />
                            </td>
                            <td>
                                <select
                                    className='slct'
                                    name='Mar'
                                    required
                                    onChange={(e) => setMar(e.target.value)}
                                    value={Mar}
                                >
                                    <option value="">Em branco</option>
                                    <option value="Pago">Pago</option>
                                    <option value="inadimplente">Inadimplente</option>
                                </select>
                                <InputMask
                                    className='monthsCreate'
                                    mask="99/99/9999"
                                    value={PagMar}
                                    onChange={handlePagMarChange}
                                />
                            </td>
                            <td>
                                <select
                                    className='slct'
                                    name='Abr'
                                    required
                                    onChange={(e) => setAbr(e.target.value)}
                                    value={Abr}
                                >
                                    <option value="">Em branco</option>
                                    <option value="Pago">Pago</option>
                                    <option value="inadimplente">Inadimplente</option>
                                </select>
                                <InputMask
                                    className='monthsCreate'
                                    mask="99/99/9999"
                                    value={PagAbr}
                                    onChange={handlePagAbrChange}
                                />
                            </td>
                            <td>
                                <select
                                    className='slct'
                                    name='Mai'
                                    required
                                    onChange={(e) => setMai(e.target.value)}
                                    value={Mai}
                                >
                                    <option value="">Em branco</option>
                                    <option value="Pago">Pago</option>
                                    <option value="inadimplente">Inadimplente</option>
                                </select>
                                <InputMask
                                    className='monthsCreate'
                                    mask="99/99/9999"
                                    value={PagMai}
                                    onChange={handlePagMaiChange}
                                />
                            </td>
                            <td>
                                <select
                                    className='slct'
                                    name='Jun'
                                    required
                                    onChange={(e) => setJun(e.target.value)}
                                    value={Jun}
                                >
                                    <option value="">Em branco</option>
                                    <option value="Pago">Pago</option>
                                    <option value="inadimplente">Inadimplente</option>
                                </select>
                                <InputMask
                                    className='monthsCreate'
                                    mask="99/99/9999"
                                    value={PagJun}
                                    onChange={handlePagJunChange}
                                />
                            </td>
                            <td>
                                <select
                                    className='slct'
                                    name='Jul'
                                    required
                                    onChange={(e) => setJul(e.target.value)}
                                    value={Jul}
                                >
                                    <option value="">Em branco</option>
                                    <option value="Pago">Pago</option>
                                    <option value="inadimplente">Inadimplente</option>
                                </select>
                                <InputMask
                                    className='monthsCreate'
                                    mask="99/99/9999"
                                    value={PagJul}
                                    onChange={handlePagJulChange}
                                />
                            </td>
                            <td>
                                <select
                                    className='slct'
                                    name='Ago'
                                    required
                                    onChange={(e) => setAgo(e.target.value)}
                                    value={Ago}
                                >
                                    <option value="">Em branco</option>
                                    <option value="Pago">Pago</option>
                                    <option value="inadimplente">Inadimplente</option>
                                </select>
                                <InputMask
                                    className='monthsCreate'
                                    mask="99/99/9999"
                                    value={PagAgo}
                                    onChange={handlePagAgoChange}
                                />
                            </td>
                            <td>
                                <select
                                    className='slct'
                                    name='Set'
                                    required
                                    onChange={(e) => setSet(e.target.value)}
                                    value={Set}
                                >
                                    <option value="">Em branco</option>
                                    <option value="Pago">Pago</option>
                                    <option value="inadimplente">Inadimplente</option>
                                </select>
                                <InputMask
                                    className='monthsCreate'
                                    mask="99/99/9999"
                                    value={PagSet}
                                    onChange={handlePagSetChange}
                                />
                            </td>
                            <td>
                                <select
                                    className='slct'
                                    name='Out'
                                    required
                                    onChange={(e) => setOut(e.target.value)}
                                    value={Out}
                                >
                                    <option value="">Em branco</option>
                                    <option value="Pago">Pago</option>
                                    <option value="inadimplente">Inadimplente</option>
                                </select>
                                <InputMask
                                    className='monthsCreate'
                                    mask="99/99/9999"
                                    value={PagOut}
                                    onChange={handlePagOutChange}
                                />
                            </td>
                            <td>
                                <select
                                    className='slct'
                                    name='Nov'
                                    required
                                    onChange={(e) => setNov(e.target.value)}
                                    value={Nov}
                                >
                                    <option value="">Em branco</option>
                                    <option value="Pago">Pago</option>
                                    <option value="inadimplente">Inadimplente</option>
                                </select>
                                <InputMask
                                    className='monthsCreate'
                                    mask="99/99/9999"
                                    value={PagNov}
                                    onChange={handlePagNovChange}
                                />
                            </td>
                            <td>
                                <select
                                    className='slct'
                                    name='Dez'
                                    required
                                    onChange={(e) => setDez(e.target.value)}
                                    value={Dez}
                                >
                                    <option value="">Em branco</option>
                                    <option value="Pago">Pago</option>
                                    <option value="inadimplente">Inadimplente</option>
                                </select>
                                <InputMask
                                    className='monthsCreate'
                                    mask="99/99/9999"
                                    value={PagDez}
                                    onChange={handlePagDezChange}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
            <div className={styles.buttons}>
                {!response.loading && (
                    <Link onClick={handleSubmit} className="save">
                        Salvar
                    </Link>
                )}
                {response.loading && <button disabled>Aguarde...</button>}
                <Link to="/clientes" className='back'>Voltar</Link>
            </div>
        </div>
    );
};

export default CreateLine;
