import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import qrcode  from 'qrcode';
import generatePayload from 'promptpay-qr';

const Bill = () => {
    const mobileNumber = "091-758-2874";
    const [svg, setSvg] = useState("");
    const carts = useSelector((state) => state.carts);
    const subtotal = carts.reduce((total, product) =>
        total + product.quantity * product.price, 0
    );
    const shipping = 35;
    const totalBilling = (subtotal) => {
        if (subtotal > 0)
            return subtotal + shipping;
    }

    useEffect(() => {
        const total = totalBilling(subtotal);
        generateQR(total);
    }, [subtotal]);

    const generateQR = (amount) => {
        const payload = generatePayload(mobileNumber, { amount });
        const options = { type: 'svg', color: { dark: '#000', light: '#fff' } };
        qrcode.toString(payload, options, async(err, svg) => {
            if (err) return console.log(err)
            await setSvg(svg)
        })
    };
  
    const handleCheckout = () => {
        Swal.fire({
            title: "PromotPay Payment",
            icon: "info",
            html: `<img src="data:image/svg+xml;utf8,${encodeURIComponent(svg)}" alt="" />`,
            showCloseButton: true,
            showCancelButton: true,
        });        
    }
    return (
        <div className='py-4 max-w-7xl mx-auto rounded-xl shadow-xl border '>
            <h1 className='text-4xl text-center font-bold '>Bill</h1>
            <div className="card card-body justify-center items-center py-4 ">
                <div className="mx-auto w-full max-w-sm ">
                    <div className="mt-2 space-y-2 ">
                        <div className='flex justify-between'>
                            <p className='text-lg text-rose-600'>
                                Subtotal
                            </p>
                            <p className='text-lg text-rose-600 text-end'>
                                {subtotal}
                            </p>
                        </div>
                        <div className='flex justify-between pb-2 border-b-2 '>
                            <p className='text-lg text-rose-600'>
                                Shipping
                            </p>
                            <p className='text-lg text-rose-600 text-end'>
                                {shipping}
                            </p>
                        </div>
                        <div className='flex justify-between'>
                            <p className='text-lg text-rose-600'>
                                Total
                            </p>
                            <p className='text-lg text-rose-600 text-end'>
                                {subtotal > 0 ? totalBilling(subtotal) : 0}
                            </p>
                        </div>
                        <div className='text-end'>
                            <p className='text-sm text-rose-600 '>
                                including VAT
                            </p>
                        </div>
                        <button className='btn btn-primary text-base-100 container' onClick={handleCheckout}>Check out</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bill