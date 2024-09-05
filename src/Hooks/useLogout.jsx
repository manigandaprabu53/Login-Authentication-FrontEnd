import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'

function useLogout() {

    let navigate = useNavigate();

  return ()=>{
    toast.success('Logout Successfull');
    navigate('/login')
  }
}

export default useLogout