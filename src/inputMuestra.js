
function searchingTerm(term){
    return function(x){
        return x.dni.toLowerCase().includes(term) || !term;
    }
}


const [data, setData] = useState([])

//state de input
const [term, setTerm] = useState('')

useEffect(()=>{
    setData(justificaciones)
} , [justificaciones])


data.filter(searchingTerm(term).map(justificacion => ('XXXXXXX')))



//EN INPUT 
<input 
    placeholder = 'busqueda por aqui'
    name = 'term'
    onChange = {e => setTerm(e.target.value)}
    maxLength= '8'

/>
