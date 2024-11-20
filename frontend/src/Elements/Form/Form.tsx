import React from "react";
import Input from "../Input/Input";
import BtnBanner from "../BtnBanner/BtnBanner";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./Form.module.scss";

type FormValues = {
    name: string;
    phone: string;
    email: string;
};

const Form: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>();

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div>
                <Input
                    error={errors.name && true}
                    placeholder="Name"
                    {...register("name", { required: "Name is required" })}
                />
                <Input
                    error={errors.phone && true}
                    placeholder="Phone number"
                    {...register("phone", { required: "Phone is required" })}
                />
                <Input
                    error={errors.email && true}
                    placeholder="Email"
                    {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: "Invalid email address",
                        },
                    })}
                />
            </div>
            <div>
                <BtnBanner type="submit">Get a discount</BtnBanner>
            </div>
        </form>
    );
};

export default Form;
