import { server } from '../config'
import { useState, useEffect, useRouter } from 'react';
import classes from '../styles/User.module.css';
async function sendUserData(userDetails) {
    const router = useRouter();
    const response = await fetch(`${server}/api/users/create`, {
      method: 'POST',
      body: JSON.stringify(userDetails),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong!');
    }
    router.push('/')
  }

function UserForm() {
    const [enteredName, setEnteredName] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredRole, setEnteredRole] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    const [requestStatus, setRequestStatus] = useState(); // 'pending', 'success'

    useEffect(() => {
        if (requestStatus === 'success' || requestStatus === 'error') {
        const timer = setTimeout(() => {
            setRequestStatus(null);
        }, 3000);

        return () => clearTimeout(timer);
        }
    }, [requestStatus]);

    async function sendMessageHandler(event) {
        event.preventDefault();

        console.log("ok");
        // optional: add client-side validation

        setRequestStatus('pending');

        try {
        await sendUserData({
            name: enteredName,
            email: enteredEmail,
            role_id: enteredRole,
            password: enteredPassword,
        });
        setRequestStatus('success');
        setEnteredRole('');
        setEnteredName('');
        setEnteredEmail('');
        setEnteredPassword('');
        } catch (error) {
        setRequestStatus('error');
        }
    }

    return (
        <div className="w-100">
            <div className='row'>
                <div className="col-md-12">
                    <form onSubmit={sendMessageHandler}>
                        <div className='form-row'>
                            <div className='col-md-6 col'>
                                <label htmlFor='name'>Name</label>
                                <input
                                className="form-control"
                                type='name'
                                id='name'
                                required
                                value={enteredName}
                                onChange={(event) => setEnteredName(event.target.value)}
                                />
                            </div>
                            <div className='col-md-6 col'>
                                <label htmlFor='email'>Email</label>
                                <input
                                className="form-control"
                                type='email'
                                id='email'
                                required
                                value={enteredEmail}
                                onChange={(event) => setEnteredEmail(event.target.value)}
                                />
                            </div>
                            <div className='col-md-6'>
                                <label htmlFor='role'>Role</label>
                                <select className="form-control"
                                    id='role'
                                    rows='5'
                                    required
                                    value={enteredRole}
                                    onChange={(event) => setEnteredRole(event.target.value)}>
                                        <option value="">Select Role</option>
                                        <option value="7">Admin</option>
                                        <option value="6">Teacher</option>
                                        <option value="5">Student</option>
                                </select>
                            </div>
                            <div className='col-md-6'>
                                <label htmlFor='password'>Password</label>
                                <input
                                className="form-control"
                                type='password'
                                id='password'
                                required
                                value={enteredPassword}
                                onChange={(event) => setEnteredPassword(event.target.value)}
                                />
                            </div>
                            <div className='w-100 text-center'>
                                <button type="submit" className={`mt-4 btn ${classes.themeColor}`}>Add User</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default UserForm;
