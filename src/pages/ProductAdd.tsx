import { useForm, SubmitHandler } from "react-hook-form";



type ProductAddProps = {
    name: string,
    onAdd: (product: TypeInputs) => void
};

type TypeInputs = {
    name: String,
    price: number
}

const ProductAdd = (props: ProductAddProps) =>{
    const {register, handleSubmit, formState: { errors }} =useForm<TypeInputs>();

    const onsubmit : SubmitHandler<TypeInputs> = data => {
        console.log(data);
        
        props.onAdd(data);
        
    }

    
    return (
        <form onSubmit={handleSubmit(onsubmit) }>
            <input type="text" placeholder='Ten sam pham' {...register('name')}/>
            <input type="text" placeholder='Gia san phamm' {...register('price')} />
            <button>Add</button>
        </form>
        )

}
export default ProductAdd


