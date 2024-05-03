import React,{useState} from 'react'
import axios from 'axios'
const LoginForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const handlesubmit=async(e)=>{
        e.preventDefault();

        const authObject = { 'Project-ID': "96ee4963-9d7d-45a1-8e72-233abe4f0b1d", 'User-Name': username, 'User-Secret': password };
    
        try {
          await axios.get('https://api.chatengine.io/chats', { headers: authObject });
    
          localStorage.setItem('username', username);
          localStorage.setItem('password', password);
    
          window.location.reload();
          setError('');
        } catch (err) {
          setError('Oops, incorrect credentials.');
        }
    }
  return (
    <div className='wrapper'>
        <div className='form'>
            <h1 className='title'>Chat Application</h1>
                <form onSubmit={handlesubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
                    <div align="center">
                        <button type="submit" className="button">
                        <span>Start chatting</span>
                        </button>
                    </div>
                </form>
            <h1>{error}</h1>
        </div>
      
    </div>
  )
}

export default LoginForm
