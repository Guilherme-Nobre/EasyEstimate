import { useState } from 'react';
import { useInsertDocument } from '../../hooks/useInsertDocument';
import { useAuthValue } from '../../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom';
import styles from "./CreateFunc.module.css";
import CurrencyInput from 'react-currency-input-field';
import InputMask from 'react-input-mask';

const CreateFunc = () => {
    /* States responsável por cada parte da TABELA */
    const [funcionarios, setFuncionarios] = useState("")
    const [escritorio, setEscritorio] = useState("")
    const [empresa, setEmpresa] = useState("")
    const [valor, setValor] = useState("")
    const [pix, setPix] = useState("")
    const [diaPagamento, setDiaPagamento] = useState("")
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
    const [DecTerceiro, setDecTerceiro] = useState("")
    const [PagDecTerceiro, setPagDecTerceiro] = useState("")
    const [TercoFerias, setTercoFerias] = useState("")
    const [PagTercoFerias, setPagTercoFerias] = useState("")

    const { user } = useAuthValue();
    const { insertDocument, response } = useInsertDocument("funcionarios");

    const navigate = useNavigate();

    const handleValorChange = (value, name) => {
        setValor(value);
    };

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

    const handlePagDecTerceiroChange = (e) => {
        setPagDecTerceiro(e.target.value);
    };

    const handlePagTercoFeriasChange = (e) => {
        setPagTercoFerias(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!funcionarios || !escritorio || !empresa || !valor || !pix || !diaPagamento || !Jan) {
            alert("Preencha todos os campos !!!");
            return;
        }

        insertDocument({
            funcionarios,
            escritorio,
            empresa,
            valor,
            pix,
            diaPagamento,
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
            DecTerceiro,
            PagDecTerceiro,
            TercoFerias,
            PagTercoFerias,
            uid: user.uid,
            createdBy: user.displayName
        })

        navigate("/funcionarios")
    };

    return (
        <div className={styles.CreateFunc}>
            <h1>Adicionar Funcionário</h1>
            <form onSubmit={handleSubmit}>
                <table>
                    <thead>
                        <tr>
                            <th>Funcionários</th>
                            <th>Escritório</th>
                            <th>Empresa</th>
                            <th>Valor</th>
                            <th>PIX</th>
                            <th>Dia de Pag</th>
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
                            <th>13°</th>
                            <th>1/3 de Férias</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <input
                                    type="text"
                                    name="funcionarios"
                                    required
                                    onChange={(e) => setFuncionarios(e.target.value)}
                                    value={funcionarios}
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
                                <CurrencyInput
                                    name="valor"
                                    allowNegativeValue={false}
                                    onValueChange={handleValorChange}
                                    value={valor}
                                    decimalScale={2}  // Define a quantidade de casas decimais
                                    fixedDecimalScale={true}  // Mantém a quantidade de casas decimais fixa
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    name="pix"
                                    required
                                    onChange={(e) => setPix(e.target.value)}
                                    value={pix}
                                />
                            </td>
                            <td>
                                <select
                                    className='slct'
                                    name='diaPagamento'
                                    required
                                    onChange={(e) => setDiaPagamento(e.target.value)}
                                    value={diaPagamento}
                                >
                                    <option value=""></option>
                                    <option value="Dia 01">Dia 01</option>
                                    <option value="Dia 02">Dia 02</option>
                                    <option value="Dia 03">Dia 03</option>
                                    <option value="Dia 04">Dia 04</option>
                                    <option value="Dia 05">Dia 05</option>
                                    <option value="Dia 06">Dia 06</option>
                                    <option value="Dia 07">Dia 07</option>
                                    <option value="Dia 08">Dia 08</option>
                                    <option value="Dia 09">Dia 09</option>
                                    <option value="Dia 10">Dia 10</option>
                                    <option value="Dia 11">Dia 11</option>
                                    <option value="Dia 12">Dia 12</option>
                                    <option value="Dia 13">Dia 13</option>
                                    <option value="Dia 14">Dia 14</option>
                                    <option value="Dia 15">Dia 15</option>
                                    <option value="Dia 16">Dia 16</option>
                                    <option value="Dia 17">Dia 17</option>
                                    <option value="Dia 18">Dia 18</option>
                                    <option value="Dia 19">Dia 19</option>
                                    <option value="Dia 20">Dia 20</option>
                                    <option value="Dia 21">Dia 21</option>
                                    <option value="Dia 22">Dia 22</option>
                                    <option value="Dia 23">Dia 23</option>
                                    <option value="Dia 24">Dia 24</option>
                                    <option value="Dia 25">Dia 25</option>
                                    <option value="Dia 26">Dia 26</option>
                                    <option value="Dia 27">Dia 27</option>
                                    <option value="Dia 28">Dia 28</option>
                                    <option value="Dia 29">Dia 29</option>
                                    <option value="Dia 30">Dia 30</option>
                                    <option value="Dia 31">Dia 31</option>
                                </select>
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
                                    decimalScale={2}  // Define a quantidade de casas decimais
                                    fixedDecimalScale={true}  // Mantém a quantidade de casas decimais fixa
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
                            <td>
                                <select
                                    className='slct'
                                    name='DecTerceiro'
                                    onChange={(e) => setDecTerceiro(e.target.value)}
                                    value={DecTerceiro}
                                >
                                    <option value="">Em branco</option>
                                    <option value="Pago">Pago</option>
                                </select>
                                <InputMask
                                    className='monthsCreate'
                                    mask="99/99/9999"
                                    value={PagDecTerceiro}
                                    onChange={handlePagDecTerceiroChange}
                                />
                            </td>
                            <td>
                                <select
                                    className='slct'
                                    name='TercoFerias'
                                    onChange={(e) => setTercoFerias(e.target.value)}
                                    value={TercoFerias}
                                >
                                    <option value="">Em branco</option>
                                    <option value="Pago">Pago</option>
                                </select>
                                <InputMask
                                    className='monthsCreate'
                                    mask="99/99/9999"
                                    value={PagTercoFerias}
                                    onChange={handlePagTercoFeriasChange}
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
                <Link to="/funcionarios" className='back'>Voltar</Link>
            </div>
        </div>
    );
};

export default CreateFunc;
