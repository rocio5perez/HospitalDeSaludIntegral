import React from 'react';
import "../../../assets/styles/signup.css";


const SignUp = () => {
    return (
        <>
            <div id="crearCuenta" className="bg-white">
                <div className="flex justify-center container mx-auto my-auto w-screen h-screen items-center flex-col">
                    <div className="text-slate-100 items-center">
                        <svg className="w-10 h-10 mx-auto pb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        <div className="title text-center pb-3 text-3xl text-purple">Crear Cuenta</div>
                    </div>
                    <div className="w-full md:w-3/4  lg:w-1/2 flex flex-col items-center bg-slate-50 rounded-md pt-12">
                        {/* name input */}
                        <div className=" w-3/4 mb-6">
                            <input type="text" name="text" id="name" className="inputLogin w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 hover:ring-gray-600 outline-green border-solid border-2 border-blue rounded-full" placeholder="Nombre" />
                        </div>
                        
                        <div className="txt2 w-full md:w-3/4  lg:w-1/2 flex flex-col items-center bg-slate-50 rounded-md pt-12">
                            {/* email input */}
                            <div className=" w-3/4 mb-6">
                                <input type="email" name="email" id="email" className="inputLogin w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 hover:ring-gray-600 outline-green border-solid border-2 border-blue rounded-full" placeholder="Correo electrónico" />
                            </div>
                            {/* tel input */}
                        <div className=" w-3/4 mb-6">
                            <input type="tel" name="tel" id="tel" className="inputLogin w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 hover:ring-gray-600 outline-green border-solid border-2 border-blue rounded-full" placeholder="Teléfono" />
                        </div>
                            {/* password input */}
                            <div className="w-3/4 mb-6">
                                <input type="password" name="password" id="password" className="inputLogin w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 hover:ring-gray-600 outline-green  border-solid border-2 border-blue rounded-full" placeholder="Contraseña" />
                                <div className="txt1 flex justify-left container mx-auto mt-6 text-slate-100 text-sm whitespace-nowrap">
                                    <a>¿Olvidaste tu contraseña?</a>

                                    <div>
                                        <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                                            <input
                                                className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                                                type="checkbox"
                                                value="check"
                                                id="checkbox" />
                                            <label
                                                className="inline-block pl-[0.15rem] hover:cursor-pointer float-right whitespace-nowrap"
                                                htmlFor="checkboxDefault ">
                                                Acepto los términos y condiciones
                                            </label>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            {/* button */}
                            <div className="w-3/4 mb-12">
                                <button type="submit" className="inputLogin py-4 bg-green w-full rounded text-white font-bold hover:bg-blue-700 text-2xl rounded-full"> Crear Cuenta</button>
                                
                            </div>
                        </div>
                        <div className="flex justify-center container mx-auto mt-3 text-slate-100 text-xl">
                                <div className="flex flex-col sm:flex-row justify-center md:w-1/2 items-center whitespace-nowrap">
                                    <div className="text-2xl">
                                        <a href='' className='inputLogin'>o</a>
                                    </div>
                                </div>
                            </div>

                        <div className="txt2 w-3/4 mb-12">
                            <button type="submit" className="inputLogin py-2 bg-purple w-full rounded text-white font-regular hover:bg-green-700 text-xl rounded-full" >
                                <img src="https://docs.material-tailwind.com/icons/google.svg" alt="Ícono de Google" className="inline-block w-6 h-6 mr-2" />
                                Continúa con Google
                            </button>
                            <div className="flex justify-right container mx-auto mt-6 text-slate-100 text-sm">
                                <div className="flex flex-col sm:flex-row justify-between md:w-1/2 items-center whitespace-nowrap">
                                    <div className="">
                                        <a href='' className='inputLogin'>¿No tienes una cuenta, registrate?</a>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp