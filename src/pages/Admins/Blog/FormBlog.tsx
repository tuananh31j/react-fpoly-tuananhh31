import React, { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import Input from '~/components/Input';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import showMessage from '~/utilities/showMessage';
import axios from 'axios';
import { format } from 'date-fns';
import ShowValidation from '~/components/ShowValidation';
const date = new Date();
const dateString = format(date, 'yyyy-MM-dd');
const formSchema = z.object({
    title: z.string().nonempty('Không được để trống!'),
    image: z.string().nonempty('không được để trống!'),
    author: z.string().nonempty('Không được để trống!'),
    description: z.string().nonempty('Không được để trống!'),
    date: z.string().default(dateString),
});

type IFormBlog = z.infer<typeof formSchema>;
const FormBlog = ({
    children,
    id,
    onReRender,
}: {
    children: React.ReactNode;
    id?: string | number;
    onReRender: () => void;
}) => {
    const message = id ? 'Cập nhật thành công!' : 'Thêm mới thành công!';
    const [open, setOpen] = useState<boolean>(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: { isSubmitting, errors },
    } = useForm<IFormBlog>({ resolver: zodResolver(formSchema) });
    const onSubmit: SubmitHandler<IFormBlog> = async (data) => {
        if (data.date === '') {
            data.date = dateString;
        }
        if (id) {
            await axios.put<IBLog>(`http://localhost:3000/blogs/${id}`, data);
        } else {
            await axios.post<Omit<IBLog, 'id'>>('http://localhost:3000/blogs', data);
        }

        showMessage(message, 'success');
        reset();
        setOpen(false);
        onReRender();
    };

    useEffect(() => {
        (async () => {
            try {
                if (id) {
                    const { data } = await axios.get<IBLog>(`http://localhost:3000/blogs/${id}`);
                    reset(data);
                }
            } catch (error) {
                console.log(error);
            }
        })();
    }, [id, reset]);
    return (
        <>
            <Dialog.Root open={open} onOpenChange={setOpen}>
                <Dialog.Trigger asChild>{children}</Dialog.Trigger>
                <Dialog.Portal>
                    <Dialog.Overlay className='bg-black bg-opacity-60 fixed inset-0' />
                    <Dialog.Content className=' fixed overflow-y-scroll top-[50%] left-[50%] max-h-[95vh] w-[90vw] max-w-[80vw] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] '>
                        <Dialog.Title className='text-black  mb-8 font-bold text-xl'>
                            {id ? 'Chỉnh sửa BLog' : 'Thêm Blog'}
                        </Dialog.Title>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input
                                require
                                type='text'
                                title='Tiêu đề'
                                placeholder='Nhập tiêu đề...'
                                {...register('title')}
                            />
                            <ShowValidation errorField={errors.title} />
                            <Input
                                require
                                type='text'
                                title='Ảnh'
                                placeholder='Nhập link ảnh...'
                                {...register('image')}
                            />
                            <ShowValidation errorField={errors.image} />

                            <Input type='date' title='Ngày' {...register('date')} />
                            <Input
                                require
                                type='text'
                                title='Tác giả'
                                placeholder='Nhập tên tác giả...'
                                {...register('author')}
                            />
                            <ShowValidation errorField={errors.author} />

                            <Input
                                require
                                textarea
                                title='Nội dung'
                                placeholder='Nhập nội dung...'
                                {...register('description')}
                            />
                            <ShowValidation errorField={errors.description} />

                            <div className=' flex justify-end mb-4'>
                                <button
                                    className='bg-gray-500 text-white hover:bg-green5 focus:shadow-green7 inline-flex 
                                     items-center justify-center rounded-[4px] px-[15px] h-14 font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none'
                                >
                                    {isSubmitting ? (
                                        <span className='inline-block h-7 w-7 animate-spin rounded-full  border-4 border-dotted border-white'></span>
                                    ) : (
                                        <span className=' inline-block'>{id ? 'Cập nhật' : 'Thêm'}</span>
                                    )}
                                </button>
                            </div>
                        </form>

                        <Dialog.Close asChild>
                            <button
                                className='text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none'
                                aria-label='Close'
                            >
                                <Cross2Icon />
                            </button>
                        </Dialog.Close>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </>
    );
};

export default FormBlog;
