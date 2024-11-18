import { useState } from "react"
import { ChangeEvent } from "react"
interface FormValues{
    [key:string]:string
}

export const useForm =<T extends FormValues> (initialValues: T) =>{
const [values, setValues] = useState<T>(initialValues)
const handleChange = (event: ChangeEvent<HTMLInputElement>) =>{
    const {value, name} = event.target;
 
      setValues({...values, [`${name}`] :value})
    }
    const resetForm = ()=>{
        setValues(initialValues)
    }
    return{
        values,
        handleChange,
        resetForm,
    }
}