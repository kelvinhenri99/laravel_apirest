import { Link, useForm } from '@inertiajs/inertia-react'
import React from 'react'
import Auth from '../../Layouts/Auth'

export default function Register({ errors }) {
    const {data, setData, post} = useForm({
        name: '', username: '', email: '', password:'',
    })

    const changeHandler = (e) => setData({...data, [e.target.id]: e.target.value})

    const submitHandler = (e) => {
        // console.log(data);
        e.preventDefault()
        post(route('register'), data);
    }
    return (
        <>
            <div>
                <main className="main-content  mt-0">
                    <div className="container">
                    <div className="row mt-lg-n10 mt-md-n11 mt-n10 justify-content-center">
                        <div className="col-xl-4 col-lg-5 col-md-7 mx-auto">
                        <div className="card z-index-0">
                            <div className="card-header text-center pt-4">
                            </div>
                            <div className="row px-xl-5 px-sm-4 px-3 d-flex justify-content-center">
                            <div className="mt-2 position-relative text-center">
                                <p className="text-sm font-weight-bold mb-2 text-secondary text-border d-inline z-index-2 bg-white px-3">
                                or
                                </p>
                            </div>
                        </div>
                            <div className="card-body">
                            <form role="form" onSubmit={submitHandler}>
                                <div className="mb-3">
                                    <input value={data.name} onChange={changeHandler} name='name' id='name' type="text" className="form-control" placeholder="Name" aria-label="Name" />
                                    {errors && (<div className='text-danger mt-1'>{errors.name}</div>)}
                                </div>
                                <div className="mb-3">
                                    <input value={data.username} onChange={changeHandler} name='username' id='username' type="text" className="form-control" placeholder="Username" aria-label="Username" />
                                    {errors && (<div className='text-danger mt-1'>{errors.username}</div>)}
                                </div>
                                <div className="mb-3">
                                    <input value={data.email} onChange={changeHandler} type="email" name='email' id='email' className="form-control" placeholder="Email" aria-label="Email" />
                                    {errors && (<div className='text-danger mt-1'>{errors.email}</div>)}
                                </div>
                                <div className="mb-3">
                                    <input value={data.password} onChange={changeHandler} type="password" name='password' id='password' className="form-control" placeholder="Password" aria-label="Password" />
                                    {errors && (<div className='text-danger mt-1'>{errors.password}</div>)}
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn bg-gradient-dark w-100 my-4 mb-2">Sign up</button>
                                </div>
                                <p className="text-sm mt-3 mb-0 text-center">
                                    Already have an account? {''}
                                    <Link href={route('login')} className="text-dark font-weight-bolder">Sign in</Link>
                                </p>
                            </form>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </main>
            </div>
        </>
    )
}

Register.layout = (page) => <Auth children={page} title={"Register"}/>

