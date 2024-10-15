"use client"

import {createContactMessageAction} from "@/actions/create-contact-message";
import {useFormState} from 'react-dom';
import {CreateContactMessageFormState} from "@/lib/types";

export default function ContactForm() {
    const initialState: CreateContactMessageFormState = {};
    const [state, dispatch] = useFormState(createContactMessageAction, initialState);

    if (state.success) {
        return <div className="bg-green-200 m-5 p-5">{state.success}</div>
    }

    return (
        <form action={dispatch} className={"flex flex-col gap-5 bg-slate-200 p-5 m-5 justify-center"}>
            <div className={"flex flex-col gap-1 w-80"}>
                <label htmlFor="">name</label>
                <input type="text" name={"Name"} className={"border-2 border-slate-500 p-2"}/>
                {state.errors?.Name && (
                    <div>
                        {state.errors.Name.map(err => (
                            <p className={"text-red-600"} key={err.toString()}>
                                {err}
                            </p>
                        ))}
                    </div>
                )}
            </div>
            <div className={"flex flex-col gap-1 w-80"}>
                <label htmlFor="">Email</label>
                <input type="text" name={"Email"} className={"border-2 border-slate-500 p-2"}/>
                {state.errors?.Email && (
                    <div>
                        {state.errors.Email.map(err => (
                            <p className={"text-red-600"}  key={err.toString()}>
                                {err}
                            </p>
                        ))}
                    </div>
                )}
            </div>
            <div className={"flex flex-col gap-1 w-80"}>
                <label htmlFor="">Message</label>
                <textarea name={"Message"} className={"border-2 border-slate-500 p-2"}/>
                {state.errors?.Message && (
                    <div>
                        {state.errors.Message.map(err => (
                            <p className={"text-red-600"}  key={err.toString()}>
                                {err}
                            </p>
                        ))}
                    </div>
                )}
            </div>
            <div className={"flex justify-start w-80"}>
                <button type={"submit"} className={"bg-blue-700 text-white p-2"}>Submit</button>
            </div>
        </form>
);
}